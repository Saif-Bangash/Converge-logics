"use client";
import Image from "next/image";

const ServiceBlock = ({ title, desc, features, image, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full max-w-md mx-auto"
        />
      </div>

      <div className="flex-1 text-left">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-500 mb-6">{desc}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <svg
                className="text-[#0E9E59]"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <a href="/contact">
          <button className="bg-[#C8F906] text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:scale-105 transition transform">
            Book Consultation
            <svg
              className="ml-2 bg-black text-white rounded-full p-1 text-2xl"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ServiceBlock;
