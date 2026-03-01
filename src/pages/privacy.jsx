import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Royal Bagpipe Band & Academy</title>
        <meta
          name="description"
          content="Read how Royal Bagpipe Band & Academy collects, uses, and protects your personal information."
        />
      </Helmet>

      <section className="py-20 px-6 bg-white text-slate-700">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-[#1A2B4C]">
            Privacy Policy
          </h1>

          <p className="mb-6">
            Royal Bagpipe Band & Academy respects your privacy and is committed to
            protecting your personal information.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect your name, phone number, email address, and event
            details when you submit inquiry forms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            2. How We Use Information
          </h2>
          <p className="mb-4">
            Information is used only for responding to inquiries, managing
            bookings, and providing training services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            3. Data Protection
          </h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal
            data from unauthorized access.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            4. Third-Party Services
          </h2>
          <p className="mb-4">
            We may use third-party services such as Google Analytics or payment
            providers. These services have their own privacy policies.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            5. Contact Information
          </h2>
          <p>
            For any privacy-related concerns, please contact Royal Bagpipe
            Academy through the contact details provided on our website.
          </p>

        </div>
      </section>
    </>
  );
}