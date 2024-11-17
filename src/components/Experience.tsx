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
    company: "Instituto X",
    duration: "2020 - Presente",
    description: "Gestiono redes, sistemas informáticos y brindó apoyo en tecnologías en la institución.",
  },
  {
    title: "Desarrollador Freelance",
    company: "Proyectos personales",
    duration: "2019 - Presente",
    description: "Construyo aplicaciones con React, TypeScript y Tailwind CSS, mejorando habilidades en desarrollo frontend."
  }
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
            <AnimatedIn key={index} style={{ animationDelay: `${(index + 1) % 2 * 300}` }}>
              <ExperienceItem {...item} />
            </AnimatedIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
