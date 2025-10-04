import Image from "next/image";

export default function HowWeWorkSection({ steps }) {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-x-hidden">
      {/* Top Decorations */}
      <div className="flex justify-between items-center mb-6">
        <Image
          src="https://www.convergelogics.com/assets/servicesassets/left.svg"
          alt="Left Decoration"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src="https://www.convergelogics.com/assets/servicesassets/right.svg"
          alt="Right Decoration"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Heading + Description */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">How We Work With You</h2>
        <p className="text-gray-600 font-medium">
          Our Process: Aligning Cutting-Edge Tech, Data-Driven Marketing, and
          Smart Finance to Deliver Scalable, ROI-Focused Solutions for Your
          Business.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-purple-100 via-white to-purple-200 rounded-xl shadow-md pt-20 pb-8 px-6 flex flex-col items-center justify-start hover:shadow-xl transition-all duration-300 w-full max-w-sm h-[400px] mx-auto hover:-translate-y-2"
          >
            {/* Number Badge */}
            <div className="absolute -top-8 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
              <Image
                src={step.roundnumber}
                alt={`Step ${step.number}`}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>

            {/* Image */}
            <Image
              src={step.image}
              alt={step.title}
              width={96}
              height={96}
              className="mb-4 mt-6 w-24 h-24"
            />

            {/* Title & Description */}
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
