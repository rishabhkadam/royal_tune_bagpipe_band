export default function Training() {
  return (
    <section className="py-20 px-4" id="training">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-display text-3xl gold-gradient-text mb-4">
          OUR TRAINING PROGRAMS
        </h2>
        <p className="text-slate-500">
          Master the art from basic tunes to royal performances
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-white text-slate-600 p-8 border-l-4 border-primary shadow-lg">
          <h3 className="font-display text-2xl mb-4">
            Offline Physical Batches
          </h3>
          <p>
            Our signature in-person training focusing on posture,
            technique, and ensemble playing.
          </p>
        </div>

        <div className="bg-white  text-slate-600  p-8 border-l-4 border-primary shadow-lg">
          <h3 className="font-display text-2xl text-royal-blue mb-4">
            Global Online Academy
          </h3>
          <p>
            Structured digital curriculum and live sessions with
            expert instructors.
          </p>
        </div>
      </div>
    </section>
  );
}