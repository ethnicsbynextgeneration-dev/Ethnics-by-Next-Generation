"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Order + content locked in with client:
// Sherwanis → Bandgalas → Blazers & Jackets → Kurta Sets → Accessories →
// Jodhpuri Suits → Reception Wear → Festive Ethnic Wear → Club Shirts →
// Club Trousers → Party Wear Shirts.
// Note: "Blazers & Jackets" keeps ethnic jackets only — standard blazers
// have moved to the pant-shirt categories (Club Shirts / Club Trousers / Party Wear Shirts).
const CATEGORIES = [
  {
    num: "01",
    slug: "sherwanis-indo-western",
    name: "Sherwanis & Indo-Western Wear",
    desc: "Heirloom pieces with intricate zardosi embroidery and structured silhouettes — made for moments that last a lifetime.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782420339/screen_rjf6nq.png",
  },
  {
    num: "02",
    slug: "bandgalas",
    name: "Bandgalas",
    desc: "Sharp, regal, and effortlessly commanding — the Bandgala is the ultimate symbol of refined Indian masculinity.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783270639/bandalgas_rkofjt.png", // UPDATE
  },
  {
    num: "03",
    slug: "blazers-jackets",
    name: "Blazers & Jackets",
    desc: "Ethnic jackets with traditional motifs and brocade details — for the modern gentleman who carries his culture with pride.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783146420/screen_blx7es.png",
  },
  {
    num: "04",
    slug: "kurta-sets",
    name: "Kurta Sets",
    desc: "Effortless elegance in premium linens and silks — perfect for festive occasions, receptions, and everything in between.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782422196/screen_id0vki.png",
  },
  {
    num: "05",
    slug: "accessories",
    name: "Accessories",
    desc: "The finishing touch — handcrafted mojaris, embroidered stoles, and signature pins that complete every look.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782420354/screen_uqh6ut.png",
  },
  {
    num: "06",
    slug: "jodhpuri-suits",
    name: "Jodhpuri Suits",
    desc: "Royal heritage tailored for the modern era — the Jodhpuri suit commands every room it walks into.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783270639/Jodhpuri_suits_flbw3f.png", // UPDATE
  },
  {
    num: "07",
    slug: "reception-wear",
    name: "Reception Wear",
    desc: "Refined, polished, and effortlessly chic — blending formality with flair for your most celebrated evening.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782421699/screen_xxpjer.png",
  },
  {
    num: "08",
    slug: "festive-ethnic-wear",
    name: "Festive Ethnic Wear",
    desc: "Vibrant, joyful, and steeped in culture — made to be worn and remembered at every family celebration.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783272596/screen_f3jtfl.png",
  },
  {
    num: "09",
    slug: "club-shirts",
    name: "Club Shirts",
    desc: "Premium fabric, relaxed silhouette — club shirts that turn heads without trying too hard.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145507/party_xolmig.png", // UPDATE
  },
  {
    num: "10",
    slug: "club-trousers",
    name: "Club Trousers",
    desc: "Tailored trousers built for the night — sharp cuts in rich fabrics that move with you.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783270639/club_trousers_bg7n7j.png", // UPDATE
  },
  {
    num: "11",
    slug: "party-wear-shirts",
    name: "Party Wear Shirts",
    desc: "Statement shirts for bold evenings — premium weaves, subtle textures, and confident cuts.",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783270639/party_wears_huo0bd.png",
  },
];

const TRUST_ITEMS = [
  {
    num: "01",
    title: "Premium Fabrics",
    desc: "Pure silks, fine linens & hand-embroidered textiles.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25l3.75 5.25L12 21.75 8.25 7.5 12 2.25z" />
    ),
  },
  {
    num: "02",
    title: "Handcrafted Detailing",
    desc: "Zardosi, zari & hand-block artistry in every piece.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    ),
  },
  {
    num: "03",
    title: "Personal Styling",
    desc: "One-on-one sessions to craft your perfect look.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    ),
  },
  {
    num: "04",
    title: "Exclusive Showroom",
    desc: "An unhurried, curated experience in Kumbakonam.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21M3 10.5v10.125c0 .621.504 1.125 1.125 1.125h15.75c.621 0 1.125-.504 1.125-1.125V10.5M12 2.25l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9l9-6.75z" />
    ),
  },
];

// Fade-in on scroll
function Reveal({ children, delay = 0, className = "", id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      id={id}
      className={`${className} transition-all duration-1000 ease-out`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        scrollMarginTop: "150px",
      }}
    >
      {children}
    </div>
  );
}

// Rotating swatch of deep brand tones — green, forest, charcoal — so
// repeated cards/boxes read as a considered fabric board, not one flat color.
const DEEP_TONES = ["bg-[#303326]", "bg-[#4A5C3A]", "bg-[#47493B]"];

function CollectionCard({ cat }) {
  return (
    <Link href="/contact" className="group block bg-[#f8ecd7]">
      {/* Image — full photo always visible, never cropped */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cat.img}
          alt={cat.name}
          className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-[1.4s]"
        />
      </div>
      {/* Name — shares the image's background so it reads as one attached unit */}
      <div className="pt-2 pb-6 text-center">
        <h3
          className="text-[24px] md:text-[26px] text-[#303326] group-hover:text-[#BA9460] transition-colors duration-300 leading-snug"
          style={{ fontFamily: "EB Garamond, serif" }}
        >
          {cat.name}
        </h3>
        <div className="w-8 h-px bg-[#BA9460]/50 mx-auto mt-3 group-hover:w-14 transition-all duration-500" />
      </div>
    </Link>
  );
}

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8ecd7]">

        {/* ═══ HERO BANNER ═══ */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782418556/screen_rldari.png"
            alt="Collections Banner"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ animation: "heroZoom 14s ease-in-out infinite alternate" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c12]/60 via-[#303326]/50 to-[#1a1c12]/80" />
          {/* Corner ornaments */}
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-[#BA9460]/35 to-transparent" />
          <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-[#BA9460]/35 to-transparent" />
          <div className="absolute inset-y-8 left-8 w-px bg-gradient-to-b from-transparent via-[#BA9460]/35 to-transparent" />
          <div className="absolute inset-y-8 right-8 w-px bg-gradient-to-b from-transparent via-[#BA9460]/35 to-transparent" />

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="h-px w-10 bg-[#BA9460]/60" />
              <span className="text-[#BA9460] text-[10px] uppercase tracking-[0.6em]" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                Handcrafted Elegance
              </span>
              <div className="h-px w-10 bg-[#BA9460]/60" />
            </div>
            <h1
              className="text-[56px] md:text-[88px] text-white leading-[0.95] mb-10 animate-fade-up"
              style={{ fontFamily: "EB Garamond, serif", animationDelay: "0.3s" }}
            >
              Our <em className="text-[#BA9460]">Collections</em>
            </h1>
            <p
              className="text-white/60 text-[16px] md:text-[18px] max-w-md mx-auto animate-fade-up"
              style={{ fontFamily: "EB Garamond, serif", animationDelay: "0.5s" }}
            >
              Eleven curated categories. One promise — perfection in every stitch.
            </p>
          </div>

          
          <style>{`
            @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.08); } }
            @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .animate-marquee { animation: marquee 46s linear infinite; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
        </section>

        {/* ═══ CATEGORY TICKER ═══ */}
        <div className="relative overflow-hidden border-y border-[#BA9460]/20 bg-[#47493B] py-5">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {[...CATEGORIES, ...CATEGORIES].map((c, i) => (
              <span
                key={`${c.slug}-${i}`}
                className="mx-8 flex items-center gap-8 text-[#fcf9ed]/50 text-[13px] uppercase tracking-[0.3em]"
                style={{ fontFamily: "Libre Caslon Text, serif" }}
              >
                {c.name}
                <span className="text-[#BA9460]">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ═══ ALL COLLECTIONS — uniform equal-size grid ═══ */}
        <div className="relative overflow-hidden px-6 md:px-10 pt-16 pb-20 bg-[#f8ecd7]">
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
            backgroundImage: "repeating-linear-gradient(45deg, #4A5C3A 0, #4A5C3A 1px, transparent 0, transparent 50%)",
            backgroundSize: "26px 26px",
          }} />
          <Reveal className="relative text-center mb-14">
            <span
              className="text-[#BA9460] text-[11px] uppercase tracking-[0.4em] block mb-4"
              style={{ fontFamily: "Libre Caslon Text, serif" }}
            >
              Browse All
            </span>
            <h2
              className="text-[34px] md:text-[42px] text-[#303326]"
              style={{ fontFamily: "EB Garamond, serif", letterSpacing: "0.08em" }}
            >
              The Complete Collection
            </h2>
            <div className="w-12 h-px bg-[#BA9460] mx-auto mt-5" />
          </Reveal>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.slug} id={cat.slug} delay={(i % 3) * 100}>
                <CollectionCard cat={cat} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* ═══ SECTION INTRO ═══ */}
        <Reveal className="py-20 px-6 text-center border-b border-[#BA9460]/15 bg-[#f1eee2]">
          <p
            className="text-[28px] md:text-[38px] italic text-[#303326] font-semibold max-w-3xl mx-auto"
            style={{ fontFamily: "EB Garamond, serif" }}
          >
            &ldquo;Every piece in our collection is a conversation between heritage and the modern wardrobe.&rdquo;
          </p>
        </Reveal>

        {/* ═══ TRUST STRIP ═══ */}
        <Reveal className="border-b border-[#BA9460]/15 bg-[#f8ecd7] py-20 px-6 md:px-10">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_ITEMS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 120}
                className={`group relative ${DEEP_TONES[i % DEEP_TONES.length]} border border-[#BA9460]/25 hover:border-[#BA9460]/60 text-center px-7 py-12 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(20,21,15,0.25)]`}
              >
                {/* Top accent bar reveal */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#BA9460] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 text-[#BA9460]/15 select-none pointer-events-none"
                  style={{ fontFamily: "EB Garamond, serif", fontSize: "40px", lineHeight: 1 }}
                >
                  {item.num}
                </span>

                {/* Icon in gold ring */}
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#BA9460]/40 flex items-center justify-center mb-7 group-hover:border-[#BA9460] group-hover:scale-110 transition-all duration-500">
                  <svg className="w-7 h-7 text-[#BA9460]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>

                <h4 className="text-[#f8ecd7] text-[21px] mb-4 leading-snug" style={{ fontFamily: "EB Garamond, serif" }}>
                  {item.title}
                </h4>
                <div className="w-8 h-px bg-[#BA9460]/50 mx-auto mb-5 group-hover:w-14 transition-all duration-500" />
                <p className="text-[#f8ecd7]/60 text-[15px] leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ═══ IN-STORE CTA ═══ */}
        <section className="relative py-24 text-center overflow-hidden bg-[#BA9460]">
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: "repeating-linear-gradient(45deg, #303326 0, #303326 1px, transparent 0, transparent 50%)",
            backgroundSize: "28px 28px",
          }} />
          <Reveal className="relative z-10 max-w-xl mx-auto px-6">
            <div className="flex items-center justify-center gap-5 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#303326]/30" />
              <span className="text-[#303326] text-[20px]">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#303326]/30" />
            </div>
            <p
              className="text-[26px] md:text-[34px] italic text-[#303326] leading-relaxed mb-10"
              style={{ fontFamily: "EB Garamond, serif" }}
            >
              &ldquo;Visit our showroom to explore the full range of bespoke designs.&rdquo;
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#303326] text-[#fcf9ed] text-[11px] py-4 px-14 uppercase tracking-widest hover:bg-[#47493B] transition-colors duration-400"
              style={{ fontFamily: "Libre Caslon Text, serif" }}
            >
              Get Directions
            </Link>
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
