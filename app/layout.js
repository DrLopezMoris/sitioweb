import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"], // Agregar pesos de la fuente
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Dr. Lopez Moris - Otorrinolaringólogo Especialista en Rinología.", // 🔹 TÍTULO PRINCIPAL
  description: "Soy el Dr. Carlos López Moris, médico otorrinolaringólogo especializado en Rinología y Cirugía Estética Facial.", // 🔹 DESCRIPCIÓN DE LA WEB
  keywords: "cirugía, salud, medicina, especialista, doctor, tratamientos, Buenos Aires, otorrino, otorrinolaringologo, rinoplastia, nariz, cemic, rinologia, belleza, cirugia estetica, cirugia facial, Argentina, caba, medico en caba", // 🔹 PALABRAS CLAVE
  authors: [{ name: "Sintergia Studio", url: "https://sintergia.com" }], // 🔹 AUTOR
  openGraph: {
    title: "Dr. Lopez Moris - Otorrinolaringólogo Especialista en Rinología.", // 🔹 TÍTULO PARA COMPARTIR EN REDES
    description: "Conoce más sobre los tratamientos innovadores del Dr. Lopez Moris.", // 🔹 DESCRIPCIÓN PARA REDES
    url: "https://drlopezmoris.com", // 🔹 URL DE LA WEB
    siteName: "Dr. López Moris",
    images: [
      {
        url: "/imagen1.png", // 🔹 IMAGEN PARA REDES SOCIALES (Ubicada en `/public/`)
        width: 1200,
        height: 630,
        alt: "Dr. Lopez Moris",
      },
    ],
    type: "website", // 🔹 TIPO DE CONTENIDO (Puede ser "website", "article", etc.)
  },
  twitter: {
    card: "summary_large_image", // 🔹 FORMATO PARA TWITTER (imagen grande)
    site: "@DrLopezMoris", // 🔹 CUENTA DE TWITTER OFICIAL
    creator: "@SintergiaStudio", // 🔹 CRÉDITO DEL CREADOR
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/fav.png" />
      </head>
      <body
        className={`${montserrat.variable} ${robotoSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

