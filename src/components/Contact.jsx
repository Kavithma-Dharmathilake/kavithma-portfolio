import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kavithmadharmathilake@gmail.com',
      link: 'mailto:kavithmadharmathilake@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 70 253 4675',
      link: 'tel:+94702534675'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kavithma-dharmathilake',
      link: 'https://linkedin.com/in/kavithma-dharmathilake'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Kavithma-Dharmathilake',
      link: 'https://github.com/Kavithma-Dharmathilake'
    }
  ]

  const softSkills = [
    'Fast Learning',
    'Problem Solving',
    'Teamwork',
    'Time Management',
    'Leadership',
    'Effective Communication',
    'Critical Thinking'
  ]

  const languages = [
    { name: 'Sinhala', level: 'Fluent' },
    { name: 'English', level: 'Fluent' }
  ]

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-intro">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat 
            about technology. Feel free to reach out!
          </p>
          <div className="contact-methods">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-item card"
                >
                  <div className="contact-icon-wrapper">
                    <Icon className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
        <div className="contact-extra">
          <div className="soft-skills-section card">
            <h3 className="extra-title">Soft Skills</h3>
            <div className="skills-tags">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="languages-section card">
            <h3 className="extra-title">Languages</h3>
            <div className="languages-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <p>Designed & Built by Kavithma Dharmathilake</p>
        <p className="footer-year">© 2025</p>
      </div>
    </section>
  )
}

export default Contact

