import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Barlow({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "La Ludoteca",
  description: "Tienda de Juegos de Mesa y Accesorios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
