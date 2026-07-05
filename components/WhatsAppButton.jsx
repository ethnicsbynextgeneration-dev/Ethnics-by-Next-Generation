const WHATSAPP_NUMBER = "919677031312"; // +91 96770 31312

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-[100]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform duration-300">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.2 8.2 0 012.4 5.84c0 4.55-3.7 8.24-8.24 8.24a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.19-.31a8.18 8.18 0 01-1.26-4.38c0-4.55 3.7-8.24 8.27-8.24zm-3.9 5.03c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.83 4.32 3.85 2.14.85 2.57.68 3.04.64.46-.04 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8.98-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.75-.15-.26-.02-.4.11-.53.11-.11.25-.29.38-.43.13-.14.17-.24.25-.4.08-.17.04-.31-.02-.44-.06-.13-.57-1.42-.79-1.94-.2-.5-.42-.44-.57-.44-.15-.01-.32-.01-.49-.01z" />
        </svg>
      </span>
    </a>
  );
}
