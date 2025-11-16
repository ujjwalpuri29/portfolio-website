import {
    Card,
    CardTagsContainer,
    CardDescription,
    CardTitle,
    CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Badge } from "./ui/badge";

const Projects = () => {
    const projects = [
        {
            title: "Pre-Publication Book Popularity Prediction",
            description:
                "Predictive analytics product for publishers to estimate book popularity from manuscript data",
            tags: [
                "Python",
                "Data Analysis",
                "Machine Learning",
                "Natural Language Processing",
            ],
            links: { pub: "https://doi.org/10.1063/5.0217437" },
        },
        {
            title: "Gradescope Calendar Sync",
            description:
                "FastAPI platform for students that automatically tracks Gradescope assignments and sends timely calendar reminders",
            tags: [
                "Python",
                "Google Calendar API",
                "FastAPI",
                "OAuth2",
                "Web Scraping",
            ],
            links: {
                live: "#",
                github: "https://github.com/ujjwalpuri29/gradescope-calendar-sync",
            },
        },
    ];

    return (
        <section id="projects" className="pt-24 pb-16 md:py-24 px-6 bg-card/30">
            <div className="container mx-auto max-w-6xl">
                <div className="md:text-center md:mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 py-4">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="transition-colors w-full md:w-[48%] lg:w-[32%] md:max-w-[478px]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>
                                {project.description}
                                <CardTagsContainer>
                                    {project.tags.map((tag, index) => (
                                        <Badge key={index} className="text-sm">
                                            {tag}
                                        </Badge>
                                    ))}
                                </CardTagsContainer>
                            </CardDescription>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2">
                                    {project.links.pub && (
                                        <a
                                            href={project.links.pub}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            tabIndex={-1}
                                        >
                                            <Button
                                                size="sm"
                                                variant="link"
                                                className="flex items-center justify-center flex-1"
                                            >
                                                Publication
                                                <BsArrowUpRight className="inline stroke-2 h-3 w-3 ml-2" />
                                            </Button>
                                        </a>
                                    )}
                                    {project.links.live ? (
                                        project.links.live !== "#" ? (
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                tabIndex={-1}
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="link"
                                                    className="flex items-center justify-center flex-1"
                                                >
                                                    View
                                                    <BsArrowUpRight className="inline stroke-2 h-3 w-3 ml-2" />
                                                </Button>
                                            </a>
                                        ) : (
                                            <p className="text-muted-foreground">
                                                Going Live Soon
                                            </p>
                                        )
                                    ) : null}
                                </div>
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        tabIndex={-1}
                                    >
                                        <Button size="sm" variant="ghost">
                                            <BsGithub className="h-5 w-5" />
                                        </Button>
                                    </a>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
