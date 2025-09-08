"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import navbarLogo from "../../../public/demo_logo.png";
import ThemeSwitcher from "../reusable-components/ThemeSwitcher";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../reusable-components/LanguageSwitcher";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Button from "../reusable-components/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/projects" },
  { name: "About Us", path: "/about-us" },
  { name: "Login", path: "/authentication/login" },
  { name: "Terms & Condition", path: "/terms-and-condition" },
];

export default function PublicNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if current path matches a nav link or is a subpath
  const isActiveLink = (linkPath: string) => {
    if (linkPath === "/") {
      return pathname === "/";
    }

    // For Projects - match /projects and /projects/project-details/*
    if (linkPath === "/projects") {
      return pathname === "/projects" || pathname.startsWith("/projects/project-details/");
    }

    // For Services - match /service and /service/service-details/*
    if (linkPath === "/service") {
      return pathname === "/service" || pathname.startsWith("/service/service-details/");
    }

    // For other links
    return pathname.startsWith(linkPath);
  };

  // Animation variants with proper TypeScript typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  const mobileItemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  // Helper function to get desktop link classes
  const getDesktopLinkClasses = (isActive: boolean) => {
    const baseClasses = "relative px-4 py-2 font-medium transition-all duration-300";
    
    if (isActive) {
      return `${baseClasses} ${(pathname === '/terms-and-condition' || pathname === '/contact' || pathname === '/cart' || pathname === '/wishlist') ? 'text-black dark:text-white' : `${isScrolled ? 'text-black dark:text-white' : 'text-white'}`}`;
    }
    
    return `${baseClasses} ${isScrolled 
      ? 'text-gray-700 dark:text-gray-300' 
      : `dark:text-white ${(pathname === '/terms-and-condition' || pathname === '/contact' || pathname === '/cart' || pathname === '/wishlist') ? 'text-black' : 'text-white'}`}`;
  };



  // Helper function to get mobile link classes
  const getMobileLinkClasses = (isActive: boolean) => {
    const baseClasses = "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300";
    
    return isActive
      ? `${baseClasses} bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500 dark:border-blue-400 shadow-sm`
      : `${baseClasses} text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 dark:bg-[#050117]/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800"
        : "bg-transparent border-b border-transparent"
        } `}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => router.push("/")}
          className="cursor-pointer flex-shrink-0 w-32 md:w-40"
        >
          <Image
            src={navbarLogo}
            alt="Logo"
            width={160}
            height={64}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center space-x-1"
        >
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.path);
            return (
              <motion.div
                key={link.path}
                variants={itemVariants}
                className="relative"
              >
                <Link
                  href={link.path}
                  className={getDesktopLinkClasses(isActive)}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${isScrolled 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500' 
                        : 'bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-300 dark:to-blue-400'}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        {/* Desktop Right Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden md:flex items-center space-x-4"
        >
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Button
            onClick={() => router.push("/contact")}
            className="bg-gradient-to-r hover:cursor-pointer from-cyan-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-md text-white font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Contact Us
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex lg:hidden items-center space-x-3"
        >
          <div className="hidden xs:flex items-center space-x-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transform transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={24} className="transform transition-transform duration-300" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col space-y-3 h-screen">
              {navLinks.map((link, index) => {
                const isActive = isActiveLink(link.path);
                return (
                  <motion.div
                    key={link.path}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={getMobileLinkClasses(isActive)}
                    >
                      {link.name}
                     
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={mobileItemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </motion.div>
              <div className="flex xs:hidden items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-800 mt-4">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}