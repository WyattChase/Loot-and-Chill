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
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61575887275831",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/loot_chill/",
    },
    { icon: FaTwitter, label: "Twitter", href: "https://x.com/LootAndChill" },
    {
      icon: FaTiktok,
      label: "TikTok",
      href: "https://www.tiktok.com/@lootandchill?lang=en",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      href: "https://www.youtube.com/@Loot_Chill",
    },
  ];

  return (
    <footer id="contact" className="bg-[#1a1a1d] text-[#ffd700] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-center md:text-left">
        {/* Social Links */}
        <div className="pt-5">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
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
        </div>

        {/* Contact Info Box */}
        <div className="bg-[#2c003e] text-center rounded-xl p-6 border border-[#ffd700]/30 shadow-md">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="mb-1 font-semibold">Loot and Chill LLC</p>
          <p className="mb-1">Miami, FL</p>
          <a href="tel:+18885462445" className="mb-1">
            📞 888-5GO-CHIL
          </a>
          <p>
            ✉️{" "}
            <a
              href="mailto:info@lootandchill.com"
              className="underline hover:text-white"
            >
              info@lootandchill.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm text-[#ffd700]/70 text-center mt-8">
        &copy; {new Date().getFullYear()} Loot & Chill. All Rights Reserved.
      </div>
    </footer>
  );
}
