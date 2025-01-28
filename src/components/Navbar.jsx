import React, { useState, useEffect } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri"; // Importing React Icons for menu toggle

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle active links on scroll
  const handleScrollActive = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const sectionLink = document.querySelector(
        `.nav__menu a[href*=${sectionId}]`
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionLink.classList.add("active-link");
      } else {
        sectionLink.classList.remove("active-link");
      }
    });
  };

  // Handle scroll up visibility
  const handleScrollUp = () => {
    const scrollUpButton = document.getElementById("scroll-up");
    if (scrollUpButton) {
      if (window.scrollY >= 350) {
        scrollUpButton.classList.add("show-scroll");
      } else {
        scrollUpButton.classList.remove("show-scroll");
      }
    }
  };

  // Add event listeners for scroll actions
  useEffect(() => {
    window.addEventListener("scroll", handleScrollActive);
    window.addEventListener("scroll", handleScrollUp);

    return () => {
      window.removeEventListener("scroll", handleScrollActive);
      window.removeEventListener("scroll", handleScrollUp);
    };
  }, []);

  // Close menu on link click in mobile view
  const closeMenuOnLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-circle">W</span>
          <span className="nav__logo-name">WILDLIFE</span>
        </a>

        <div
          className={`nav__menu ${isMenuOpen ? "show__menu" : ""}`}
          id="nav__menu"
        >
          <span className="nav__title">Menu</span>

          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={closeMenuOnLinkClick}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={closeMenuOnLinkClick}
              >
                Information
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about2"
                className="nav__link"
                onClick={closeMenuOnLinkClick}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link"
                onClick={closeMenuOnLinkClick}
              >
                Projects
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav__close" onClick={toggleMenu}>
            <RiCloseLine />
          </div>
        </div>

        <div className="nav__buttons">
          {/* Toggle button */}
          <div className="nav__toggle" id="nav__toggle" onClick={toggleMenu}>
            <RiMenu4Line />
          </div>
        </div>
      </nav>

      {/* Scroll Up Button */}
      <div id="scroll-up" className="scroll-up">
        <a href="#home" className="scroll-up-link">
          ↑
        </a>
      </div>
    </header>
  );
};

export default Navbar;
