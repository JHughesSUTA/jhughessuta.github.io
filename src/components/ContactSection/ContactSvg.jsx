import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";

const ContactSvg = () => {
  const { theme } = useTheme();

  const primaryColor = theme === "light" ? "#475569" : "#cbd5e1";
  const secondaryColor = theme === "light" ? "#64748b" : "#94a3b8";
  const accentColor = theme === "light" ? "#6b7280" : "#9ca3af";
  const envelopeColor = theme === "light" ? "#b0bdc6" : "#94a3b8";
  const letterColor = theme === "light" ? "#cad5dd" : "#64748b";
  const highlightColor = theme === "light" ? "#dfe9ef" : "#475569";

  return (
    <div className="svg-wrapper">
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated envelope with letter coming out"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          maxWidth: "400px",
          maxHeight: "400px",
        }}
      >
        <title>Animated envelope with letter coming out</title>

        {/* Background circle with subtle gradient */}
        <defs>
          <radialGradient id="bgGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.08" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.02" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <motion.circle
          cx="32"
          cy="32"
          r="30"
          fill="url(#bgGradient)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Envelope left side */}
        <motion.path
          d="M.6 48.7l18.5-19.3L4.9 8.9c-.7.9-1.2 2.1-1.3 3.5L0 45.1c-.1 1.4.1 2.6.6 3.6"
          fill={envelopeColor}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Envelope right side */}
        <motion.path
          d="M62.7 5.5L35.9 30.4L57 58.9c1.2-1 2-2.5 2.2-4.3L64 10c.2-1.8-.4-3.5-1.3-4.5"
          fill={envelopeColor}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Letter content */}
        <motion.path
          d="M25.7 39.4l-6.6-10L.6 48.7c.4.9 1.1 1.5 1.9 1.7L53.3 60c1.4.3 2.7-.2 3.7-1.1L35.9 30.4l-10.2 9"
          fill={letterColor}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Envelope front */}
        <motion.path
          d="M59.3 4L7.1 7.5c-.9.1-1.6.6-2.2 1.4l14.3 20.5l6.6 10l10.2-9L62.7 5.5c-.9-1-2.1-1.6-3.4-1.5"
          fill={highlightColor}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Floating particles */}
        <motion.circle
          cx="20"
          cy="15"
          r="1.5"
          fill={accentColor}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: [0, 1, 0], y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.circle
          cx="44"
          cy="12"
          r="1"
          fill={primaryColor}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: [0, 1, 0], y: [0, -12, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.circle
          cx="15"
          cy="50"
          r="1.2"
          fill={secondaryColor}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: [0, 1, 0], y: [0, -10, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </motion.svg>

      {/* Interactive floating elements */}
      <motion.div
        className="floating-elements"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="floating-dot"
          style={{ backgroundColor: primaryColor }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-dot"
          style={{ backgroundColor: secondaryColor }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
};

export default ContactSvg;
