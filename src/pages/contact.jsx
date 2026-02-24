import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwzTPsYWeURuMB_ovdL3CsxaYdJ4MzL-SitOScldDIYCeY6aJyHkT6ale-5Ij6NVxLbug/exec',
        {
          method: "POST",
          body: JSON.stringify(form),
        },
      );

      alert("Inquiry Submitted Successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong", error);
    }
  };

  return (
    <section className="py-24 bg-royal-blue text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display gold-gradient-text text-4xl mb-6">
            CONNECT WITH THE ACADEMY
          </h2>
          <p className="text-slate-300 mb-6">
            Have questions about our training programs or want to book the band
            for an upcoming royal event? Our team is ready to assist you.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={22} />
              <a href="tel:+919817196061" className="hover:text-primary">
                <span className="underline">+91 981 719 6061</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={22} />
              <span>info@royalbagpipeacademy.in</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-primary" size={22} />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl text-slate-900">
          <h3 className="font-display text-2xl text-royal-blue mb-6">
            Inquiry Form
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              type="text"
              className="w-full border p-3 rounded"
              placeholder="Full Name"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              required
              className="w-full border p-3 rounded"
              placeholder="Mobile Number"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full border p-3 rounded"
              placeholder="Email"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded"
              rows="4"
              placeholder="Your Message"
            />
            <button
              type="submit"
              className="w-full bg-royal-blue text-white py-3 rounded"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
