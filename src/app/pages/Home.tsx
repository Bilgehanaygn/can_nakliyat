import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}
