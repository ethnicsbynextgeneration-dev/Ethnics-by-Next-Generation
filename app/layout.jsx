import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const LOGO_URL = "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1782417491/logo_z1i7tl.png";

export const metadata = {
  title: "Ethnics by Next Generation | Handcrafted Heritage",
  description:
    "From classic Sherwanis to sharp Suits and everyday Kurtas — every piece is carefully made for weddings, receptions, and special occasions.",
  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;700&family=Cinzel:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
