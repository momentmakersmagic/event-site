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

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 🔥 RESET DATE IF GENERAL INQUIRY
    if (name === "event" && value === "General Inquiry") {
      setForm({ ...form, event: value, date: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.event) newErrors.event = "Select event type";

    // 🔥 DATE VALIDATION
    if (form.event !== "General Inquiry") {
      if (!form.date) {
        newErrors.date = "Select date";
      } else {
        const today = new Date().toISOString().split("T")[0];
        if (form.date < today) {
          newErrors.date = "Past dates are not allowed";
        }
      }
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const message = `
Hello The Moment Makers,

Glad to connect with you 😊

Here are my details:

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Event: ${form.event}
${form.event !== "General Inquiry" ? `Date: ${form.date}` : ""}

Message:
${form.message}
      `;

      const encodedMessage = encodeURIComponent(message);

      const whatsappURL = `https://wa.me/916366047276?text=${encodedMessage}`;
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=momentmakersmagic@gmail.com&su=Event Inquiry&body=${encodedMessage}`;

      const choice = window.confirm(
        "Send via WhatsApp (OK) or Email (Cancel)"
      );

      if (choice) {
        window.open(whatsappURL, "_blank");
      } else {
        window.open(gmailURL, "_blank");
      }

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
      className="bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#581c87] text-white py-16 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Plan <br />
            <span className="text-yellow-400">Something Epic?</span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-md">
            Tell us about your event and we’ll help you plan something amazing.
          </p>

          <div className="mt-8 space-y-4">

            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-xs uppercase text-gray-300">Location</p>
              <p>Bangalore, India</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-xs uppercase text-gray-300">Phone</p>
              <a href="tel:6366047276" className="hover:text-pink-300">
                +91 63660 47276
              </a>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-xs uppercase text-gray-300">Email</p>
              <a
                href="mailto:momentmakersmagic@gmail.com"
                className="hover:text-pink-300 break-all"
              >
                momentmakersmagic@gmail.com
              </a>
            </div>

            <div className="bg-white/10 p-4 rounded-xl text-center">
              <a
                href="https://www.instagram.com/themomentmakers_01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 px-4 py-2 rounded-full text-sm"
              >
                📸 Instagram
              </a>
            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-black p-6 md:p-8 rounded-3xl shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid md:grid-cols-2 gap-4">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border p-3 rounded-lg w-full"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
                }
                placeholder="Phone Number"
                maxLength="10"
                className="border p-3 rounded-lg w-full"
              />

            </div>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full"
            />

            {/* 🔥 EVENT */}
            <select
              name="event"
              value={form.event}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            >
              <option value="">Select Event Type</option>
              <option>General Inquiry</option>
              <option>Birthday Decoration</option>
              <option>Baby Shower</option>
              <option>Naming Ceremony</option>
              <option>Engagement</option>
              <option>Anniversary</option>
              <option>Photography & Video</option>
            </select>

            {/* 🔥 DATE */}
            {form.event !== "General Inquiry" && (
              <>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="border p-3 rounded-lg w-full"
                />
                <p className="text-xs text-gray-500">
                  Select event date (DD/MM/YYYY)
                </p>
              </>
            )}

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your event..."
              rows="4"
              className="border p-3 rounded-lg w-full"
            ></textarea>

            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold">
              Send My Event Inquiry ✨
            </button>

            <p className="text-xs text-gray-500 text-center">
              You’ll be redirected to WhatsApp or Email
            </p>

          </form>

        </div>

      </div>

      {success && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
          ✅ Ready! Please complete sending in WhatsApp/Email
        </div>
      )}
    </section>
  );
}

export default Contact;