import { FormEvent, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
    ArrowUpRight,
    Baby,
    BookOpen,
    Sparkles,
    Star,

} from 'lucide-react';
const programmes = [
    { age: '8 Months – 2.5 years', name: 'Day Care', description: 'A gentle first step into group play, discovery and little routines that build confidence.', color: 'red', icon: Baby },
    { age: '2.5 – 3.0 years', name: 'Playgroup', description: 'Busy hands, bright ideas and playful experiences that grow early language and social skills.', color: 'yellow', icon: Sparkles },
    { age: '3.0 – 4.0 years', name: 'Pre - KG', description: 'We focus on building confidence, curiosity, and a love for learning, preparing every child for a smooth transition to LKG.', color: 'pink', icon: Sparkles },
    { age: '4.0 – 5.0 years', name: 'LKG', description: 'A joyful foundation for curiosity, creativity, independence and a love of learning.', color: 'blue', icon: BookOpen },
    { age: '5.0 – 6.0 years', name: 'UKG', description: 'Confident preparation for big school through meaningful projects and purposeful play.', color: 'green', icon: Star },
];

function SectionHeading({ eyebrow, title, text, align = 'left' }: { eyebrow: string; title: string; text?: string; align?: 'left' | 'center' }) {
    return (
        <div className={`section-heading ${align === 'center' ? 'centered' : ''}`}>
            <span className="eyebrow"><Sparkles size={14} /> {eyebrow}</span>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
        </div>
    );
}

function Programmes() {
    const [enquiryOpen, setEnquiryOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState('');
    const openEnquiry = () => {
        setSubmitted(false);
        setFormError('');
        setEnquiryOpen(true);
    };

    return (
        <div >
            <section id="programmes" className="section programmes-section"><div className="container"><SectionHeading eyebrow="Find their happy place" title="A programme for every little leap." text="From first friendships to big-school confidence, our programmes meet children exactly where they are." /><div className="programme-grid">{programmes.map(({ age, name, description, color, icon: Icon }) => <article className={`programme-card card-${color}`} key={name}><div className="card-top"><span className="age-label">{age}</span><span className={`round-icon ${color}-bg`}><Icon size={22} /></span></div><h3>{name}</h3><p>{description}</p><span className="card-number">0{programmes.findIndex((item) => item.name === name) + 1}</span></article>)}</div></div></section>
        </div>
    );
}

export default Programmes;
