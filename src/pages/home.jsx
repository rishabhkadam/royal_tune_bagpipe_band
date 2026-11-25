import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Royal Bagpipe Band &amp; Training Academy in India</title>
        <meta name="description" content="Book a professional bagpipe band for weddings, corporate events, school functions and ceremonies across India. Explore Royal Bagpipe Academy training." />
        <link rel="canonical" href="https://royalbagpipeacademy.online/" />
        <meta property="og:title" content="Royal Bagpipe Band & Training Academy in India" />
        <meta property="og:description" content="Professional bagpipe performances for events and structured training across India." />
        <meta property="og:url" content="https://royalbagpipeacademy.online/" />
        <meta property="og:image" content="https://royalbagpipeacademy.online/hero.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Royal Bagpipe Band & Training Academy in India" />
        <meta name="twitter:description" content="Professional bagpipe performances for events and structured training across India." />
        <meta name="twitter:image" content="https://royalbagpipeacademy.online/hero.png" />
      </Helmet>
      <section
        id="hero"
        className="heroimage relative min-h-screen pt-20 flex items-center justify-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 text-center px-6 ">
          {/* H1 - National SEO Focus */}
          <h1 className="font-[cinzel] text-4xl md:text-6xl text-white mb-6 tracking-wide leading-tight">
            India’s Leading Professional Bagpipe Band & Training Academy
          </h1>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Royal Bagpipe Band & Academy is one of India’s premier professional
            bagpipe bands and training institutes, delivering royal-class
            performances for weddings, corporate events, school annual
            functions, government ceremonies, and national celebrations. With a
            disciplined team of trained performers and certified instructors, we
            proudly serve clients across India.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink
              to="/hire-bagpiper-india"
              className="bg-[#d4af37] text-[#1A2B4C] px-8 py-3 rounded font-bold cursor-pointer hover:scale-105 transition"
            >
              BOOK US
            </RouterLink>

            <Link
              to="training"
              smooth
              duration={500}
              className="border border-white text-white px-8 py-3 rounded font-semibold cursor-pointer hover:bg-white hover:text-[#1A2B4C] transition"
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
