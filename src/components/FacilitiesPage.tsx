import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FacilitiesSection } from './FacilitiesSection';

export function FacilitiesPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div id="top" className="site-shell">
            <Navbar
                scrolled={scrolled}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                onEnquire={() => {}}
            />
            <main style={{ paddingBottom: '64px' }}>
                <FacilitiesSection />
            </main>
            <Footer />
        </div>
    );
}
