import "./globals.css";
import React from "react";

export const metadata = {
  title: "TOWER RUSH & MINESLOT",
  description: "Play and Win",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}