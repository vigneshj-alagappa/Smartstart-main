import { ArrowRight, ArrowUpRight, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { Logo } from './Logo';
import { admissionFormUrl } from '../data';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <Logo />
          <p>Growing happy, curious and confident little people — one joyful day at a time.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/alagappa_smartstart?stkn=MTdnd3dxZXZuN3M5ZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://youtube.com/@thealagappagroup1288?si=hbijHfVYN7B4Rfv2" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#top" aria-label="Message us"><MessageCircle size={18} /></a>
          </div>
        </div>

        {/* Explore links */}
        <div className="footer-column">
          <h3>Explore</h3>
          {/* <a href="#programmes">Programmes</a> */}
          <a href="#about-us">About us</a>
          <a href="#curriculum">Our curriculum</a>
          <a href="#facilities">Campus facilities</a>
          <a href="#gallery">Gallery</a>
        </div>

        {/* For families */}
        <div className="footer-column">
          <h3>For families</h3>
          <a href="#about-us">Admissions</a>
          <a href="#about-us">School tour</a>
          <a href="#about-us">About our school</a>
          <a href="#top">Talk to us</a>
        </div>

        {/* Newsletter - hidden
        <div className="newsletter">
          <h3>Stay in the loop</h3>
          <p>Little ideas and big smiles, delivered occasionally.</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="Your email address" />
            <button aria-label="Subscribe"><ArrowRight size={18} /></button>
          </form>
        </div>
        */}
      </div>

      {/* Footer bottom bar */}
      <div className="container footer-bottom">
        <span>© 2026 Alagappa Smart Start. Made for little beginnings.</span>
        <div className="footer-bottom-center">
          <a
            href={admissionFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-admission-link"
          >
            Admissions open for 2026–27 <ArrowUpRight size={12} />
          </a>
          <a className="footer-enquire-btn" href={admissionFormUrl} target="_blank" rel="noopener noreferrer">
            Enquire now <ArrowUpRight size={14} />
          </a>
        </div>
        <div>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
