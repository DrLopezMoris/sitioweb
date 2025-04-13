// components/FAQ.jsx
const FAQ = () => {
    return (
      <section id="faq" className="z-10 bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-secondary">Preguntas Frecuentes</h2>
          <div className="p-4 mt-8 space-y-4">
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

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">¿Cuál es la duración de una cirugía nasal?</h3>
              <p className="mt-2 text-gray-600">
                Cada caso es particular y debe evaluarse de manera personalizada. 
                En el caso de las patologías funcionales el tiempo quirúrgico es menor que en los procedimientos estéticos. 
                Por lo general, el promedio para una cirugía funcional nasal es de 2hs y para los procedimientos estéticos de 3hs. 
                Estos tiempos son estimativos y pueden prolongarse o acortarse según cada caso particular.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">¿Cuánto tiempo tengo que estar internado?</h3>
              <p className="mt-2 text-gray-600">
                Habitualmente se trata de una intervención ambulatoria. 
                El tiempo total de internación suele ser de una hora antes y tres horas después de la cirugía.
              </p>
            </div>
          </div>

          {/* Botón para ver más reconocimientos */}
          <div className="text-center mt-8">
            <a 
              href="/preguntas" 
              className="inline-flex items-center text-[#2bc37f] mb-4 hover:text-[#25a36d] font-medium transition-colors"
            >
              Ver todas las preguntas.
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  