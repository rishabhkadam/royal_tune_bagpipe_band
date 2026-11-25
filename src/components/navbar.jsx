import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const followSection = (id) => (event) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      event.preventDefault();
      navigate(`/#${id}`);
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  };

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
      <div className=" mx-auto px-4 flex justify-between h-20 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="rounded-full flex items-center justify-center pt-2">
            <img
              src="/hero512.png"
              alt="Royal Bagpipe Band and Academy logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-display text-xl tracking-wider gold-gradient-text">
              ROYAL BAGPIPE
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em]">
              Band & Academy India
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center uppercase text-sm tracking-widest">
          <a
            href="/training"
            className="cursor-pointer hover:text-primary"
          >
            What We Do?
          </a>

          <a
            href="/#gallery"
            onClick={followSection("gallery")}
            className="cursor-pointer hover:text-primary"
          >
            Gallery
          </a>

          <a
            href="/#testimonials"
            onClick={followSection("testimonials")}
            className="cursor-pointer hover:text-primary"
          >
            Reviews
          </a>

          <a
            href="/#faq"
            onClick={followSection("faq")}
            className="cursor-pointer hover:text-primary"
          >
            FAQ
          </a>

          <a
            href="/#contact"
            onClick={followSection("contact")}
            className="bg-[#d4af37] text-[#1A2B4C] px-6 py-2 rounded font-bold cursor-pointer hover:scale-105 transition"
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center space-x-3 md:hidden">
          <a
            href="/#contact"
            onClick={followSection("contact")}
            className="bg-[#d4af37] text-[#1A2B4C] px-2 py-2 rounded text-xs font-bold cursor-pointer hover:scale-105 transition text-center flex"
          >
            JOIN NOW
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Menu */}
      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1A2B4C] border-t border-primary/20 px-6 py-6 space-y-6 uppercase text-sm tracking-widest">
          <a
            href="/training"
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-primary"
          >
            What We Do?
          </a>

          <a
            href="/#gallery"
            onClick={followSection("gallery")}
            className="block cursor-pointer hover:text-primary"
          >
            Gallery
          </a>

          <a
            href="/#testimonials"
            onClick={followSection("testimonials")}
            className="block cursor-pointer hover:text-primary"
          >
            Reviews
          </a>

          <a
            href="/#faq"
            onClick={followSection("faq")}
            className="block cursor-pointer hover:text-primary"
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
}
