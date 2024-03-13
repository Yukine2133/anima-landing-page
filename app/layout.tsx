import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppPoppins.className}>{children}</body>
    </html>
  );
}
