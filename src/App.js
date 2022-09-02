import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Link } from "react-scroll";

const App = () => (
    <div className="App">
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
);

export default App;
