import {
  Baby,
  BookOpen,
  HeartHandshake,
  Leaf,
  Monitor,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  UtensilsCrossed,
} from 'lucide-react';

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export { asset };

export const admissionFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfnYF0QQDe8LOVrRhdhQv-TryBRd0f7VKPIeC8-EC1f7hFd5w/viewform?usp=publish-editor';

export const images = {
  hero: asset('images/WhatsApp_Image_2026-09-18_at_11.50.24_(2).jpeg'),
  learn: asset('images/WhatsApp_Image_2026-09-18_at_11.50.22.jpeg'),
  play: asset('images/WhatsApp_Image_2026-09-18_at_11.50.23.jpeg'),
  friends: asset('images/WhatsApp_Image_2026-09-18_at_11.50.23_(2).jpeg'),
  slide: asset('images/WhatsApp_Image_2026-09-18_at_11.50.24_(1).jpeg'),
};

export const heroSlides = [
  { image: images.hero, title: 'Growing', detail: 'with joy', alt: 'Children playing together at Alagappa Smart Start' },
  { image: images.learn, title: 'Learning', detail: 'through wonder', alt: 'Children learning through a colourful classroom activity' },
  { image: images.play, title: 'Playing', detail: 'with purpose', alt: 'Child enjoying outdoor play' },
  { image: images.friends, title: 'Growing', detail: 'together', alt: 'Children exploring together' },
  { image: images.slide, title: 'Every day', detail: 'is an adventure', alt: 'Children playing outside' },
];

export const programmes = [
  { age: '1.5 – 2.5 years', name: 'Day Care', description: 'A gentle first step into group play, discovery and little routines that build confidence.', color: 'red', icon: Baby },
  { age: '2.5 – 3.5 years', name: 'Playgroup', description: 'Busy hands, bright ideas and playful experiences that grow early language and social skills.', color: 'yellow', icon: Sparkles },
  { age: '3.5 – 4.5 years', name: 'LKG', description: 'A joyful foundation for curiosity, creativity, independence and a love of learning.', color: 'blue', icon: BookOpen },
  { age: '4.5 – 6 years', name: 'UKG', description: 'Confident preparation for big school through meaningful projects and purposeful play.', color: 'green', icon: Star },
];

export const reasons = [
  { title: 'Learning that feels like play', text: 'Every activity is designed to invite curiosity, movement and meaningful discovery.', icon: Sparkles, color: 'yellow' },
  { title: 'A safe, caring space', text: 'Warm adults, thoughtful routines and child-friendly spaces help little ones feel secure.', icon: ShieldCheck, color: 'blue' },
  { title: 'Teachers who truly see them', text: 'Our educators notice the small moments and celebrate every child\'s unique spark.', icon: HeartHandshake, color: 'red' },
  { title: 'Room to grow and explore', text: 'Bright classrooms and open-air play areas give growing minds room to move.', icon: Leaf, color: 'green' },
];

export const testimonials = [
  { quote: 'The happiness in my child is the best review. Every morning she runs in with a smile and comes home with a new story.', name: 'Priya R.', role: 'Parent of Ananya, Nursery', initials: 'PR', color: 'red' },
  { quote: 'We can see the difference in his confidence every week. The teachers are so patient, warm and genuinely invested.', name: 'Karthik S.', role: 'Parent of Arjun, Playgroup', initials: 'KS', color: 'blue' },
  { quote: 'Alagappa Smart Start feels like a second home. It is joyful, structured and exactly what our little one needed.', name: 'Meena V.', role: 'Parent of Tara, Kindergarten', initials: 'MV', color: 'green' },
];

export const facilities = [
  {
    title: 'Computer Lab',
    tag: 'Digital Learning',
    description:
      'Our Computer Lab is designed to provide a modern, spacious, and comfortable learning environment. It is equipped with the latest hardware and software to support a wide range of academic and practical computing needs.',
    image: asset('images/facilities/computer-lab.png'),
    icon: Monitor,
    color: 'blue',
  },
  {
    title: 'Kindergarten Classroom',
    tag: 'Creative Play',
    description:
      'A vibrant world of learning Where curiosity meets creativity, Encouraging holistic Growth through interactive Experiences and Joyful learning moments.',
    image: asset('images/facilities/kindergarten-classroom.png'),
    icon: Sparkles,
    color: 'yellow',
  },
  {
    title: 'LKG Classroom',
    tag: 'Early Steps',
    description:
      'A nurturing and cheerful learning environment where young learners take their first step into education through play-based activities, joyful exploration, and guided discovery.',
    image: asset('images/facilities/lkg-classroom.png'),
    icon: BookOpen,
    color: 'red',
  },
  {
    title: 'UKG Classroom',
    tag: 'Primary Transition',
    description:
      'A dynamic and engaging space that strengthens foundational skills, fosters confidence, and prepares children for a smooth transition to primary education.',
    image: asset('images/facilities/ukg-classroom.png'),
    icon: Star,
    color: 'green',
  },
  {
    title: 'Day Care',
    tag: 'Safe & Homelike',
    description:
      'Caring and secure space that provides comfort, supervision, and enriching activities, ensuring children feel safe, happy, and at home throughout the day.',
    image: asset('images/facilities/day-care.png'),
    icon: HeartHandshake,
    color: 'yellow',
  },
  {
    title: 'Dining Area',
    tag: 'Nutrition & Etiquette',
    description:
      'Clean, safe, and welcoming space where children enjoy nutritious meals together, learning healthy eating habits, table manners, and the joy of sharing in a comfortable environment.',
    image: asset('images/facilities/dining-area.png'),
    icon: UtensilsCrossed,
    color: 'red',
  },
  {
    title: 'Play Area',
    tag: 'Active Outdoors',
    description:
      'Our play area is a safe and joyful space designed for fun and learning through play. Equipped with swing, seesaw, and slide. It helps children to develop physical strength, balance, coordination, and social skills while enjoying active play.',
    image: asset('images/facilities/play-area.png'),
    icon: Smile,
    color: 'blue',
  },
];

export const navItems = [
  { label: 'About us', href: '#about-us' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
];
