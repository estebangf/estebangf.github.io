import AnimatedIn from "./AnimatedIn"
import WaveDivider from "./WaveDivider"

const About = () => {
  return (
    <section id="about" className="bg-gray-100 relative">
      <WaveDivider desbord color="#4338ca" bg="bg-gray-100" flipped variant="afect" />
      <div className="max-w-5xl py-10 mx-auto px-6 text-center">
        <img src={`/about/me.jpeg`} className="mx-auto h-64 rounded-full mb-12" />
        <AnimatedIn>
          <h2 className="text-3xl font-semibold text-gray-800">Sobre mí</h2>
        </AnimatedIn>
        <AnimatedIn className="delay-300">
          <p className="mt-4 text-gray-600">
            Soy un desarrollador apasionado con experiencia en frontend, enfocado en construir aplicaciones modernas con React y TypeScript. Disfruto trabajar en proyectos colaborativos y me esfuerzo en aprender continuamente para mejorar mis habilidades y estar al día con las últimas tecnologías.
          </p>
        </AnimatedIn>
      </div>
      <WaveDivider color="#FFFFFF" variant="afect" />
    </section>
  )
}

export default About
