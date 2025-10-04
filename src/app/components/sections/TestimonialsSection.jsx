// src/components/TestimonialsSection.jsx
"use client";

import Image from "next/image";

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Don't just take our word for it – hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-xl shadow-md bg-purple-50 hover:shadow-lg transition"
            >
              <div className="text-yellow-500 mt-1">
                {"⭐".repeat(testimonial.rating)}
              </div>

              <p className="mt-2 text-gray-600">{testimonial.content}</p>
              <div className="flex items-center gap-2 pt-8 text-sm font-medium text-gray-900">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
