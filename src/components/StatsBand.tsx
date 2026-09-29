import { useRef, useEffect, useState } from 'react';

// Playschool floating items – emoji + position + parallax speed
const floatingItems = [
  { emoji: '🎈', x: 6,  y: 20, size: 52, speed: 0.018 },
  { emoji: '📚', x: 14, y: 65, size: 46, speed: -0.012 },
  { emoji: '⭐', x: 22, y: 35, size: 40, speed: 0.022 },
  { emoji: '🖍️', x: 30, y: 75, size: 44, speed: -0.016 },
  { emoji: '🏀', x: 42, y: 15, size: 50, speed: 0.014 },
  { emoji: '🎨', x: 55, y: 70, size: 46, speed: -0.020 },
  { emoji: '✏️', x: 65, y: 28, size: 40, speed: 0.018 },
  { emoji: '🌟', x: 74, y: 60, size: 44, speed: -0.013 },
  { emoji: '🎒', x: 83, y: 20, size: 50, speed: 0.016 },
  { emoji: '🔔', x: 90, y: 72, size: 40, speed: -0.018 },
  { emoji: '🎠', x: 50, y: 45, size: 36, speed: 0.010 },
  { emoji: '🌈', x: 38, y: 55, size: 36, speed: -0.014 },
];

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { target: 10,   suffix: '',   label: 'years of\nhappy learning' },
  { target: 1000, suffix: '+',  label: 'little learners\nin our care' },
  { target: 8,    suffix: '+',  label: 'loving educators\nand guides' },
  { target: 4.9,  suffix: '/5', label: 'parent\nhappiness', decimals: 1 },
];

function useCountUp(target: number, decimals = 0, triggered: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1800; // ms
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, target, decimals]);

  return value;
}

function StatItem({ item, triggered }: { item: StatItem; triggered: boolean }) {
  const val = useCountUp(item.target, item.decimals ?? 0, triggered);
  const display = item.decimals ? val.toFixed(item.decimals) : Math.floor(val).toLocaleString();

  return (
    <div>
      <strong>
        {display}
        <span>{item.suffix}</span>
      </strong>
      <span>
        {item.label.split('\n').map((line, i) => (
          <span key={i}>{line}{i === 0 && <br />}</span>
        ))}
      </span>
    </div>
  );
}

export function StatsBand() {
  const bandRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  // Intersection observer → trigger count-up once visible
  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(band);
    return () => observer.disconnect();
  }, []);

  // Mouse parallax for floating emojis + background movement
  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = band.getBoundingClientRect();
      targetX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      targetY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    };

    const onMouseLeave = () => { targetX = 0; targetY = 0; };

    const animate = () => {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      // Move floating emoji items
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const s = floatingItems[i].speed * 180;
        el.style.transform = `translate(${currentX * s}px, ${currentY * s}px)`;
      });

      // Move background gradient position
      if (bgRef.current) {
        const bx = 50 + currentX * 30;
        const by = 50 + currentY * 30;
        bgRef.current.style.background =
          `radial-gradient(ellipse at ${bx}% ${by}%, #42a5f5 0%, #1565a8 55%, #0d3f73 100%)`;
      }

      raf = requestAnimationFrame(animate);
    };

    band.addEventListener('mousemove', onMouseMove);
    band.addEventListener('mouseleave', onMouseLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      band.removeEventListener('mousemove', onMouseMove);
      band.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="stats-band" ref={bandRef}>
      {/* Moving radial gradient background */}
      <div className="stats-bg" ref={bgRef} aria-hidden="true" />

      {/* Interactive floating background items */}
      <div className="stats-floaties" aria-hidden="true">
        {floatingItems.map((item, i) => (
          <span
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="stats-floaty"
            style={{ left: `${item.x}%`, top: `${item.y}%`, fontSize: `${item.size}px` }}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      <div className="container stats-grid">
        {stats.map((item) => (
          <StatItem key={item.label} item={item} triggered={triggered} />
        ))}
      </div>
    </section>
  );
}
