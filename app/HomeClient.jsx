"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const RAW_REELS = [
  { href: "https://www.instagram.com/p/DJYhJ00znBw/", src: "https://res.cloudinary.com/dkkbpfmb5/video/upload/v1781806144/WhatsApp_Video_2026-06-09_at_1.31.59_PM_g3ja5p.mp4" },
  { href: "https://www.instagram.com/p/DJYhJ00znBw/", src: "https://res.cloudinary.com/dkkbpfmb5/video/upload/v1783147423/Over_All_Reel_eahao4.mp4" },
  { href: "https://www.instagram.com/p/DJYhJ00znBw/", src: "https://res.cloudinary.com/dkkbpfmb5/video/upload/v1783147421/ethnic_14-may_idx4mu.mp4" },
  { href: "https://www.instagram.com/p/DJYhJ00znBw/", src: "https://res.cloudinary.com/dkkbpfmb5/video/upload/v1783147440/shirt_1_final_kdzcv0.mp4" },
  { href: "https://www.instagram.com/p/DJYhJ00znBw/", src: "https://res.cloudinary.com/dkkbpfmb5/video/upload/v1783147424/Ethnics_3_y6pjqx.mp4" },
];

function withPoster(reel) {
  if (reel.poster) return reel;
  const poster = reel.src
    .replace("/video/upload/", "/video/upload/so_6/")
    .replace(/\.mp4(\?.*)?$/, ".jpg$1");
  return { ...reel, poster };
}

const reels = RAW_REELS.map(withPoster);

const TESTIMONIALS = [
  { id: "1", img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145510/t2_vmpqhn.png",     quote: "The sherwani fit perfectly and the fabric quality exceeded everything we'd seen elsewhere in the city.", name: "Arjun & Priya",  occasion: "Wedding Reception" },
  { id: "2", img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145291/screen_vyn6zp.png", quote: "From the first fitting to the final delivery, the team made sure every detail was exactly right.",          name: "Karthik Raja", occasion: "Engagement" },
  { id: "3", img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145512/t4_ooyjcr.png",     quote: "Beautiful craftsmanship and the most comfortable kurta I've worn for a full-day event.",                 name: "Vikram Iyer",  occasion: "Sangeet" },
  { id: "4", img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145509/t3_ket9ca.png",     quote: "Loved how the team understood exactly what we wanted and brought it to life beautifully.",               name: "Sanjay Menon", occasion: "Wedding" },
];

const OCCASIONS = [
  { label: "Wedding",                 img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783146384/screen_jdjbgp.png" },
  { label: "Reception",               img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783146420/screen_blx7es.png" },
  { label: "Engagement",              img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783146473/screen_o2q5pm.png" },
  { label: "Sangeet",                 img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783146536/screen_qdxmri.png" },
  { label: "Haldi",                   img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783144786/screen_miktlx.png" },
  { label: "Party Wear",              img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145101/screen_q6xaxy.png" },
  { label: "Club Wear",               img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145507/party_xolmig.png" },
  { label: "Pre Wedding Photoshoots", img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145291/screen_vyn6zp.png" },
];

// Shared occasion card — used by both the mobile grid and the sm+ carousel
function OccasionCard({ item }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#303326]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.img}
          alt={item.label}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        {/* Gold border on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#BA9460]/70 transition-all duration-500 m-2 pointer-events-none" />
        {/* Label */}
        <div className="absolute bottom-0 left-0 w-full px-3 py-5 md:px-4 md:py-6 text-center">
          <h3
            className="text-white text-[12px] md:text-[15px] uppercase tracking-[0.2em] md:tracking-[0.25em] leading-snug"
            style={{ fontFamily: "Libre Caslon Text, serif" }}
          >
            {item.label}
          </h3>
          <div className="w-6 h-px bg-[#BA9460] mx-auto mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </div>
      </div>
    </div>
  );
}

// Cards visible at once for the sm+ carousel, keyed by breakpoint.
const OCCASION_BREAKPOINTS = [
  { minWidth: 1024, visible: 4, cardW: 23, gap: 1 },
  { minWidth: 0,    visible: 2, cardW: 47, gap: 2 },
];

function useOccasionSliderConfig() {
  const [config, setConfig] = useState(OCCASION_BREAKPOINTS[0]);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setConfig(OCCASION_BREAKPOINTS.find((bp) => w >= bp.minWidth));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return config;
}

// ─────────────────────────────────────────────
// OCCASION CAROUSEL — rectangular cards, prev/next arrows (tablet & desktop)
// ─────────────────────────────────────────────
function OccasionCarousel() {
  const { visible: VISIBLE, cardW: CARD_W, gap: GAP } = useOccasionSliderConfig();
  const [current, setCurrent] = useState(0);
  const total = OCCASIONS.length;
  const maxIndex = Math.max(total - VISIBLE, 0);

  useEffect(() => { setCurrent((c) => Math.min(c, maxIndex)); }, [maxIndex]);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <div className="relative w-full px-6 md:px-16 max-w-[1400px] mx-auto">
      {/* Prev arrow */}
      <button
        onClick={prev}
        disabled={current === 0}
        aria-label="Previous"
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-[#BA9460]/50 bg-[#fcf9ed] flex items-center justify-center shadow-lg hover:bg-[#BA9460] hover:border-[#BA9460] transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none group"
      >
        <svg className="w-5 h-5 text-[#303326] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Track */}
      <div className="overflow-hidden mx-8 md:mx-10">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            gap: `${GAP}%`,
            transform: `translateX(calc(-${current * (CARD_W + GAP)}%))`,
          }}
        >
          {OCCASIONS.map((item, i) => (
            <div key={i} className="flex-none" style={{ width: `${CARD_W}%` }}>
              <OccasionCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Next arrow */}
      <button
        onClick={next}
        disabled={current >= maxIndex}
        aria-label="Next"
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-[#BA9460]/50 bg-[#fcf9ed] flex items-center justify-center shadow-lg hover:bg-[#BA9460] hover:border-[#BA9460] transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none group"
      >
        <svg className="w-5 h-5 text-[#303326] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-[#BA9460]" : "w-2 h-2 bg-[#BA9460]/30 hover:bg-[#BA9460]/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SHOP THE OCCASION — static 2-col grid on mobile, carousel from sm up
// ─────────────────────────────────────────────
function OccasionSlider() {
  return (
    <>
      <div className="sm:hidden px-6">
        <div className="grid grid-cols-2 gap-3 max-w-[520px] mx-auto">
          {OCCASIONS.map((item) => (
            <OccasionCard key={item.label} item={item} />
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        <OccasionCarousel />
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// TESTIMONIAL SLIDER — arched photo + quote, dark theme
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// TESTIMONIAL SLIDER — arched photo + quote, dark theme — BIGGER
// Drop-in replacement: paste this function into HomeClient.jsx
// ─────────────────────────────────────────────
// ── Replace the entire TestimonialSlider function in HomeClient.jsx ──
// ── Replace the entire TestimonialSlider function in HomeClient.jsx ──
// ── Replace the entire TestimonialSlider function in HomeClient.jsx ──
function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = back
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef(null);
  const total = TESTIMONIALS.length;

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setDir(1);
      setActive((s) => (s + 1) % total);
    }, 5500);
  }, [total]);

  useEffect(() => { startAuto(); return () => clearInterval(autoRef.current); }, [startAuto]);

  const goTo = (i) => {
    if (animating) return;
    const d = i > active ? 1 : -1;
    setDir(d);
    setAnimating(true);
    setActive((i + total) % total);
    setTimeout(() => setAnimating(false), 600);
    startAuto();
  };

  const t = TESTIMONIALS[active];

  return (
    <div className="relative w-full">
      {/* Full-width single card */}
      <div
        key={active}
        className="relative flex flex-col md:flex-row items-stretch overflow-hidden border border-[#BA9460]/20 w-full md:min-h-[480px]"
        style={{
          background: "#2a2d1e",
          animation: "testimonialFade 0.5s ease",
        }}
      >
        {/* Damask-style background pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at 15% 50%, rgba(186,148,96,0.06) 0%, transparent 60%),
                              radial-gradient(ellipse at 85% 50%, rgba(186,148,96,0.04) 0%, transparent 60%)`,
          }}
        />
        {/* Subtle corner ornaments */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#BA9460]/25 pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-[#BA9460]/25 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-[#BA9460]/25 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#BA9460]/25 pointer-events-none" />

        {/* ── ARCH PHOTO — full width row on mobile, ~35% column on desktop ── */}
        <div
          className="relative flex-shrink-0 self-stretch flex items-end justify-center w-full md:w-[35%] h-64 sm:h-80 md:h-auto pt-6 px-8 md:pl-8 md:pr-0"
        >
          {/* Arch container with padding inside card */}
          <div
            className="relative w-full h-full overflow-hidden"
            style={{ borderRadius: "999px 999px 0 0" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.img}
              alt={t.name}
              className="w-full h-full object-cover object-top"
              style={{ display: "block" }}
            />
            {/* Subtle inner shadow at arch edges */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 2px rgba(186,148,96,0.45)",
                borderRadius: "999px 999px 0 0",
              }}
            />
          </div>
        </div>

        {/* ── QUOTE — right side ── */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 py-10 md:py-16 flex-1 relative z-10">
          {/* Large decorative quote mark */}
          <span
            className="text-[#BA9460] block mb-4"
            style={{
              fontFamily: "EB Garamond, serif",
              fontSize: "clamp(56px, 10vw, 100px)",
              lineHeight: "0.6",
              opacity: 0.35,
            }}
          >
            &ldquo;
          </span>

          <p
            className="italic text-[#fcf9ed]/85 leading-relaxed mb-10"
            style={{
              fontFamily: "EB Garamond, serif",
              fontSize: "clamp(18px, 1.6vw, 24px)",
              maxWidth: "560px",
            }}
          >
            {t.quote}
          </p>

          <div className="w-10 h-px bg-[#BA9460]/50 mb-5" />

          <p
            className="text-[#fcf9ed] uppercase tracking-[0.25em] font-semibold"
            style={{ fontFamily: "Libre Caslon Text, serif", fontSize: "13px" }}
          >
            {t.name}
          </p>
          <p
            className="text-[#BA9460] tracking-widest mt-2 uppercase"
            style={{ fontFamily: "Libre Caslon Text, serif", fontSize: "11px" }}
          >
            {t.occasion}
          </p>
        </div>
      </div>

      {/* Navigation — arrows far left/right, dots centred below */}
      <div className="flex items-center justify-between mt-8 px-2">
        <button
          onClick={() => goTo(active - 1)}
          aria-label="Previous"
          className="flex items-center gap-2 text-[#303326]/50 hover:text-[#BA9460] transition-colors group"
        >
          <svg className="w-8 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 32 16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M30 8H2M8 2L2 8l6 6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all rounded-full ${
                i === active ? "w-6 h-2 bg-[#BA9460]" : "w-2 h-2 bg-[#BA9460]/30 hover:bg-[#BA9460]/60"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(active + 1)}
          aria-label="Next"
          className="flex items-center gap-2 text-[#303326]/50 hover:text-[#BA9460] transition-colors"
        >
          <svg className="w-8 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 32 16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 8h28M24 2l6 6-6 6" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes testimonialFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────
// REEL PLAYER
// ─────────────────────────────────────────────
function ReelPlayer({ reels }) {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const progressBarRef = useRef(null);
  const hideTimer = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) { v.play().then(() => setPlaying(true)).catch(() => {}); }
        else { v.pause(); setPlaying(false); }
      },
      { threshold: 0.35 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, [index]);

  useEffect(() => { const v = videoRef.current; if (v) v.muted = muted; }, [muted]);
  useEffect(() => { setProgress(0); setCurrentTime(0); setDuration(0); setShowControls(true); }, [index]);
  useEffect(() => () => { if (hideTimer.current) clearTimeout(hideTimer.current); }, []);

  const revealControls = () => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      const v = videoRef.current;
      if (v && !v.paused) setShowControls(false);
    }, 2500);
  };

  const formatTime = (s) => {
    if (!isFinite(s) || isNaN(s)) return "0:00";
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
    setCurrentTime(v.currentTime);
  };

  const handleLoadedMetadata = () => { const v = videoRef.current; if (v) setDuration(v.duration); };

  const togglePlay = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
    revealControls();
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const bar = progressBarRef.current;
    const v = videoRef.current;
    if (!bar || !v || !v.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = ratio * v.duration;
    setProgress(ratio * 100);
    setCurrentTime(v.currentTime);
    revealControls();
  };

  const goTo = (i) => { setIndex(i); setProgress(0); setPlaying(false); };
  const advance = () => goTo((index - 1 + reels.length) % reels.length);

  const SIZE_BY_DISTANCE = {
    0: { w: "min(280px, 54vw)", h: "min(560px, 86vw)", mb: 0 },
    1: { w: "min(180px, 34vw)", h: "min(360px, 56vw)", mb: 30 },
    2: { w: "min(125px, 24vw)", h: "min(250px, 40vw)", mb: 54 },
  };

  return (
    <div ref={sectionRef} className="flex flex-col items-center gap-10">
      <div className="flex items-end justify-center gap-3 md:gap-5 w-full px-4" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {reels.map((reel, i) => {
          const total = reels.length;
          const diff = (i - index + total) % total;
          const pos = diff <= total / 2 ? diff : diff - total;
          if (Math.abs(pos) > 2) return null;
          const isCenter = pos === 0;
          const distance = Math.abs(pos);
          const size = SIZE_BY_DISTANCE[distance];
          return (
            <div key={i} onClick={() => !isCenter && goTo(i)}
              className="relative overflow-hidden flex-none transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                width: size.w, height: size.h, order: pos, marginBottom: size.mb,
                borderRadius: "30px",
                border: isCenter ? "3px solid rgba(186,148,96,0.35)" : "2px solid rgba(252,249,237,0.15)",
                cursor: isCenter ? "default" : "pointer",
                boxShadow: isCenter ? "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(186,148,96,0.25)" : "0 12px 30px rgba(0,0,0,0.35)",
                opacity: isCenter ? 1 : 0.88,
              }}
            >
              {isCenter ? (
                <video ref={videoRef} key={index} src={reel.src} poster={reel.poster} muted={muted} playsInline
                  onEnded={advance} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
                  onClick={togglePlay} onMouseMove={revealControls}
                  className="w-full h-full object-cover cursor-pointer" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={reel.poster} alt="" className="w-full h-full object-cover" loading="lazy" />
              )}
              {!isCenter && <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-1/3 h-2.5 bg-black/70 rounded-full z-20" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              {!isCenter && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white/80 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              )}
              {isCenter && (
                <>
                  <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-3 py-2.5 bg-gradient-to-b from-black/60 to-transparent transition-opacity duration-300"
                    style={{ opacity: showControls ? 1 : 0, pointerEvents: showControls ? "auto" : "none" }}>
                    <a href={reel.href} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                      className="text-white/80 text-[10px] tracking-wide truncate max-w-[120px] hover:text-[#BA9460] transition-colors"
                      style={{ fontFamily: "Libre Caslon Text, serif" }}>View on Instagram...</a>
                    <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                      <button onClick={() => { setMuted(!muted); revealControls(); }}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 active:scale-90 transition-all"
                        aria-label={muted ? "Unmute" : "Mute"}>
                        {muted ? (
                          <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27l4.73 4.73H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z" /></svg>
                        ) : (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                        )}
                      </button>
                      <a href={reel.href} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 active:scale-90 transition-all" aria-label="Open on Instagram">
                        <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-300"
                    style={{ opacity: playing && !showControls ? 0 : 1 }}>
                    <button onClick={togglePlay}
                      className="w-14 h-14 rounded-full bg-black/35 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/50 hover:scale-105 active:scale-95 transition-all pointer-events-auto"
                      aria-label={playing ? "Pause" : "Play"}>
                      {playing
                        ? <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                        : <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
                    </button>
                  </div>
                  <div className="absolute bottom-[44px] left-3 right-3 z-30 transition-opacity duration-300"
                    style={{ opacity: showControls ? 1 : 0, pointerEvents: showControls ? "auto" : "none" }}>
                    <div ref={progressBarRef} onClick={handleSeek} className="group relative w-full h-3 flex items-center cursor-pointer">
                      <div className="w-full h-[3px] bg-white/25 rounded-full overflow-hidden">
                        <div className="h-full bg-[#BA9460] rounded-full" style={{ width: `${progress}%`, transition: "width 0.15s linear" }} />
                      </div>
                      <div className="absolute w-3 h-3 rounded-full bg-[#BA9460] shadow-md scale-0 group-hover:scale-100 transition-transform"
                        style={{ left: `calc(${progress}% - 6px)` }} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center gap-2.5 px-3 pb-4 pt-2 transition-opacity duration-300"
                    style={{ opacity: showControls ? 1 : 0, pointerEvents: showControls ? "auto" : "none" }}>
                    <button onClick={togglePlay}
                      className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 active:scale-90 transition-all"
                      aria-label={playing ? "Pause" : "Play"}>
                      {playing
                        ? <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                        : <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
                    </button>
                    <span className="text-white/75 text-[10px] tracking-wide tabular-nums" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-2">
        {reels.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${i === index ? "w-6 h-2 bg-[#BA9460]" : "w-2 h-2 bg-[#fcf9ed]/25 hover:bg-[#fcf9ed]/50"}`}
            aria-label={`Reel ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN HOME CLIENT
// ─────────────────────────────────────────────
export default function HomeClient() {
  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782928981/ChatGPT_Image_Jul_1_2026_11_32_21_PM_zg8n9y.png"
          alt="Ethnics by Next Generation Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "heroZoom 14s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c12]/60 via-[#303326]/50 to-[#1a1c12]/80" />
        <div className="absolute inset-x-6 md:inset-x-12 top-6 md:top-10 h-px bg-gradient-to-r from-transparent via-[#BA9460]/35 to-transparent" />
        <div className="absolute inset-x-6 md:inset-x-12 bottom-6 md:bottom-10 h-px bg-gradient-to-r from-transparent via-[#BA9460]/35 to-transparent" />
        <div className="absolute inset-y-6 md:inset-y-10 left-6 md:left-12 w-px bg-gradient-to-b from-transparent via-[#BA9460]/35 to-transparent" />
        <div className="absolute inset-y-6 md:inset-y-10 right-6 md:right-12 w-px bg-gradient-to-b from-transparent via-[#BA9460]/35 to-transparent" />

        <div className="relative z-20 text-center max-w-4xl px-6 md:px-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-px w-10 bg-[#BA9460]/60" />
            <span className="text-[#BA9460] text-[10px] md:text-[11px] uppercase tracking-[0.5em]"
              style={{ fontFamily: "Libre Caslon Text, serif" }}>Exclusive Wedding Collections</span>
            <div className="h-px w-10 bg-[#BA9460]/60" />
          </div>
          <h1 className="text-[42px] md:text-[80px] text-[#fcf9ed] mb-8 md:mb-10 leading-[1.0] animate-fade-up"
            style={{ fontFamily: "EB Garamond, serif", animationDelay: "0.35s" }}>
            Tradition,{" "}<em className="text-[#BA9460] italic">Tailored</em>
            <br />for Every Celebration
          </h1>
          <Link href="/collections"
            className="inline-block px-10 md:px-14 py-4 border-2 border-[#BA9460] text-[#BA9460] text-[11px] uppercase tracking-[0.3em] hover:bg-[#BA9460] hover:text-[#1a1c12] transition-all duration-500 animate-fade-up backdrop-blur-sm"
            style={{ fontFamily: "Libre Caslon Text, serif", animationDelay: "0.55s" }}>
            Explore Collections
          </Link>
        </div>
        <style>{`
          @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.08); } }
        `}</style>
      </section>

      {/* ═══ SHOP BY OCCASION ═══ */}
      <ScrollReveal>
        <section className="py-24 md:py-28 bg-[#f8ecd7] overflow-hidden">
          <div className="text-center mb-12 md:mb-16 px-6">
            <span className="text-[#BA9460] text-[11px] uppercase tracking-[0.4em] block mb-4"
              style={{ fontFamily: "Libre Caslon Text, serif" }}>Curated For You</span>
            <h2 className="heading-serif text-[32px] md:text-[42px] text-[#303326]">Shop The Occasion</h2>
            <div className="w-12 h-px bg-[#BA9460] mx-auto mt-5" />
          </div>
          <OccasionSlider />
        </section>
      </ScrollReveal>

      {/* ═══ REELS ═══ */}
      <ScrollReveal>
        <section className="bg-[#47493B] text-[#fcf9ed] py-24 md:py-28 overflow-hidden">
          <div className="text-center mb-10 md:mb-14 px-6">
            <span className="text-[#BA9460] text-[11px] uppercase tracking-[0.35em] block mb-3"
              style={{ fontFamily: "Libre Caslon Text, serif" }}>@ethnicsnextgen</span>
            <h2 className="heading-serif text-[32px] md:text-[38px]">Real Celebrations</h2>
            <p className="text-[#fcf9ed]/40 text-xs mt-2 tracking-widest uppercase">Click side cards to browse</p>
          </div>
          <ReelPlayer reels={reels} />
        </section>
      </ScrollReveal>

      {/* ═══ COLLECTIONS GLIMPSE ═══ */}
      <ScrollReveal>
        <section className="bg-[#f8ecd7] py-24 md:py-28 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="The Collections" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                    src="https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782073855/collections_pe6dqc.png" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-[#BA9460] text-[11px] uppercase tracking-[0.35em] mb-5 block"
                  style={{ fontFamily: "Libre Caslon Text, serif" }}>Crafted With Care</span>
                <h2 className="heading-serif text-[34px] md:text-[44px] text-[#47493B] mb-6 leading-tight">
                  Outfits Made for Your Big Moments
                </h2>
                <div className="w-12 h-px bg-[#BA9460] mb-8" />
                <p className="text-[16px] md:text-[17px] text-[#47493B]/70 mb-10 leading-relaxed max-w-md">
                  From classic Sherwanis to sharp Suits and everyday Kurtas — every piece is carefully
                  made to look great and feel comfortable, whether it&apos;s a wedding, reception, or any special occasion.
                </p>
                <Link href="/collections"
                  className="inline-block px-10 py-4 bg-[#303326] text-[#fcf9ed] text-[11px] uppercase tracking-[0.25em] hover:bg-[#BA9460] hover:text-[#303326] transition-all duration-500"
                  style={{ fontFamily: "Libre Caslon Text, serif" }}>
                  Explore Our Collection
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ TESTIMONIALS ═══ */}
      <ScrollReveal>
        <section className="py-24 md:py-28 bg-[#f8ecd7] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#BA9460] text-[11px] uppercase tracking-[0.35em] block mb-4"
                style={{ fontFamily: "Libre Caslon Text, serif" }}>Kind Words</span>
              <h2 className="heading-serif text-[36px] md:text-[42px] text-[#303326]">What Our Clients Say</h2>
              <div className="w-12 h-px bg-[#BA9460] mx-auto mt-5" />
            </div>
            <TestimonialSlider />
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ BRAND STORY ═══ */}
      <ScrollReveal>
        <section className="py-24 md:py-28 bg-[#f8ecd7] text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="heading-serif text-[32px] md:text-[38px] mb-8">Born From a Gap Worth Filling</h2>
            <div className="w-12 h-px bg-[#BA9460] mx-auto mb-8" />
            <p className="text-[16px] md:text-[17px] text-[#303326]/70 leading-loose mb-8 italic">
              Ethnics by Next Generation was built to bridge the gap between mass-produced ethnic wear
              and unattainable luxury — because every person deserves a perfectly tailored outfit that honours their roots.
            </p>
            <p className="italic text-[#BA9460] tracking-widest text-[13px]" style={{ fontFamily: "Libre Caslon Text, serif" }}>
              Founded by V. Madhumitha &amp; G. Shanmugam
            </p>
          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}