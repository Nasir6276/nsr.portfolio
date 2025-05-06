import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
// import "./js/main";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasir",
  description: "Portfolio by Nasir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`antialiased bg-gray-100`}>{children}</body>
    </html>
  );
}
