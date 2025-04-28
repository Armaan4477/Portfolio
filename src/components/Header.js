import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="logo">AN</div>
      <nav className={isNavActive ? 'active' : ''}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setIsNavActive(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsNavActive(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={() => setIsNavActive(false)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsNavActive(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="menu-toggle" onClick={toggleNav}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;
