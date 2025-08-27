import ContactForm from "./ContactForm";
import ContactSvg from "./ContactSvg";
import "./ContactSection.scss";
import { useTheme } from "../../contexts/ThemeContext";

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      style={{
        backgroundImage:
          theme === "light"
            ? "radial-gradient(ellipse at top left,rgb(255, 255, 255) 0%,rgb(246, 248, 255) 25%,rgb(241, 247, 252) 50%,rgb(243, 248, 252) 75%,rgb(255, 255, 255) 100%)"
            : "radial-gradient(ellipse at top left, #1a1f2e 0%, #1e2332 25%, #222736 50%, #1e2332 75%, #1a1f2e 100%)",
      }}
    >
      <div className="container">
        <div className="content-wrapper">
          <ContactForm />
          <div
            className="svg-container"
            aria-hidden="true"
            style={{
              backgroundColor:
                theme === "light"
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              border:
                theme === "light"
                  ? "1px solid rgba(0, 0, 0, 0.05)"
                  : "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <ContactSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
