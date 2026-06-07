import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sabiq — driving saudi forward",
  description:
    "instant auto financing at the point of sale. digital applications, fast approvals, zero paperwork.",
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
