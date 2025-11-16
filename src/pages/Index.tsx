import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

interface IndexProps {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

const Index = ({ theme, setTheme }: IndexProps) => {
    return (
        <div className="min-h-screen">
            <Navbar theme={theme} setTheme={setTheme} />
            <Home />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
