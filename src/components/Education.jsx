import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'BSc (Hons) in Information Systems',
      institution: 'University of Colombo School of Computing (UCSC)',
      period: 'May 2022 – Present',
      cgpa: 'CGPA: 3.71',
      icon: FaGraduationCap
    },
    {
      degree: 'BSc (Hons) in Information Technology (Sp. Software Engineering)',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: 'June 2021 – June 2025',
      cgpa: 'CGPA: 3.39 (Second Upper Division)',
      icon: FaGraduationCap
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => {
          const Icon = edu.icon
          return (
            <div key={index} className="education-item card">
              <div className="education-icon-wrapper">
                <Icon className="education-icon" />
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-details">
                  <div className="education-period">
                    <FaCalendarAlt />
                    <span>{edu.period}</span>
                  </div>
                  <div className="education-cgpa">
                    <FaAward />
                    <span>{edu.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Education

