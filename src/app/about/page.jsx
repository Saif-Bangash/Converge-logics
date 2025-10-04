import Image from "next/image";
import { stand, steps, testimonials } from "../utils/fetcher";
import ByTheNumbers from "../components/sections/ByTheNumbers";
import HowWeWorkSection from "../components/sections/HowWeWorkSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import TestimonialsSection from "../components/sections/TestimonialsSection";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <main className="min-h-screen  bg-gray-50 px-6 pt-18  py-16">
      {/* Hero Section */}
      <section className="relative md:px-18 py-20 px-6  overflow-hidden">
        {/* Decorative Background SVG */}
        <Image
          src="https://www.convergelogics.com/assets/icons/Path.svg"
          alt="Decorative Shape"
          width={400}
          height={400}
          className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5 scale-125 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
          {/* Left Side - Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <span className="uppercase tracking-wider text-gray-500 text-sm font-semibold">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              About <span className="text-[#6E4BDC]">Converge Logics</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a passionate team of designers, developers, and marketers
              dedicated to crafting exceptional digital experiences that truly
              drive results for our clients. We believe in blending creativity
              with technology to deliver world-class solutions.
            </p>
            <button className="bg-[#6E4BDC] text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Right Side - Premium Image Layout */}
          <div className="relative flex justify-center md:justify-end">
            {/* Large Image */}
            <div className="relative">
              <Image
                src="https://www.convergelogics.com/assets/images/portrait-professional.png"
                alt="Converge Logics"
                width={260}
                height={260}
                className="rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
              />
              {/* Decorative Small SVG in Corner */}
              <Image
                src="https://www.convergelogics.com/assets/icons/Path.svg"
                alt="Decorative"
                width={80}
                height={80}
                className="absolute -top-6 -left-6 opacity-20 rotate-12"
              />
            </div>

            {/* Second Image (Overlap) */}
            <Image
              src="https://www.convergelogics.com/assets/images/portrait-professional2.png"
              alt="Converge Logics Team"
              width={180}
              height={180}
              className="rounded-3xl shadow-2xl border-4 border-white absolute bottom-0 -right-10 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section className="mt-20 md:px-18 mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stand.map((value, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-purple-100 via-white to-purple-300 p-12 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300
        flex flex-col justify-center text-center border border-gray-100
        ${
          index === 1
            ? "scale-95 bg-gradient-to-br from-purple-100 via-white to-purple-300"
            : ""
        }`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* resuable components */}
      <ByTheNumbers />
      <HowWeWorkSection steps={steps} />

      <WhyChooseUs
        title={"Why Choose Converge Logics?"}
        description={
          "Discover the Converge Logics Advantage: Your Partner in Innovative, Results-Driven Digital Solutions."
        }
        imageSrc={"https://www.convergelogics.com/assets/whyus.svg"}
      />
      <TestimonialsSection testimonials={testimonials} />
    </main>
  );
}
