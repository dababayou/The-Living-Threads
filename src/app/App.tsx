import { Hero } from '../sections/Hero';
import { Nature } from '../sections/Nature';
import { Craft } from '../sections/Craft';
import { Meaning } from '../sections/Meaning';
import { LivingHeritage } from '../sections/LivingHeritage';
import { Hope } from '../sections/Hope';
import { Footer } from '../sections/Footer';
import { useSmoothScroll } from '../animations';
import { GlobalThread } from '../components/GlobalThread';

export default function App() {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-background text-text relative">
      <GlobalThread />
      <Hero />
      <Nature />
      <Craft />
      <Meaning />
      <LivingHeritage />
      <Hope />
      <Footer />
    </main>
  );
}
