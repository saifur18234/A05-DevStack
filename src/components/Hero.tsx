import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto my-[80px] px-4">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Hero Text - 7 columns */}
        <div className="col-span-12 md:col-span-7">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and build the perfect stack for your next
            project.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="brand-gradient text-white px-6 py-3 rounded-lg font-medium">
              Explore Technologies
            </button>

            <button className="border border-gray-300 px-8 py-3 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner - 5 columns */}
        <div className="col-span-12 md:col-span-5 flex justify-center">
          <img
            src={Banner}
            alt="Development Stack"
            className="w-72 md:w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
