import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";
import { site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  alternates: site.url ? { canonical: "/" } : undefined,
  title: { default: "Siddhivinayak Builders Pvt. Ltd. | Construction in Jalgaon", template: "%s | Siddhivinayak Builders" },
  description: site.description,
  openGraph: { type:"website", title:"Siddhivinayak Builders Pvt. Ltd.", description:site.description, siteName:site.name, images:["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"] },
  twitter: { card:"summary_large_image", title:site.name, description:site.description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context":"https://schema.org", "@type":"GeneralContractor", name:site.name, telephone:site.phone, email:site.email, address:{"@type":"PostalAddress",streetAddress:"At Post Paldhi, Tal. Dharangaon",addressLocality:"Jalgaon",addressRegion:"Maharashtra",postalCode:"425103",addressCountry:"IN"} };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Header/><main>{children}</main><Footer/><WhatsAppButton/><BackToTop/></body></html>;
}
