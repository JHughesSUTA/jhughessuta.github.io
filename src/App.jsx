import Nav from "./components/Nav";
import Hero from "./components/HeroSection/Hero";
import ContactSection from "./components/ContactSection/ContactSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import { ThemeProvider } from "./contexts/ThemeContext";
import Footer from "./components/Footer";

const App = () => {
  
  return (
    <div className="app-wrapper">
      <ThemeProvider>
        <Nav />
        <Hero />
        <ProjectsSection />
        <ContactSection />
        <ToastContainer />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
