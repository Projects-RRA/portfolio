import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rinith Amin",
  description: "Portfolio of Rinith R Amin",
  keywords: ["rinith,rinithamin,rinith amin,RINITH,RINITH AMIN"],
  author: "Rinith Amin",
  og: {
    title: "Rinith Amin - Portfolio",
    description: "Check out the portfolio of Rinith Amin.",
    image: "https://rinithamin.in/img/website-previewImage.png"
  },
  robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
