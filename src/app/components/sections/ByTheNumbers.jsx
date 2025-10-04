export default function ByTheNumbers() {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-20 bg-transparent">
      <div className="relative rounded-3xl shadow-2xl max-w-7xl mx-auto overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1e1630] to-[#000000] backdrop-blur-lg" />

        {/* Content */}
        <div className="relative z-10 text-white px-4 sm:px-8 md:px-16 py-16 md:py-20">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-6xl font-bold">By the Numbers</h2>
            <p className="text-[#E4E4E4] mt-4">
              Driving results that speak for themselves
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-6">
            {/* Image 1 */}
            <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden">
              <img
                alt="Team collaboration"
                className="w-full h-full object-cover"
                src="https://www.convergelogics.com/assets/statassets/statpic1.svg"
              />
            </div>

            {/* Stat 1 */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-[#DCFB60] to-[#829539] bg-clip-text text-transparent">
                90%
              </h3>
              <p className="mt-4 text-[#E4E4E4] text-md">
                Projects delivered on time, with 40% higher user engagement
                post-launch.
              </p>
            </div>

            {/* Big Image */}
            <div className="md:row-span-2 bg-[#1A1A1A] rounded-2xl overflow-hidden">
              <img
                alt="Team working together"
                className="w-full h-full object-cover"
                src="https://www.convergelogics.com/assets/statassets/statpic2.svg"
              />
            </div>

            {/* Stat 2 */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-[#DCFB60] to-[#829539] bg-clip-text text-transparent">
                3x
              </h3>
              <p className="mt-4 text-[#E4E4E4] text-md">
                Faster performance after our optimized builds.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-[#DCFB60] to-[#829539] bg-clip-text text-transparent">
                $2.3M
              </h3>
              <p className="mt-4 text-[#E4E4E4] text-md">
                Average client revenue uplift in the first 6 months post-launch.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-14">
            <a href="/contact">
              <button className="px-4 sm:px-6 py-3 bg-[#C8F906] text-black rounded-full font-semibold flex items-center justify-center hover:scale-105 transition transform">
                Schedule A Consultation
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="ml-2 bg-black text-white rounded-full p-1 text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </section>
  );
}
