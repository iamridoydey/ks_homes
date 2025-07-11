import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

import { Inter, Montserrat } from "next/font/google";
import { NavigationProvider } from "../../context/navigationContext";
import { CityProvider } from "../../context/cityContext";
import CityPopup from "@/components/cityPopup/CityPopup";
import { CityPopupProvider } from "../../context/CityPopupContext";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Kstone Homes",
  description: "Your Dream Home, Built with Heart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${montserrat.className} antialiased max-w-[1480px] mx-auto`}
      >
        <NavigationProvider>
          <CityProvider>
            <CityPopupProvider>
              <Navbar />
              <CityPopup />
              <div className="pt-22 relative">{children}</div>
              <Footer />
            </CityPopupProvider>
          </CityProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
