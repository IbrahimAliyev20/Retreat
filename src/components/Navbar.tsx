"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();

  const languages = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  const handleLanguageChange = (locale: string) => {
    const newUrl = `/${locale}${pathname}`;
    window.location.assign(newUrl);
  };

  useEffect(() => {
    if (moreOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [moreOpen]);

  const toggleMenu = () => {
    setMoreOpen(!moreOpen);
  };

  const navLinks = [
    { href: "/home", labelKey: "navigation.home" },
    { href: "/about", labelKey: "navigation.about" },
    { href: "/team", labelKey: "navigation.team" },
    { href: "/service", labelKey: "navigation.services" },
    { href: "/marafon", labelKey: "navigation.marathon" },
    { href: "/blog", labelKey: "navigation.blog" },
    { href: "/contact", labelKey: "navigation.contact" },
  ];

  return (
    <header className="py-4 px-6 bg-[#fff] shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#5c4c1e]">
          <Image
            src="/images/logo.png"
            alt="FitVibe You Logo"
            width={143}
            height={63}
            className="object-contain filter invert"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[#5b5b5b]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#2e826a] transition-colors text-lg font-semibold ${
                pathname === link.href ? "custom-color font-bold scale-105" : ""
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} asChild>
                  <Link
                    href={pathname}
                    locale={lang.code}
                    className="cursor-pointer"
                  >
                    {lang.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          className="md:hidden text-[#5c4c1e]"
          onClick={toggleMenu}
          aria-label={moreOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {moreOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            moreOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-50`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-[#5c4c1e]"
              aria-label="Menüyü kapat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`color-desc transition-colors text-lg font-semibold ${
                  pathname === link.href ? "custom-color font-bold" : ""
                }`}
                onClick={toggleMenu}
              >
                {t(link.labelKey)}
              </Link>
            ))}

            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex items-center space-x-4 px-2">
                <Globe className="h-5 w-5 text-gray-600" />
                <div className="flex space-x-4">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={pathname}
                      locale={lang.code}
                      onClick={toggleMenu}
                      className="text-[#323642] hover:text-[#2e826a] text-lg font-medium"
                    >
                      {lang.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
