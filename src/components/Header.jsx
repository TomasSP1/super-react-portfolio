import React, { useState, useEffect } from 'react';

import {
  RiHome5Line, RiTrophyLine, RiBookOpenLine,
  RiImageLine, RiChat3Line, RiCloseLine,
  RiMenu4Line, RiMoonLine, RiSunLine
} from 'react-icons/ri';

import logo from '../images/react-2.svg';


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme());


  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

  /* useEffect hook adds an event listener to the window that checks 
  which section is currently visible on the page and adds or removes 
  the active-link class from the corresponding navigation menu link. 
  This creates an interactive navigation menu that highlights the 
  current section as the user scrolls through the page.*/

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector(`.nav_menu a[href*=${sectionId}]`);

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

  /* useEffect hook adds an event listener to the window that changes the 
  background color of the header element on the page when the user scrolls 
  down. When the component is unmounted, the cleanup function removes the 
  event listener to avoid memory leaks. This effect is run once when the 
  component mounts and does not depend on any props or state, so it is 
  declared with an empty array as the second argument to useEffect.*/

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

  /* useEffect hooks ensures that the user interface is styled appropriately 
  based on the current theme, that the user's theme preference is persisted 
  across browser sessions, and that the theme can be toggled on demand by the 
  user. */

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

  /*  Two functions work together to provide basic functionality for showing 
  and hiding a menu in a React application. The handleToggleMenu function can 
  be used to toggle the menu's visibility based on some user interaction 
  (such as clicking a button), while the handleCloseMenu function can be used to 
  dismiss the menu entirely. */

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
        <a href="#" className="nav_logo">
          <img src={logo} alt="skills image" />
        </a>
        <div className={`nav_menu ${showMenu ? 'show-menu' : ''}`}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <RiHome5Line className='nav_link-logo' />
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#biography" className="nav_link" onClick={handleCloseMenu}>
                <RiHome5Line className='nav_link-logo' />
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link" onClick={handleCloseMenu}>
                <RiTrophyLine className='nav_link-logo' />
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#qualification" className="nav_link" onClick={handleCloseMenu}>
                <RiBookOpenLine className='nav_link-logo' />
                Qualification
              </a>
            </li>
            <li className="nav_item">
              <a href="#projects" className="nav_link" onClick={handleCloseMenu}>
                <RiImageLine className='nav_link-logo' />
                Projects
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link" onClick={handleCloseMenu}>
                <RiChat3Line className='nav_link-logo' />
                Contact
              </a>
            </li>
          </ul>
          <div className="nav_close" id="nav-close" onClick={handleCloseMenu}>
            <RiCloseLine />
          </div>
        </div>
        <div className="nav_buttons">
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
          <div className="nav_toggle" id="nav-toggle" onClick={handleToggleMenu}>
            <RiMenu4Line />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;