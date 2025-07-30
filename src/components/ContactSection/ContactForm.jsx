import "./ContactForm.scss";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import SplitText from "./SplitText";
import { useTheme } from "../../contexts/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  const inputStyle = {
    color: theme === "light" ? "black" : "white",
    backgroundColor: theme === "light" ? "white" : "#16181D",
    border: "none",
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
      <form
        id="contact-form"
        style={{
          color: "#fff",
          backgroundColor: theme === "light" ? "#000" : "#22272E",
        }}
        onSubmit={onSubmit}
      >
        <h2>
          <span>
            <SplitText
              text="Lets keep in touch &nbsp;&#128075;"
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
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </span>
        </h2>

        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            style={inputStyle}
            type="text"
            name="name"
            required
          />
        </motion.div>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label htmlFor="email">Email address</label>
          <input type="email" style={inputStyle} name="email" required />
        </motion.div>

        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name">Message</label>
          <textarea name="message" style={inputStyle} required></textarea>
        </motion.div>

        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button type="submit">Send</button>
        </motion.div>
      </form>
    </div>
  );
}
