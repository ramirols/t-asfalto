import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Hero1 from "../assets/images/hero1.webp";
import Hero2 from "../assets/images/hero1.webp";
import Hero3 from "../assets/images/hero1.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Slider() {
  return (
    <section className="relative w-full h-[75vh] max-[980px]:h-[60vh]">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={1200}
        fadeEffect={{ crossFade: true }}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src={Hero1.src}
              alt="Venta de Asfalto RC-250"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              data-aos="fade-in"
              data-aos-delay="100"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6" data-aos="fade-in" data-aos-delay="200">
              <motion.div
                className="max-w-2xl text-white"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                key="slide1"
              >
                <h1
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Venta de Asfalto RC-250 en Lima y todo el Perú
                </h1>
                <motion.p
                  variants={fadeUp}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl mb-6"
                >
                  Distribuimos asfalto de alta calidad para obras civiles e industriales.
                </motion.p>
                <motion.a
                  href="#contacto"
                  variants={fadeUp}
                  transition={{ delay: 0.4 }}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Cotizar Ahora
                </motion.a>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src={Hero2.src}
              loading="lazy"
              alt="Asfalto MC-30"
              className="absolute inset-0 w-full h-full object-cover"
              data-aos="fade-in"
              data-aos-delay="100"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6" data-aos="fade-in" data-aos-delay="200">
              <motion.div
                className="max-w-2xl text-white"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                key="slide2"
              >
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Asfalto MC-30 y RC-250 para proyectos de infraestructura
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl mb-6"
                >
                  Garantizamos productos certificados y entrega inmediata.
                </motion.p>
                <motion.a
                  href="#contacto"
                  variants={fadeUp}
                  transition={{ delay: 0.4 }}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Solicitar Información
                </motion.a>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src={Hero3.src}
              loading="lazy"
              alt="Soluciones de pavimentación"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
              <motion.div
                className="max-w-2xl text-white"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                key="slide3"
              >
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Soluciones de pavimentación y sellado vial
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl mb-6"
                >
                  Trabajamos con empresas constructoras, municipios y proyectos industriales.
                </motion.p>
                <motion.a
                  href="#contacto"
                  variants={fadeUp}
                  transition={{ delay: 0.4 }}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Contáctanos
                </motion.a>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}