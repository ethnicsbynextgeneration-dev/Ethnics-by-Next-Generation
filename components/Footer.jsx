import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#303326] text-[#fcf9ed] py-20 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span
                className="text-[28px] uppercase tracking-[0.15em] font-semibold"
                style={{ fontFamily: "EB Garamond, serif" }}
              >
                Ethnics
              </span>
              <span className="text-[10px] tracking-[0.3em] opacity-70 uppercase pt-1 text-[#BA9460]">
                By Next Generation
              </span>
            </div>
            <p className="text-[#fcf9ed]/50 text-sm leading-relaxed">
              Redefining tradition through modern boutique luxury.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5
              className="text-[11px] uppercase tracking-widest text-[#BA9460] mb-6"
              style={{ fontFamily: "Libre Caslon Text, serif" }}
            >
              Navigation
            </h5>
            <ul className="space-y-3 text-sm text-[#fcf9ed]/60">
              {[
                { href: "/", label: "Home" },
                { href: "/collections", label: "Collections" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#BA9460] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h5
              className="text-[11px] uppercase tracking-widest text-[#BA9460] mb-6"
              style={{ fontFamily: "Libre Caslon Text, serif" }}
            >
              Visit Us
            </h5>
            <p className="text-[#fcf9ed]/60 text-sm leading-relaxed">
              First Floor, No 35, 4P,<br />
              Nageswaran Sannathi St,<br />
              Gandhi Adigal Salai,<br />
              Kumbakonam, Tamil Nadu 612001
            </p>
          </div>

          {/* Newsletter */}
          
        </div>

        <div className="border-t border-[#fcf9ed]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#fcf9ed]/30 text-[10px] uppercase tracking-widest">
          <span>© 2026 Ethnics by Next Generation. Handcrafted Heritage.</span>
          <span>Designed for the Modern Traditionalist</span>
        </div>
      </div>
    </footer>
  );
}
