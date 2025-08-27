import "./ProjectSection.scss";
import artGalleryImage from "../../assets/images/art-gallery-screenshot.jpg";
import sunnysideImage from "../../assets/images/sunnyside-screenshot.jpg";
import ticTacToeImage from "../../assets/images/tictactoe-screenshot.jpg";
import dictionaryLightImage from "../../assets/images/dictionary-app-screenshot-light.jpg";
import dictionaryDarkImage from "../../assets/images/dictionary-app-screenshot-dark.jpg";
import studentFilterImage from "../../assets/images/student-filter-screenshot.jpg";
import ProjectCard from "./ProjectCard";
import Marquee from "./Marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DecryptedText from "./DecryptedText";
import { useTheme } from "../../contexts/ThemeContext";

const ProjectsSection = () => {
  const { theme } = useTheme();

  const cards = [
    {
      title: "Dictionary App",
      description:
        "Built using Dictionary API. See definitions, hear pronunciations, and change themes",
      image: theme === "light" ? dictionaryLightImage : dictionaryDarkImage,
      liveUrl: "https://dictionary-app-woad-alpha.vercel.app",
      githubUrl: "https://github.com/JHughesSUTA/dictionary-app",
      tags: ["React", "React Router", "TypeScript", "Tailwind", "API"],
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Pick your mark and keep score vs the CPU or another player.",
      image: ticTacToeImage,
      liveUrl: "https://jhughessuta.github.io/tic-tac-toe-25/",
      githubUrl: "https://github.com/JHughesSUTA/tic-tac-toe-25",
      tags: ["React", "TypeScript", "Sass"],
    },
    {
      title: "Modern Art Gallery Website",
      description: "Design from frontendmentor.io. Built using CSS grid.",
      image: artGalleryImage,
      liveUrl: "https://jhughessuta.github.io/art-gallery-website/",
      githubUrl: "https://github.com/JHughesSUTA/art-gallery-website",
      tags: ["HTML", "Sass", "JavaScript"],
    },
    {
      title: "Sunnyside Agency Landing Page",
      description:
        "Design from frontendmentor.io. Animations on scroll using only CSS and minimal JS.",
      image: sunnysideImage,
      liveUrl: "https://jhughessuta.github.io/sunnyside-agency-landing-page/",
      githubUrl: "https://github.com/JHughesSUTA/sunnyside-agency-landing-page",
      tags: ["HTML", "Sass", "JavaScript"],
    },
    {
      title: "Student Grades",
      description:
        "Filter through students and see their grade info. Add a custom tags.",
      image: studentFilterImage,
      liveUrl: "https://jhughessuta.github.io/demo-students-filter/",
      githubUrl: "https://github.com/JHughesSUTA/demo-students-filter",
      tags: ["React", "TypeScript", "Sass"],
    },
  ];

  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      id="projects"
      className="projects"
      style={{
        backgroundImage:
          theme === "light"
            ? "conic-gradient(from 90deg at -10% 100%, #bcc1cd 0deg, #bcc1cd 90deg, #fff 1turn)"
            : "conic-gradient(from 90deg at -10% 100%, #2b303b 0deg, #2b303b 90deg, #16181d 1turn)",
      }}
    >
      <div className="container projects-container">
        {/* Header Section */}
        <div className="projects-header">
          <div className="section-badge">
            <span>Portfolio</span>
          </div>
          <h2 style={{ color: theme === "light" ? "#000" : "#fff" }}>
            <DecryptedText
              text="Featured Projects"
              animateOn="view"
              speed={75}
              revealDirection="start"
              max-iterations={10}
              sequential={true}
            />
          </h2>
          <p
            className="section-subtitle"
            style={{ color: theme === "light" ? "#666" : "#b0b0b0" }}
          >
            A showcase of my recent work, demonstrating front-end development
            skills and creative problem-solving
          </p>
        </div>

        {/* Projects Carousel Section */}
        <div className="projects-showcase">
          <div
            className="carousel-container"
            style={{
              background:
                theme === "dark"
                  ? "linear-gradient(145deg, rgb(66 44 75) 0%, rgb(22 53 64) 55%, rgb(49 65 1) 100%)"
                  : "linear-gradient(145deg, rgb(240, 221, 255) 0%, rgb(206, 244, 255) 55%, rgb(227, 255, 192) 100%)",
              borderColor: theme === "dark" && "#777d82",
            }}
          >
            <div
              className="card__container"
              style={{
                maxWidth: "95%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Slider {...settings}>
                {cards.map((card, index) => (
                  <ProjectCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    liveUrl={card.liveUrl}
                    githubUrl={card.githubUrl}
                    tags={card.tags}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <div className="skills-header">
            <h3 style={{ color: theme === "light" ? "#000" : "#fff" }}>
              Technologies & Tools
            </h3>
            <p
              className="skills-subtitle"
              style={{ color: theme === "light" ? "#666" : "#b0b0b0" }}
            >
              A comprehensive toolkit for modern web development
            </p>
          </div>
          <div className="marquee-container">
            <Marquee />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
