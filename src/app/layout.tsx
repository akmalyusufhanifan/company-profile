import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outfit } from "next/font/google";
import PageTransitionProvider from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  variable: "--font-outfit-google",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JNE Company Profile",
  description: "JNE Company Profile. Designed by Akmal Yusuf Hanifan",
  keywords: [
    "JNE Express",
    "Layanan pengiriman barang",
    "Ekspedisi terpercaya Indonesia",
    "Kirim paket cepat",
    "Logistik dan distribusi nasional",
    "Cek resi JNE online",
    "Pengiriman domestik dan internasional",
    "Jasa kurir profesional",
  ],
  openGraph: {
    title: "JNE Company Profile",
    description: "JNE Company Profile. Designed by Akmal Yusuf Hanifan",
    siteName: "JNE Company Profile",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    title: "JNE Company Profile",
    description: "JNE Company Profile. Designed by Akmal Yusuf Hanifan",
  },
  authors: [
    { name: "Akmal Yusuf Hanifan" },
    { url: "https://github.com/akmalyusufhanifan" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${outfit.className}`}>
        <Header />
        <PageTransitionProvider>
          <main>{children}</main>
        </PageTransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
