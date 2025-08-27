import "./ContactForm.scss";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import SplitText from "./SplitText";
import { useTheme } from "../../contexts/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  const inputStyle = {
    color: theme === "light" ? "#2d3748" : "#e2e8f0",
    backgroundColor:
      theme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.8)",
    border:
      theme === "light"
        ? "2px solid rgba(0, 0, 0, 0.1)"
        : "2px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a9dad87f-7567-4d6d-a5db-b7d0e50622c5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      toast.success("Your message has been sent.");
    } else {
      console.log("Error", data);
      toast.error("Unable to send your message.");
    }
  };

  return (
    <div className="form-container">
      <motion.div
        className="form-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <form id="contact-form" onSubmit={onSubmit} aria-label="Contact form">
          <motion.div
            className="header-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>
              <span>
                <SplitText
                  text="Let's keep in touch &nbsp;&#128075;"
                  className=""
                  delay={10}
                  duration={2}
                  ease="elastic.out(1,0.3)"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />
              </span>
            </h2>
            <p className="subtitle">
              Ready to start a conversation? Drop me a message and I'll get back
              to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              style={inputStyle}
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              aria-required="true"
              aria-describedby="name-error"
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              style={inputStyle}
              name="email"
              placeholder="Enter your email address"
              required
              aria-required="true"
              aria-describedby="email-error"
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              style={inputStyle}
              placeholder="Tell me about your project or just say hello!"
              required
              aria-required="true"
              aria-describedby="message-error"
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              type="submit"
              aria-label="Send contact message"
              aria-describedby="submit-status"
            >
              <span>Send Message</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
