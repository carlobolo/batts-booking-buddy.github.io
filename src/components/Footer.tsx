
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; cbj-uk-design 2025</p>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-bold mb-2">Quick Links</h3>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="https://battsharlow.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white">
                  Batts table tennis club
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white">
                  Contact us
                </Link>
              </li>
              <li>
                <a href="/#about-section" onClick={scrollToAbout} className="text-sm hover:text-white">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
