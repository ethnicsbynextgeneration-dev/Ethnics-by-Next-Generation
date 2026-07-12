import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact Us | Ethnics by Next Generation" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ═══ HERO BANNER ═══ */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783852393/Contact_ldmv4u.webp"
            alt="Contact Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#303326]/60" />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <span
              className="text-[#BA9460] text-[11px] uppercase tracking-[0.5em] block mb-6 animate-fade-up"
              style={{ fontFamily: "Libre Caslon Text, serif", animationDelay: "0.2s" }}
            >
              We&apos;d Love to Hear From You
            </span>
            <h1
              className="text-[52px] md:text-[80px] text-white leading-[1.0] mb-8 animate-fade-up"
              style={{ fontFamily: "EB Garamond, serif", animationDelay: "0.4s" }}
            >
              Visit the <em className="text-[#BA9460]">Showroom</em>
            </h1>
            <p
              className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto animate-fade-up"
              style={{ fontFamily: "EB Garamond, serif", animationDelay: "0.6s" }}
            >
              Where timeless tradition meets the modern soul.
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-6 h-6 text-[#fcf9ed] opacity-50" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </section>

        {/* ═══ INFO + MAP ═══ */}
        <ScrollReveal>
          <section className="bg-[#303326] text-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row min-h-[520px]">

              {/* Info */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <div className="space-y-10">
                  <div>
                    <h2 className="text-[30px] text-[#BA9460] mb-5" style={{ fontFamily: "EB Garamond, serif" }}>Our Showroom</h2>
                    <address className="not-italic text-white/75 text-[16px] leading-loose">
                      First Floor, No 35, 4P,<br />
                      Nageswaran Sannathi St,<br />
                      Gandhi Adigal Salai,<br />
                      Valayapettai Agraharam,<br />
                      Kumbakonam, Tamil Nadu 612001
                    </address>
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-3" style={{ fontFamily: "Libre Caslon Text, serif" }}>Connect</h3>
                    <p className="text-[15px] text-white/80">+91 96770 31312</p>
                    <p className="text-[15px] text-white/80">ethnicsbynextgeneration@gmail.com</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=No+35,+Nageswaran+Sannathi+St,+Kumbakonam,+Tamil+Nadu+612001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-[#BA9460] text-[#BA9460] text-[11px] uppercase tracking-widest hover:bg-[#BA9460] hover:text-[#303326] transition-all duration-300"
                    style={{ fontFamily: "Libre Caslon Text, serif" }}
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Real Google Map */}
              <div className="w-full md:w-1/2 relative overflow-hidden min-h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3!2d79.3706!3d10.9601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a552b58bfb43eed%3A0xf2db14e002bdee55!2sNageswaran%20Sannathi%20St%2C%20Kumbakonam%2C%20Tamil%20Nadu%20612001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ethnics by Next Generation Showroom"
                />
                {/* Brand badge over map */}
                <div className="absolute bottom-4 left-4 bg-[#303326]/90 backdrop-blur-sm px-4 py-3 flex items-center gap-3 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-[#BA9460] animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-[#BA9460] text-[10px] uppercase tracking-widest leading-none" style={{ fontFamily: "Libre Caslon Text, serif" }}>
                      Ethnics by Next Generation
                    </p>
                    <p className="text-white/50 text-[11px] mt-0.5">Kumbakonam, Tamil Nadu</p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>

        {/* ═══ CONTACT FORM — dark theme ═══ */}
        <ScrollReveal>
          <section className="py-28 px-6 md:px-16 bg-[#47493B]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-16">
                <span
                  className="text-[#BA9460] text-[11px] uppercase tracking-[0.4em] block mb-4"
                  style={{ fontFamily: "Libre Caslon Text, serif" }}
                >
                  Get in Touch
                </span>
                <h2
                  className="text-[40px] md:text-[48px] text-[#fcf9ed] leading-tight"
                  style={{ fontFamily: "EB Garamond, serif", letterSpacing: "0.15em" }}
                >
                  Send Us a Message
                </h2>
                <div className="w-14 h-px bg-[#BA9460] mx-auto mt-6" />
              </div>
              <ContactForm />
            </div>
          </section>
        </ScrollReveal>

      </main>
      <Footer />
    </>
  );
}