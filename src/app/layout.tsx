import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Meme Quote Generator",
  description: "Create memes with quotes from your favorite characters.",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
