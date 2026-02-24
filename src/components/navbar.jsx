import { Link } from "react-scroll";
import logo from "../assests/bagpipeLogo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#1A2B4C] text-white shadow-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-20 items-center">
        
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="material-icons-outlined text-royal-blue text-3xl">
              <img src={logo} alt="logo" height={100} className="logo-img" />
            </span>
          </div>
          <div>
            <h1 className="font-display text-xl tracking-wider gold-gradient-text">
              ROYAL BAGPIPE
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em]">
              Academy & Band India
            </p>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 items-center uppercase text-sm tracking-widest">
          <Link to="training" smooth duration={500} className="cursor-pointer hover:text-primary">
            Training
          </Link>
          <Link to="gallery" smooth duration={500} className="cursor-pointer hover:text-primary">
            Gallery
          </Link>
          <Link to="testimonials" smooth duration={500} className="cursor-pointer hover:text-primary">
            Reviews
          </Link>
          <Link to="contact" smooth duration={500} className="bg-[#d4af37] text-[#1A2B4C] px-6 py-2 rounded font-bold cursor-pointer">
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}