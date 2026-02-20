import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Oswald, Shippori_Mincho } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-shippori-mincho",
});

export const metadata: Metadata = {
  title: "naganuma web site",
  description: "Welcome to My Site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${oswald.variable} ${shipporiMincho.variable}`}>
      <body>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""} />
      </body>
    </html>
  );
}
