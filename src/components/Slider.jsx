import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Hero1 from "../assets/images/hero1.webp";

const stats = [
  { value: "10+", label: "Años de Experiencia" },
  { value: "500+", label: "Proyectos Realizados" },
  { value: "100%", label: "Satisfacción Garantizada" },
];

const slides = [
  {
    image: Hero1.src,
    badge: "Lima, Perú · Distribución Nacional",
    titleLine1: "Venta de Asfalto",
    titleHighlight: "RC-250",
    titleLine2: "en Perú",
    subtitle: "Distribuimos asfalto de alta calidad para obras civiles e industriales.",
    cta: "Cotizar Ahora",
    ctaLink: "#contacto",
  },
  {
    image: Hero1.src,
    badge: "Productos Certificados",
    titleLine1: "Asfalto",
    titleHighlight: "MC-30",
    titleLine2: "y RC-250",
    subtitle: "Garantizamos productos certificados y entrega inmediata.",
    cta: "Solicitar Información",
    ctaLink: "#contacto",
  },
  {
    image: Hero1.src,
    badge: "Soluciones Completas",
    titleLine1: "Pavimentación",
    titleHighlight: "y Sellado",
    titleLine2: "Vial",
    subtitle: "Trabajamos con empresas constructoras, municipios y proyectos industriales.",
    cta: "Contáctanos",
    ctaLink: "#contacto",
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="inicio" className="relative w-full">
      {/* Hero Slider */}
      <div className="relative h-[92vh] max-[980px]:h-[75vh]">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          speed={1400}
          fadeEffect={{ crossFade: true }}
          className="h-full w-full hero-swiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full overflow-hidden">
                {/* Background image with Ken Burns zoom */}
                <img
                  src={slide.image}
                  alt={slide.titleLine1}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 w-full h-full object-cover hero-zoom"
                />

                {/* Multi-layer overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-[#1a1a1a]/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/50 via-transparent to-[#1a1a1a]/30" />

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFDF20]/5 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFDF20]/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <div className={`max-w-4xl ${activeIndex === index ? 'hero-content-active' : 'hero-content-inactive'}`}>
                    {/* Badge */}
                    <div className="hero-el hero-el-1 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFDF20]/40 bg-[#FFDF20]/10 backdrop-blur-md text-[#FFDF20] text-xs font-bold tracking-[0.3em] uppercase mb-8">
                      <span className="h-2 w-2 rounded-full bg-[#FFDF20] animate-pulse" />
                      {slide.badge}
                    </div>

                    {/* Title with text shadow for depth */}
                    <h1 className="hero-el hero-el-2 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] mb-6" style={{textShadow: '0 4px 30px rgba(0,0,0,0.5)'}}>
                      {slide.titleLine1}
                      <br />
                      <span className="text-[#FFDF20] drop-shadow-[0_2px_15px_rgba(255,223,32,0.4)]">{slide.titleHighlight}</span>{" "}
                      {slide.titleLine2}
                    </h1>

                    {/* Decorative line */}
                    <div className="hero-el hero-el-3 flex items-center justify-center gap-3 mb-6">
                      <div className="w-12 h-px bg-[#FFDF20]/50" />
                      <div className="w-2 h-2 rotate-45 border border-[#FFDF20]/50" />
                      <div className="w-12 h-px bg-[#FFDF20]/50" />
                    </div>

                    {/* Subtitle */}
                    <p className="hero-el hero-el-4 text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto font-medium" style={{textShadow: '0 2px 10px rgba(0,0,0,0.4)'}}>
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-el hero-el-5 flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={slide.ctaLink}
                        className="group inline-flex items-center justify-center gap-2 bg-[#FFDF20] hover:bg-[#e6c800] text-[#1a1a1a] font-bold py-4 px-10 rounded-lg transition-all duration-300 text-base uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,223,32,0.4)] hover:-translate-y-1"
                      >
                        {slide.cta}
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </a>
                      <a
                        href="tel:+51987654321"
                        className="group inline-flex items-center justify-center gap-2 border-2 border-white/25 bg-white/5 backdrop-blur-md text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 text-base uppercase tracking-widest hover:border-[#FFDF20] hover:text-[#FFDF20] hover:bg-[#FFDF20]/5"
                      >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        Llamar Ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Side decorative elements */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#FFDF20]/40 to-transparent" />
          <div className="text-[10px] text-white/40 tracking-[0.3em] uppercase" style={{writingMode: 'vertical-rl'}}>P-ASFALTO</div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#FFDF20]/40 to-transparent" />
        </div>

      </div>

      {/* Stats Bar */}
      <div className="relative bg-[#1a1a1a] border-t border-[#FFDF20]/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,223,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,223,32,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#FFDF20]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#FFDF20]/5 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group" data-aos="fade-up" data-aos-delay={String(i * 150)}>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-br from-[#FFDF20] via-[#e6c800] to-[#FFDF20] bg-clip-text text-transparent leading-none transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="w-8 h-0.5 bg-[#FFDF20]/30 mx-auto mt-3 mb-2 group-hover:w-16 transition-all duration-500" />
                <div className="text-[10px] sm:text-xs md:text-sm text-white/50 uppercase tracking-[0.2em] font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}