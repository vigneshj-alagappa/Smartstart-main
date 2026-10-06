import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhySection } from './WhySection';
import { SectionHeading } from './SectionHeading';
import { asset } from '../data';
import { AdministratorSection } from './Managament';

function InfrastructureSection() {
    return (
        <section className="section about-infra-section">
            <div className="container">
                <SectionHeading
                    eyebrow="Campus & Spaces"
                    title="Our School Infrastructure"
                    align="center"
                />

                <div className="about-infra-img-wrap">
                    <img
                        src={asset('images/School_front.png')}
                        alt="Alagappa Smart Start Play School campus"
                        className="about-infra-img"
                    />
                </div>

                <div className="about-infra-body">
                    <p>
                        Our Smart Class Play School is thoughtfully designed as a vibrant world where learning meets
                        joy, creativity, and care. Every corner of the campus reflects a deep understanding of early
                        childhood development, creating a space where children feel safe, inspired, and truly at home.
                        The infrastructure is spacious and thoughtfully planned, allowing young learners the freedom
                        to explore, move, and grow with confidence. Bright, colorful classrooms filled with natural
                        light create a welcoming atmosphere that nurtures curiosity and imagination.
                    </p>
                    <p>
                        Each learning environment is carefully arranged with child-friendly furniture, interactive
                        learning zones, and age-appropriate resources that encourage independent discovery and
                        collaborative play. Our smart classrooms integrate modern educational technology with
                        hands-on learning experiences, ensuring that children engage with concepts in meaningful
                        and joyful ways. The environment balances structure and freedom, supporting cognitive
                        development while fostering creativity, emotional well-being, and social interaction.
                    </p>
                    <p>
                        Safety and care remain at the heart of our infrastructure. Soft play areas, secure spaces,
                        and thoughtfully designed layouts provide a warm and protective setting where children feel
                        valued and respected. Every detail — from colorful walls to sensory-rich learning corners —
                        is created to nurture confidence, happiness, and a love for learning. More than just a
                        physical space, our play school is a caring ecosystem where children are encouraged to
                        explore, express themselves, and build strong foundations for lifelong learning.
                    </p>
                </div>
            </div>
        </section>
    );
}

export function AboutUsPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="top" className="site-shell">
            <Navbar
                scrolled={scrolled}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                onEnquire={() => { }}
            />
            <main style={{ paddingBottom: '64px' }}>
                <WhySection />
                <InfrastructureSection />
                <AdministratorSection />
            </main>
            <Footer />
        </div>
    );
}
