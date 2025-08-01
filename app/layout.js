import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "Vedant Kolte",
  description: "PortFolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
