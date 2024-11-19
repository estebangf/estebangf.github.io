'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/ocultar el botón dependiendo de la posición del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  return (
    <nav className={`
        fixed top-0 left-0 right-0 w-full z-50 transition-all backdrop-blur-sm
        ${isVisible && 'scale-90 bg-white/85 shadow-md mt-3 rounded-full'}
      `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
        <div className={`
          text-xl font-bold
          ${isVisible ? 'text-blue-600 hover:text-blue-800' : 'text-white'}
        `}>
          <Link href="#hero">
            <img src='/logo.png' alt="Esteban Fernández" className="h-10" />
          </Link>
        </div>

        {/* Menú Hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-600 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links de Navegación */}
        <div
          className={`${isOpen ? "block animate-fadeIn" : "hidden"}
            md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static left-0 top-16 md:top-0 w-full md:w-auto py-6 md:py-0 px-4 md:px-0 backdrop-blur-sm
          ${isVisible ?
              'backdrop-blur-md md:backdrop-blur-none bg-white/90 md:bg-transparent shadow-md md:shadow-none my-2 rounded-3xl scale-90 md:scale-100 mx-auto text-blue-600 hover:text-blue-800' :
              'backdrop-blur-md bg-gradient-to-b from-transparent to-blue-400/80 rounded-b-3xl md:bg-transparent md:to-transparent text-white'}
            `}
        >
          <Link
            href="#about"
            className={`
                block  transition
                ${isVisible ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}
              `}
          >
            Sobre mí
          </Link>
          <Link
            href="#experience"
            className={`
              block  transition
                ${isVisible ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}
          `}
          >
            Experiencia
          </Link>
          <Link
            href="#projects"
            className={`
                block  transition
                ${isVisible ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}
              `}
          >
            Proyectos
          </Link>
          <Link
            href="#skills"
            className={`
              block  transition
                ${isVisible ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}
          `}
          >
            Habilidades
          </Link>
          <Link
            href="#contact"
            className={`
                block  transition
                ${isVisible ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}
              `}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
