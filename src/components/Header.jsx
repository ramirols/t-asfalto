import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
	{ name: "Inicio", link: "/" },
	{ name: "Nosotros", link: "#nosotros" },
	{ name: "Servicios", link: "#servicios" },
	{ name: "Productos", link: "#productos" },
	{ name: "Contacto", link: "#contacto" },
];

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="fixed top-0 left-0 w-full bg-white/95 shadow-md z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-[60px]">
				<a
					href="/"
					data-aos="fade-in"
					data-aos-delay="200"
				>
					<img
						src="/images/logo-asfalto.svg"
						alt="Logo T-ASFALTO"
						className="h-10 object-contain w-full"
					/>
				</a>

				{/* Desktop menu */}
				<nav className="hidden md:flex items-center space-x-8">
					{menu.map((item) => (
						<a
							key={item.name}
							href={item.link}
							className="text-text font-medium hover:text-yellow-500 transition-colors"
							data-aos="fade-in"
							data-aos-delay="800"
						>
							{item.name}
						</a>
					))}
				</nav>

				{/* Mobile icon */}
				<button
					onClick={toggleMenu}
					className="md:hidden text-2xl text-gray-700 focus:outline-none"
					aria-label="Toggle menu"
					data-aos="fade-in"
					data-aos-delay="600"
				>
					{menuOpen ? <FaTimes color="black" /> : <FaBars color="black" />}
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
						className="md:hidden flex flex-col bg-white border-t border-gray-100 shadow-lg"
					>
						{menu.map((item) => (
							<a
								key={item.name}
								href={item.link}
								onClick={closeMenu}
								className="py-3 text-center text-gray-800 font-medium hover:bg-yellow-50 hover:text-yellow-600 transition-all"
								data-aos="fade-in"
								data-aos-delay="200"
							>
								{item.name}
							</a>
						))}
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}