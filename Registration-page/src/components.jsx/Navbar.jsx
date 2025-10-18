import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-blue-400 to-emerald-400 z-50">
      <header
        className="flex justify-between items-center
        text-black py-5 px-6 lg:px-20 bg-white shadow-md"
      >
        {/* Logo */}
        <a href="#" className="text-xl font-extrabold">
          NAVBAR
        </a>

        {/* Desktop + Tablet Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Home
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Products
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Explore
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Search Bar (Visible from md and up) */}
        <div className="hidden md:flex items-center gap-3 relative">
          <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 
            focus:bg-slate-100 focus:outline-sky-500 w-40 md:w-56 lg:w-64"
          />
        </div>

        {/* Menu Toggle (Visible on mobile & tablet) */}
        <i
          className={`bx ${
            isMenuOpen ? "bx-x" : "bx-menu"
          } lg:hidden text-4xl cursor-pointer`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </header>

      {/* Mobile + Tablet Dropdown Menu */}
      <div
        className={`lg:hidden flex flex-col items-center w-full bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          Home
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          Products
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          Explore
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          Contact
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
