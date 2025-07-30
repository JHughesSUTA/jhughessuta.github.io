import ContactForm from "./ContactForm";
import ContactSvg from "./ContactSvg";
import "./ContactSection.scss";
import { useTheme } from "../../contexts/ThemeContext";

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      style={{
        // backgroundColor: theme === "dark" && "#23272f",
        backgroundImage:
          theme === "light"
            ? "conic-gradient(from 90deg at -10% 100%, #bcc1cd 0deg, #bcc1cd 90deg, #fff 1turn)"
            : "conic-gradient(from 90deg at -10% 100%, #2b303b 0deg, #2b303b 90deg, #16181d 1turn)",
      }}
    >
      <div className="container">
        <ContactForm />
        <div
          className="svg-container"
          style={{
            backgroundColor: theme === "light" ? "#eceef1" : "#23272f",
          }}
        >
          <ContactSvg />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
