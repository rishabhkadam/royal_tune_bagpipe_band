import { Helmet } from "react-helmet-async";
import { Link } from "react-scroll";

export default function EventBooking() {
  return (
    <>
      <Helmet>
        <title>
          Hire Professional Bagpiper for Wedding & Events in India | Royal Bagpipe Band & Academy
        </title>

        <meta
          name="description"
          content="Book professional bagpipers and royal pipe bands for weddings, corporate events, school functions and government ceremonies across India. Contact Royal Bagpipe Band & Academy for premium event performances."
        />

        <meta
          name="keywords"
          content="Hire bagpiper India, Wedding bagpiper India, Corporate bagpipe band, School pipe band performance, Book bagpipe band for event"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="bg-[#1A2B4C] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[cinzel] text-4xl md:text-6xl mb-6">
            Hire Professional Bagpiper for Weddings & Events Across India
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            Royal Bagpipe Band & Academy provides royal-class bagpipe band
            performances for weddings, corporate launches, school annual
            functions and government ceremonies nationwide.
          </p>

          <Link
            to="contact"
            smooth
            duration={500}
            className="bg-[#d4af37] text-[#1A2B4C] px-8 py-3 rounded font-bold cursor-pointer hover:scale-105 transition"
          >
            BOOK BAGPIPE BAND NOW
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#1A2B4C]">
            Our Event Performance Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-slate-600">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🎺 Wedding Entry Bagpiper
              </h3>
              <p>
                Create a royal and unforgettable wedding entrance with
                professional live bagpipe performances.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🏢 Corporate Events
              </h3>
              <p>
                Elevate corporate launches, award ceremonies, and company
                celebrations with disciplined pipe band performances.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🏫 School & Cultural Programs
              </h3>
              <p>
                Professional marching formations for school annual days,
                parades, and cultural competitions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🏛 Government & National Ceremonies
              </h3>
              <p>
                Formal, synchronized performances suitable for official
                functions and national celebrations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#1A2B4C] mb-8">
            Why Choose Royal Bagpipe Band & Academy?
          </h2>

          <ul className="space-y-4 text-slate-600 text-lg">
            <li>✔ Professional disciplined performers</li>
            <li>✔ Royal ceremonial presentation</li>
            <li>✔ National-level event experience</li>
            <li>✔ Punctual & reliable service</li>
            <li>✔ Custom performance arrangements</li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1A2B4C] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Book Professional Bagpipe Band for Your Event Today
          </h2>

          <p className="text-slate-300 mb-8">
            Contact Royal Bagpipe Band & Academy now to hire professional
            bagpipers anywhere in India for weddings, corporate
            events, school programs, and official ceremonies.
          </p>

          <Link
            to="contact"
            smooth
            duration={500}
            className="bg-[#d4af37] text-[#1A2B4C] px-8 py-3 rounded font-bold cursor-pointer hover:scale-105 transition"
          >
            CONTACT & BOOK NOW
          </Link>
        </div>
      </section>
    </>
  );
}