import { Hero } from '../sections/Hero';
import { Nature } from '../sections/Nature';
import { useSmoothScroll } from '../animations';

export default function App() {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-background text-text">
      <Hero />
      <Nature />
    </main>
  );
}
