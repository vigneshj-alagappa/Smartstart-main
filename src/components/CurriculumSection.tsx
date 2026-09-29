import { Baby, BookOpen, HeartHandshake, Sparkles, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export function CurriculumSection() {
  return (
    <section id="curriculum" className="section curriculum-section">
      <div className="container curriculum-grid">
        {/* Copy */}
        <div className="curriculum-copy">
          <SectionHeading
            eyebrow="Our way of learning"
            title="Curious minds. Kind hearts. Confident steps."
            text="Our play-led approach brings together the best of structured learning and child-led discovery, so every child gets to learn in a way that feels natural to them."
          />
          <div className="curriculum-points">
            <div>
              <span className="point-number red-bg">01</span>
              <p><strong>Wonder first</strong><br />We begin with questions, not answers.</p>
            </div>
            <div>
              <span className="point-number blue-bg">02</span>
              <p><strong>Hands on</strong><br />Little hands make big connections.</p>
            </div>
            <div>
              <span className="point-number green-bg">03</span>
              <p><strong>Grow together</strong><br />Every voice and every pace matters.</p>
            </div>
          </div>
        </div>

        {/* Diagram */}
        <div className="learning-diagram">
          <div className="diagram-center">
            <span><Sparkles size={27} /></span>
            <strong>Happy<br />learning</strong>
          </div>
          <div className="diagram-orbit orbit-one">
            <span className="orbit-icon yellow-bg"><Baby size={20} /></span>
            <b>Play</b>
          </div>
          <div className="diagram-orbit orbit-two">
            <span className="orbit-icon red-bg"><HeartHandshake size={20} /></span>
            <b>Belong</b>
          </div>
          <div className="diagram-orbit orbit-three">
            <span className="orbit-icon blue-bg"><BookOpen size={20} /></span>
            <b>Discover</b>
          </div>
          <div className="diagram-orbit orbit-four">
            <span className="orbit-icon green-bg"><Users size={20} /></span>
            <b>Grow</b>
          </div>
        </div>
      </div>
    </section>
  );
}
