import React, { useState, useEffect } from 'react';
import { RiHome5Line, RiTrophyLine, RiBookOpenLine, RiImageLine, RiChat3Line, RiCloseLine, RiMenu4Line, RiMoonLine, RiSunLine } from 'react-icons/ri';
import logo from '../assets/img/react-2.svg';


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme());


  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionClass.classList.add('active-link');
        } else {
          sectionClass.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);
  
  /*=============== CHANGE BACKGROUND HEADER ===============*/
  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById("header");
      window.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
    };
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  /*=============== DARK LIGHT THEME TOGGLE ===============*/ 
  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, []);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  }

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  /*=============== SHOW MENU / HIDE MENU ===============*/
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    // ==================== HEADER ==================== //
    <header className={`header ${theme}-theme`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={logo} alt="skills image" />
        </a>
        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <RiHome5Line className='nav__link-logo'/>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#biography" className="nav__link" onClick={handleCloseMenu}>
                <RiHome5Line className='nav__link-logo'/>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={handleCloseMenu}>
                <RiTrophyLine className='nav__link-logo'/>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link" onClick={handleCloseMenu}>
                <RiBookOpenLine className='nav__link-logo'/>
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={handleCloseMenu}>
                <RiImageLine className='nav__link-logo'/>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={handleCloseMenu}>
                <RiChat3Line className='nav__link-logo'/>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={handleCloseMenu}>
            <RiCloseLine />
          </div>
        </div>
        <div className="nav__buttons">
        {theme === "light" ? (
            <RiMoonLine
              className="change-theme"
              id="theme-button"
              onClick={toggleTheme}
            />
          ) : (
            <RiSunLine
              className="change-theme"
              id="theme-button"
              onClick={toggleTheme}
            />
          )}
          <div className="nav__toggle" id="nav-toggle" onClick={handleToggleMenu}>
            <RiMenu4Line />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;