"use client";

import { whyChooseUs } from "@/app/utils/fetcher";
import Image from "next/image";

export default function WhyChooseUs({ title, description, items, imageSrc }) {
  return (
    <section className="max-w-6xl mx-auto py-10">
      {/* Top Decorations */}
      <div className="flex justify-between items-center mb-6">
        <Image
          src="https://www.convergelogics.com/assets/servicesassets/right.svg"
          alt="Left Decoration"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src="https://www.convergelogics.com/assets/servicesassets/left.svg"
          alt="Right Decoration"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      <div>
        {/* Heading + Description */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 font-medium">{description}</p>
        </div>

        {/* 3-Column Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 items-center sm:justify-items-center md:justify-items-center lg:justify-items-stretch mx-auto px-6 py-12">
          {/* Left Column */}
          <div className="flex flex-col gap-10 text-center lg:text-left">
            {whyChooseUs.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start gap-2"
              >
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Center Illustration */}
          <div className="flex items-center justify-center">
            <div className="bg-purple-100 rounded-full p-10 shadow-lg">
              <Image src={imageSrc} alt="Illustration" width={280} height={280} />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 text-center lg:text-left">
            {whyChooseUs.slice(3).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start gap-2"
              >
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
