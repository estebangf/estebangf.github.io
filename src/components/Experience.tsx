import AnimatedIn from "./AnimatedIn"

interface ExperienceItemProps {
  title: string
  company: string
  duration: string
  description: string
}

const experienceData: ExperienceItemProps[] = [
  {
    title: "Técnico en Programación",
    company: "Centro Provincial de Enseñanza Media N°28",
    duration: "2020 - Presente",
    description: "Gestiono redes, sistemas informáticos, Google Workspace for Education, Wordpress, redes sociales y brindó apoyo en tecnologías al personal de la institución.",
  },
  {
    title: "Desarrollador Freelance",
    company: "Proyectos personales",
    duration: "2019 - Presente",
    description: "Construyo aplicaciones web segun se me solicita, y en alguna ocación también hice trabajos IOT con arduino o similares."
  },
  {
    title: "Auditor de procesos",
    company: "Instituto X",
    duration: "2018 - 2019",
    description: "Gestiono servidores, revision de procesos y control de inventarios.",
  },
  {
    title: "Profesor de enseñanza media",
    company: "Escuelas varias",
    duration: "2015 - 2018",
    description: "Docente en materias varias entre ellas informática y electricidad.",
  },
]

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, duration, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{company} - {duration}</p>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
)

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Experiencia</h2>
        <div className="mt-10 space-y-6">
          {experienceData.map((item, index) => (
            <AnimatedIn key={index} style={{ animationDelay: `${(index + 1) % 2 * 300}ms` }}>
              <ExperienceItem {...item} />
            </AnimatedIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
