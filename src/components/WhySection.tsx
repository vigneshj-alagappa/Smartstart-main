import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { images, reasons } from '../data';

export function WhySection() {
  return (
    <section id="about-us" className="section why-section">
      <div className="container why-grid">
        {/* Images */}
        <div className="why-images">
          <div className="image-tall">
            <img src={images.learn} alt="Children learning through a colourful classroom activity" />
          </div>
          <div className="image-small">
            <img src={images.play} alt="Child enjoying outdoor play" />
          </div>
          <span className="floating-sticker">play<br /><strong>• learn •</strong><br />grow</span>
        </div>

        {/* Copy */}
        <div className="why-copy">
          <SectionHeading
            eyebrow="More than a school"
            title="A little world made for big becoming."
            text="The early years are full of firsts. We create the kind of place where every first feels exciting, supported and full of possibility."
          />
          <div className="reason-grid">
            {reasons.map(({ title, text, icon: Icon, color }) => (
              <div className="reason-item" key={title}>
                <span className={`reason-icon ${color}-bg`}>
                  <Icon size={20} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="text-link" href="#curriculum">
            Discover our difference <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
