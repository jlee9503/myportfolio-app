import type { Metadata } from "next";
import { Oswald, Lato, Poppins } from "next/font/google";
import "./globals.css";

// const oswald = Oswald({ subsets: ["latin"] });
// const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "Portfolio - Jungsu Lee",
  description: "Personal portfolio website created by Jung Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
