import { ArrowRight, CircleCheck, Play, Star } from 'lucide-react';
import { heroSlides } from '../data';

interface HeroSectionProps {
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

export function HeroSection({ activeSlide, setActiveSlide }: HeroSectionProps) {
  const slide = heroSlides[activeSlide];

  return (
    <section className="hero-section">
      <div className="hero-blob hero-blob-one" />
      <div className="hero-blob hero-blob-two" />
      <div className="container hero-grid">
        {/* Copy */}
        <div className="hero-copy animate-in">
          <div className="hero-kicker"><span className="kicker-dot" /> Where little minds bloom</div>
          <h1>Big dreams<br /><em>start small.</em></h1>
          <p className="hero-text">
            A joyful first school where every child is known, nurtured and inspired to discover the world in their own wonderful way.
          </p>
          <div className="hero-actions">
            <a
              className="button button-red"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfnYF0QQDe8LOVrRhdhQv-TryBRd0f7VKPIeC8-EC1f7hFd5w/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Begin their journey <ArrowRight size={18} />
            </a>
            <a className="play-link" href="#facilities">
              <span className="play-circle"><Play size={15} fill="currentColor" /></span> Explore facilities
            </a>
          </div>
          <div className="hero-note">
            <div className="mini-avatars">
              <span>AS</span><span>KS</span><span>PR</span><b>+</b>
            </div>
            <span>Loved by <strong>1,000+ families</strong></span>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual animate-in delay-1">
          <div className="hero-photo-wrap">
            <img key={slide.image} src={slide.image} alt={slide.alt} />
            <div className="photo-tag photo-tag-top">
              <span className="tag-icon yellow-icon"><Star size={15} fill="currentColor" /></span>
              <span>
                <strong>{slide.title}</strong>
                <small>{slide.detail}</small>
              </span>
            </div>
            <div className="photo-tag photo-tag-bottom">
              <span className="tag-icon green-icon"><CircleCheck size={16} /></span>
              <span>
                <strong>Safe &amp; nurturing</strong>
                <small>every single day</small>
              </span>
            </div>
          </div>

          <div className="hero-slide-controls" aria-label="Choose homepage photo">
            {heroSlides.map((s, index) => (
              <button
                key={s.image}
                className={index === activeSlide ? 'is-active' : ''}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show photo ${index + 1}`}
              />
            ))}
          </div>

          <span className="doodle doodle-star">✦</span>
          <span className="doodle doodle-sun">☼</span>
        </div>
      </div>
    </section>
  );
}
