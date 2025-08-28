import "./Hero.scss";
import sideImageDesktop from "../../assets/images/bitmoji-dt.png";
import sideImageMobile from "../../assets/images/bitmoji-mb.png";
import { motion } from "motion/react";
import Particles from "./Particles";
import { useTheme } from "../../contexts/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="hero"
        className="hero"
        style={{ backgroundColor: theme === "light" ? "#fff" : "#23272f" }}
      >
        <div className="background-layer">
          <Particles
            key={theme} // Re-mount when theme changes
            particleColors={
              theme === "light" ? ["#000", "#000"] : ["#fff", "#fff"]
            }
            particleCount={500}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="container">
          <div
            className="hero__copy"
            style={{
              // backgroundColor: theme === "light" ? "#fff" : "#23272f",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            <h1>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                Hi,
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.75 }}
              >
                &nbsp;I'm James
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              I'm a detail-oriented Web Developer with experience building
              responsive, accessible, and user-friendly web interfaces. Proven
              ability to collaborate with design and product teams, improve site
              performance, and solve complex UI problems. Passionate about clean
              code, accessibility, and continuous learning.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <li>
                <a href="https://github.com/JHughesSUTA" target="_blank">
                  <FaGithub
                    color={theme === "light" ? "#000" : "#fff"}
                    size={40}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jhughessuta/"
                  target="_blank"
                >
                  <FaLinkedin
                    color={theme === "light" ? "#000" : "#fff"}
                    size={40}
                  />
                </a>
              </li>
            </motion.ul>
          </div>

          <motion.picture
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hero__side-image"
          >
            <source srcSet={sideImageDesktop} media="(min-width: 768px)" />
            <img src={sideImageMobile} alt="" />
          </motion.picture>
        </div>
      </section>
    </>
  );
};

export default Hero;
