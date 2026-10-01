import { SectionHeading } from './SectionHeading';
import { facilities } from '../data';

export function FacilitiesSection() {
  return (
    <section id="facilities" className="facilities-section">
      <div className="container">
        <div className="facilities-header-row">
          <SectionHeading
            eyebrow="Campus & Infrastructure"
            title="Every space built for happy discoveries"
            text="Designed from the ground up for early learners Explore our labs, cheerful classrooms, day care, dining spaces, and outdoor play areas"
          />
        </div>

        <div className="facilities-grid">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <article className="facility-card" key={fac.title}>
                <div className="facility-img-wrap">
                  <img src={fac.image} alt={fac.title} loading="lazy" />
                  <span className="facility-tag">{fac.tag}</span>
                </div>
                <div className="facility-content">
                  <div className="facility-title-row">
                    <span className={`facility-badge-icon ${fac.color}-bg`}>
                      <Icon size={18} />
                    </span>
                    <h3>{fac.title}</h3>
                  </div>
                  <p>{fac.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
