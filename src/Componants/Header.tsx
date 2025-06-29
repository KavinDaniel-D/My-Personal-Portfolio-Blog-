import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/images/logo/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navItems = ["HOME", "BLOG"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg border-b border-gray-800">
      <div className="flex items-center justify-between px-6 md:px-36 py-4">
        <img src={logo} alt="Logo" className="h-10" loading="lazy" />
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-white"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
        <nav className="hidden md:flex space-x-10 text-sm" role="navigation">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              end
              className={({ isActive }) =>
                `p-2 transition-colors duration-300 ${
                  isActive
                    ? "text-amber-500"
                    : "text-white hover:text-amber-500"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-end 
        transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-4 text-white"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>
        <nav
          className="flex flex-col items-end space-y-6 pr-10 pt-10 text-white"
          role="navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              end
              className={({ isActive }) =>
                `text-xl p-2 transition-all duration-300 ${
                  isActive ? "text-amber-500" : "hover:text-amber-500"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
