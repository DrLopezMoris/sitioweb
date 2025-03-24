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
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  