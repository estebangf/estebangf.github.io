// import WaveDivider from "./WaveDivider"

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-400 to-indigo-700 text-white">
      <h1 className="text-4xl font-bold">¡Hola, soy Esteban Fernández!</h1>
      <p className="mt-4 text-xl">Desarrollador Frontend | React | TypeScript</p>
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
