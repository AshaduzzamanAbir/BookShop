import { useEffect, useState } from "react";
// icons
import { PiSunBold } from "react-icons/pi";
import { HiOutlineMoon } from "react-icons/hi2";
import { TiShoppingCart } from "react-icons/ti";
import LoginModal from "./Login";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // Apply theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition duration-300 ease-in-out ${sticky ? "shadow-lg backdrop-blur-md bg-black/70 shadow-black/50" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
              Book<span className="text-yellow-500">Store</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
              <a
                href="/"
                className="hover:text-black transition cursor-pointer"
              >
                Home
              </a>
              <a
                href="/course"
                className="hover:text-black transition cursor-pointer"
              >
                Course
              </a>
              <a
                href="/contact"
                className="hover:text-black transition cursor-pointer"
              >
                Contact
              </a>
              <a className="hover:text-black transition cursor-pointer">
                Categories
              </a>
              <a className="hover:text-black transition cursor-pointer">
                About
              </a>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 text-white">
              {/* Search */}
              <input
                type="text"
                placeholder="Search books..."
                className="hidden md:block border rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />

              {/* Cart */}

              {/* Dark mode Button */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <HiOutlineMoon size={20} />
                ) : (
                  <PiSunBold size={20} />
                )}
              </button>

              <button className="relative cursor-pointer">
                <TiShoppingCart size={26} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </button>

              {/* Profile */}
              <img
                src="https://i.pravatar.cc/40"
                className="w-9 h-9 rounded-full"
              />

              <a
                onClick={() => setOpenLogin(true)}
                className="text-md border px-6 py-1 rounded-md hover:bg-black hover:text-white transition cursor-pointer"
              >
                login
              </a>

              {/* Mobile Button */}
              <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden flex flex-col space-y-3 py-4 text-gray-600">
              <a href="/" className="hover:text-black">
                Home
              </a>
              <a href="/contact" className="hover:text-black">
                Contact
              </a>
              <a href="/course" className="hover:text-black">
                Course
              </a>
              <a className="hover:text-black">Categories</a>
              <a className="hover:text-black">About</a>

              <input
                type="text"
                placeholder="Search books..."
                className="border rounded-full px-4 py-1 mt-2"
              />
            </div>
          )}
        </div>
      </nav>

      <LoginModal open={openLogin} setOpen={setOpenLogin} />
    </>
  );
};

export default Navbar;
