import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import weddingImg from "../assests/wedding_entry.png";
import corporateImg from "../assests/corporate_event.png";
import marchingImg from "../assests/bagpipe03.jpeg";

export default function EventBooking() {
  return (
    <>
      <Helmet>
        <title>
          Hire Professional Bagpipe Band in India | Royal Bagpipe Academy
        </title>
        <meta
          name="description"
          content="Hire professional bagpipe band in India for weddings, corporate events, school functions and government ceremonies. Royal Bagpipe Academy offers royal performances nationwide."
        />
        <link
          rel="canonical"
          href="https://royalbagpipeacademy.online/hire-bagpiper-india"
        />
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to hire a bagpipe band in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost typically starts from ₹15,000 and depends on location, performers and event type."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide bagpipe band services for weddings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in royal wedding entries and ceremonial performances across India."
      }
    }
  ]
}
`}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="bg-[#1A2B4C] text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hire Professional Bagpipe Band in India
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-slate-200 mb-8">
          Royal performances for weddings, corporate events, school annual
          functions and government ceremonies. Grand entry. Disciplined
          formation. Nationwide service.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+919817196061"
            className="bg-yellow-500 text-[#1A2B4C] px-8 py-3 rounded font-bold flex items-center justify-center gap-2"
          >
            <Phone size={18} /> Call Now
          </a>

          <a
            href="https://wa.me/919817196061"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-3 rounded font-bold flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> WhatsApp Now
          </a>
        </div>

        <p className="mt-6 text-yellow-400 font-semibold">
          Packages Starting From ₹15,000*
        </p>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-12 bg-slate-100 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            "500+ Events Performed",
            "Nationwide Service",
            "Professional Uniformed Performers",
            "Trusted by Schools & Corporates",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 "
            >
              <CheckCircle className="text-green-600" size={18} />
              <span className="font-medium text-royal-blue">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="training" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Bagpipe Band Services</h2>
          <p className="text-white-600">
            Professional performances for all prestigious events across India.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <ServiceCard image={weddingImg} title="Wedding Entry & Baraat" />
          <ServiceCard image={corporateImg} title="Corporate Events" />
          <ServiceCard
            image={marchingImg}
            title="School & Government Ceremonies"
          />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="testimonials" className="bg-[#1A2B4C] text-white py-16 text-center px-4">
        <p className="max-w-3xl mx-auto text-xl italic mb-6">
          "Royal Bagpipe Band transformed our wedding entrance into a grand
          royal experience. Highly disciplined and professional team."
        </p>
        <p className="font-semibold">— Event Client, India</p>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Make Your Event Grand & Royal
        </h2>

        <p className="text-white-600 mb-8">
          Limited dates available. Book your professional bagpipe band today.
        </p>

        <a
          href="#contact"
          className="bg-[#1A2B4C] text-white px-10 py-4 rounded font-bold"
        >
          Book Now
        </a>
      </section>
    </>
  );
}

/* SERVICE CARD COMPONENT */
function ServiceCard({ image, title }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#1A2B4C]">{title}</h3>
      </div>
    </div>
  );
}
