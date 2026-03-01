import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assests/bagpipeLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1A2B4C] shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-20 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="rounded-full flex items-center justify-center pt-2">
            <img
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="font-display text-xl tracking-wider gold-gradient-text">
              ROYAL BAGPIPE
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em]">
              Band & Academy India
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center uppercase text-sm tracking-widest">
          <Link
            to="training"
            smooth
            duration={500}
            className="cursor-pointer hover:text-primary"
          >
            What We Do?
          </Link>

          <Link
            to="gallery"
            smooth
            duration={500}
            className="cursor-pointer hover:text-primary"
          >
            Gallery
          </Link>

          <Link
            to="testimonials"
            smooth
            duration={500}
            className="cursor-pointer hover:text-primary"
          >
            Reviews
          </Link>

          <Link
            to="contact"
            smooth
            duration={500}
            className="bg-[#d4af37] text-[#1A2B4C] px-6 py-2 rounded font-bold cursor-pointer hover:scale-105 transition"
          >
            JOIN NOW
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center space-x-3 md:hidden">
          <Link
            to="contact"
            smooth
            duration={500}
            className="bg-[#d4af37] text-[#1A2B4C] px-4 py-2 rounded text-xs font-bold cursor-pointer hover:scale-105 transition"
          >
            JOIN NOW
          </Link>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1A2B4C] border-t border-primary/20 px-6 py-6 space-y-6 uppercase text-sm tracking-widest">
          <Link
            to="training"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-primary"
          >
            Training
          </Link>

          <Link
            to="gallery"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-primary"
          >
            Gallery
          </Link>

          <Link
            to="testimonials"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-primary"
          >
            Reviews
          </Link>
        </div>
      </div>
    </nav>
  );
}
