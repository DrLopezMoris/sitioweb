import { Montserrat, Roboto_Slab, Petit_Formal_Script, } from "next/font/google";
import "./globals.css";

// CARGA DE FUENTES
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "700"],
});


const petitFormal = Petit_Formal_Script({
  subsets: ['latin'],
  weight: ['400'], // Solo tiene un peso
  variable: '--font-petit-formal',
});

// SEO METADATA
export const metadata = {
  metadataBase: new URL("https://drlopezmoris.com"),
  title: "Dr. Lopez Moris - Otorrinolaringólogo Especialista en Rinología.",
  description:
    "Soy el Dr. Carlos López Moris, médico otorrinolaringólogo especializado en Rinología y Cirugía Estética Facial.",
  keywords:
    "cirugía, salud, medicina, especialista, doctor, medico, tratamientos, buenos aires, argentina, otorrino, otorrinolaringologo, rinoplastia, nariz, cemic, rinologia, belleza, cirugia estetica, cirugia facial, Argentina, caba, medico en caba, rinoplastia Buenos Aires, cirugía de nariz Buenos Aires,",
  authors: [{ name: "Sintergia Studio", url: "https://sintergiastudio.com" }],
  applicationName: "Dr. López Moris",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#ffffff",
  alternates: {
    canonical: "https://drlopezmoris.com",
  },
  openGraph: {
    title: "Dr. Lopez Moris - Otorrinolaringólogo Especialista en Rinología.",
    description:
      "Conoce más sobre los tratamientos innovadores del Dr. Lopez Moris.",
    url: "https://drlopezmoris.com",
    siteName: "Dr. López Moris",
    images: [
      {
        url: "./logo-negro-moris.png",
        width: 1200,
        height: 630,
        alt: "Dr. Lopez Moris",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrLopezMoris",
    creator: "@SintergiaStudio",
    title: "Dr. Lopez Moris - Otorrinolaringólogo Especialista en Rinología.",
    description:
      "Conoce más sobre los tratamientos innovadores del Dr. Lopez Moris.",
    images: ["./logo-negro-moris.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" type="image/png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Sintergia Studio" />
      </head>
      <body
        className={`${montserrat.variable} ${robotoSlab.variable} ${petitFormal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
