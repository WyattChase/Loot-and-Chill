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
    <footer
      id="contact"
      className="bg-[#1a1a1d] py-10 text-[#ffd700] text-center"
    >
      {/* Social Links */}
      <div className="flex justify-center space-x-6 text-2xl mb-4">
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

      {/* Contact Info */}
      <div className="space-y-2 mb-6">
        <p className="font-bold">Loot and Chill LLC</p>
        <p>Miami, FL</p>
        <p>📞 888-5GO-CHIL</p>
        <p>
          <a
            href="mailto:info@lootandchill.com"
            className="underline hover:text-white"
          >
            info@lootandchill.com
          </a>
        </p>
      </div>
      {/* Copyright */}
      <div className="text-sm text-[#ffd700]/70">
        <p>
          &copy; {new Date().getFullYear()} Loot & Chill. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
