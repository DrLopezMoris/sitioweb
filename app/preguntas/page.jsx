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
            <div className="flex-grow container mx-auto px-4 py-12 ">
                <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <h1 className="text-4xl font-bold text-secondary mb-6 text-center">
                            Preguntas Frecuentes
                        </h1>
                        
                        <div className="mt-8 space-y-4">
                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Cuánto dura la recuperación?</h3>
                                <p className="mt-2 text-gray-600">
                                    La recuperación es escalonada y varía según el tipo de actividad.

                                    A las 48 horas:
                                    Podés moverte con tranquilidad en casa y realizar tareas livianas (sin agacharte o hacer esfuerzos).

                                    Entre 5 y 10 días:
                                    Ya podés reintegrarte a actividades fuera de casa (trabajo de oficina, salidas breves).
                                    (El tiempo exacto depende de cómo evoluciones; algunos pacientes lo logran antes).

                                    Ejercicio intenso (gimnasio, deportes):
                                    Requiere esperar de 3 semanas a 1 mes para evitar riesgos de sangrado o inflamación.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Qué cuidados debo tener?</h3>
                                <p className="mt-2 text-gray-600">
                                    Conviene guardar reposo los primeros 7 días o hacer actividades muy tranquilas. 
                                    No hace falta estar en la cama. Para actividades físicas aeróbicas se recomienda esperar 3 semanas. 
                                    Para actividades intensas anaeróbicas conviene esperar un mes.
                                </p>
                            </div>
                            <div>
                            <h3 className="text-xl font-semibold">Instrucciones para el postoperatorio. </h3>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600"> {/* Clases Tailwind para estilo */}
                                        <li>
                                        Debe evitar sonarse la nariz, en cambio, puede inspirar profundamente por la nariz sin riesgos.
                                        </li>
                                        <li>
                                        Si desea toser o estornudar, debe hacerlo con la boca abierta.
                                        </li>
                                        <li>
                                        Es normal presentar alteraciones de la sensibilidad a nivel de los incisivos centrales los primeros días del postoperatorio, esta sensación mejorará con el correr de los días.
                                        </li>
                                        <li>
                                        En el caso de las rinoplastias es recomendable colocarse hielo local cada 2hs.
                                        </li>
                                        <li>
                                        Se recomienda dormir con la cabecera elevada de la cama las primeras 72hs.
                                        </li>
                                        <li>
                                        Es normal y esperable durante las primeras 72 hs. recambiar la gasa colectora (la que se encuentra por debajo de la nariz) las veces que sea necesario para mantener la higiene y evitar mancharse. Cuando cese el sangrado y las secreciones, se podrá quedar sin gasa colectora (generalmente a las 24hs).
                                        </li>
                                    </ul>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Cuál es la duración de una cirugía nasal?</h3>
                                <p className="mt-2 text-gray-600">
                                    Cada caso es particular y debe evaluarse de manera personalizada. 
                                    En el caso de las patologías funcionales el tiempo quirúrgico es menor que en los procedimientos estéticos. 
                                    Por lo general, el promedio para una cirugía funcional nasal es de 2hs y para los procedimientos estéticos de 3hs. 
                                    Estos tiempos son estimativos y pueden prolongarse o acortarse según cada caso particular
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Cuánto tiempo tengo que estar internado?</h3>
                                <p className="mt-2 text-gray-600">
                                Habitualmente se trata de una intervención ambulatoria. 
                                El tiempo total de internación suele ser de una hora antes y tres horas después de la cirugía
                                </p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Es doloroso?</h3>
                                <p className="mt-2 text-gray-600">
                                    El postoperatorio de la rinoplastía no suele ser doloroso. La mayoría de los pacientes no requieren analgésicos fuertes después de la cirugía. 
                                    Lo más frecuente es sentir molestias leves (como una sensación de congestión nasal, similar a un resfrío). Puede sentir presión en la zona, pero no dolor agudo. 
                                    Si aparece alguna molestia, se puede manejar fácilmente con analgésicos comunes (como ibuprofeno o diclofenac).     
                                </p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Qué estudios necesito antes de una rinoplastía?</h3>
                                <p className="mt-2 text-gray-600">
                                    Antes de una rinoplastía, se requieren estudios esenciales: una evaluación otorrinolaringológica completa para valorar la función nasal, 
                                    análisis de sangre (hemograma, glucemia, coagulación y función renal) y un electrocardiograma con valoración cardiológica. 
                                    En casos específicos, podrían solicitarse estudios adicionales como radiografía de tórax o tomografía de nariz y senos paranasales, 
                                    especialmente si existen problemas respiratorios o sinusales previos. 
                                    Todos estos estudios pueden coordinarse en nuestra clínica para garantizar tu seguridad y los mejores resultados.
                                </p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Con qué anestesia se realiza la rinoplastía?</h3>
                                <p className="mt-2 text-gray-600">
                                    Realizamos el procedimiento bajo anestesia general, considerada la opción más segura y confortable para el paciente. 
                                    Contamos exclusivamente con anestesiólogos titulados por la Asociación Argentina de Anestesiología, 
                                    integrantes permanentes de nuestro equipo y especializados en cirugías faciales, 
                                    garantizando máxima seguridad y un control preciso durante toda la intervención.
                                </p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Cuándo se ven los resultados definitivos de la rinoplastía?</h3>
                                <p className="mt-2 text-gray-600">
                                    Los primeros cambios son visibles al retirar la férula (aproximadamente a la semana), 
                                    pero con inflamación inicial. El 70% del resultado final se aprecia a los 2 meses, cuando disminuye el edema notablemente. 
                                    La desinflamación completa es progresiva: mientras el cirujano y paciente pueden notar cambios sutiles hasta el año postoperatorio, 
                                    después del tercer mes los resultados son esencialmente estables para el entorno social.
                                </p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Hay riesgos en la rinoplastía?</h3>
                                <p className="mt-2 text-gray-600">
                                    Como toda cirugía, la rinoplastía tiene riesgos controlados: en pacientes sanos con anestesia general programada, 
                                    las complicaciones son infrecuentes (hemorragias en 0.5% de casos, infecciones bajo 1%). 
                                    Respecto al resultado, entre el 5% (cirugías primarias) y 20% (retoces) podrían requerir ajustes posteriores, 
                                    porcentajes que se minimizan con evaluación prequirúrgica exhaustiva, técnica precisa y seguimiento profesional. 
                                    Estos datos coinciden con estándares internacionales de seguridad quirúrgica.
                                </p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="text-xl font-semibold">¿Cuándo puedo exponerme al sol después de una rinoplastía?</h3>
                                <p className="mt-2 text-gray-600">
                                Durante los primeros 15 días postoperatorios es fundamental evitar completamente la exposición solar, 
                                ya que podría causar manchas permanentes en la piel (especialmente si hay hematomas). 
                                Se recomienda usar protector solar FPS 30+ incluso en exposiciones breves. Para tomar sol de forma directa y prolongada, 
                                se debe esperar entre 30 y 45 días después de la cirugía, cuando la inflamación y la sensibilidad cutánea hayan disminuido significativamente.
                                </p>
                            </div>
                        </div>
                        <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                            <p className="text-blue-800">
                                ¿No encuentras la respuesta que buscas? No dudes en 
                                <Link 
                                    href="https://wa.me/5491172003461" 
                                    className="ml-2 text-blue-600 font-semibold hover:underline"
                                >
                                    contactarnos
                                </Link>
                            </p>
                        </div>

                        

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