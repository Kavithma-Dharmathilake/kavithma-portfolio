import { 
  FaReact, FaNode, FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt, FaBrain
} from 'react-icons/fa'
import { 
  SiAngular, SiKotlin, SiMongodb, SiMysql, SiFirebase, SiUnity, SiCplusplus,
  SiDocker, SiKubernetes, SiGooglecloud
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'ReactJS', icon: FaReact, color: '#61DAFB' },
        { name: 'Angular', icon: SiAngular, color: '#DD0031' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#339933' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#ED8B00' },
        { name: 'PHP', icon: FaPhp, color: '#777BB4' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
      ]
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'React Native', icon: FaReact, color: '#61DAFB' },
        { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' }
      ]
    },
    {
      title: 'Other',
      skills: [
        { name: 'Unity', icon: SiUnity, color: '#000000' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'Machine Learning', icon: FaBrain, color: '#FF6F00' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category card">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon
                return (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <Icon />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

