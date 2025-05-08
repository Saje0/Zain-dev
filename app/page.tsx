import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import WhyUs from '@/components/sections/why-us';
import Branches from '@/components/sections/branches';
import Partners from '@/components/sections/partners';
import Projects from '@/components/sections/projects';
import News from '@/components/sections/news';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Branches />
      <Partners />
      <Projects />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}