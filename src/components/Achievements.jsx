import { FaTrophy, FaAward, FaMedal, FaCertificate } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      title: 'Faculty Award for Best Performing Students',
      organization: 'University of Colombo School of Computing',
      period: 'June 2022 - Nov 2025',
      icon: FaAward,
      type: 'award'
    },
    {
      title: 'Dean List Awards',
      organization: 'Sri Lanka Institute of Information Technology',
      period: 'June 2022, Aug 2023, June 2024',
      icon: FaMedal,
      type: 'award'
    },
    {
      title: 'Winner: PearlHack 2.0',
      organization: 'Sabaragamuwa University of Sri Lanka',
      icon: FaTrophy,
      type: 'competition'
    },
    {
      title: 'Semi-Finalist: Idealize 2023',
      organization: 'University of Moratuwa',
      icon: FaMedal,
      type: 'competition'
    }
  ]

  const publications = [
    {
      title: 'Personality and Soft Skills Analysis System for Job Recruitment Using VR Technology',
      venue: 'ICECET2025 (IEEE)',
      icon: FaCertificate
    },
    {
      title: 'CodePlex: Software Complexity Measuring Tool based on ECB Measure',
      icon: FaCertificate
    }
  ]

  const certifications = [
    {
      title: 'Leadership Academy: Guiding Leadership & Outreach (GLO) Program',
      organization: 'Sysco LABS',
      icon: FaCertificate
    },
    {
      title: 'Certificate of Participation: InspiHer{Tech} V2.0',
      organization: 'IEEE WIE Student Branch Affinity Group of SLTC',
      icon: FaCertificate
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements & Recognition</h2>
      
      <div className="achievements-section">
        <h3 className="subsection-title">Awards & Competitions</h3>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div key={index} className="achievement-card card">
                <div className="achievement-icon">
                  <Icon />
                </div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-org">{achievement.organization}</p>
                {achievement.period && (
                  <p className="achievement-period">{achievement.period}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="achievements-section">
        <h3 className="subsection-title">Research Publications</h3>
        <div className="publications-list">
          {publications.map((pub, index) => {
            const Icon = pub.icon
            return (
              <div key={index} className="publication-card card">
                <Icon className="publication-icon" />
                <div className="publication-content">
                  <h4 className="publication-title">{pub.title}</h4>
                  {pub.venue && (
                    <p className="publication-venue">{pub.venue}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="achievements-section">
        <h3 className="subsection-title">Certifications</h3>
        <div className="certifications-list">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div key={index} className="certification-card card">
                <Icon className="certification-icon" />
                <div className="certification-content">
                  <h4 className="certification-title">{cert.title}</h4>
                  <p className="certification-org">{cert.organization}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements

