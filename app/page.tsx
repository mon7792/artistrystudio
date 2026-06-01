import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import GallerySection from './components/GallerySection';
import Featured from './components/Featured';
import About from './components/About';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <GallerySection />
      <Featured />
      <About />
      <Process />
      <ContactForm />
      <Footer />
    </>
  );
}
