import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems, admissionFormUrl } from '../data';

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  onEnquire: () => void;
}

export function Navbar({ scrolled, menuOpen, setMenuOpen, onEnquire }: NavbarProps) {
  return (
    <>
      {/* Utility bar */}
      <div className="utility-bar">
        <div className="container utility-inner">
          {/* Left side – admission CTA + enquire */}
          <div className="utility-left">
            <a
              href={admissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="utility-admission-link"
            >
              Admissions open for 2026–27 <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Right side – contact info */}
          <div className="utility-links">
            <a href="mailto:smartstartplayschool@alagappa.org">
              <Mail size={14} /> smartstartplayschool@alagappa.org
            </a>
            <a
              href="https://www.google.com/maps/place/Smart+start+play+school+%26+Daycare+Centre/@10.0806726,78.7907095,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00676eea31f07d:0x879435a09cb69dea!8m2!3d10.0806673!4d78.7932898!16s%2Fg%2F11h_ng5f0g?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={14} /> Locate Us
            </a>
            <a href="tel:04449971111"><Phone size={14} /> 04449 971111</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="button button-small button-red nav-mobile-cta" href={admissionFormUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
              Enquire now <ArrowUpRight size={16} />
            </a>
          </nav>
          <a className="button button-small button-red nav-cta" href={admissionFormUrl} target="_blank" rel="noopener noreferrer">
            Enquire now <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
