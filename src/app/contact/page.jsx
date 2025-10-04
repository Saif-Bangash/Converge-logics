"use client";
 
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 md:px-12 lg:px-20 py-16 mt-12">
       <div className="w-full md:w-1/2">
        {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Contact US
            </h2>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mt-4 px-6">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              &gt;{" "}
              <span className="text-[#6B4EFF] font-medium">Contact</span>
            </nav>
          </div>
      <div className="grid md:grid-cols-2 gap-12 items-center shadow-xl p-2 sm:p-8 rounded-2xl bg-white">
        
        {/* Left Side Image */}
        <div className="flex justify-center">
          <Image
            src="https://www.convergelogics.com/assets/contactus.svg" // apna image daalo /public me
            alt="Contact Us"
            width={500}
            height={500}
            className="rounded-2xl object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-2xl shadow-lg sm:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have a question, feedback, or partnership idea? Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
