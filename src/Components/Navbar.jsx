import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`navbar flex justify-between items-center py-2 px-4 lg:px-8 h-auto font-[cambria] font-bold ${isOpen ? 'bg-white h-full' : 'bg-transparent'} text-black ${isOpen ? 'flex-col' : 'block'} ${isOpen ? '' : 'h-[20px] lg:h-auto'}`}>

      <ul
        className={`flex items-center space-x-6 lg:space-x-8 ${isOpen ? 'flex-col space-y-4' : 'hidden lg:flex'}`}>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/services">WE OFFER</Link>
        </li>
        <li>
          <Link to="/why">WHY US</Link>
        </li>
        <li>
          <Link to="/chances">GET YOUR CHANCES</Link>
        </li>
        <li>
          <Link to="/testimonials">TESTIMONIALS</Link>
        </li>
      </ul>

      {/* Contact Info and Button */}
      <div className="flex items-center">
        <a href="tel:+2349077565788" className="hidden lg:block mr-6">
          +2349077565788
        </a>
        <button className="hidden lg:block px-4 py-2 rounded-[25px] bg-orange-500">
          ORDER NOW
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden ml-6 cursor-pointer absolute right-8 top-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <GrClose size={20} /> : <MdMenu size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
