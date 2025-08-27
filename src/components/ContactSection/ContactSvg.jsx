import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";

const ContactSvg = () => {
  const { theme } = useTheme();

  const primaryColor = theme === "light" ? "#000000" : "#ffffff";
  const secondaryColor = theme === "light" ? "#666666" : "#cccccc";
  const accentColor = theme === "light" ? "#333333" : "#aaaaaa";

  return (
    <div className="svg-wrapper">
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated envelope with letter coming out"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <title>Animated envelope with letter coming out</title>
        {/* Background circle with subtle gradient */}
        <defs>
          <radialGradient id="bgGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.03" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.01" />
          </radialGradient>
          <linearGradient
            id="envelopeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
          <linearGradient
            id="letterGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={accentColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#bgGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />

        {/* Main envelope */}
        <motion.path
          d="M80 120 L200 200 L320 120 L320 280 L80 280 Z"
          fill="url(#envelopeGradient)"
          stroke={primaryColor}
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        />

        {/* Envelope flap */}
        <motion.path
          d="M80 120 L200 60 L320 120"
          fill="none"
          stroke={primaryColor}
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        />

        {/* Letter coming out of envelope */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          {/* Letter base */}
          <motion.rect
            x="90"
            y="130"
            width="220"
            height="140"
            rx="8"
            fill="url(#letterGradient)"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          />

          {/* Letter lines */}
          <motion.line
            x1="110"
            y1="150"
            x2="290"
            y2="150"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 2.2 }}
          />
          <motion.line
            x1="110"
            y1="170"
            x2="270"
            y2="170"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 2.4 }}
          />
          <motion.line
            x1="110"
            y1="190"
            x2="290"
            y2="190"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 2.6 }}
          />
          <motion.line
            x1="110"
            y1="210"
            x2="240"
            y2="210"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 2.8 }}
          />

          {/* Letter fold line */}
          <motion.line
            x1="200"
            y1="130"
            x2="200"
            y2="270"
            stroke={primaryColor}
            strokeWidth="1"
            strokeDasharray="4,4"
            strokeOpacity="0.6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3, ease: "easeOut" }}
          />
        </motion.g>

        {/* Floating particles */}
        <motion.circle
          cx="150"
          cy="100"
          r="3"
          fill={accentColor}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 0], y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="250"
          cy="80"
          r="2"
          fill={primaryColor}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: [0, 1, 0], y: [0, -15, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="180"
          cy="320"
          r="2.5"
          fill={secondaryColor}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: [0, 1, 0], y: [0, -18, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.svg>

      {/* Interactive elements */}
      <motion.div
        className="floating-elements"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
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
