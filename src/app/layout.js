import "@/styles/reset.css";
import "@/styles/globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Providers from "./providers";
import site from "@/settings/site";
import BackToTop from "@/components/BackToTop/BackToTop";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body>
        <NextTopLoader color="#113b67" height={4} showSpinner={false} />
        <div className="app-bg" />
        <Providers>
          {children}
          <BackToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
