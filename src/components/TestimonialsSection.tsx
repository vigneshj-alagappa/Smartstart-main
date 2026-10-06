import { Quote, Star } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { testimonials } from '../data';

export function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHeading
          eyebrow="From our parent circle"
          title="The little things mean everything."
          align="center"
        />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <Quote className="quote-mark" size={30} />
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>
              <p>"{item.quote}"</p>
              <div className="testimonial-person">
                <span className={`initials ${item.color}-bg`}>{item.initials}</span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
