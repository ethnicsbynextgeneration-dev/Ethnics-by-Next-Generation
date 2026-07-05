"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/collections", label: "Collections" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // All pages have a full-height hero banner, so navbar is always transparent at top
  const hasHero = true;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-4 transition-all duration-500 border-b ${
          scrolled
            ? "bg-[#303326] border-[#BA9460]/10"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782417491/logo_z1i7tl.png"
            alt="Ethnics by Next Generation"
            className="h-12 w-auto object-contain"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-[20px] uppercase tracking-[0.15em] font-semibold transition-colors text-[#fcf9ed]"
              style={{ fontFamily: "EB Garamond, serif" }}
            >
              Ethnics
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase opacity-70 text-[#BA9460]">
              By Next Generation
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 text-[12px] uppercase tracking-[0.15em]">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  active
                    ? "text-[#BA9460] border-b border-[#BA9460] pb-1"
                    : "text-[#fcf9ed]/80 hover:text-[#BA9460]"
                }`}
                style={{ fontFamily: "Libre Caslon Text, serif" }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none transition-colors text-[#fcf9ed]"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#303326] flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-6 right-6 text-[#fcf9ed]"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[#fcf9ed] text-[18px] uppercase tracking-[0.25em] hover:text-[#BA9460] transition-colors"
              style={{ fontFamily: "Libre Caslon Text, serif" }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}