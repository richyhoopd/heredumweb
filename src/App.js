import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import IntestadoPage from './IntestadoPage';
import EscriturasPage from './EscriturasPage';

/* ─────────────── ICONS (inline SVGs) ─────────────── */
const IconGavel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const IconDocument = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const IconLand = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
  </svg>
);

const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const IconKey = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
  </svg>
);

const IconGift = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
  </svg>
);

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const IconChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const WA_LINK = 'https://wa.me/523313013253?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20para%20regularizar%20mi%20propiedad.';

/* ─────────────── SCROLL OBSERVER HOOK ─────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, inView];
}

/* ─────────────── NAVBAR ─────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-dark-800'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <img
            src="/iconh.png"
            alt="Heredum"
            className={`h-9 w-auto transition-all duration-300 ${scrolled ? 'invert' : ''}`}
          />
          <div className={`text-2xl md:text-3xl font-display font-bold tracking-wider transition-colors duration-300 ${scrolled ? 'text-dark-800' : 'text-white'}`}>
            HEREDUM
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: '#inicio', label: 'Inicio' },
            { href: '#problemas', label: '¿Tu situación?' },
            { href: '#soluciones', label: 'Soluciones' },
            { href: '#proceso', label: 'Proceso' },
            { href: '#nosotros', label: 'Nosotros' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-300 hover:text-gold-500 ${scrolled ? 'text-dark-600' : 'text-white/90'}`}
            >
              {link.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2 !px-6 !py-2.5 text-sm">
            <IconPhone />
            Contactar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-dark-800' : 'text-white'}`}
          aria-label="Menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 px-6 py-6 space-y-4">
          {[
            { href: '#inicio', label: 'Inicio' },
            { href: '#problemas', label: '¿Tu situación?' },
            { href: '#soluciones', label: 'Soluciones' },
            { href: '#proceso', label: 'Proceso' },
            { href: '#nosotros', label: 'Nosotros' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-dark-700 font-semibold text-base hover:text-gold-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center justify-center gap-2 w-full text-center !py-3">
            <IconPhone />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/hero-house.png', alt: 'Casa de lujo en Guadalajara' },
    { src: '/house-interior.png', alt: 'Interior de residencia premium' },
    { src: '/neighborhood-aerial.png', alt: 'Colonia residencial en Jalisco' },
    { src: '/family-keys.png', alt: 'Familia recibiendo las llaves de su hogar' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="inicio" className="pt-24 pb-12 md:pt-28 md:pb-16 bg-dark-800 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="animate-slide-up order-2 lg:order-1">
            <div className="inline-block mb-5 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
              <span className="text-gold-400 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase">Regularización de Propiedades en Jalisco</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Tu Herencia,{' '}
              <span className="text-gradient-gold">Tu Patrimonio</span>,{' '}
              Hoy.
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              Somos expertos en soluciones legales para propiedades intestadas, sin escrituras o con problemas de regularización.{' '}
              <strong className="text-white">Protege tu patrimonio familiar.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-3 !px-8 !py-3.5">
                <IconPhone />
                Agenda Tu Asesoría Gratis
              </a>
              <a href="#problemas" className="btn-outline-gold !border-white/20 !text-white hover:!bg-white/5 hover:!border-gold-500 hover:!text-gold-400 flex items-center gap-2 !px-8 !py-3.5">
                Conoce Más
                <IconChevronDown />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-5 text-gray-500 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <IconShield />
                <span>Asesoría Especializada</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5">
                <IconDocument />
                <span>+500 Casos</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5">
                <IconKey />
                <span>Guadalajara, Jal.</span>
              </div>
            </div>
          </div>

          {/* Right — Image Slider */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 aspect-[4/3]">
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.src}
                  alt={slide.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    i === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentSlide ? 'w-8 bg-gold-500' : 'w-4 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Imagen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROBLEM SECTION ─────────────── */
function ProblemSection() {
  const [ref, inView] = useInView();
  const problems = [
    {
      question: '¿Tienes una casa intestada?',
      description: 'El dueño falleció y nadie puede vender, rentar ni hipotecar la propiedad hasta que se designe a los herederos legalmente.',
      icon: <IconGavel />,
      image: '/legal-documents.png',
      link: '/intestado',
    },
    {
      question: '¿Tienes una casa pero no las escrituras?',
      description: 'Llevas años viviendo en tu propiedad, pagas servicios y predial, pero no tienes documentos legales que te acrediten como dueño.',
      icon: <IconDocument />,
      image: '/house-interior.png',
      link: '/escrituras',
    },
  ];

  return (
    <section id="problemas" className="section-padding bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase">¿Te identificas?</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-dark-800 mt-3 mb-5">
            Sabemos Por Lo Que Estás Pasando
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.question}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center text-gold-400">
                  {p.icon}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  {p.question}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {p.description}
                </p>
                <Link to={p.link} className="inline-flex items-center gap-2 mt-4 text-gold-400 font-semibold hover:text-gold-300 transition-colors group/link">
                  Conoce más
                  <span className="group-hover/link:translate-x-1 transition-transform"><IconArrowRight /></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SOLUTIONS MAP ─────────────── */
function SolutionsSection() {
  const [ref, inView] = useInView();
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      icon: <IconGavel />,
      title: 'Juicio Intestamentario',
      subtitle: 'Dueño falleció sin testamento',
      where: 'Juzgados de lo Familiar (Jalisco)',
      description: 'La propiedad sigue legalmente a nombre de una persona fallecida. Nadie tiene poder legal para venderla, rentarla o hipotecarla hasta que se designen herederos.',
      steps: [
        'Denuncia del Intestado — Se notifica al juez del fallecimiento',
        'Declaratoria de Herederos — El juez reconoce a los herederos legales',
        'Inventario y Avalúo — Se listan los bienes y su valor',
        'Adjudicación — Se emite nueva escritura a nombre de los herederos',
      ],
      docs: ['Acta de Defunción', 'Actas de Nacimiento', 'Acta de Matrimonio', 'Escrituras de la propiedad'],
    },
    {
      icon: <IconDocument />,
      title: 'Acción Proforma',
      subtitle: 'Vendedor no firma las escrituras',
      where: 'Juzgados Civiles (Jalisco)',
      description: 'Tienes un contrato privado de compraventa y pagaste el precio acordado, pero el vendedor se niega a acudir al notario o te da largas.',
      steps: [
        'Demanda Civil — Se inicia un juicio de "Otorgamiento y Firma de Escritura"',
        'Pruebas — Se presenta el contrato original y recibos de pago',
        'Sentencia — El juez condena al vendedor a firmar la escritura',
      ],
      docs: ['Contrato privado de compraventa', 'Recibos de pago', 'Identificación oficial'],
      highlight: 'Si el vendedor no firma, ¡EL JUEZ FIRMA POR ÉL EN REBELDÍA!',
    },
    {
      icon: <IconSearch />,
      title: 'Inmatriculación',
      subtitle: 'Predio no aparece en Registro Público',
      where: 'Catastro y Registro Público de la Propiedad',
      description: 'La propiedad existe físicamente, pero no tiene antecedentes en el Registro Público. Legalmente es "invisible", como una persona sin acta de nacimiento.',
      steps: [
        'Certificado de No Inscripción — El Registro Público certifica que el predio NO está registrado',
        'Constancia Catastral — Se demuestra existencia en el padrón municipal',
        'Resolución — Un Juez autoriza crear la primera escritura',
        'Alta en RPP — Se genera el primer folio real de la propiedad',
      ],
      docs: ['Constancia catastral', 'Comprobantes de pago de predial', 'Identificación oficial'],
    },
    {
      icon: <IconLand />,
      title: 'Dominio Pleno ante el RAN',
      subtitle: 'Terreno de un Ejido',
      where: 'Registro Agrario Nacional (RAN)',
      description: 'La tierra pertenece legalmente al Ejido. Tienes un Certificado Parcelario que te da derecho de uso (usufructo), pero no es una Escritura Pública.',
      steps: [
        'Asamblea Dura — La Asamblea Ejidal autoriza la adopción del Dominio Pleno',
        'Gestión ante el RAN — Se inscribe el acta de asamblea',
        'Título de Propiedad — El RAN cancela el Certificado Parcelario y emite el Título',
      ],
      docs: ['Certificado Parcelario', 'Acta de asamblea ejidal', 'Identificación oficial'],
    },
    {
      icon: <IconHome />,
      title: 'Usucapión',
      subtitle: 'Posesión sin papeles',
      where: 'Juzgados Civiles (Jalisco)',
      description: 'Llevas años viviendo en la propiedad, pagas servicios y predial, los vecinos te reconocen como dueño, pero no tienes escrituras ni contrato de compraventa.',
      steps: [
        'Posesión Pacífica — Sin violencia',
        'Continua — Sin interrupciones',
        'Pública — A la vista de todos',
        'En concepto de Propietario — 5 años (Buena Fe) o 10 años (Mala Fe)',
      ],
      docs: ['Comprobantes de servicios', 'Recibos de predial', 'Testimonios de vecinos'],
    },
    {
      icon: <IconKey />,
      title: 'Cancelación de Hipoteca',
      subtitle: 'Crédito pagado sin liberar',
      where: 'Notarías Públicas',
      description: 'Terminaste de pagar al Banco o INFONAVIT y tienes tu carta de "Saldo Cero", pero en el Registro Público la casa sigue apareciendo con deuda.',
      steps: [
        'Carta de Instrucción — Solicita a la institución financiera la carta dirigida al notario',
        'Notario Público — Elige un notario para elaborar la escritura de cancelación',
        'Firma del Banco — El representante legal del banco firma la liberación',
        'Registro Público — Se inscribe la cancelación para borrar el gravamen',
      ],
      docs: ['Carta de saldo cero', 'Escrituras originales', 'Identificación oficial'],
    },
    {
      icon: <IconGift />,
      title: 'Donación Formal',
      subtitle: 'Donación verbal de padres a hijos',
      where: 'Notarías Públicas',
      description: 'Las donaciones verbales de bienes inmuebles son NULAS. Si el dueño fallece sin firmar, la propiedad entra a Juicio Sucesorio y se reparte entre todos los herederos legales.',
      steps: [
        'Acudir con Escrituras y Predial',
        'Realizar Avalúo de la propiedad',
        'Firmar Escritura de Donación ante Notario',
      ],
      docs: ['Escrituras', 'Predial al corriente', 'Avalúo'],
      highlight: 'Las donaciones entre padres e hijos están EXENTAS de ISR',
    },
  ];

  const current = solutions[activeTab];

  return (
    <section id="soluciones" className="section-padding bg-dark-800 text-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase">Mapa de Soluciones</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-5">
            Una Solución Para Cada Problema
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Cada situación legal tiene un camino claro. Identifica tu caso y conoce exactamente cómo lo resolveremos.
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          {solutions.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span className="hidden sm:inline">{s.icon}</span>
              <span className="whitespace-nowrap">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 text-gold-500 mb-4">
                {current.icon}
                <span className="text-sm font-semibold uppercase tracking-wider">{current.subtitle}</span>
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">{current.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{current.description}</p>
              
              {current.highlight && (
                <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-4 mb-6">
                  <p className="text-gold-400 font-semibold text-sm">
                    ⚡ {current.highlight}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Documentos necesarios:</h4>
                <div className="flex flex-wrap gap-2">
                  {current.docs.map((doc, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-300">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                Gestionar en: {current.where}
              </p>
            </div>

            {/* Right — Steps */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Proceso paso a paso:</h4>
              <div className="space-y-4">
                {current.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500 font-bold text-sm border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-200 text-sm leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-8 inline-flex items-center gap-3"
              >
                <IconPhone />
                Iniciar Este Proceso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROCESS / HOW IT WORKS ─────────────── */
function ProcessSection() {
  const [ref, inView] = useInView();
  const steps = [
    { num: '01', title: 'Asesoría Legal', desc: 'Diagnóstico gratuito de tu caso para elegir la vía correcta.' },
    { num: '02', title: 'Expediente', desc: 'Recopilación de documentos y pruebas necesarias.' },
    { num: '03', title: 'Gestión', desc: 'Presentación de demanda o trámite administrativo.' },
    { num: '04', title: 'Resolución', desc: 'Sentencia del Juez o Título de Propiedad.' },
    { num: '05', title: 'Inscripción', desc: 'Registro Público para obtener la Escritura.' },
  ];
  return (
    <section id="proceso" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] hidden lg:block">
        <img src="/family-keys.png" alt="Familia recibiendo llaves" className="w-full h-auto rounded-l-3xl shadow-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`max-w-2xl mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase">La Ruta</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-dark-800 mt-3 mb-5">
            Hacia la Seguridad Jurídica
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-500 mt-6">
            Un proceso claro y transparente, de principio a fin. Nosotros nos encargamos de todo para que tú solo te preocupes por disfrutar tu patrimonio.
          </p>
        </div>

        <div className="max-w-2xl space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 group transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white font-display text-xl font-bold shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform duration-300">
                {step.num}
              </div>
              <div className="pt-1">
                <h3 className="font-display text-xl font-bold text-dark-800 mb-1">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT / TRUST ─────────────── */
function AboutSection() {
  const [ref, inView] = useInView();
  const stats = [
    { num: '500+', label: 'Casos Resueltos' },
    { num: '98%', label: 'Clientes Satisfechos' },
    { num: '15+', label: 'Años de Experiencia' },
    { num: '7', label: 'Soluciones Legales' },
  ];

  return (
    <section id="nosotros" className="section-padding bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4">
              <img src="/hero-house.png" alt="Casa de lujo" className="rounded-2xl shadow-xl w-full h-48 object-cover" />
              <img src="/neighborhood-aerial.png" alt="Colonia residencial" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="/house-interior.png" alt="Interior de lujo" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
              <img src="/legal-documents.png" alt="Documentos legales" className="rounded-2xl shadow-xl w-full h-48 object-cover" />
            </div>
          </div>

          {/* Right — Content */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <span className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase">¿Por qué Heredum?</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-dark-800 mt-3 mb-5">
              Seguridad, Firmeza y Confianza
            </h2>
            <div className="gold-divider" />
            
            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
              En <strong className="text-dark-800">Heredum</strong>, nos especializamos en la regularización 
              de propiedades en Jalisco. Financiamos y gestionamos todo el proceso legal para que tu patrimonio 
              esté debidamente protegido.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Asesoría legal personalizada y gratuita',
                'Financiamiento del proceso completo',
                'Equipo especializado en derecho inmobiliario',
                'Acompañamiento de inicio a fin',
                'Resultados garantizados',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-dark-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600">
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">{stat.num}</div>
                  <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA SECTION ─────────────── */
function CTASection() {
  const [ref, inView] = useInView();
  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src="/neighborhood-aerial.png" alt="Colonia" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-900/85" />
      </div>

      <div className={`relative max-w-4xl mx-auto text-center px-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
          No Dejes Problemas,{' '}
          <span className="text-gradient-gold">Deja Soluciones</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Agenda una asesoría gratuita y sin compromiso. Evaluamos tu caso y te damos un plan claro 
          para regularizar tu propiedad.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-3 text-lg !px-12 !py-5 animate-pulse-gold"
        >
          <IconPhone />
          ¡Agenda Tu Asesoría Personalizada!
        </a>
        <p className="text-gray-500 text-sm mt-6">
          Respuesta en menos de 24 horas · Sin costo · Sin compromiso
        </p>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src="/iconh.png" alt="Heredum" className="h-10 w-auto" />
              <div className="text-3xl font-display font-bold text-white tracking-wider">HEREDUM</div>
            </div>
            <p className="text-gold-500 font-semibold mb-4">Tu Herencia, Tu Patrimonio, Hoy.</p>
            <p className="text-gray-500 leading-relaxed max-w-md">
              Expertos en regularización de propiedades en Jalisco. Financiamos y gestionamos 
              todo el proceso legal para proteger tu patrimonio familiar.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Soluciones</h4>
            <ul className="space-y-2 text-sm">
              {['Juicio Intestamentario', 'Acción Proforma', 'Inmatriculación', 'Dominio Pleno', 'Usucapión', 'Cancelación de Hipoteca', 'Donación Formal'].map((s, i) => (
                <li key={i}>
                  <a href="#soluciones" className="hover:text-gold-500 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <IconPhone />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
                  +52 33 1301 3253
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                contacto@heredum.mx
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Guadalajara, Jalisco
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Heredum. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Tu Herencia, Tu Patrimonio, Hoy.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── FLOATING WhatsApp BUTTON ─────────────── */
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-green-900/30 hover:scale-110 transition-all duration-300 animate-pulse-gold ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="Contactar por WhatsApp"
      style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
    >
      <IconPhone />
    </a>
  );
}

/* ─────────────── HOME PAGE ─────────────── */
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <ProcessSection />
      <AboutSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

/* ─────────────── APP ─────────────── */
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intestado" element={<IntestadoPage />} />
        <Route path="/escrituras" element={<EscriturasPage />} />
      </Routes>
    </div>
  );
}

export default App;
