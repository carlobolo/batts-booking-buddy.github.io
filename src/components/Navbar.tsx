
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/04409025-cff6-4b51-97d7-2be32af714b3.png" 
                alt="Batts Table Tennis Club" 
                className="h-12 w-auto" 
              />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about-section" onClick={scrollToAbout} className="text-gray-800 hover:text-blue-600 font-medium">
                  About
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="text-gray-800 hover:text-blue-600 font-medium">Admin</Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <a href="#about-section" onClick={(e) => { scrollToAbout(e); setIsOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600">
              About
            </a>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link to="/sessions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
