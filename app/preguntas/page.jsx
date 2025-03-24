// app/preguntas/page.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/Faq";
import Link from 'next/link';

export const metadata = {
  title: "Preguntas Frecuentes - Dr. Lopez Moris",
  description: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios médicos",
};

export default function PreguntasPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                            Preguntas Frecuentes
                        </h1>
                        
                        <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                            <p className="text-blue-800">
                                ¿No encuentras la respuesta que buscas? No dudes en 
                                <Link 
                                    href="/contacto" 
                                    className="ml-2 text-blue-600 font-semibold hover:underline"
                                >
                                    contactarnos
                                </Link>
                            </p>
                        </div>

                        <FAQ />

                        <div className="mt-8 text-center">
                            <p className="text-gray-600">
                                Las respuestas proporcionadas son de carácter informativo. 
                                Cada caso es único y requiere una consulta personalizada.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link 
                        href="/" 
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        ← Volver a Inicio
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    )
}