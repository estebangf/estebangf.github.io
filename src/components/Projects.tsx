import AnimatedIn from "./AnimatedIn"

interface ProjectProps {
  name: string
  title: string
  description: string
  link: string
  github: string
}

const projectsData: ProjectProps[] = [
  {
    name: "ClipTo",
    title: "ClipTo - Acortador de URLs",
    description: "Un acortador de URLs desarrollado con React, TypeScript, Tailwind CSS, Next.js y MongoDB, con autenticación Google OAuth.",
    link: "https://clipto.vercel.app",
    github: "https://github.com/tuusuario/clipto"
  },
  {
    name: "Finanzas personales",
    title: "Finanzas personales",
    description: "Una aplicación de gestion de turnos para una pluquería desarrollado con React, TypeScript, Materia UI y firebase.",
    link: "https://bingojuego.vercel.app",
    github: "https://github.com/tuusuario/bingo-interactivo"
  },
  {
    name: "Novo Estilo Admin",
    title: "Novo Estilo - Panel de gestión",
    description: "Una aplicación de gestion de turnos para una pluquería desarrollado con React, TypeScript, Materia UI y firebase.",
    link: "https://bingojuego.vercel.app",
    github: "https://github.com/tuusuario/bingo-interactivo"
  },
  {
    name: "Novo Estilo Turnos",
    title: "Novo Estilo - Solicitud de turnos",
    description: "Una aplicación de inscripción a turnos para una pluquería desarrollado con React, TypeScript, Materia UI y firebase.",
    link: "https://bingojuego.vercel.app",
    github: "https://github.com/tuusuario/bingo-interactivo"
  },
  {
    name: "El libro de tu vida",
    title: "El libro de tu vida",
    description: "Una aplicación de gestion de turnos para una pluquería desarrollado con React, TypeScript, Materia UI y firebase.",
    link: "https://bingojuego.vercel.app",
    github: "https://github.com/tuusuario/bingo-interactivo"
  },
  // Agrega más proyectos aquí
]

const ProjectItem: React.FC<ProjectProps> = ({ name, title, description, link, github }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
    <img src={`/projects/${name}.png`} className="mx-auto my-4 h-56" />
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <div className="mt-4 space-x-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Demo</a>
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">Código</a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 relative">
      {/* <div
        className="absolute inset-0 bg-center opacity-10 bg-[url('/code-background.webp')] bg-contain bg-repeat"
      ></div>
      <WaveDivider color="#FFFFFF" variant="afect" flipped /> */}

      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Proyectos</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <AnimatedIn key={index} style={{ animationDelay: `${(index % 2) * 300} ` }}>
              <ProjectItem {...project} />
            </AnimatedIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
