import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="relative py-5  flex items-center justify-center overflow-hidden bg-[#1A2B4C]">
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* H1 - National SEO Focus */}
          <h1 className="font-[cinzel] text-4xl md:text-6xl text-white mb-6 tracking-wide leading-tight">
            India’s Leading Professional Bagpipe Band & Training Academy
          </h1>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Royal Bagpipe Academy is one of India’s premier professional bagpipe bands and training institutes, delivering royal-class performances for weddings, corporate events, school annual functions, government ceremonies, and national celebrations. With a disciplined team of trained performers and certified instructors, we proudly serve clients across India.
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
