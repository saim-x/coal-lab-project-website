import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "COAL Car Booking System",
  description: "COAL Car Booking System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
