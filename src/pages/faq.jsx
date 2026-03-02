import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much does it cost to hire a bagpipe band in India?",
      answer:
        "The cost of hiring a professional bagpipe band in India typically ranges from ₹15,000 to ₹50,000 depending on the event type, location, and performance duration.",
    },
    {
      question: "Do you provide bagpipe band services for weddings?",
      answer:
        "Yes, Royal Bagpipe Academy specializes in royal wedding entries, baraat performances, and ceremonial wedding moments across India.",
    },
    {
      question: "Are your performers professionally trained?",
      answer:
        "All our bagpipers are disciplined, synchronized, and professionally trained performers with experience in corporate, school, and government events.",
    },
    {
      question: "Do you travel across India for events?",
      answer:
        "Yes, we provide professional bagpipe band performances nationwide across India for weddings, corporate events, school functions, and ceremonies.",
    },
    {
      question: "How can I book the Royal Bagpipe Band for my event?",
      answer:
        "You can book us by filling out the contact form on our website or directly contacting us via phone or WhatsApp.",
    },
    {
      question: "Do you offer bagpipe training programs?",
      answer:
        "Yes, we provide structured bagpipe training programs for beginners, advanced learners, and aspirants preparing for professional and government band careers.",
    },
    {
      question: "Is bagpipe training available online?",
      answer:
        "Yes, we offer both offline and online bagpipe training sessions across India.",
    },
    {
      question:
        "Can students prepare for government band careers through your academy?",
      answer:
        "Yes, our academy prepares students with disciplined marching and musical training suitable for national-level and government band opportunities.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-display text-center mb-12 gold-gradient-text">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-sm text-royal-blue"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100 p-5 pt-0"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}