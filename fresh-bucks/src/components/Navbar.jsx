// src/components/NavBar.jsx
import { useState, useEffect } from 'react';
import { FaBars, FaCartPlus, FaUser, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex fixed top-0 left-0 w-full justify-between items-center px-6 md:px-10 py-0 z-[999999999] transition-all duration-300 ${
          isScrolled ? 'bg-[#3F7D58] text-white shadow-lg' : 'bg-transparent text-white'
        }`}
      >
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-20 md:h-24" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-16 text-lg font-medium">
          <li className="cursor-pointer hover:text-gray-300 transition">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="cursor-pointer hover:text-gray-300 transition">
            <Link to="/products">Products</Link>
          </li> */}
          <li className="cursor-pointer hover:text-gray-300 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <ul className="hidden md:flex gap-6 text-xl">
          <li className="cursor-pointer hover:text-gray-300 transition">
            <FaCartPlus />
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            <FaUser />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavBar;

// 💡 MobileMenu defined in same file
export const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-[#3F7D58] text-white z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>
      <ul className="flex flex-col gap-6 text-lg font-medium px-8">
        <li className="cursor-pointer">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/products" onClick={toggleMenu}>Products</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};
