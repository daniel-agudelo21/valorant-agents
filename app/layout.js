import "./globals.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { inter } from "./ui/fonts";



export const metadata = {
  title: {
    template: '%s | Valorant',
    default: 'Agentes de Valorant'
  },
  description: "Agentes del juego Valorant de RIOT GAMES",
  metadataBase: new URL('https://playvalorant.com/en-us/media/')
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
