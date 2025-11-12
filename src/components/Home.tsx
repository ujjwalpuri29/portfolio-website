import { Button } from "./ui/button";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

const Hero = () => {
    const scrollToAbout = () => {
        document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        <span className="block">Ujjwal Puri</span>
                        <span className="text-3xl md:text-4xl">
                            AI/ML and Front-End Web Developer
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Crafting beautiful digital experiences through code and
                        design. Master's student at USC passionate about building innovative
                        solutions to real-world problems.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
                        <Button
                            size="lg"
                            variant="default"
                            onClick={scrollToAbout}
                        >
                            About Me
                        </Button>

                        <div className="flex gap-3">
                            <a
                                href="https://github.com/ujjwalpuri29"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="icon" variant="outline">
                                    <BsGithub className="h-5 w-5" />
                                </Button>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ujjwal-puri/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="icon" variant="outline">
                                    <BsLinkedin className="h-5 w-5" />
                                </Button>
                            </a>
                            <a href="mailto:ujjwalpuri.work@gmail.com">
                                <Button size="icon" variant="outline">
                                    <BsEnvelope className="h-5 w-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
