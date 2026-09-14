import Logo from "../assets/logo-text.png";
import {FiMenu} from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Menu */}
          <button className="md:hidden text-2xl">
            <FiMenu />
          </button>

          {/* Logo */}
          <img src={Logo} alt="Dev Stack" className="h-10" />

          {/* Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button>Sign In</button>
            <button className="brand-gradient text-white px-3 md:px-5 py-2 rounded-full text-sm md:text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
