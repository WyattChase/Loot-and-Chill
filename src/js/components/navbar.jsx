import { useState, useEffect } from "react";
import { GiGoblinHead } from "react-icons/gi";
import logo from "../../assests/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2c003e]/80 backdrop-blur-md text-[#ffd700]">
      {/* Top Bar with Contact Info */}
      {/* <div className="w-full bg-[#1a1a1d] text-[#ffd700] text-xs sm:text-sm py-3 px-4 text-center sm:flex sm:justify-between sm:items-center z-50">
        <span className="block font-semibold">
          Loot and Chill LLC • Miami, FL
        </span>
        <span className="block">
          📞 888-5GO-CHIL • ✉️{" "}
          <a
            href="mailto:info@lootandchill.com"
            className="underline hover:text-white"
          >
            info@lootandchill.com
          </a>
        </span>
      </div> */}

      <div className="max-w-7xl mx-auto px-3 py-1 flex items-center justify-between">
        {/* Logo + Name */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Loot and Chill Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold font-roguelike">Loot & Chill</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`group relative transition-colors duration-300 ease-in-out text-[#ffd700] drop-shadow-[0_0_2px_#ffd700] hover:drop-shadow-[0_0_8px_#ffd700] hover:text-white hover:animate-pulse ${
                  activeSection === item.href.slice(1)
                    ? "text-white underline-animation"
                    : "hover:underline-animation"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#ffd700] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <GiGoblinHead className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_#ffd700] hover:animate-pulse text-[#ffd700]" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#2c003e] text-lg font-semibold">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="py-2 w-full text-center border-b border-[#ffd700]/20"
            >
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group relative transition-colors duration-300 ease-in-out text-[#ffd700] drop-shadow-[0_0_2px_#ffd700] hover:drop-shadow-[0_0_8px_#ffd700] hover:text-white hover:animate-pulse ${
                  activeSection === item.href.slice(1)
                    ? "text-white underline-animation"
                    : "hover:underline-animation"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
