import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fe-next-css-starter",
  description: "Next.js + TypeScript + CSS Modules starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
