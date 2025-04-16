import React, { useState } from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="bg-bg-color">
      <div className="flex justify-between items-center w-[90%] m-auto pt-4 pb-4 sm:w-[80%]">
        <div>
          <img src="/logo-light.svg" alt="Logo" className="h-8 md:h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-primary font-hind">
          <ul className="flex gap-6 lg:gap-10">
            <li>
              <Link to="/" className="hover:text-secondary transition">হোম</Link>
            </li>
            <li>
              <Link to="/Courch-page" className="hover:text-secondary transition">কোর্সে'স</Link>
            </li>
            <li>
              <Link to="/mentor" className="hover:text-secondary transition">মেন্টর</Link>
            </li>
            <li>
              <Link to="/Fucher" className="hover:text-secondary transition">ফিচার'স</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block text-black border-green-700 px-3 py-2 rounded-md bg-secondary hover:bg-opacity-90 transition">
          <Link to="/Signup-page">Sign in</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg-color pb-4">
          <nav className="flex flex-col items-center text-primary font-hind">
            <ul className="flex flex-col gap-4 w-full text-center">
              <li>
                <Link to="/" className="block py-2 hover:bg-green-700" onClick={toggleMenu}>হোম</Link>
              </li>
              <li>
                <Link to="/Courch-page" className="block py-2 hover:bg-green-700" onClick={toggleMenu}>কোর্সে'স</Link>
              </li>
              <li>
                <Link to="/mentor" className="block py-2 hover:bg-green-700" onClick={toggleMenu}>মেন্টর</Link>
              </li>
              <li>
                <Link to="/Fucher" className="block py-2 hover:bg-green-700" onClick={toggleMenu}>ফিচার'স</Link>
              </li>
              <li>
                <Link to="/Signup-page" className="text-black border-green-700 px-3 py-2 rounded-md bg-secondary w-32 mx-auto">
                  Sign in
                </Link >
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
};

export default Navbar;