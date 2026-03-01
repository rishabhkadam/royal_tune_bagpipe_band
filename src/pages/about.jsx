import AboutImge from "../assests/aboutsection.png";

function About() {
  return (
    <section className="py-20 px-6 bg-white" id="about">
      <div className=" mx-auto text-center">
        {/* SEO Optimized H2 */}
        <h2 className="font-display gold-gradient-text font-[cinzel] text-3xl md:text-4xl text-[#1A2B4C] mb-6">
          About Royal Bagpipe Band & Academy
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* TEXT SECTION */}
          <div className="md:w-1/2">
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Royal Bagpipe Band & Academy is a nationally recognized
              professional bagpipe band and training institute in India,
              delivering royal-class performances for weddings, corporate
              events, school annual functions, and government ceremonies across
              the country.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We specialize in providing disciplined, synchronized pipe band
              performances that elevate the atmosphere of prestigious events.
              Our academy also offers structured bagpipe training programs
              designed for beginners, advanced learners, and aspirants preparing
              for professional and government band careers.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              With a strong foundation in tradition, musical excellence, and
              marching discipline, Royal Bagpipe Band & Academy prepares skilled
              performers for national-level opportunities while maintaining the
              heritage and ceremonial grandeur of bagpipe music in India.
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={AboutImge}
              alt="Royal Bagpipe Band performing and training students in India"
              className="w-full max-w-md md:max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
