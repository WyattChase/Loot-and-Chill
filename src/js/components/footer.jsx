import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaTiktok, label: "TikTok", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-black text-[#ffd700] py-8">
      <div className="flex justify-center space-x-6 text-2xl">
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-[#ffd700] *:hover:text-white transition-colors duration-300"
          >
            <Icon />
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Loot & Chill. All rights reserved.
      </p>
      <div className="bg-[#1a1a1d] py-6">
        <p className="font-bold">Loot and Chill LLC</p>
        <p>Miami, FL</p>
        <p>888-5GO-CHIL</p>
        <p>
          <a
            href="mailto:info@lootandchill.com"
            className="underline hover:text-white transition"
          >
            info@lootandchill.com
          </a>
        </p>
      </div>
    </footer>
  );
}
