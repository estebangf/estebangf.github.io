// import WaveDivider from "./WaveDivider"

import Typewriter from "./Typewriter"
const speed = 25
const texts = [
  "¡Hola, soy Esteban Fernández!",
  "Soy Técnico Superior en Programación con experiencia en desarrollo web utilizando principalmente React, Next.js, Firebase y TypeScript.",
  "Me especializo en crear interfaces modernas con Tailwind CSS y Material-UI, y disfruto programar construyendo diferentes proyectos.",
  "Busco oportunidades remotas donde pueda seguir creciendo y aportar en equipos de desarrollo.",
]
const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-400 to-indigo-700 text-white px-8">
      {texts.map((text, index) => (
        <Typewriter
          key={"hero-text-" + index}
          className={index > 0 ?
            "mt-4 text-xl" :
            "text-4xl font-bold"
          }
          text={text}
          delay={texts.filter((t, i) => i < index).reduce((a, b) => a + b.length, 0) * speed}
          speed={speed}
        />
      ))}
      <a
        href="https://clip-to.vercel.app/4HTRS4U"
        download
        className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
      >
        Descargar CV
      </a>
    </section>
  )
}

export default Hero
