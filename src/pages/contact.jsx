import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwzTPsYWeURuMB_ovdL3CsxaYdJ4MzL-SitOScldDIYCeY6aJyHkT6ale-5Ij6NVxLbug/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setSuccess(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 bg-royal-blue text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

        {/* Left Info Section */}
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
              <a href="tel:+919817196061" className="hover:text-primary underline">
                +91 981 719 6061
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={22} />
              <span>Dhuria.panky@gamil.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-primary" size={22} />
              <span>Haryana, India</span>
            </div>

          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white p-8 rounded-xl text-slate-900 shadow-xl">
          <h3 className="font-display text-2xl text-royal-blue mb-6">
            CONTACT US
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              type="text"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Full Name"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              required
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Mobile Number"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Message"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded flex justify-center items-center gap-2 transition font-semibold
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-royal-blue hover:bg-slate-800 text-white"
                }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Inquiry"
              )}
            </button>

            {/* Success Message */}
            {success && (
              <div className="text-green-600 text-sm mt-3">
                Inquiry submitted successfully!
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}