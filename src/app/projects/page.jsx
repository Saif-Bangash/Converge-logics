import React from "react";
import Image from "next/image";
import Link from "next/link";
import OurWorkSection from "../components/sections/OurWorkSection";
import { data } from "../utils/fetcher";

const ProjectsPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-b from-[#F9FFF4] to-white overflow-hidden mt-10 min-h-[50vh] md:min-h-[70vh]">
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16">
          {/* Left Side */}
          <div className="w-full md:w-1/2">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              &gt;{" "}
              <span className="text-[#6B4EFF] font-medium">Project</span>
            </nav>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Project
            </h1>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="https://www.convergelogics.com/assets/images/project-herro.png"
              alt="Project Visual"
              width={400}
              height={400}
              className="w-72 md:w-96 rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

       {/* Our Work Section */}
      <OurWorkSection data={data} />
    </main>
  );
};

export default ProjectsPage;
