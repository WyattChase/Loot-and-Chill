import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-[#ffd700] py-8">
      <div className="flex justify-center space-x-6 text-2xl">
        <a
          href="#"
          className="hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
      <p className="mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Loot & Chill. All rights reserved.
      </p>
    </footer>
  );
}
