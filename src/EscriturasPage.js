import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = 'https://wa.me/523313013253?text=Hola%2C%20necesito%20ayuda%20para%20obtener%20las%20escrituras%20de%20mi%20propiedad.';

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

export default function EscriturasPage() {
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
            ¿Tienes una Casa Pero <span className="text-gradient-gold">No Las Escrituras</span>?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Descubre las vías legales para obtener tus escrituras en México: usucapión, inmatriculación, acción proforma y más.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        {/* ── Article 1 ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">¿Por qué las escrituras son tan importantes?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4">
            Las <strong className="text-dark-800">escrituras públicas</strong> son el único documento que acredita legalmente la propiedad de un inmueble en México. 
            Sin ellas, aunque vivas en la propiedad, pagues servicios y predial, <strong className="text-dark-800">no eres legalmente el dueño</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Esto significa que no puedes vender, heredar, hipotecar ni usar tu propiedad como garantía. 
            En caso de un conflicto legal, no tendrías forma de demostrar tu titularidad ante un juez.
          </p>
          <div className="bg-gold-50 border-l-4 border-gold-500 rounded-r-xl p-5 my-6">
            <p className="text-dark-700 text-sm font-semibold">📋 Dato Importante</p>
            <p className="text-dark-600 text-sm mt-1">En Jalisco, miles de propiedades carecen de escrituras formales. Muchas se transfirieron mediante contratos privados, cesiones verbales o posesiones informales que nunca se formalizaron.</p>
          </div>
        </section>

        {/* ── Article 2 ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">¿Cómo puedo obtener mis escrituras?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-gray-600 leading-relaxed mb-8">
            Dependiendo de tu situación particular, existen diferentes vías legales para obtener las escrituras de tu propiedad. Cada caso es único y en Heredum te ayudamos a identificar la mejor ruta.
          </p>
          
          <div className="space-y-6">
            {/* Usucapion */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 font-bold text-sm">1</div>
                <h3 className="font-display text-xl font-bold text-dark-800">Usucapión (Prescripción Adquisitiva)</h3>
              </div>
              <p className="text-sm text-gold-600 font-semibold mb-2">Para: Llevas años viviendo ahí pero no tienes papeles</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Es un proceso legal para convertirte en dueño por el simple paso del tiempo. Requieres demostrar posesión <strong>pacífica, continua, pública</strong> y en concepto de propietario por al menos 5 años (buena fe) o 10 años (mala fe).
              </p>
              <div className="flex flex-wrap gap-2">
                {['Comprobantes de servicios', 'Recibos de predial', 'Testimonios de vecinos'].map((doc, i) => (
                  <span key={i} className="bg-gray-100 rounded-lg px-3 py-1 text-xs text-gray-600">{doc}</span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">📍 Se gestiona en: Juzgados Civiles de Primera Instancia, Jalisco</p>
            </div>

            {/* Accion Proforma */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 font-bold text-sm">2</div>
                <h3 className="font-display text-xl font-bold text-dark-800">Acción Proforma</h3>
              </div>
              <p className="text-sm text-gold-600 font-semibold mb-2">Para: Tienes contrato de compraventa pero el vendedor no firma</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Cuando compraste y pagaste la propiedad, pero el vendedor se niega a firmar ante notario. Un juez puede obligarlo a firmar, y si se rehúsa, <strong className="text-dark-800">el juez firma en su nombre por rebeldía</strong>.
              </p>
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-3 mb-3">
                <p className="text-gold-700 text-xs font-semibold">⚡ Si el vendedor no firma, ¡EL JUEZ FIRMA POR ÉL EN REBELDÍA!</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Contrato privado de compraventa', 'Recibos de pago', 'Identificación oficial'].map((doc, i) => (
                  <span key={i} className="bg-gray-100 rounded-lg px-3 py-1 text-xs text-gray-600">{doc}</span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">📍 Se gestiona en: Juzgados Civiles, Jalisco</p>
            </div>

            {/* Inmatriculacion */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 font-bold text-sm">3</div>
                <h3 className="font-display text-xl font-bold text-dark-800">Inmatriculación</h3>
              </div>
              <p className="text-sm text-gold-600 font-semibold mb-2">Para: Tu predio no aparece en el Registro Público</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Tu propiedad existe físicamente pero no tiene antecedentes en el Registro Público. Es como una persona sin acta de nacimiento — legalmente "invisible". La inmatriculación le da vida jurídica al inmueble.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Constancia catastral', 'Comprobantes de pago de predial', 'Certificado de no inscripción'].map((doc, i) => (
                  <span key={i} className="bg-gray-100 rounded-lg px-3 py-1 text-xs text-gray-600">{doc}</span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">📍 Se gestiona en: Catastro y Registro Público de la Propiedad</p>
            </div>

            {/* Dominio Pleno */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 font-bold text-sm">4</div>
                <h3 className="font-display text-xl font-bold text-dark-800">Dominio Pleno (Terrenos Ejidales)</h3>
              </div>
              <p className="text-sm text-gold-600 font-semibold mb-2">Para: Tu terreno pertenece a un ejido</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Si tienes un certificado parcelario del ejido, este solo te da derecho de uso, no de propiedad. Para convertirlo en propiedad privada necesitas el proceso de <strong>Dominio Pleno</strong> ante el Registro Agrario Nacional.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Certificado Parcelario', 'Acta de asamblea ejidal', 'Identificación oficial'].map((doc, i) => (
                  <span key={i} className="bg-gray-100 rounded-lg px-3 py-1 text-xs text-gray-600">{doc}</span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">📍 Se gestiona en: Registro Agrario Nacional (RAN)</p>
            </div>
          </div>
        </section>

        {/* ── Predial ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">¿Qué pasa con el predial?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4">
            El <strong className="text-dark-800">impuesto predial</strong> es un pago anual que demuestra el uso y posesión de un inmueble. 
            Aunque pagar predial <strong>no te convierte en propietario</strong>, es una prueba fundamental en procesos como la usucapión, ya que demuestra posesión continua.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              { title: 'Demuestra posesión', desc: 'Los recibos de predial son prueba clave en juicios de usucapión para demostrar que has poseído el inmueble.' },
              { title: 'Evita multas', desc: 'Mantener el predial al corriente evita recargos y facilita cualquier trámite legal futuro.' },
              { title: 'Identifica catastro', desc: 'La clave catastral del predial es esencial para ubicar legalmente tu propiedad.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center">
                <h3 className="font-semibold text-dark-800 text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-800 mb-4">Preguntas Frecuentes</h2>
          <div className="gold-divider mb-6" />
          <div className="space-y-4">
            {[
              { q: '¿Es legal vivir en una propiedad sin escrituras?', a: 'Sí, es legal vivir ahí, pero no eres el propietario legal. Esto significa que no puedes vender, heredar ni hipotecar la propiedad. Cualquier persona que demuestre ser el propietario legal podría reclamarte.' },
              { q: '¿Cuánto tiempo lleva obtener las escrituras?', a: 'Depende de la vía legal. Una usucapión puede tomar de 12 a 24 meses. Una acción proforma, de 6 a 12 meses. Una inmatriculación administrativa puede ser más rápida, entre 3 y 6 meses.' },
              { q: '¿Puedo regularizar si la propiedad está en un asentamiento irregular?', a: 'Sí, existen programas federales (a través de INSUS, antes CORETT) para regularizar asentamientos humanos irregulares. Cada caso se evalúa individualmente.' },
              { q: '¿Qué pasa si perdí el contrato de compraventa?', a: 'Si solo tienes posesión pero perdiste el contrato, la vía de usucapión sigue disponible. Lo importante es demostrar posesión continua, pacífica y pública.' },
              { q: '¿Heredum financia el proceso?', a: 'Sí. En Heredum financiamos y gestionamos todo el proceso de regularización para que no tengas que preocuparte por grandes desembolsos. Nuestro objetivo es que obtengas tus escrituras.' },
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
            Obtén Tus Escrituras Hoy
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            No importa cuál sea tu situación — tenemos la solución legal correcta. Agenda una asesoría gratuita y te decimos exactamente qué necesitas para regularizar tu propiedad.
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
