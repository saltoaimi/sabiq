import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sabiq — driving saudi forward",
  description:
    "digital auto financing and lease-to-own powered by alternative credit scoring. up to 60K SAR.",
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
          href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Bruno+Ace&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-dark bg-light">
        {children}
      </body>
    </html>
  );
}
