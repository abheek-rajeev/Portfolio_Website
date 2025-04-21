import "./App.css";
import { ThreeLayerd } from "./components/home/ThreeLayerd";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Skills from "./components/skills/Skills";
import Navbar from "./components/navBar/Navbar.jsx";
import Experiences from "./components/experiences/Experiences.jsx";
import Projects from "./components/projectwork/Projects.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { scrollToId } = useSmoothScroll();
  return (
    <div id="Home" className="App box-content bg-black">
      <Navbar scrollToId={scrollToId} />
      <ThreeLayerd />
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
