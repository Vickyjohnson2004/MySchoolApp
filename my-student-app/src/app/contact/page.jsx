"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Have questions, feedback, or technical issues? We’d love to hear from
          you.
        </p>

        {submitted ? (
          <div className="text-green-600 text-center font-semibold">
            ✅ Thank you! We'll get back to you shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 bg-gray-50 p-6 rounded-lg shadow border border-gray-200"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                onChange={handleChange}
                value={formData.message}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
      {/*  another one */}
      <section className="bg-gray-100 py-3 mt-[10px] px-6">
        <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Support
            </h3>
            <p className="text-gray-600">Email us at:</p>
            <p className="text-indigo-600 font-medium">
              support@yourplatform.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Campus Office
            </h3>
            <p className="text-gray-600">
              Department of Student Affairs <br />
              University Main Campus, Admin Building <br />
              City, Country
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
