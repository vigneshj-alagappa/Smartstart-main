import { ArrowUpRight, Sparkles } from 'lucide-react';
import { admissionFormUrl } from '../data';

interface CtaSectionProps {
  onEnquire: () => void;
}

export function CtaSection({ onEnquire }: CtaSectionProps) {
  return (
    <section className="section cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow eyebrow-light"><Sparkles size={14} /> Begin today</span>
          <h2>Build a brighter<br /><em>beginning</em> with us.</h2>
          <p>Join a community that believes every neighbourhood deserves a beautiful place for children to begin.</p>
        </div>
        <a className="button button-yellow" href={admissionFormUrl} target="_blank" rel="noopener noreferrer">
          Enquire now <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
