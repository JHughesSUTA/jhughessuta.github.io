import "./Hero.scss";
import sideImageDesktop from "../../assets/images/bitmoji-dt.png";
import sideImageMobile from "../../assets/images/bitmoji-mb.png";
import { motion } from "motion/react";
import Particles from "./Particles";
import { useTheme } from "../../contexts/ThemeContext";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

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
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            <h1>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                Hi,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 1, ease: "easeOut" }}
              >
                &nbsp;I'm James
              </motion.span>
            </h1>

            <motion.p
              style={{
                backgroundColor: theme === "light" ? "#fff" : "rgb(35, 39, 47)",
              }}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.25, delay: 1.75, ease: "easeOut" }}
            >
              I'm a detail-oriented Web Developer with experience building
              responsive, accessible, and user-friendly web interfaces. Proven
              ability to collaborate with design and product teams, improve site
              performance, and solve complex UI problems. Passionate about clean
              code, accessibility, and continuous learning.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 3.5, ease: "easeOut" }}
            >
              <li>
                <motion.a
                  href="https://github.com/JHughesSUTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub
                    color={theme === "light" ? "#000" : "#fff"}
                    size={32}
                  />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/jhughessuta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin
                    color={theme === "light" ? "#000" : "#fff"}
                    size={32}
                  />
                </motion.a>
              </li>
            </motion.ul>
          </div>

          <motion.picture
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0, ease: "easeOut" }}
            className="hero__side-image"
            whileHover={{ scale: 1.05 }}
          >
            <source srcSet={sideImageDesktop} media="(min-width: 768px)" />
            <img src={sideImageMobile} alt="James Hughes - Web Developer" />
          </motion.picture>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          style={{
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown size={24} opacity={0.7} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
