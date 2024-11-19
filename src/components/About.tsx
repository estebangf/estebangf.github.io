import AnimatedIn from "./AnimatedIn"
import WaveDivider from "./WaveDivider"

const About = () => {
  return (
    <section id="about" className="bg-gray-100 relative">
      <WaveDivider desbord color="#4338ca" bg="bg-gray-100" flipped variant="afect" />
      <div className="max-w-5xl py-10 mx-auto px-6 text-center">
        <img src="/about/me.jpeg" className="mx-auto h-64 rounded-full mb-12" />
        <AnimatedIn>
          <h2 className="text-3xl font-semibold text-gray-800">Sobre mí</h2>
        </AnimatedIn>
        <AnimatedIn className="delay-300">
          <p className="mt-4 text-gray-600">
            Soy un desarrollador apasionado con experiencia en frontend, especializado en construir aplicaciones modernas con React y TypeScript. También tengo conocimientos sólidos en Next.js, Tailwind CSS, y Material UI, lo que me permite diseñar interfaces atractivas y funcionales.
          </p>
          <p className="mt-4 text-gray-600">
            Además, me gusta experimentar con tecnologías como Firebase, MongoDB, y Node.js para crear soluciones completas, así como explorar frameworks como Angular e Ionic.
          </p>
          <p className="mt-4 text-gray-600">
            Mi interés por la tecnología también abarca el desarrollo con Electron y proyectos más técnicos con Arduino. Disfruto trabajar en equipo, enfrentar nuevos desafíos y mantenerme actualizado con las últimas tendencias para seguir mejorando mis habilidades.
          </p>
        </AnimatedIn>
      </div>
      <WaveDivider color="#FFFFFF" variant="afect" />
    </section>
  )
}

export default About
