import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on mobile
  };

  const linkClasses = (link) =>
    `block text-white ${
      activeLink === link ? "text-red-500" : "hover:text-red-500"
    }`;

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <img src={logo} className="h-8 md:h-14" alt="Logo" />
        </a>

        {/* Menu Button for Mobile */}
        <button
          className="md:hidden focus:outline-none text-white hover:text-red-500"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu Links (Hidden on mobile, visible on larger screens) */}
        <div className="hidden md:flex space-x-6 pr-6">
          <a
            href="/upcoming"
            className={linkClasses("movies")}
            onClick={() => handleLinkClick("movies")}
          >
            Upcoming
          </a>
          <a
            href="/top_rated"
            className={linkClasses("tv-shows")}
            onClick={() => handleLinkClick("tv-shows")}
          >
            Top Rated
          </a>
          <a
            href="/popular"
            className={linkClasses("popular")}
            onClick={() => handleLinkClick("popular")}
          >
            Popular
          </a>
          <a
            href="/about"
            className={linkClasses("about")}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <ul className="space-y-2 p-4">
            <li>
              <a
                href="#movies"
                className={linkClasses("movies")}
                onClick={() => handleLinkClick("movies")}
              >
                Top Rated
              </a>
            </li>
            <li>
              <a
                href="#tv-shows"
                className={linkClasses("tv-shows")}
                onClick={() => handleLinkClick("tv-shows")}
              >
                Upcoming
              </a>
            </li>
            <li>
              <a
                href="#popular"
                className={linkClasses("popular")}
                onClick={() => handleLinkClick("popular")}
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={linkClasses("about")}
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
