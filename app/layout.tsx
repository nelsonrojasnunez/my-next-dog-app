import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.min.css";

export const metadata: Metadata = {
  title: "My Next Dog App",
  description: "See lovely Dogs images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#712cf9"></meta>
      <body className="container">{children}</body>
    </html>
  );
}
