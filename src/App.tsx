import { FormEvent, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBand } from './components/StatsBand';
import { CurriculumSection } from './components/CurriculumSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ManagementPage } from './components/ManagementPage';
import { AboutUsPage } from './components/AboutUsPage';
import { ProgrammesPage } from './components/ProgrammesPage';
import { FacilitiesPage } from './components/FacilitiesPage';
import { GalleryPage } from './components/GalleryPage';

import { EnquiryModal, supabase } from './components/EnquiryModal';
import { PopupImage } from './components/PopupImage';
import { heroSlides, admissionFormUrl } from './data';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  // Auto-advance hero slideshow
  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveHeroSlide((slide) => (slide + 1) % heroSlides.length);
    }, 4200);
    return () => window.clearInterval(slideTimer);
  }, []);

  // Sticky header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openEnquiry = () => {
    setSubmitted(false);
    setFormError('');
    setEnquiryOpen(true);
  };

  const submitEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError('');

    const form = new FormData(event.currentTarget);
    const parentName = String(form.get('parent_name') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    const childAge = String(form.get('child_age') ?? '').trim();
    const programme = String(form.get('programme') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    if (!supabase) {
      console.info('Enquiry received (demo/offline mode):', { parentName, phone, childAge, programme, message });
      setSubmitted(true);
      event.currentTarget.reset();
      setSubmitting(false);
      return;
    }

    const { error } = await supabase.from('school_enquiries').insert({
      parent_name: parentName,
      phone,
      child_age: childAge,
      programme,
      message,
    });

    if (error) {
      setFormError('We could not send that just now. Please call us directly and we will be happy to help.');
    } else {
      setSubmitted(true);
      event.currentTarget.reset();
    }
    setSubmitting(false);
  };

  const homePage = (
    <div id="top" className="site-shell">

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onEnquire={openEnquiry}
      />

      <main>
        <HeroSection activeSlide={activeHeroSlide} setActiveSlide={setActiveHeroSlide} />
        <StatsBand />
        <CurriculumSection />
        <TestimonialsSection />
        <CtaSection onEnquire={openEnquiry} />
      </main>

      <Footer />

      {enquiryOpen && (
        <EnquiryModal
          submitted={submitted}
          submitting={submitting}
          formError={formError}
          onClose={() => setEnquiryOpen(false)}
          onSubmit={submitEnquiry}
        />
      )}

      {/* Floating Enquire Now button */}
      <a
        href={admissionFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-enquire ${scrolled ? 'is-visible' : ''}`}
      >
        Enquire now <ArrowUpRight size={16} />
      </a>

      <PopupImage />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={homePage} />
      <Route path="/management" element={<ManagementPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/programmes" element={<ProgrammesPage />} />
      <Route path="/facilities" element={<FacilitiesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
