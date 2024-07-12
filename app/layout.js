import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agentes de Valorant",
  description: "Agentes del juego Valorant de RIOT GAMES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#131215] text-white h-full flex flex-col min-h-screen`}>
        <NavBar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
