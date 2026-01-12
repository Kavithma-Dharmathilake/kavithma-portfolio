import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown } from 'react-icons/fa'
import './Hero.css'
import profileImg from "../assets/profileimg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Kavithma-Dharmathilake', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/kavithma-dharmathilake', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:kavithmadharmathilake@gmail.com', label: 'Email' },
    { icon: FaPhone, url: 'tel:+94702534675', label: 'Phone' }
  ]

  return (
    <section id="home" className="hero">
      <div className={`hero-container ${isVisible ? 'fade-in-up' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-name">
              <span className="gradient-text">Kavithma</span> Dharmathilake
            </h1>
            <h2 className="hero-title">Software Engineer</h2>
            <p className="hero-description">
              Final-year IT student and aspiring software engineer with hands-on experience in web, 
              mobile, and VR-based applications, specializing in full-stack development, AI/ML integration, 
              and scalable system design.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-outline">View Projects</a>
            </div>
            <div className="hero-social">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="social-icon"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={profileImg}  alt="Kavithma Dharmathilake" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-indicator">
          <FaArrowDown />
        </a>
      </div>
    </section>
  )
}

export default Hero

