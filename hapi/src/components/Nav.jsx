import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="py-4 bg-black sm:py-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" title="" className="flex">
              <img
                className="w-auto h-9"
                src="Images/logo-light3-1.webp"
                alt="logo"
              />
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={toggleMenu}
              aria-expanded={expanded}
              aria-label="Toggle menu"
            >
              {expanded ? (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-10 lg:space-x-12">
                <CustomLink to="/" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Home </CustomLink>
                <CustomLink to="/about" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About </CustomLink>
                <CustomLink to="/pricing" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </CustomLink>
                <CustomLink to="/contact" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white" > Contact </CustomLink>
            </nav>

          {/* Account Login Button */}
            <div className="relative hidden md:justify-center md:items-center md:inline-flex group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                {/* not working */}
                <CustomLink to="/login" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full">
                  Account Login
                </CustomLink>
            </div>
        </div>

        {/* Mobile Navigation */}
            <nav className={`${ expanded ? 'block' : 'hidden' } md:hidden space-y-4 p-4 bg-black`} >
            <CustomLink to="/"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white block"> Home </CustomLink>
            <CustomLink to="/about" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white block"> About </CustomLink>
            <CustomLink to="/pricing" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white block"> Pricing </CustomLink>
            <CustomLink to="/contact" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white block" > Contact </CustomLink>
            <CustomLink to="/login" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white block" > Sign Up </CustomLink>
            <CustomLink to="/bookingform" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white block" > Apply Now </CustomLink>
            </nav>
        </div>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default Nav;
