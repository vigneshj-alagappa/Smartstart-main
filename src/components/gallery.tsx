import { useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

type GalleryImage = {
    src: string;
    alt: string;
    category: string;
};

const galleryImages: GalleryImage[] = [
    { src: asset('images/Gallery/graduation day_.jpg'), alt: 'Graduation Day', category: 'Graduation' },
    { src: asset('images/Gallery/graduation day_(1).jpg'), alt: 'Graduation Day Ceremony', category: 'Graduation' },
    { src: asset('images/Gallery/graduation day_(2).jpg'), alt: 'Graduation Celebration', category: 'Graduation' },
    { src: asset('images/Gallery/market day.jpg'), alt: 'Market Day', category: 'Events' },
    { src: asset('images/Gallery/market day_.jpg'), alt: 'Market Day Activities', category: 'Events' },
    { src: asset('images/Gallery/Market day_(1).jpg'), alt: 'Market Day Fun', category: 'Events' },
    { src: asset('images/Gallery/grandparents day_.jpg'), alt: 'Grandparents Day', category: 'Events' },
    { src: asset('images/Gallery/play time.jpg'), alt: 'Play Time', category: 'Play' },
    { src: asset('images/Gallery/play time_.jpg'), alt: 'Play Time Fun', category: 'Play' },
    { src: asset('images/Gallery/play time(1).jpg'), alt: 'Children Playing', category: 'Play' },
    { src: asset('images/Gallery/play area.jpg'), alt: 'Play Area', category: 'Play' },
    { src: asset('images/Gallery/sports activities_.jpg'), alt: 'Sports Activities', category: 'Sports' },
    { src: asset('images/Gallery/sports activities_(1).jpg'), alt: 'Sports Day', category: 'Sports' },
];

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const prev = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    };
    const next = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % filtered.length);
    };

    return (
        <>
            <section id="gallery" className="gallery-section-full">
                <div className="container">
                    {/* Header */}
                    <div className="gallery-full-header">
                        <span className="eyebrow eyebrow-light">
                            <Sparkles size={14} /> Days worth remembering
                        </span>
                        <h2>There is magic<br />in the everyday</h2>
                        <p>Messy hands, Brave tries, Loud laughter. These are the moments that make childhood.</p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="gallery-filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="gallery-masonry">
                        {filtered.map((img, idx) => (
                            <div
                                key={img.src}
                                className="gallery-tile"
                                onClick={() => openLightbox(idx)}
                            >
                                <img src={img.src} alt={img.alt} loading="lazy" />
                                <div className="gallery-tile-overlay">
                                    <span>{img.alt}</span>
                                    <span className="gallery-tile-tag">{img.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="lightbox-backdrop" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox} aria-label="Close"><X size={22} /></button>
                    <button className="lightbox-nav lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous">
                        <ChevronLeft size={28} />
                    </button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].alt} />
                        <p className="lightbox-caption">{filtered[lightboxIndex].alt}</p>
                    </div>
                    <button className="lightbox-nav lightbox-next" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next">
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </>
    );
}

export default Gallery;
