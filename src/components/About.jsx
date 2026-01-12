import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a final-year IT student and aspiring software engineer passionate about creating 
            innovative solutions that bridge the gap between technology and real-world problems. 
            My journey in software development has led me to explore diverse domains including 
            web development, mobile applications, and cutting-edge VR technologies.
          </p>
          <p>
            With hands-on experience in full-stack development, I specialize in building scalable 
            systems and integrating AI/ML capabilities into applications. My work spans from 
            research projects at UCSC and SLIIT to professional experience at 99x, where I've 
            contributed to customer-facing ML solutions and AI agent-based systems.
          </p>
          <p>
            I'm driven by the challenge of solving complex problems and continuously learning 
            new technologies. Whether it's developing neural network solutions for image processing 
            or creating VR platforms for innovative recruitment processes, I thrive on pushing 
            the boundaries of what's possible.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-card">
            <h3>2</h3>
            <p>Research Papers</p>
          </div>
          <div className="stat-card">
            <h3>6+</h3>
            <p>Months Experience</p>
          </div>
          <div className="stat-card">
            <h3>3.71</h3>
            <p>CGPA (UCSC)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

