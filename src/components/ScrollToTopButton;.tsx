'use client'
import { useEffect, useRef, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [_isVisible, _setIsVisible] = useState(false);
  const refTimeOut = useRef<NodeJS.Timeout | null>(null)

  // Mostrar/ocultar el botón dependiendo de la posición del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        if (refTimeOut.current) {
          clearTimeout(refTimeOut.current)
          refTimeOut.current = null
        }
        setIsVisible(true);
        _setIsVisible(true);
      } else {
        _setIsVisible(false);
        if (!refTimeOut.current)
          refTimeOut.current = setTimeout(() => {
            setIsVisible(false)
          }, 300)
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Desplazarse suavemente hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition transform hover:scale-110
            ${_isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
