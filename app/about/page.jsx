"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8ecd7]">

        {/* ═══ HERO ═══ */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783852393/ABOUT_ORG_scsj6w.webp"
            alt="About Banner"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ animation: "heroZoom 12s ease-in-out infinite alternate" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c12]/75 via-[#303326]/65 to-[#1a1c12]/85" />

          {/* Ornament lines */}
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-[#BA9460]/40 to-transparent" />
          <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-[#BA9460]/40 to-transparent" />
          <div className="absolute inset-y-8 left-8 w-px bg-gradient-to-b from-transparent via-[#BA9460]/40 to-transparent" />
          <div className="absolute inset-y-8 right-8 w-px bg-gradient-to-b from-transparent via-[#BA9460]/40 to-transparent" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="h-px w-12 bg-[#BA9460]/60" />
              <span className="text-[#BA9460] text-[10px] uppercase tracking-[0.6em]" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                Our Story
              </span>
              <div className="h-px w-12 bg-[#BA9460]/60" />
            </div>
            <h1
              className="text-[56px] md:text-[90px] text-white leading-[0.95] mb-10 animate-fade-up"
              style={{ fontFamily: "EB Garamond, serif", animationDelay: "0.3s" }}
            >
              Crafted with
              <br />
              <em className="text-[#BA9460]">Purpose</em>
            </h1>
            <p
              className="text-white/60 text-[17px] md:text-[19px] leading-relaxed max-w-lg mx-auto animate-fade-up"
              style={{ fontFamily: "EB Garamond, serif", animationDelay: "0.5s" }}
            >
              Where timeless tradition meets the modern soul — one stitch at a time.
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

          <style>{`
            @keyframes heroZoom {
              from { transform: scale(1.05); }
              to   { transform: scale(1.12); }
            }
          `}</style>
        </section>

        {/* ═══ ORIGIN STORY — cream ═══ */}
        <FadeSection className="relative overflow-hidden py-20 md:py-24 px-6 md:px-16 bg-[#f8ecd7]">
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
            backgroundImage: "repeating-linear-gradient(45deg, #4A5C3A 0, #4A5C3A 1px, transparent 0, transparent 50%)",
            backgroundSize: "26px 26px",
          }} />
          <div className="relative max-w-[1000px] mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              {/* Left — label + big number */}
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <span className="text-[#303326] text-[10px] uppercase tracking-[0.5em] block mb-6" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                    Where It All Began
                  </span>
                  <span className="text-[120px] leading-none font-bold text-[#303326] block select-none" style={{ fontFamily: "EB Garamond, serif" }}>
                    01
                  </span>
                  <div className="w-12 h-px bg-[#BA9460]/50 mt-4" />
                </div>
              </div>
              {/* Right — text */}
              <div className="md:w-2/3">
                <h2 className="text-[40px] md:text-[54px] text-[#303326] mb-8 leading-[1.05]" style={{ fontFamily: "EB Garamond, serif" }}>
                  A Vision Born<br />from Heritage
                </h2>
                <p className="text-[18px] text-[#303326]/70 leading-loose mb-6" style={{ fontFamily: "EB Garamond, serif" }}>
                  Ethnics by Next Generation was born from a simple, profound belief — that every person deserves the dignity of a perfectly tailored outfit that honours their roots while celebrating their individuality.
                </p>
                <p className="text-[16px] text-[#303326]/50 leading-relaxed">
                  We saw a gap between mass-produced ethnic wear and unattainable luxury, and we set out to fill it — thoughtfully, beautifully, and without compromise.
                </p>
              </div>
            </div>
          </div>
        </FadeSection>

        {/* ═══ STATS — gold band ═══ */}
        <section className="bg-[#BA9460] py-14 px-6">
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#303326]/15">
            {[
              { value: 5000, suffix: "+", label: "Happy Clients" },
              { value: 12,  suffix: "+", label: "Years of Craft" },
              { value: 15,   suffix: "",  label: "Collections"   },
              { value: 100, suffix: "%", label: "Handcrafted"   },
            ].map((stat) => (
              <CountStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </section>

        {/* ═══ PHILOSOPHY — soft ivory ═══ */}
        <FadeSection className="py-20 md:py-24 px-6 md:px-16 bg-[#f1eee2]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-[#BA9460]/50" />
                <span className="text-[#BA9460] text-[10px] uppercase tracking-[0.5em]" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                  What Drives Us
                </span>
                <div className="h-px w-10 bg-[#BA9460]/50" />
              </div>
              <h2 className="text-[40px] md:text-[52px] text-[#303326]" style={{ fontFamily: "EB Garamond, serif", letterSpacing: "0.15em" }}>
                Our Philosophy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Rooted in Tradition",
                  body: "Every stitch carries centuries of craft. We draw from India's richest textile heritage — zardosi, zari, hand-block prints — and give them a contemporary soul.",
                },
                {
                  num: "02",
                  title: "Made for the Moment",
                  body: "Your wedding day, reception, sangeet, or engagement — each occasion has its own energy. We dress you to match it, perfectly.",
                },
                {
                  num: "03",
                  title: "Quality Without Compromise",
                  body: "Only the finest silks, pure linens, and hand-embroidered textiles enter our showroom. If it doesn't meet our standard, it doesn't reach you.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="group relative bg-[#303326] border border-[#BA9460]/25 hover:border-[#BA9460]/60 p-10 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(20,21,15,0.25)]"
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#BA9460] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="text-[64px] leading-none font-bold text-[#BA9460]/25 block mb-6 select-none" style={{ fontFamily: "EB Garamond, serif" }}>
                    {item.num}
                  </span>
                  <h3 className="text-[22px] text-[#f8ecd7] mb-4" style={{ fontFamily: "EB Garamond, serif" }}>{item.title}</h3>
                  <div className="w-8 h-px bg-[#BA9460]/60 mb-5 group-hover:w-16 transition-all duration-500" />
                  <p className="text-[14px] text-[#f8ecd7]/55 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* ═══ FOUNDERS — forest cards ═══ */}
        <FadeSection className="py-20 md:py-24 px-6 md:px-16 bg-[#f8ecd7]">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-[#BA9460]/50" />
                <span className="text-[#BA9460] text-[10px] uppercase tracking-[0.5em]" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                  The Founders
                </span>
                <div className="h-px w-10 bg-[#BA9460]/50" />
              </div>
              <h2 className="text-[40px] md:text-[52px] text-[#303326]" style={{ fontFamily: "EB Garamond, serif", letterSpacing: "0.12em" }}>
                The Minds Behind Ethnics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "V. Madhumitha",
                  role: "Co-Founder & Creative Director",
                  initial: "M",
                  quote: "Fashion is not about following trends — it is about telling your story through the clothes you wear. We make sure every outfit tells the right one.",
                  detail: "With a deep passion for textile art and couture, Madhumitha leads the creative vision of every collection — blending the richness of South Indian heritage with contemporary silhouettes.",
                },
                {
                  name: "G. Shanmugam",
                  role: "Co-Founder & Operations Lead",
                  initial: "S",
                  quote: "The beauty of what we do is in the details — the fit, the fabric, the finish. We obsess over all three so our clients never have to.",
                  detail: "Shanmugam brings structure, precision, and an unwavering commitment to quality — ensuring that every piece that leaves our showroom is nothing short of exceptional.",
                },
              ].map((f) => (
                <div
                  key={f.name}
                  className="relative group bg-[#4A5C3A] border border-[#BA9460]/25 hover:border-[#BA9460]/55 p-10 md:p-12 overflow-hidden transition-all duration-700 hover:shadow-[0_24px_60px_rgba(20,21,15,0.3)]"
                >
                  {/* Glow blob */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#BA9460]/15 blur-3xl group-hover:bg-[#BA9460]/25 transition-all duration-700" />

                  {/* Initial avatar */}
                  <div className="w-16 h-16 rounded-full border-2 border-[#BA9460]/50 flex items-center justify-center mb-8 group-hover:border-[#BA9460] transition-colors duration-500">
                    <span className="text-[28px] text-[#BA9460]" style={{ fontFamily: "EB Garamond, serif" }}>{f.initial}</span>
                  </div>

                  <span className="text-[#BA9460] text-[9px] uppercase tracking-[0.35em] block mb-3" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                    {f.role}
                  </span>
                  <h3 className="text-[30px] text-[#f8ecd7] mb-5" style={{ fontFamily: "EB Garamond, serif" }}>{f.name}</h3>
                  <div className="w-8 h-px bg-[#BA9460]/60 mb-6 group-hover:w-14 transition-all duration-500" />

                  <blockquote className="text-[18px] italic text-[#f8ecd7]/75 leading-relaxed mb-6" style={{ fontFamily: "EB Garamond, serif" }}>
                    &ldquo;{f.quote}&rdquo;
                  </blockquote>
                  <p className="text-[13px] text-[#f8ecd7]/45 leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* ═══ WHAT SETS US APART — ivory ═══ */}
        <FadeSection className="py-20 md:py-24 px-6 md:px-16 bg-[#f1eee2]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-[#BA9460]/50" />
                <span className="text-[#BA9460] text-[10px] uppercase tracking-[0.5em]" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                  Our Promise
                </span>
                <div className="h-px w-10 bg-[#BA9460]/50" />
              </div>
              <h2 className="text-[40px] md:text-[52px] text-[#303326]" style={{ fontFamily: "EB Garamond, serif", letterSpacing: "0.15em" }}>
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "01", title: "Exclusive Showroom",  desc: "A serene, curated space designed for an immersive, unhurried shopping experience in Kumbakonam." },
                { num: "02", title: "Occasion Curation",   desc: "Collections handpicked for weddings, receptions, sangeets, and every milestone in between." },
                { num: "03", title: "Premium Fabrics",     desc: "Pure silks, fine linens, and hand-embroidered textiles — sourced from India's finest weavers." },
                { num: "04", title: "Personal Styling",    desc: "One-on-one sessions with our in-house stylists to craft your perfect look from concept to fitting." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="group relative bg-[#47493B] border border-[#BA9460]/25 p-8 hover:border-[#BA9460]/55 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#BA9460]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-[#BA9460]/30 text-[40px] leading-none font-bold block mb-5 select-none" style={{ fontFamily: "EB Garamond, serif" }}>
                    {f.num}
                  </span>
                  <h4 className="text-[#f8ecd7] text-[19px] font-semibold mb-3 tracking-wide" style={{ fontFamily: "Libre Caslon Text, serif" }}>{f.title}</h4>
                  <div className="w-5 h-px bg-[#BA9460]/60 mb-4 group-hover:w-10 transition-all duration-500" />
                  <p className="text-[#f8ecd7] text-[15px] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* ═══ MANIFESTO — charcoal-to-forest statement band ═══ */}
        <FadeSection className="relative py-24 md:py-28 px-6 overflow-hidden bg-gradient-to-br from-[#47493B] to-[#4A5C3A]">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "repeating-linear-gradient(45deg, #BA9460 0, #BA9460 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px"
          }} />
          {/* Gold radial glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[300px] rounded-full bg-[#BA9460]/10 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#BA9460]/50" />
              <span className="text-[#BA9460] text-[24px]">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#BA9460]/50" />
            </div>

            <p
              className="text-[28px] md:text-[38px] italic text-[#fcf9ed]/90 leading-relaxed mb-12"
              style={{ fontFamily: "EB Garamond, serif" }}
            >
              &ldquo;We don&apos;t just dress people for occasions — we dress them for memories that last a lifetime.&rdquo;
            </p>

            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#BA9460]/50" />
              <span className="text-[#BA9460] text-[24px]">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#BA9460]/50" />
            </div>

            <p className="text-[#BA9460] text-[11px] uppercase tracking-[0.5em]" style={{ fontFamily: "Libre Caslon Text, serif" }}>
              V. Madhumitha &amp; G. Shanmugam — Founders
            </p>
          </div>
        </FadeSection>

        {/* ═══ CTA ═══ */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <span className="text-[#303326]/70 text-[10px] uppercase tracking-[0.5em] block mb-5" style={{ fontFamily: "Libre Caslon Text, serif" }}>
              Experience It Yourself
            </span>
            <h2
              className="text-[38px] md:text-[50px] text-[#303326] mb-10 leading-tight"
              style={{ fontFamily: "EB Garamond, serif", letterSpacing: "0.1em" }}
            >
              Come See Us In Person
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#303326] text-[#BA9460] text-[11px] px-10 py-4 uppercase tracking-widest hover:bg-[#47493B] transition-all duration-400"
                style={{ fontFamily: "Libre Caslon Text, serif" }}
              >
                Get Directions
              </Link>
              <a
                href="https://www.instagram.com/ethnicskmu/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#303326]/40 text-[#303326] text-[11px] px-10 py-4 uppercase tracking-widest hover:border-[#303326] transition-all"
                style={{ fontFamily: "Libre Caslon Text, serif" }}
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

/* ── Scroll-triggered fade-in ── */
function FadeSection({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </div>
  );
}

/* ── Animated count-up number ── */
function CountStat({ value, suffix, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const inc = value / (1800 / 16);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) { setCount(value); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [started, value]);
  return (
    <div ref={ref} className="flex flex-col items-center gap-3 py-8 px-4">
      <span className="text-[52px] md:text-[68px] text-[#303326] leading-none font-bold" style={{ fontFamily: "EB Garamond, serif" }}>
        {count}{suffix}
      </span>
      <span className="text-[#303326] text-[13px] uppercase tracking-[0.35em]" style={{ fontFamily: "Libre Caslon Text, serif" }}>
        {label}
      </span>
    </div>
  );
}
