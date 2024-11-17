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
    link: "https://clip-to.vercel.com/wKoXrmw",
    github: "https://clip-to.vercel.com/Ov0xhrd"
  },
  {
    name: "Finanzas Personales",
    title: "Finanzas Personales",
    description: "Una aplicación registro de gastos desarrollado con React, TypeScript, Materia UI y firebase.",
    link: "https://clip-to.vercel.com/kXseCPS",
    github: "https://clip-to.vercel.com/7Z5L-Lq"
  },
  {
    name: "Novo Estilo Admin",
    title: "Novo Estilo - Panel de gestión",
    description: "Una aplicación de gestion de turnos para una pluquería desarrollado con React, TypeScript, Materia UI y firebase.",
    // link: "https://bingojuego.vercel.app",
    github: "https://clip-to.vercel.com/gxengVR"
  },
  {
    name: "Novo Estilo Turnos",
    title: "Novo Estilo - Solicitud de turnos",
    description: "Una aplicación de inscripción a turnos para una pluquería desarrollado con React, TypeScript, Materia UI y firebase.",
    // link: "https://bingojuego.vercel.app",
    github: "https://clip-to.vercel.com/LZVipm_"
  },
  {
    name: "El libro de tu vida",
    title: "El libro de tu vida",
    description: "Una aplicación estilo diario personal desarrollada con Ionic, React, TypeScript y firebase.",
    link: "https://clip-to.vercel.com/7K2_txR",
    github: "https://clip-to.vercel.com/I5lmXVW"
  },
  // Agrega más proyectos aquí
]

const ProjectItem: React.FC<ProjectProps> = ({ name, title, description, link, github }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 h-full">
    <img src={`/projects/${name}.png`} className="mx-auto my-4 h-56" />
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <div className="mx-auto mt-4 space-x-4 flex justify-center items-center">
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex">
          <svg className="h-6 w-6 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
            </g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#080341">
              </path>
            </g>
          </svg>
          Abrir Página
        </a>
      )}
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline flex">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 24 24">
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
      >
        </div>
      <WaveDivider color="#FFFFFF" variant="afect" flipped /> */}

      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Proyectos</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <AnimatedIn key={index} style={{ animationDelay: `${(index % 2) * 300}ms` }}>
              <ProjectItem {...project} />
            </AnimatedIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
