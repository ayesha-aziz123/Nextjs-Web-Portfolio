import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "../app/Navbar/ResponsiveNavbar";
import Footer from "../app/footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import ScrollTotop from "./Helper/Scrolltotop";

const font = Sora({ weight:["100","200","300","400","500","600","700","800"], subsets:["latin"] });

export const metadata: Metadata = {
  title: "Web Dev Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        <ResponsiveNavbar/>
        {children}
        <Footer/>
        <ScrollTotop/>

        </body>
    </html>
  );
}
