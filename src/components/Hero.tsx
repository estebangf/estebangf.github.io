// import WaveDivider from "./WaveDivider"

import Typewriter from "./Typewriter"

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-400 to-indigo-700 text-white">
      <Typewriter
        className="text-4xl font-bold"
        text="¡Hola, soy Esteban Fernández!"
      />
      <Typewriter
        className="mt-4 text-xl"
        text="Desarrollador Frontend en constante evolución. Trabajo principalmente con React y TypeScript para construir aplicaciones de última generación."
        delay={"¡Hola, soy Esteban Fernández!".length * 100}
        speed={50}
      />
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
