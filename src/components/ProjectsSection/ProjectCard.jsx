import { IoMdOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Tag from "./Tag";
import { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ProjectCard = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  tags,
}) => {
  const cardRef = useRef(null);

  const { theme } = useTheme();

  useEffect(() => {
    const updateTabIndex = () => {
      if (!cardRef.current) return;

      // Check if this card is in a cloned slide
      const isCloned = cardRef.current.closest(".slick-cloned");

      // Check if this card is currently visible in the slider
      const slideElement = cardRef.current.closest(".slick-slide");
      const isActive = slideElement?.classList.contains("slick-active");

      const buttons = cardRef.current.querySelectorAll(".card__button");

      // Remove from tab order if cloned OR not currently visible
      if (isCloned || !isActive) {
        buttons.forEach((button) => {
          button.setAttribute("tabindex", "-1");
        });
      } else {
        // Add to tab order if it's visible and not cloned
        buttons.forEach((button) => {
          button.setAttribute("tabindex", "0");
        });
      }
    };

    updateTabIndex();

    // Listen for slider changes
    const slider = cardRef.current?.closest(".slick-slider");
    if (slider) {
      // Create a mutation observer to watch for class changes
      const observer = new MutationObserver(updateTabIndex);

      // Observe changes to the slide's class list
      const slideElement = cardRef.current.closest(".slick-slide");
      if (slideElement) {
        observer.observe(slideElement, {
          attributes: true,
          attributeFilter: ["class"],
        });
      }

      // listen for slider events if available
      const handleSliderChange = () => {
        setTimeout(updateTabIndex, 100); // Small delay to ensure DOM is updated
      };

      slider.addEventListener("afterChange", handleSliderChange);
      slider.addEventListener("beforeChange", handleSliderChange);

      return () => {
        observer.disconnect();
        slider.removeEventListener("afterChange", handleSliderChange);
        slider.removeEventListener("beforeChange", handleSliderChange);
      };
    }
  }, []);
  return (
    <article ref={cardRef} className="card__article">
      <img src={image} alt="image" className="card__img" />

      <div
        className="card__data"
        style={{ backgroundColor: theme === "light" ? "#fff" : "#22272e" }}
      >
        <div>
          <h3
            className="card__title"
            style={{ color: theme === "light" ? "#000" : "#fff" }}
          >
            {title}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
          <p
            className="card__description"
            style={{ opacity: "0.6", color: theme === "light" ? "#000" : "#fff" }}
          >
            {description}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <a href={liveUrl} className="card__button" target="_blank">
            <IoMdOpen size="30px" color={theme === "light" ? "#000" : "#fff"} />
          </a>
          <a href={githubUrl} className="card__button" target="_blank">
            <FaGithub size="30px" color={theme === "light" ? "#000" : "#fff"} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
