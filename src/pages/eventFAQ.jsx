export default function EventFAQ() {
  const faqs = [
    {
      question: "How much does it cost to hire a bagpipe band in India?",
      answer:
        "The cost typically starts from ₹15,000 and depends on location, number of performers, duration and event type.",
    },
    {
      question: "Do you provide bagpipe band services for weddings?",
      answer:
        "Yes, we specialize in royal wedding entries, baraat performances and ceremonial moments across India.",
    },
    {
      question: "Do you travel across India for events?",
      answer:
        "Yes, Royal Bagpipe Academy provides nationwide bagpipe band services for weddings, corporate events and government ceremonies.",
    },
    {
      question: "How early should we book for our event?",
      answer:
        "We recommend booking at least 2–4 weeks in advance, especially during peak wedding seasons.",
    },
    {
      question: "How many performers come to an event?",
      answer:
        "The number of bagpipers can be customized based on your event scale and preference.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-100 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 gold-gradient-text">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg mb-2 text-royal-blue">
                {faq.question}
              </h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}