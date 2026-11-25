import { ArrowUpRight, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "../config";

function getNextMonthLabel() {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
  }).format(nextMonth);
}

export default function Training() {
  const [nextMonthLabel, setNextMonthLabel] = useState(getNextMonthLabel);

  useEffect(() => {
    const refreshNextMonth = () => setNextMonthLabel(getNextMonthLabel());
    const intervalId = window.setInterval(refreshNextMonth, 60 * 60 * 1000);
    window.addEventListener("focus", refreshNextMonth);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refreshNextMonth);
    };
  }, []);

  const bookingMessage = encodeURIComponent(
    `Hello! I would like to join Royal Bagpipe Academy and book a training session for ${nextMonthLabel}. Please share the available timings and fees. I am interested in online or in-person training.`,
  );

  return (
    <section className="py-20 px-4 bg-slate-50" id="training">
      <div className="mx-auto text-center mb-16">
        <h2 className="font-display text-3xl gold-gradient-text mb-4">
          WHAT WE DO ?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Royal Bagpipe Band & Academy delivers royal-class band performances for
          prestigious events and provides professional bagpipe training
          programs across India.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* 🎺 EVENT SERVICES FIRST */}
        <div className="bg-white text-slate-600 p-8 border-l-4 border-primary shadow-lg rounded-lg md:col-span-2">
          <h3 className="font-display text-2xl mb-4">
            Royal Bagpipe Band for Events
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
            In-Person Bagpipe Training
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
            Online Bagpipe Academy
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

      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-primary/30 bg-white px-6 py-8 text-center shadow-lg md:px-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-royal-blue">
          <CalendarDays aria-hidden="true" size={24} />
        </div>
        <h3 className="font-display text-2xl text-royal-blue md:text-3xl">
          Ready to start your bagpipe journey?
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Ask about training session availability for {nextMonthLabel}, online or in person.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${bookingMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ask on WhatsApp about booking a bagpipe training session for ${nextMonthLabel}`}
          className="group mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-royal-blue px-7 py-3 font-semibold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <CalendarDays aria-hidden="true" size={19} />
          Book a Session on WhatsApp
          <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
