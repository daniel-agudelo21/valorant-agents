import "./globals.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { inter } from "./ui/fonts";



export const metadata = {
  title: {
    template: '%s | Valorant',
    default: 'Agentes de Valorant'
  },
  description: "Información general de los agentes del juego Valorant de RIOT GAMES",
  metadataBase: new URL('https://valorant-agents-mauve.vercel.app/')
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
