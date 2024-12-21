import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS parameters
    const serviceId = "service_fq3cxgj";
    const templateId = "template_e5ecia3";
    const userId = "RuQddwM_2dmmfEPU0";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(
        (response) => {
          alert("Thank you for reaching out! We'll get back to you soon.");
          console.log("SUCCESS!", response.status, response.text);
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (err) => {
          alert("Oops! Something went wrong. Please try again later.");
          console.error("FAILED...", err);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#f5ebe0] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#6f4e37]">Get in Touch ☕</h2>
          <p className="mt-2 text-sm text-[#8b5e3c]">
            We'd love to hear from you! Drop us a message and we'll respond as soon as possible.
          </p>
        </div>
        <form
          className="bg-[#e0c8ac] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-[#6f4e37] mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#8b5e3c] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] bg-[#f8f3ec]"
              placeholder="Your Full Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-[#6f4e37] mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#8b5e3c] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] bg-[#f8f3ec]"
              placeholder="Your Email Address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-[#6f4e37] mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#8b5e3c] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] bg-[#f8f3ec] h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#6f4e37] text-white px-6 py-2 rounded-md hover:bg-[#8b5e3c] focus:outline-none focus:ring-2 focus:ring-[#6f4e37] ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
