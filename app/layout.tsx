import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chumley's Doghouse | Craft Beer & Hot Dogs | Columbus, Indiana",
    template: "%s | Chumley's Doghouse",
  },
  description:
    "The only doghouse you WANT to be in. Family-owned craft beer bar and hot dog restaurant in Columbus, Indiana. Dog-friendly patio, local Indiana beers, and unforgettable food.",
  keywords: ["hot dogs", "craft beer", "Columbus Indiana", "dog friendly restaurant", "Indiana brewery", "family restaurant"],
  authors: [{ name: "Chumley's Doghouse" }],
  creator: "Chumley's Doghouse",
  metadataBase: new URL("https://chumleysdoghouse.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chumleysdoghouse.com",
    siteName: "Chumley's Doghouse",
    title: "Chumley's Doghouse | The Only Doghouse You WANT to Be In",
    description: "Family-owned craft beer bar and hot dog restaurant in Columbus, Indiana. Dog-friendly, Indiana proud.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Chumley's Doghouse" }],
  },
  twitter: { card: "summary_large_image", title: "Chumley's Doghouse", description: "The only doghouse you WANT to be in." },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Chumley's Doghouse",
  description: "Family-owned craft beer bar and hot dog restaurant. Dog-friendly, Indiana proud.",
  url: "https://chumleysdoghouse.com",
  telephone: "+1-812-555-0100",
  address: { "@type": "PostalAddress", streetAddress: "123 Washington St", addressLocality: "Columbus", addressRegion: "IN", postalCode: "47201", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 39.2014, longitude: -85.9214 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "11:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday"], opens: "11:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "21:00" },
  ],
  servesCuisine: ["American", "Hot Dogs", "Craft Beer"],
  priceRange: "$",
  hasMenu: "https://chumleysdoghouse.com/menu",
  petsAllowed: true,
  sameAs: ["https://facebook.com/chumleysdoghouse", "https://instagram.com/chumleysdoghouse"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
