import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect } from "react";
import Aos from "aos";
import Training from "./pages/training";
import Testimonials from "./pages/testimonials";
import { Helmet } from "react-helmet-async";
import EventBooking from "./pages/eventbooking";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import FAQ from "./pages/faq";
import EventFAQ from "./pages/eventFAQ";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Royal Bagpipe Academy | Professional Bagpipe Band & Training in India
        </title>
        <meta
          name="description"
          content="Hire professional bagpipe band in India for weddings, corporate events, school functions and government ceremonies. Royal Bagpipe Academy also offers structured bagpipe training programs nationwide."
        />
        <link rel="canonical" href="https://royalbagpipeacademy.online/" />

        {/* Open Graph */}
        <meta property="og:title" content="Royal Bagpipe Band and Academy" />
        <meta
          property="og:description"
          content="Professional Bagpiper for Weddings & Events Across India."
        />
        <meta
          property="og:image"
          content="https://royalbagpipeacademy.online/hero.png"
        />
        <meta property="og:url" content="https://royalbagpipeacademy.online/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Royal Bagpipe Academy" />
        <meta
          name="twitter:description"
          content="Hire professional bagpipe band in India for weddings and events."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://royalbagpipeacademy.online/hero.png"
        />
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to hire a bagpipe band in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost typically ranges from ₹15,000 to ₹50,000 depending on the event type and location."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide bagpipe band services for weddings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in royal wedding entries and ceremonial performances across India."
      }
    }
  ]
}
`}
        </script>
      </Helmet>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Training />
              <Gallery />
              <Testimonials />
              <FAQ />
              <Contact />
            </>
          }
        />

        {/* Event Booking Page */}
        <Route
          path="/hire-bagpiper-india"
          element={
            <>
              <EventBooking />
              <EventFAQ />
              <Contact />
            </>
          }
        />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
