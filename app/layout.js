import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Valorant agents",
  description: "Agentes del juego Valorant de RIOT GAMES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#131215] text-white`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
