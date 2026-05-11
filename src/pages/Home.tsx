import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Treatments from '../components/Treatments';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';
import Map from '../components/Map';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Treatments />
      <About />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Booking />
      <Map />
    </>
  );
}
