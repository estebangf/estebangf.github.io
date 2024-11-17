import AnimatedIn from "./AnimatedIn"

interface SkillProps {
  name: string
  level: string
}

const skillsData: SkillProps[] = [
  { name: "React", level: "Avanzado" },
  { name: "TypeScript", level: "Intermedio-Avanzado" },
  { name: "NextJS", level: "Intermedio-Avanzado" },
  { name: "Angular", level: "Intermedio" },
  { name: "Tailwind CSS", level: "Intermedio-Avanzado" },
  { name: "Material UI", level: "Intermedio-Avanzado" },
  { name: "Firebase", level: "Intermedio" },
  { name: "MongoDB", level: "Intermedio" },
  { name: "Node.JS", level: "Intermedio" },
  { name: "Electron", level: "Intermedio" },
  // Agrega más habilidades según sea necesario
]

const SkillItem: React.FC<SkillProps> = ({ name, level }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
    <span className="text-gray-800 font-medium flex items-center">
      <img src={`/skils/${name}.png`} className="h-8 mr-3" />
      {name}
    </span>
    <span className="text-gray-600">{level}</span>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Habilidades</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <AnimatedIn key={index} style={{ animationDelay: `${(index + 1) % 2 * 300}` }}>
              <SkillItem {...skill} />
            </AnimatedIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills