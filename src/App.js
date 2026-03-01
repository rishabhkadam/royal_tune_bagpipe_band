import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect } from "react";
import Aos from "aos";
import Training from "./pages/training";
import Testimonials from "./pages/testimonials";
import { Helmet, HelmetProvider } from "react-helmet-async";
import EventBooking from "./pages/eventbooking";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Royal Bagpipe Band and Academy | Best Bagpipe Band and Training
          Academy in India
        </title>
        <meta
          name="description"
          content="Professional bagpipe training and royal event performances in India."
        />
        <meta
          name="keywords"
          content="Bagpipe training Haryana, School bagpipe band, Wedding bagpiper, Event bagpiper, Bagpipe coaching, Royal Bagpipe Band & Academy, Bagpipe classes India, Bagpipe performance haryana, Bagpipe training India, Bagpipe band India, sirsa bagpipe training, bagpipe training, bagpipe training haryana, bagpipe training india, event organizer in haryana, event organizer in punjab, event organizer in delhi, event organizer in up, event organizer in rajasthan, event organizer in gujarat, event organizer in maharashtra, event organizer in karnataka, event organizer in tamil nadu, event organizer in kerala, event organizer in west bengal, event organizer in bihar, event organizer in odisha, event organizer in assam, event organizer in northeast india, wedding bagpiper, bagpipe performance, bagpipe band, bagpipe music, bagpipe training, bagpipe classes, bagpipe coaching, royal events, cultural events, school competitions, guitar training, music academy, bagpipe academy, bagpipe school, bagpipe lessons, bagpipe courses, bagpipe workshops, bagpipe instructors, bagpipe teachers, bagpipe professionals, bagpipe experts, band performances, bagpipe entertainment, bagpipe music for events, bagpipe music for weddings, bagpipe music for parties, bagpipe music for corporate events, bagpipe music for cultural events, bagpipe music for school events, bagpipe music for competitions, bagpipe music for festivals, bagpipe music for public events, bagpipe music for private events, bagpipe music for special occasions, bagpipe music for ceremonies, bagpipe music for parades, bagpipe music for memorials, bagpipe music for funerals, bagpipe music for military events, bagpipe music for police events, bagpipe music for government events, bagpipe music for community events, Royal Bagpipe Band & Academy, royal bagpipe band, royal bagpipe training, royal bagpipe performances, royal bagpipe events, royal bagpipe music, royal bagpipe classes, royal bagpipe coaching, royal bagpipe instructors, royal bagpipe teachers, royal bagpipe professionals, royal bagpipe experts, best bagpipe academy, best bagpipe band, best bagpipe training, best bagpipe performances, best bagpipe events, best bagpipe music, best bagpipe classes, best bagpipe coaching, best bagpipe instructors, best bagpipe teachers, best bagpipe professionals, best bagpipe experts, best bagpipe in sirsa, bagpipe band in haryana, bagpipe band in india, bagpiper band in india, bagpiper band in haryana, bagpiper band"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Royal Bagpipe Band and Academy" />
        <meta
          property="og:description"
          content="Professional Bagpiper for Weddings & Events Across India."
        />
        <meta
          property="og:image"
          content="https://royalbagpipeacademy.online/bagpipeLogo.png"
        />
        <meta property="og:url" content="https://royalbagpipeacademy.online/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://royalbagpipeacademy.online/bagpipeLogo.png"
        />
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
