import { Hero } from '../sections/Hero';
import { Nature } from '../sections/Nature';
import { Craft } from '../sections/Craft';
import { Meaning } from '../sections/Meaning';
import { LivingHeritage } from '../sections/LivingHeritage';
import { useSmoothScroll } from '../animations';

export default function App() {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-background text-text">
      <Hero />
      <Nature />
      <Craft />
      <Meaning />
      <LivingHeritage />
    </main>
  );
}
