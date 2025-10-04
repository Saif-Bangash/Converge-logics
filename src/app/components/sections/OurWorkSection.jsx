"use client";

import { useState } from "react";

export default function OurWorkSection({ data }) {
  const [activeTabTech, setActiveTabTech] = useState("all");

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-transparent">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-bold text-3xl mb-3">Our Work</h2>
        <p className="text-gray-600 font-medium">
          Aligning Cutting-Edge Tech, Data-Driven Marketing, and Smart Finance
          to Deliver Scalable, ROI-Focused Solutions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2  mb-8 flex-wrap">
        {["all", "tech", "marketing", "finance"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTabTech(tab)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              activeTabTech === tab
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-purple-100"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {data[activeTabTech].map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
