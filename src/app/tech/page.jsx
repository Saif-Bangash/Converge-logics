"use client";
import { useState } from "react";
import Image from "next/image";
import { servicesData } from "../utils/fetcher";
import ServiceBlock from "../components/sections/ServiceBlock";


const Page = () => {
  const [activeTab, setActiveTab] = useState("tech");

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F9FFF4] to-white overflow-hidden mt-10 min-h-[50vh] md:min-h-[70vh]">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16">
          <div className="w-full md:w-1/2">
            <nav className="text-sm text-gray-500 mb-4">
              <a className="hover:underline" href="/" data-discover="true">
                Home
              </a>{" "}
              &gt;{" "}
              <span className="text-[#6B4EFF] font-medium">Technology</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Services
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              alt="Technology"
              className="w-72 md:w-100 rounded-2xl object-contain"
              src="https://media.istockphoto.com/id/2194185942/photo/3d-set-of-romantic-love-icons-for-valentines-day-or-wedding.jpg?s=2048x2048&w=is&k=20&c=dke2yEmirnLYTNwotaXqyErXSjhXOs87udc5AsGZJOQ="
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-10 px-4 lg:px-12 xl:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Services</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Tech built to scale. Marketing that converts. Finance strategies that maximize ROI—all under one roof.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-[#f9ffe8] rounded-full  shadow-md">
          {["tech", "marketing", "finance"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 
                ${activeTab === tab ? "bg-lime-400 text-black shadow" : "text-black hover:text-gray-700"}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto space-y-16">
        {servicesData[activeTab].map((service, index) => (
          <ServiceBlock key={index} {...service} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
    </main>
  );
};

export default Page;
