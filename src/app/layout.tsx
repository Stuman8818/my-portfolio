import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Dave's Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
