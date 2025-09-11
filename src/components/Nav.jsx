import { useState, useEffect, useRef } from "react";
import "./Nav.scss";
import Logo from "./SVGs/Logo";
import { TbMoonStars, TbSunHigh } from "react-icons/tb";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { Divide as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const firstMenuLinkRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);

      setTimeout(() => {
        firstMenuLinkRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinkStyle = {
    color: theme === "light" ? "#000" : "#fff",
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMobileLinkClick = (e, targetId) => {
    e.preventDefault();
    e.stopPropagation();

    // Close menu immediately for better UX
    setIsMenuOpen(false);

    // Simple, reliable scrolling that works with scroll-snap
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        // Temporarily disable scroll-snap for smooth navigation
        const html = document.documentElement;
        const originalScrollSnap = html.style.scrollSnapType;

        html.style.scrollSnapType = "none";

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Re-enable scroll-snap after scrolling completes
        setTimeout(() => {
          html.style.scrollSnapType = originalScrollSnap;
        }, 1000);
      }
    }, 100); // Minimal delay for menu closing
  };

  return (
    <>
      <nav
        id="nav"
        className="nav nav--desktop"
        style={{ backgroundColor: theme === "light" ? "#fff" : "#23272f" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 3.5, ease: "easeOut" }}
            style={{ maxWidth: "64px" }}
          >
            <Logo />
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 3.5, ease: "easeOut" }}
            className="nav__links--desktop"
          >
            <li>
              <a
                style={navLinkStyle}
                href="#hero"
                onClick={(e) => handleLinkClick(e, "hero")}
              >
                About
              </a>
            </li>
            <li>
              <a
                style={navLinkStyle}
                href="#projects"
                onClick={(e) => handleLinkClick(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                style={navLinkStyle}
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </motion.ul>

          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={isMenuOpen ? "mobile-menu--open" : "mobile-menu--closed"}
            initial={{ x: -260 }}
            animate={{ x: isMenuOpen ? 0 : -260 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            inert={!isMenuOpen}
          >
            <ul className="nav__links--mobile">
              <li>
                <a
                  ref={firstMenuLinkRef}
                  href="#hero"
                  onClick={(e) => handleMobileLinkClick(e, "hero")}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleMobileLinkClick(e, "projects")}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleMobileLinkClick(e, "contact")}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="nav__right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 3.5, ease: "easeOut" }}
          >
            <button
              id="dark-mode-button"
              className="nav__dark-mode-button"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <TbMoonStars size="25px" color="#000" />
              ) : (
                <TbSunHigh size="25px" color="#fff" />
              )}
            </button>
            <div ref={hamburgerRef}>
              <Hamburger
                color={navLinkStyle.color}
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
              />
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
