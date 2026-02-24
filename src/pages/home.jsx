export default function Home() {
  return (
    <section className="bg-[#3a414f] relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* <img
        src="/hero.jpg"q
        alt="Academy"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
      <div className="absolute inset-0 bg-royal-blue/85"></div>

      <div className="relative z-10 text-center px-4">
        <h2 className="font-[cinzel] text-4xl md:text-6xl text-white mb-4 tracking-wider">
          ACADEMY TRAINING
        </h2>
        <div className="w-40 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Elevating bagpipe artistry through disciplined training and professional career pathways.
        </p>
      </div>
    </section>
  );
}