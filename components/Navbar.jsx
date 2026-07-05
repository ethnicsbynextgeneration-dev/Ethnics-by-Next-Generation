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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-[#1a1c12]/60 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer — slides in from the right */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[80%] max-w-[360px] bg-[#f8ecd7] shadow-[-25px_0_60px_rgba(0,0,0,0.35)] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782417491/logo_z1i7tl.png"
              alt="Ethnics by Next Generation"
              className="h-10 w-auto object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="flex flex-col leading-none">
              <span
                className="text-[16px] uppercase tracking-[0.15em] font-semibold text-[#303326]"
                style={{ fontFamily: "EB Garamond, serif" }}
              >
                Ethnics
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase text-[#BA9460]">
                By Next Generation
              </span>
            </div>
          </Link>
          <button
            className="text-[#303326] hover:text-[#BA9460] transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="h-px mx-8 bg-gradient-to-r from-[#BA9460]/60 to-transparent" />

        {/* Nav links */}
        <nav className="flex flex-col px-8 pt-6">
          {navLinks.map(({ href, label }, i) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-4 py-4 border-b border-[#303326]/10"
              >
                <span
                  className="text-[11px] text-[#BA9460]/50"
                  style={{ fontFamily: "EB Garamond, serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-[27px] lowercase tracking-normal leading-none transition-all duration-300 ${
                    active ? "italic text-[#BA9460]" : "text-[#303326] group-hover:text-[#BA9460] group-hover:italic"
                  }`}
                  style={{ fontFamily: "EB Garamond, serif" }}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div className="mt-auto px-8 pb-10">
          <div className="h-px bg-gradient-to-r from-[#BA9460]/40 to-transparent mb-6" />
          <p className="text-[#303326]/60 text-[11px] uppercase tracking-widest">
            Kumbakonam, Tamil Nadu
          </p>
        </div>
      </div>
    </>
  );
}