import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 VALIDATION
  const validate = () => {
    let newErrors = {};

    // NAME
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // PHONE
    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    // EMAIL
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // EVENT
    if (!form.event) {
      newErrors.event = "Select event type";
    }

    // DATE (NO PAST DATE)
    if (!form.date) {
      newErrors.date = "Select date";
    } else {
      const today = new Date().toISOString().split("T")[0];
      if (form.date < today) {
        newErrors.date = "Date cannot be in the past";
      }
    }

    // MESSAGE
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔥 SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        event: "",
        date: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#581c87] text-white py-20 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Plan <br />
            <span className="text-yellow-400">Something Epic?</span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-md">
            Tell us about your event and we’ll get back within 24 hours.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-8 space-y-4">
            {["Location", "Phone", "Email", "Working Hours"].map((item, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl">
                <p className="text-xs text-gray-300 uppercase">{item}</p>
                <p className="font-medium">__________</p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-3xl p-6 md:p-8 text-black shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME + PHONE */}
            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>

              <div>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setForm({ ...form, phone: value });
                  }}
                  placeholder="Phone Number"
                  maxLength="10"
                  className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>

            </div>

            {/* EMAIL */}
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-pink-400"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* EVENT + DATE */}
            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <select
                  name="event"
                  value={form.event}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                >
                  <option value="">Select Event Type</option>
                  <option>Birthday Decoration</option>
                  <option>Baby Shower</option>
                  <option>Naming Ceremony</option>
                  <option>Engagement</option>
                  <option>Anniversary</option>
                  <option>Photography & Video</option>
                </select>
                {errors.event && <p className="text-red-500 text-xs">{errors.event}</p>}
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                />
                {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
              </div>

            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your event..."
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-pink-400"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition"
            >
              Send My Event Inquiry ✨
            </button>

          </form>

        </div>

      </div>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
          ✅ Thank you! We’ll contact you within 24 hours.
        </div>
      )}
    </section>
  );
}

export default Contact;