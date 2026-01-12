import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'HUMOR - Support Platform for Virtual Meeting',
      subtitle: 'Research @ UCSC',
      technologies: ['ReactJS', 'MongoDB', 'FastAPI', 'Computer Vision', 'ML'],
      description: 'Designed a final-year research project analyzing participant multimodal laughter using Machine Learning. Developed a system to visualize audience engagement in real-time via personalized avatar-based feedback for speakers.',
      highlights: [
        'Full-stack implementation and integration of ML-based laughter classification',
        'Real-time audience engagement visualization',
        'Personalized avatar-based feedback system'
      ]
    },
    {
      title: 'JobRecVR - Recruitment Platform based on Virtual Reality',
      subtitle: 'Research @ SLIIT',
      technologies: ['Unity', 'LLM Fine-tuning', 'ReactJS', 'FastAPI', 'C#', '3D Animation', 'Ready Player Me', 'Mixamo'],
      description: 'Developed a VR platform to evaluate software engineers\' soft skills beyond traditional hiring methods. Fine-tuned an LLM for dynamic interview question generation and personalized VR interview scenarios.',
      highlights: [
        'VR-based soft skills evaluation platform',
        'Fine-tuned LLM for dynamic interview questions',
        'Candidate-specific virtual scenarios based on CV data'
      ]
    },
    {
      title: 'Unicat - Platform for Course Management',
      technologies: ['ReactJS', 'NodeJS', 'GCP', 'Docker', 'Kubernetes'],
      description: 'Built a microservices-based system enabling course purchase, study tracking, and instructor progress management.',
      highlights: [
        'Microservices architecture',
        'Cloud-native deployment with GCP',
        'Container orchestration with Kubernetes'
      ]
    },
    {
      title: 'RoadEye - Online Traffic Violation Reporting Platform',
      technologies: ['Angular', 'Firebase', 'MariaDB', 'FastAPI', 'GCP'],
      description: 'Developed a web platform for drivers to submit traffic violation videos and monitor vehicles.',
      highlights: [
        'Video submission and processing',
        'Real-time vehicle monitoring',
        'Cloud-based infrastructure'
      ]
    },
    {
      title: 'ZeroWaste - Platform for Waste Management',
      technologies: ['React Native', 'Firebase'],
      description: 'Developed features for waste pickups, volunteering, eco-product trading, and community engagement.',
      highlights: [
        'Mobile-first design',
        'Community engagement features',
        'Eco-product trading platform'
      ]
    },
    {
      title: 'PlanitEasy - Event Management System',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
      description: 'Built a platform for planning events, managing vendors, budgets, and quotations.',
      highlights: [
        'Complete event planning solution',
        'Vendor and budget management',
        'Quotation system'
      ]
    },
    {
      title: 'Business Management Application',
      technologies: ['Kotlin', 'Firebase'],
      description: 'Created a mobile app for small business owners to track products, income, expenses, and customers.',
      highlights: [
        'Native Android application',
        'Comprehensive business tracking',
        'Real-time data synchronization'
      ]
    },
    {
      title: 'Unicorn - HRMS',
      technologies: ['MERN stack'],
      description: 'Contributed to developing a Goal Management System supporting employee soft skills and career growth.',
      highlights: [
        'Full-stack MERN application',
        'Employee goal tracking',
        'Career development features'
      ]
    },
    {
      title: 'SwiftPay - Prototype',
      subtitle: 'Winner: Pearl Hack 2.0',
      technologies: ['Figma'],
      description: 'Designed a prototype for a cashless payment app; won Pearl Hack 2.0 championship.',
      highlights: [
        'UI/UX design',
        'Hackathon winner',
        'Payment app prototype'
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              {project.subtitle && (
                <p className="project-subtitle">{project.subtitle}</p>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="project-highlights">
              {project.highlights.map((highlight, hlIndex) => (
                <li key={hlIndex}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

