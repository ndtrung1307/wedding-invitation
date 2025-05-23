import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Đình Trung & Ngọc Trân",
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
  },
  description: "Chúng mình sẽ cưới nhau",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
