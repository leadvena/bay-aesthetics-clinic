import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import TreatmentsPage from './pages/TreatmentsPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Simple SEO component to update meta tags
function SEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
}

function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "name": "Bay Aesthetics Clinic",
    "image": "https://ais-dev-y6z3xup2rjpbx5g3ffvh2a-257552207713.asia-southeast1.run.app/src/assets/images/clinic_hero_luxury_1778483378997.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calverton, Channelview Rd",
      "addressLocality": "Pevensey Bay",
      "addressRegion": "East Sussex",
      "postalCode": "BN24 6LU",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.814249,
      "longitude": 0.347585
    },
    "url": "https://bayaesthetics.co.uk",
    "telephone": "+447768645168",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "medicalSpecialty": "CosmeticProcedure"
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

export default function App() {
  return (
    <Router>
      <SchemaMarkup />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <SEO 
                  title="Bay Aesthetics Clinic | Nurse-Led Aesthetics in Pevensey Bay, East Sussex" 
                  description="Expert aesthetic treatments by a registered nurse. Botox, fillers, skin boosters and more in Pevensey Bay. Book your free consultation today." 
                />
                <Home />
              </>
            } />
            <Route path="/treatments" element={
              <>
                <SEO 
                  title="Treatments | Bay Aesthetics Clinic" 
                  description="Explore our range of nurse-led aesthetic treatments including Anti-Wrinkle, Dermal Fillers, and Skin Boosters."
                />
                <TreatmentsPage />
              </>
            } />
            <Route path="/about" element={
              <>
                <SEO 
                  title="About Becks | Bay Aesthetics Clinic" 
                  description="Learn about Becks, our Registered Nurse practitioner, and why nurse-led aesthetics matters."
                />
                <AboutPage />
              </>
            } />
            <Route path="/gallery" element={
              <>
                <SEO 
                  title="Results Gallery | Bay Aesthetics Clinic" 
                  description="View our before and after results for Botox, fillers, and skin rejuvenation treatments."
                />
                <GalleryPage />
              </>
            } />
             <Route path="/contact" element={
              <>
                <SEO 
                  title="Contact Us | Bay Aesthetics Clinic" 
                  description="Get in touch with Becks at Bay Aesthetics Clinic in Pevensey Bay."
                />
                <ContactPage />
              </>
            } />
            <Route path="/book" element={
              <>
                <SEO 
                  title="Book a Consultation | Bay Aesthetics Clinic" 
                  description="Schedule your aesthetic consultation at our Pevensey Bay clinic today."
                />
                <ContactPage />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
