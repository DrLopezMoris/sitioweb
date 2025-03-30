// components/FAQ.jsx
const FAQ = () => {
    return (
      <section id="faq" className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Preguntas Frecuentes</h2>
          <div className="mt-8 space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">¿Cuánto dura la recuperación?</h3>
              <p className="mt-2 text-gray-600">
                La recuperación varía según cada paciente, pero generalmente se recomienda un periodo de 1 a 2 semanas.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">¿Qué cuidados debo tener?</h3>
              <p className="mt-2 text-gray-600">
                Se recomienda seguir las indicaciones del médico para garantizar una recuperación óptima.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">¿Cuál es la duración de una rinoplastía?</h3>
              <p className="mt-2 text-gray-600">
                En el caso de una rinoplastía primaria, el procedimiento suele tomar alrededor de 2 horas. Si se trata de una cirugía reconstructiva (secundaria o de revisión), el tiempo puede extenderse hasta 3 horas.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">¿Cuánto tiempo tengo que estar internado?</h3>
              <p className="mt-2 text-gray-600">
              Se trata de una intervención ambulatoria. El tiempo total de internación suele ser de una hora antes y tres horas después de la cirugía.
              </p>
            </div>
          </div>

          {/* Botón para ver más reconocimientos */}
          <div className="text-center mt-8">
            <a 
              href="/preguntas" 
              className="inline-flex items-center text-[#2bc37f] hover:text-[#25a36d] font-medium transition-colors"
            >
              Ver todos las preguntas.
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
  