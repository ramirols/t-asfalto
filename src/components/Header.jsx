import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
	{ name: "Inicio", link: "#inicio" },
	{ name: "Nosotros", link: "#nosotros" },
	{ name: "Servicios", link: "#servicios" },
	{ name: "Productos", link: "#productos" },
	{ name: "Contacto", link: "#contacto" },
];

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const closeMenu = () => setMenuOpen(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
				scrolled
					? "bg-[#1a1a1a] shadow-lg shadow-black/30"
					: "bg-[#1a1a1a]/90 backdrop-blur-md"
			}`}
		>
			<div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-[72px]">
				{/* Logo with white background container */}
				<a href="/" className="flex items-center gap-3">
					<img
						src="/images/logo-asfalto.svg"
						alt="Logo T-ASFALTO"
						className="h-11 object-contain brightness-0 invert"
					/>
				</a>

				{/* Desktop menu */}
				<nav className="hidden md:flex items-center gap-8">
					{menu.map((item) => (
						<a
							key={item.name}
							href={item.link}
							className="text-white/75 text-sm font-semibold uppercase tracking-widest hover:text-[#FFDF20] transition-colors duration-300"
						>
							{item.name}
						</a>
					))}
					<a
						href="#contacto"
						className="ml-2 bg-[#FFDF20] hover:bg-[#e6c800] text-[#1a1a1a] font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,223,32,0.35)] hover:-translate-y-0.5"
					>
						Cotización Gratis
					</a>
				</nav>

				{/* Mobile icon */}
				<button
					onClick={toggleMenu}
					className="md:hidden text-2xl text-white focus:outline-none p-2"
					aria-label="Toggle menu"
				>
					{menuOpen ? (
						<FaTimes color="#FFDF20" size={22} />
					) : (
						<FaBars color="white" size={22} />
					)}
				</button>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.25 }}
						className="md:hidden flex flex-col bg-[#1a1a1a] border-t border-white/10"
					>
						{menu.map((item) => (
							<a
								key={item.name}
								href={item.link}
								onClick={closeMenu}
								className="py-4 px-6 text-white/80 font-medium text-sm uppercase tracking-wider hover:bg-white/5 hover:text-[#FFDF20] transition-all border-b border-white/5"
							>
								{item.name}
							</a>
						))}
						<a
							href="#contacto"
							onClick={closeMenu}
							className="m-4 py-3 text-center bg-[#FFDF20] hover:bg-[#e6c800] text-[#1a1a1a] font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
						>
							Cotización Gratis
						</a>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}