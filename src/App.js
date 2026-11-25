import "./App.css";
import { Link as RouterLink, Route, Routes } from "react-router-dom";
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
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center"><h1 className="text-3xl font-display">Page not found</h1><p className="text-slate-500">That page does not exist.</p><RouterLink className="underline text-primary" to="/">Return to the homepage</RouterLink></main>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
