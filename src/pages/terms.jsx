import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Royal Bagpipe Band & Academy</title>
        <meta
          name="description"
          content="Read the terms and conditions for booking bagpipe band services and enrolling in training programs at Royal Bagpipe Band & Academy."
        />
      </Helmet>

      <section className="py-20 px-6 bg-white text-slate-700">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-[#1A2B4C]">
            Terms & Conditions
          </h1>

          <p className="mb-6">
            Welcome to Royal Bagpipe Band & Academy. By accessing our website and
            booking our services, you agree to comply with the following terms
            and conditions.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            1. Event Booking Policy
          </h2>
          <p className="mb-4">
            All bookings for bagpipe band performances must be confirmed in
            advance. Event dates are secured only after confirmation and
            required payment as agreed.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            2. Payment Terms
          </h2>
          <p className="mb-4">
            Payments must be completed as per agreed terms before the event
            date. Delayed payments may result in cancellation of services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            3. Cancellation Policy
          </h2>
          <p className="mb-4">
            Cancellation requests must be made in writing. Refund eligibility
            depends on notice period and service agreements.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            4. Training Enrollment
          </h2>
          <p className="mb-4">
            Students enrolling in training programs must follow academy rules,
            discipline standards, and attendance requirements.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All website content including text, images, and branding belongs to
            Royal Bagpipe Band & Academy and may not be reproduced without permission.
          </p>

        </div>
      </section>
    </>
  );
}