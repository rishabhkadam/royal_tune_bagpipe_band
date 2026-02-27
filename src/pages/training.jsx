export default function Training() {
  return (
    <section className="py-20 px-4 bg-slate-50" id="training">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-display text-3xl gold-gradient-text mb-4">
          WHAT WE DO ?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Royal Bagpipe Academy delivers royal-class band performances for
          prestigious events and provides professional bagpipe training
          programs across India.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* 🎺 EVENT SERVICES FIRST */}
        <div className="bg-white text-slate-600 p-8 border-l-4 border-primary shadow-lg rounded-lg md:col-span-2">
          <h3 className="font-display text-2xl mb-4">
            🎺 Royal Bagpipe Band for Events
          </h3>

          <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5">
            <li>Wedding Entry Bagpiper</li>
            <li>Corporate Event Performances</li>
            <li>School Annual Day & Cultural Programs</li>
            <li>Inauguration & Product Launch Events</li>
            <li>Political & Government Ceremonies</li>
            <li>National Day & Parade Performances</li>
          </ul>
        </div>

        {/* 🎓 OFFLINE TRAINING */}
        <div className="bg-white text-slate-600 p-8 border-l-4 border-primary shadow-lg rounded-lg">
          <h3 className="font-display text-2xl mb-4">
            🎓 Offline Bagpipe Training
          </h3>

          <ul className="space-y-2 list-disc pl-5">
            <li>Beginner to Advanced Level Training</li>
            <li>School Pipe Band Coaching</li>
            <li>Government Band Preparation</li>
            <li>Competition & Parade Training</li>
            <li>Discipline & Marching Formation Practice</li>
          </ul>
        </div>

        {/* 🌍 ONLINE TRAINING */}
        <div className="bg-white text-slate-600 p-8 border-l-4 border-primary shadow-lg rounded-lg">
          <h3 className="font-display text-2xl mb-4">
            🌍 Online Bagpipe Academy
          </h3>

          <ul className="space-y-2 list-disc pl-5">
            <li>Live Interactive Video Classes</li>
            <li>Recorded Practice Sessions</li>
            <li>Personal Skill Evaluation</li>
            <li>Performance Guidance</li>
            <li>Flexible Batches for Students</li>
          </ul>
        </div>

      </div>
    </section>
  );
}