import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = 'https://wa.me/523313013253?text=Hola%2C%20tengo%20una%20propiedad%20intestada%20y%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa.';

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const IconArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);

export default function IntestadoPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/iconh.png" alt="Heredum" className="h-9 w-auto invert" />
            <div className="text-2xl md:text-3xl font-display font-bold tracking-wider text-dark-800">HEREDUM</div>
          </Link>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2 !px-6 !py-2.5 text-sm">
            <IconPhone />
            Asesoría Gratis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors text-sm mb-6">
            <IconArrowLeft /> Volver al inicio
          </Link>
          <div className="inline-block mb-4 px-4 py-1.5 bg-gold-500/10 border border-gold-500/30 rounded-full">
            <span className="text-gold-400 text-xs font-semibold tracking-[0.15em] uppercase">Guía Completa</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            ¿Tienes una Casa <span className="text-gradient-gold">Intestada</span>?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Todo lo que necesitas saber sobre intestados en México: qué son, cómo resolverlos y por qué actuar hoy protege tu patrimonio.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        {/* ── Article 1 ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">¿Qué es un intestado?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4">
            Cuando una persona fallece sin dejar testamento, su patrimonio queda en una situación legal llamada <strong className="text-dark-800">sucesión intestamentaria</strong> o simplemente "intestado". 
            En México, esto significa que <strong className="text-dark-800">nadie tiene el poder legal</strong> para vender, rentar, hipotecar ni disponer de los bienes del fallecido hasta que un juez declare quiénes son los herederos legítimos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Es una situación más común de lo que parece: según datos del Colegio Nacional del Notariado Mexicano, más del <strong className="text-dark-800">60% de los mexicanos no tienen testamento</strong>. 
            Esto deja miles de propiedades atrapadas en un limbo legal que puede durar años si no se actúa.
          </p>
          <div className="bg-gold-50 border-l-4 border-gold-500 rounded-r-xl p-5 my-6">
            <p className="text-dark-700 text-sm font-semibold">⚖️ Fundamento Legal</p>
            <p className="text-dark-600 text-sm mt-1">El juicio sucesorio intestamentario está regulado por el Código Civil del Estado de Jalisco y se tramita ante los Juzgados de lo Familiar.</p>
          </div>
        </section>

        {/* ── Article 2 ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">¿Qué pasa si no resuelvo el intestado?</h2>
          <div className="gold-divider mb-6" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'No puedes vender', desc: 'La propiedad no puede ser comprada ni vendida legalmente. Cualquier "venta" sería nula y no te protege como comprador.' },
              { title: 'No puedes hipotecar', desc: 'Ningún banco otorgará un crédito con garantía hipotecaria sobre un inmueble intestado.' },
              { title: 'Conflictos familiares', desc: 'Con el paso del tiempo, los posibles herederos se multiplican y los conflictos crecen exponencialmente.' },
              { title: 'Pierde valor', desc: 'Una propiedad sin papeles en regla vale significativamente menos en el mercado. Puedes perder hasta un 40% de su valor comercial.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-dark-800 mb-2">❌ {item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Article 3 ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">¿Cómo se resuelve un intestado?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-gray-600 leading-relaxed mb-8">
            El proceso se llama <strong className="text-dark-800">Juicio Sucesorio Intestamentario</strong> y consta de 4 etapas claras. En Heredum nos encargamos de todo el proceso, de inicio a fin.
          </p>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Denuncia del Intestado', desc: 'Se notifica al Juez de lo Familiar del fallecimiento y se solicita abrir el proceso sucesorio. Cualquier heredero presunto puede iniciarlo.' },
              { step: '02', title: 'Declaratoria de Herederos', desc: 'El juez analiza la documentación y reconoce legalmente a quiénes tienen derecho a heredar según el orden de prelación que marca la ley.' },
              { step: '03', title: 'Inventario y Avalúo', desc: 'Se enlistan todos los bienes del fallecido (casas, terrenos, cuentas bancarias) y se calcula su valor para efectos fiscales y de reparto.' },
              { step: '04', title: 'Adjudicación', desc: 'Se emite la resolución judicial que transfiere legalmente los bienes a los herederos. Con esta sentencia se tramitan las nuevas escrituras ante notario.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white font-display text-lg font-bold shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Article 4 ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">¿Qué documentos necesito?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-gray-600 leading-relaxed mb-6">
            Para iniciar un juicio sucesorio intestamentario en Jalisco, necesitarás reunir la siguiente documentación. No te preocupes si no tienes todo — nosotros te ayudamos a conseguirlo.
          </p>
          <div className="bg-dark-800 rounded-2xl p-6 md:p-8">
            <ul className="space-y-3">
              {[
                'Acta de defunción del titular del inmueble',
                'Actas de nacimiento de los herederos (hijos)',
                'Acta de matrimonio (si aplica)',
                'Escrituras de la propiedad o constancia catastral',
                'Identificación oficial de los herederos',
                'Comprobante de domicilio actualizado',
                'Constancia de predial al corriente',
              ].map((doc, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">Preguntas Frecuentes</h2>
          <div className="gold-divider mb-6" />
          <div className="space-y-4">
            {[
              { q: '¿Cuánto tiempo tarda un juicio intestamentario?', a: 'En promedio, un juicio sucesorio intestamentario en Jalisco tarda entre 8 y 18 meses, dependiendo de la complejidad del caso y la cantidad de herederos involucrados.' },
              { q: '¿Cuánto cuesta regularizar un intestado?', a: 'El costo varía según el valor del inmueble y la complejidad del caso. En Heredum financiamos el proceso completo para que no tengas que desembolsar grandes cantidades por adelantado.' },
              { q: '¿Todos los herederos deben estar de acuerdo?', a: 'No necesariamente. El juez puede proceder incluso si algunos herederos no participan activamente, siempre que sean debidamente notificados.' },
              { q: '¿Puedo vender la casa durante el proceso?', a: 'No es posible vender legalmente hasta que el juicio concluya y se emita la nueva escritura a nombre de los herederos.' },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-dark-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-dark-800 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Tienes una propiedad intestada?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            No dejes que tu patrimonio familiar se pierda en un proceso legal interminable. Agenda una asesoría gratuita y te damos un diagnóstico claro de tu caso.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-3 text-lg !px-10 !py-4 animate-pulse-gold">
            <IconPhone />
            Agenda Tu Asesoría Gratis
          </a>
          <p className="text-gray-600 text-xs mt-4">Sin costo · Sin compromiso · Respuesta en menos de 24 horas</p>
        </section>
      </article>

      {/* Footer mini */}
      <footer className="bg-dark-900 text-gray-500 py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/iconh.png" alt="Heredum" className="h-7 w-auto" />
            <span className="text-white font-display font-bold tracking-wider">HEREDUM</span>
          </div>
          <p className="text-sm">© 2026 Heredum. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Floating WA */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
        aria-label="WhatsApp">
        <IconPhone />
      </a>
    </div>
  );
}
