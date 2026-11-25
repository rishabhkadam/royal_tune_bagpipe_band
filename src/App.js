import "./App.css";
import { lazy, Suspense } from "react";
import { Link as RouterLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import DeferredGallery from "./components/deferredGallery";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Training from "./pages/training";
import Testimonials from "./pages/testimonials";
import FAQ from "./pages/faq";
import { Helmet } from "react-helmet-async";
const EventBooking = lazy(() => import("./pages/eventbooking"));
const Privacy = lazy(() => import("./pages/privacy"));
const Terms = lazy(() => import("./pages/terms"));
const EventFAQ = lazy(() => import("./pages/eventFAQ"));

function App() {
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
              <DeferredGallery />
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
            <Suspense fallback={<div className="min-h-[60vh]" aria-label="Loading page" />}>
              <EventBooking />
              <EventFAQ />
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/training"
          element={
            <>
              <Helmet>
                <title>Bagpipe Training Academy in India | Royal Bagpipe Academy</title>
                <meta name="description" content="Explore online and in-person bagpipe lessons, school pipe band coaching, marching practice, and professional band preparation at Royal Bagpipe Academy." />
                <link rel="canonical" href="https://royalbagpipeacademy.online/training" />
              </Helmet>
              <main>
                <header className="bg-royal-blue px-6 pb-12 pt-32 text-center text-white">
                  <h1 className="font-display text-3xl md:text-5xl">Bagpipe Training Academy in India</h1>
                  <p className="mx-auto mt-4 max-w-3xl text-slate-200">Learn online or in person with structured bagpipe lessons, marching practice, and guidance for aspiring performers.</p>
                </header>
                <Training />
              </main>
            </>
          }
        />
        <Route path="/privacy-policy" element={<Suspense fallback={null}><Privacy /></Suspense>} />
        <Route path="/terms-conditions" element={<Suspense fallback={null}><Terms /></Suspense>} />
        <Route path="/terms-and-conditions" element={<Suspense fallback={null}><Terms /></Suspense>} />
        <Route path="*" element={<main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center"><h1 className="text-3xl font-display">Page not found</h1><p className="text-slate-500">That page does not exist.</p><RouterLink className="underline text-primary" to="/">Return to the homepage</RouterLink></main>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
