"use client";
import { useState } from "react";

const occasions = ["Wedding Ceremony", "Sangeet / Mehendi", "Reception", "Engagement", "Formal Gifting", "Others"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", occasion: occasions[0], message: "" });
  const [focused, setFocused] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-16">
        <div className="inline-block border-2 border-[#BA9460] px-14 py-10">
          <div className="w-10 h-10 rounded-full border-2 border-[#BA9460] flex items-center justify-center mx-auto mb-6">
            <svg className="w-5 h-5 text-[#BA9460]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <p className="text-[24px] italic text-[#fcf9ed] mb-2" style={{ fontFamily: "EB Garamond, serif" }}>
            Thank you for reaching out.
          </p>
          <p className="text-[14px] text-[#fcf9ed]/50 tracking-wide">We&apos;ll get back to you shortly.</p>
        </div>
      </div>
    );
  }

  const fieldClass = (name) =>
    `w-full bg-[#303326] text-[#fcf9ed] text-[15px] px-5 py-4 border-2 outline-none transition-all duration-300 placeholder:text-[#fcf9ed]/20 ${
      focused === name ? "border-[#BA9460]" : "border-[#fcf9ed]/10 hover:border-[#fcf9ed]/25"
    }`;

  const labelClass = "block text-[10px] uppercase tracking-[0.25em] mb-2.5 text-[#BA9460]";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} style={{ fontFamily: "Libre Caslon Text, serif" }}>Full Name</label>
          <input
            type="text" required placeholder="Aarav Sharma"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused("")}
            className={fieldClass("name")}
          />
        </div>
        <div>
          <label className={labelClass} style={{ fontFamily: "Libre Caslon Text, serif" }}>Phone Number</label>
          <input
            type="tel" placeholder="+91 00000 00000"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused("")}
            className={fieldClass("phone")}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: "Libre Caslon Text, serif" }}>Email Address</label>
        <input
          type="email" required placeholder="you@example.com"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused("")}
          className={fieldClass("email")}
        />
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: "Libre Caslon Text, serif" }}>Occasion</label>
        <div className="relative">
          <select
            value={form.occasion}
            onChange={e => setForm({ ...form, occasion: e.target.value })}
            onFocus={() => setFocused("occasion")}
            onBlur={() => setFocused("")}
            className={`${fieldClass("occasion")} appearance-none cursor-pointer`}
          >
            {occasions.map(o => <option key={o} value={o} className="bg-[#303326]">{o}</option>)}
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-[#BA9460]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: "Libre Caslon Text, serif" }}>Your Message</label>
        <textarea
          rows={5} placeholder="How can we assist you today?"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused("")}
          className={`${fieldClass("message")} resize-none`}
        />
      </div>

      {error && (
        <p className="text-red-400 text-[13px] tracking-wide">{error}</p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-5 bg-[#BA9460] text-[#303326] text-[12px] uppercase tracking-[0.3em] font-semibold hover:bg-[#fcf9ed] transition-all duration-500 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          style={{ fontFamily: "Libre Caslon Text, serif" }}
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending...
            </>
          ) : "Send Message"}
        </button>
      </div>

    </form>
  );
}