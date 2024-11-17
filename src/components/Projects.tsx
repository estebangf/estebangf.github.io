import AnimatedIn from "./AnimatedIn"

interface ProjectProps {
  name: string
  title: string
  description: string
  link?: string
  github: string
}

const projectsData: ProjectProps[] = [
  {
    name: "ClipTo",
    title: "ClipTo - Acortador de URLs",
    description: "Un acortador de URLs desarrollado con React, TypeScript, Tailwind CSS, Next.js y MongoDB, con autenticación Google OAuth.",
    link: "https://clipto.vercel.app",
    github: "https://github.com/estebangf/clipto"
  },
  {
    name: "Finanzas personales",
    title: "Finanzas personales",
    description: "Una aplicación registro de gastos desarrollado con React, TypeScript, Materia UI y firebase.",
    link: "https://finanzas-personales-17892.web.app/",
    github: "https://github.com/estebangf/finanzas-personales"
  },
  {
    name: "Novo Estilo Admin",
    title: "Novo Estilo - Panel de gestión",
    description: "Una aplicación de gestion de turnos para una pluquería desarrollado con React, TypeScript, Materia UI y firebase.",
    link: "https://bingojuego.vercel.app",
    github: "https://github.com/estebangf/novo-estilo-admin"
  },
  {
    name: "Novo Estilo Turnos",
    title: "Novo Estilo - Solicitud de turnos",
    description: "Una aplicación de inscripción a turnos para una pluquería desarrollado con React, TypeScript, Materia UI y firebase.",
    link: "https://bingojuego.vercel.app",
    github: "https://github.com/estebangf/novo-estilo-public"
  },
  {
    name: "El libro de tu vida",
    title: "El libro de tu vida",
    description: "Una aplicación estilo diario personal desarrollada con Ionic, React, TypeScript y firebase.",
    link: "https://bingojuego.vercel.app",
    github: "https://github.com/estebangf/el-libro-de-tu-vida"
  },
  // Agrega más proyectos aquí
]

const ProjectItem: React.FC<ProjectProps> = ({ name, title, description, link, github }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
    <img src={`/projects/${name}.png`} className="mx-auto my-4 h-56" />
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <div className="mt-4 space-x-4">
      {link && (<a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Abrir Página</a>)}
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.07 3.3 9.38 7.9 10.9.58.1.8-.26.8-.58v-2.15c-3.23.7-3.9-1.56-3.9-1.56-.52-1.3-1.25-1.64-1.25-1.64-1.02-.7.07-.68.07-.68 1.12.08 1.7 1.15 1.7 1.15 1 .17.8 1.34.8 1.34 1.62.84 3.23.6 4-.46.16-.76.42-1.16.76-1.42-2.56-.3-5.26-1.28-5.26-5.66 0-1.26.45-2.28 1.2-3.07-.1-.3-.5-1.54.2-3.23 0 0 .96-.3 3.14 1.16.9-.26 1.86-.38 2.82-.38.96 0 1.92.12 2.82.38 2.18-1.46 3.14-1.16 3.14-1.16.7 1.7.3 2.93.2 3.23.75.79 1.2 1.8 1.2 3.07 0 4.4-2.7 5.36-5.26 5.66.43.37.8 1.1.8 2.2v3.24c0 .32.22.68.8.58A10.48 10.48 0 0 0 23.5 12c0-6.27-5.24-11.5-11.5-11.5z" />
        </svg>
        Código
      </a>
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
