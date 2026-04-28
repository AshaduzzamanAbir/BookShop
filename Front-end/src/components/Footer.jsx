import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Book<span className="text-yellow-500">Store</span>
          </h2>
          <p className="mt-4 text-sm leading-6">
            Discover thousands of books across all categories. Read, learn, and
            grow every day with our collection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Fiction</li>
            <li className="hover:text-white cursor-pointer">Business</li>
            <li className="hover:text-white cursor-pointer">Technology</li>
            <li className="hover:text-white cursor-pointer">Self Growth</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-3">Get updates about new books & offers.</p>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />

            <button className="bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-300 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BookStore. All rights reserved build by
        ashaduzzaman abir.
      </div>
    </footer>
  );
};

export default Footer;
