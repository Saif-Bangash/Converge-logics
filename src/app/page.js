/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { content, data, other, steps, testimonials } from "./utils/fetcher";
import ByTheNumbers from "./components/sections/ByTheNumbers";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import OurWorkSection from "./components/sections/OurWorkSection";
import HowWeWorkSection from "./components/sections/HowWeWorkSection";
import WhyChooseUs from "./components/sections/WhyChooseUs"; 
import { whyChooseData } from "./utils/fetcher";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Tech");
  const [activeTabTech, setActiveTabTech] = useState("all");
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  return (
    <>
      {/* Add padding-top equal to header height (e.g., 80px) */}
      <div className="sm:pt-18">
        <section className="relative bg-[#f6f9e7] min-h-[75vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          {/* Floating icons - Left */}
          <div className="hidden sm:block absolute top-8 left-4 sm:left-10 animate-float">
            <img
              src="https://www.convergelogics.com/assets/herogroup2.svg"
              alt="Social"
              className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto"
            />
          </div>

          <div className="hidden sm:block absolute top-32 left-6 sm:left-10 animate-float">
            <img
              src="https://www.convergelogics.com/assets/grouphero2.svg"
              alt="Stats"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-8">
            Where Strategy <br />
            <span className="text-purple-600">Meets Simplicity</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mt-4 max-w-xs sm:max-w-md md:max-w-lg text-sm sm:text-base md:text-lg">
            Helping businesses grow with easy, smart solutions.
          </p>

          {/* Button */}
          <a
            href="/contact"
            className="mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-lime-300 rounded-full text-black font-semibold text-base sm:text-lg shadow-md hover:bg-lime-400 transition"
          >
            Get Started →
          </a>

          {/* Floating icons - Right */}
          <div className="hidden sm:block absolute top-4 right-4 sm:right-10 animate-float">
            <img
              src="https://www.convergelogics.com/assets/htmlhero.svg"
              alt="Social"
              className="w-20 sm:w-28 md:w-32 lg:w-36 h-auto"
            />
          </div>
          <div className="hidden sm:block absolute top-28 right-6 sm:right-12 lg:right-16 animate-float">
            <img
              src="https://www.convergelogics.com/assets/profitshero.svg"
              alt="Stats"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
            />
          </div>
          <div className="hidden sm:block absolute bottom-0 right-8 sm:right-20 animate-float">
            <img
              src="https://www.convergelogics.com/assets/revenuehero.svg"
              alt="Stats"
              className="w-28 sm:w-40 md:w-48 lg:w-56 h-auto"
            />
          </div>
        </section>
      </div>
      {/* Marquee Section */}
      <div className="w-full h-12 bg-gradient-to-r from-[#6B5DF6] to-[#24225E] overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-14 text-white font-bold text-2xl md:text-3xl">
          {["FINANCE", "TECH", "MARKETING"].map((item, index) => (
            <React.Fragment key={index}>
              <img
                alt="Star"
                className="inline-block w-8"
                src="https://www.convergelogics.com/assets/Star1banner.svg"
              />
              <span className="mx-2">{item}</span>
            </React.Fragment>
          ))}
          {/* Duplicate again for smooth looping */}
          {["FINANCE", "TECH", "MARKETING"].map((item, index) => (
            <React.Fragment key={index + 100}>
              <img
                alt="Star"
                className="inline-block w-8"
                src="https://www.convergelogics.com/assets/Star1banner.svg"
              />
              <span className="mx-2">{item}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center">
        {/* Mission Heading */}
        <div className="text-xl sm:text-2xl md:text-3xl text-fuchsia-500 font-semibold mb-6">
          Mission
        </div>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl gap-6">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="https://www.convergelogics.com/assets/missionsection.svg"
              alt="Our Mission"
              width={100}
              height={100}
              className="rounded-md"
              priority
            />
          </div>

          {/* Text */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-sans">
            At Converge Logics, we help startups, SMEs, and large enterprises
            across the USA grow through tech, marketing, and finance services,
            all in one place. We’re not just a digital marketing agency in the
            USA, we’re your partners in growth. Simple plans. Real results.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-transparent">
        <div className="relative rounded-3xl shadow-2xl max-w-7xl mx-auto overflow-hidden bg-gradient-to-b from-[#484c2c] via-black to-black">
          <div className="relative z-10 text-white px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20">
            {/* Heading */}
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
                What We Do Best
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                Tech for scaling businesses, marketing for conversion, and
                finance strategies for better ROI!
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center  sm:gap-2 mb-8 sm:mb-12 max-w-md mx-auto flex-wrap bg-[#484c2c] px-3 sm:px-4 py-2 rounded-full shadow-md">
              {["Tech", "Marketing", "Finance"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#C8F906] text-black"
                      : "bg-transparent text-white hover:bg-[#C8F906] hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dynamic Cards */}
            <div
              className={`grid gap-6 sm:gap-8 max-w-6xl mx-auto 
        ${
          activeTab === "Marketing"
            ? "grid-cols-1 md:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        }`}
            >
              {content[activeTab].map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#1A1A1A] rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 min-h-[14rem] sm:min-h-[16rem]
              ${
                activeTab === "Marketing" && (index === 0 || index === 3)
                  ? "md:col-span-2"
                  : ""
              }`}
                >
                  <h3 className="font-bold mb-2 text-lg sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-[#E4E4E4] text-sm sm:text-base md:text-md mb-4 sm:mb-5">
                    {item.desc}
                  </p>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={140}
                    height={140}
                    className="mt-auto max-w-[80%] sm:max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-10 sm:mt-14">
              <a href="/contact">
                <button className="bg-[#C8F906] text-black px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center justify-center mx-auto hover:scale-105 transition transform text-sm sm:text-base">
                  Book Consultation
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="ml-2 bg-black text-white rounded-full p-[2px] sm:p-1 text-xl sm:text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <HowWeWorkSection steps={steps} />
      <OurWorkSection data={data} />

      <WhyChooseUs
        title="Why Choose Us"
        description="We blend tech, marketing, and finance expertise to deliver tailored, ROI-driven solutions that fuel your business growth."
        items={whyChooseData}
        imageSrc="https://www.convergelogics.com/assets/whyus.svg"
      />
      {/* by the number resouse section  */}
      <ByTheNumbers />
      {/* end by the number resouse section  */}
      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
};

export default Page;
