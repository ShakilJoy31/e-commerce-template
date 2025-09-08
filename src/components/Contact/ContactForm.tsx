// components/ContactForm.tsx
"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 text-black"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 text-black"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 text-black"
          />
          <textarea
            rows={5}
            placeholder="Messages"
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 text-black"
          ></textarea>

          <button className="px-6 py-3 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition">
            Submit Now
          </button>
        </div>

        {/* Support Contact Info */}
        <div className="border rounded-lg p-6 space-y-6">
          <h3 className="text-lg font-semibold">Support Contact</h3>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="text-green-700 w-6 h-6 mt-1" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm">
                Mobile : <span className="font-semibold">(+88) 872-670-780</span>
              </p>
              <p className="text-sm">
                Mobile : <span className="font-semibold">(+88) 422-655-793</span>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="text-green-700 w-6 h-6 mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm">Info@example.com</p>
              <p className="text-sm">Contact@example.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="text-green-700 w-6 h-6 mt-1" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm">
                Abbot Favicon Kinney, New York, USA - 25423
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
