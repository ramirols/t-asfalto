import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Hero1 from "../assets/images/hero1.webp";
import Hero2 from "../assets/images/hero1.webp";
import Hero3 from "../assets/images/hero1.webp";

export default function Hero() {

	return (
		<section className="relative w-full h-[75vh] max-[980px]:h-[45vh]">
			<Swiper
				modules={[EffectFade, Pagination, Autoplay]}
				effect="fade"
				loop={true}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
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
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
							<div className="max-w-2xl text-white transition-all duration-700">
								<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
									Venta de Asfalto RC-250 en Lima y todo el Perú
								</h1>
								<p className="text-lg md:text-xl mb-6">
									Distribuimos asfalto de alta calidad para obras civiles e industriales.
								</p>
								<a
									href="#contacto"
									className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
								>
									Cotizar Ahora
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>

				{/* Slide 2 */}
				<SwiperSlide>
					<div className="relative h-full w-full">
						<img
							src={Hero2.src}
							alt="Asfalto MC-30"
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
							<div className="max-w-2xl text-white transition-all duration-700">
								<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
									Asfalto MC-30 y RC-250 para proyectos de infraestructura
								</h1>
								<p className="text-lg md:text-xl mb-6">
									Garantizamos productos certificados y entrega inmediata.
								</p>
								<a
									href="#contacto"
									className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
								>
									Solicitar Información
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>

				{/* Slide 3 */}
				<SwiperSlide>
					<div className="relative h-full w-full">
						<img
							src={Hero3.src}
							alt="Soluciones de pavimentación"
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
							<div className="max-w-2xl text-white transition-all duration-700">
								<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
									Soluciones de pavimentación y sellado vial
								</h1>
								<p className="text-lg md:text-xl mb-6">
									Trabajamos con empresas constructoras, municipios y proyectos industriales.
								</p>
								<a
									href="#contacto"
									className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
								>
									Contáctanos
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}