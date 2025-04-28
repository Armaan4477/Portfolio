import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">Armaan N</div>
        <div className="footer-links">
          <a href="https://github.com/Armaan4477">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/armaan-nakhuda-756492235/">
            <FaLinkedin />
          </a>
          <a href="mailto:nakhudaarmaan66@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
