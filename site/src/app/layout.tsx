import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brown Belt Arcade | Premium Team",
  description: "Brown Belt Projects - Japanese Arcade Edition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=DotGothic16&family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="scanlines pixel-grid">{children}</body>
    </html>
  );
}
