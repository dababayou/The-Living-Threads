import { Hero } from '../sections/Hero';
import { Nature } from '../sections/Nature';
import { Craft } from '../sections/Craft';
import { Meaning } from '../sections/Meaning';
import { LivingHeritage } from '../sections/LivingHeritage';
import { Hope } from '../sections/Hope';
import { Gallery } from '../sections/Gallery/Gallery';
import { Footer } from '../sections/Footer';
import { useSmoothScroll } from '../animations';
import { GlobalThread } from '../components/GlobalThread';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Header } from '../components/Header';

export default function App() {
  useSmoothScroll();

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-text relative z-0">
        <Header />
        <GlobalThread />
        <Hero />
        <Nature />
        <Craft />
        <Meaning />
        <LivingHeritage />
        <Hope />
        <Gallery />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

