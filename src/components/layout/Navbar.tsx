"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/50 backdrop-blur-sm"
      } transition-all duration-300`}
    >
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block bg-primary-500 text-white"
      >
        <div className="container py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <span className="mr-2">📞</span> (000) 000-2345
              </span>
              <span className="flex items-center">
                <span className="mr-2">✉️</span> info@solarfly.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/blog" className="hover:text-primary-100">
                Blog
              </Link>
              <Link href="/careers" className="hover:text-primary-100">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav className="container">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center"
          >
            <Link href="/" className="text-xl font-bold text-primary-600">
              Solarfly
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-primary-500 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-primary-500 hover:text-primary-600 hover:bg-primary-50"
            >
              Get Quote
            </Button>
            <Button className="bg-primary-500 hover:bg-primary-600 text-white">
              Contact Us
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-b shadow-lg"
      >
        <nav className="container py-4">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                className="block py-2 text-gray-600 hover:text-primary-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <Button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white">
            Free Consultation
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
