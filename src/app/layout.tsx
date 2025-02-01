import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "ALDO Luxury Fittings",
   description: "Best Quality & Best Price in the Market, Guaranteed!",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${montserrat} antialiased`}>
            <GoogleTagManager gtmId="GTM-M5GRJ4HN" />
            {children}
         </body>
      </html>
   );
}
