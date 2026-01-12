import { FaCalendarAlt, FaCode } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Trainee Software Engineer',
      company: '99x',
      period: 'Nov 2024 – May 2025',
      technologies: ['Machine Learning', 'Computer Vision', 'AI Agents', '.NET', 'Angular', 'Power Platforms'],
      achievements: [
        'Gained 6 months of hands-on experience in customer-facing and internal projects focused on Machine Learning and AI solutions',
        'Developed an image processing solution using neural networks for a customer-based project',
        'Built internal automation workflows using Microsoft Power Apps and Power Automate to optimize CV-building processes',
        'Designed and implemented AI agent-based systems'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item card">
            <div className="experience-header">
              <div className="experience-title-section">
                <FaCode className="experience-icon" />
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
              </div>
              <div className="experience-period">
                <FaCalendarAlt />
                <span>{exp.period}</span>
              </div>
            </div>
            <div className="experience-technologies">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="experience-achievements">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

