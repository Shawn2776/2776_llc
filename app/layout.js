import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "2776, LLC | Home",
  description: "Cloud-based software solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-300 to-blue-800 h-full w-full`}
      >
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-62WTDJGQJR" />
      </body>
    </html>
  );
}
