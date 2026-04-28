import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white pt-22 pb-14">
      <div className=" max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6 order-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Your Next
            <span className="text-yellow-400"> Favorite Book</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">
            Explore thousands of books across fiction, business, tech, and
            self-growth. Read anytime, anywhere, and build your personal
            library.
          </p>

          <div>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border w-[60%] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold ml-2 hover:bg-yellow-300 transition cursor-pointer">
              Search
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4 text-sm text-gray-300">
            <div>
              <p className="text-white text-xl font-bold">10K+</p>
              Books
            </div>
            <div>
              <p className="text-white text-xl font-bold">5K+</p>
              Readers
            </div>
            <div>
              <p className="text-white text-xl font-bold">1K+</p>
              Authors
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:order-2">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Books"
            className="w-[350px] md:w-[420px] rounded-2xl shadow-2xl hover:scale-105  cursor-pointer duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
