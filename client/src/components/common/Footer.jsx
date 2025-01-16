import React from "react";
import logo from "../../assets/images/logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo2 from "../../assets/images/logo21.png"

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
          {/* Brand Section */}
          <div className="flex-1 mb-6 sm:mb-0">
            <img src={logo2} width={200} height={200} alt="" />
            <p className="text-sm font-serif">Effortless Billing. Simplified Solutions.</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 mb-6 sm:mb-0 text-center lg:visible invisible">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-yellow-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="hover:underline hover:text-yellow-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-yellow-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:underline hover:text-yellow-400"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 text-right">
            <h4 className="text-md font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:support@hisabkitab.com"
                className="hover:underline hover:text-yellow-400"
              >
                support@hisabkitab.com
              </a>
            </p>
            <p className="text-sm">Phone: +91 8319737097</p>
            <p className="text-sm">
              Address: B006/00454 Mohali, Punjab, India
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-4"></div>

        {/* Social Links */}
        <ul className="text-center mb-4 flex flex-row gap-4 justify-center text-3xl">
          <li>
            <FaSquareFacebook />
          </li>
          <li>
            <FaSquareInstagram />
          </li>
          <li>
            <FaSquareTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>

        {/* Copyright Section */}
        <p className="text-center text-sm">
          &copy; 2025 HisabKitab. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
