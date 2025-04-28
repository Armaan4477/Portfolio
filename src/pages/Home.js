import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section id="about" className="hero">
        <div className="profile-container" data-aos="fade-up">
          <img src={`${process.env.PUBLIC_URL}/assets/arm.jpeg`} alt="Armaan N" className="profile-img" />
          <h1>Armaan N</h1>
          <p className="tagline">Software Developer</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn primary-btn">View Projects</Link>
            <Link to="/contact" className="btn secondary-btn">Contact Me</Link>
          </div>
        </div>
        <div className="scroll-down">
          <a href="#about-me">
            <FaChevronDown />
          </a>
        </div>
      </section>

      <section id="about-me" className="about-section">
        <div className="container">
          <h2 data-aos="fade-up">About Me</h2>
          <div className="about-content" data-aos="fade-up" data-aos-delay="200">
            <div className="about-text">
              <p>Hi there! I'm Armaan, I'm passionate about technology, F1 and cars. I have been interested in tech since I'm 5 years old, with skills of building computers and handling software tasks since then.</p>
              <p>Currently I'm building myself with knowledge in softwares and coding, with expertise in Java, Python and Firebase and basic knowledge of C/C++, HTML, CSS and JS, I focus on building efficient, user-friendly solutions.</p>
              <p>I'm constantly learning and expanding my skillset to stay at the forefront of technology.</p>
              <p>I'm fluent in both Windows and macOS operating systems, with basic knowledge of Linux systems for development and deployment.</p>
              <p>Beyond software, I have hands-on experience with electrical work including soldering, IoT device development, and hardware integration projects.</p>
              <p>In my free time, I enjoy working on personal projects and contributing to open-source initiatives.</p>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-text">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-text">Skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2 data-aos="fade-up">Featured Projects</h2>
          <div className="featured-grid">
            <div className="featured-card" data-aos="fade-up">
              <img src={`${process.env.PUBLIC_URL}/assets/datadash.png`} alt="DataDash" />
              <div className="featured-content">
                <h3>DataDash</h3>
                <p>Cross platform data sharing app with real-time synchronization</p>
                <Link to="/projects#datadash" className="read-more">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="featured-card" data-aos="fade-up" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/assets/esp.png`} alt="Automated ESP" />
              <div className="featured-content">
                <h3>Automated ESP</h3>
                <p>IoT solution for ESP automation with smart controls</p>
                <Link to="/projects#esp" className="read-more">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="center-button" data-aos="fade-up">
            <Link to="/projects" className="btn primary-btn">View All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
