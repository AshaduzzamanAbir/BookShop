import React from "react";

const CourseBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-18">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 pt-34">
        {/* Left Content */}
        <div className="flex-1 ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade
            <br /> Your Skills <br />
            With Modern Courses
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Learn React, Next.js, Backend, and more from industry experts. Start
            your journey today and level up your career.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
              Explore Courses
            </button>

            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Courses"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseBanner;
