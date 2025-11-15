import { Button } from "./ui/button";
import { BsArrowUpRight } from "react-icons/bs";

const Experience = () => {
    const experience = [
        {
            position: "Decision Analytics Associate",
            organization: "ZS Associates",
            year: "2023 - 2025",
            description:
                ["Built a full-stack performance-tracking platform for global Medical Affairs teams using React, Node.js, and Express.", "Automated Python-based reporting pipelines, integrated RESTful APIs, and optimized backend SQL queries.", "Partnered with cross-functional teams to define KPIs and build Power BI dashboards for monitoring.", "Onboarded junior analysts through hands-on technical guidance and workflow alignment."],
            skills: ["React", "Node.js", "SQL", "Python", "Power BI", "Excel"],
        },
        {
            position: "Research Intern",
            organization: "Samsung R&D Institute India",
            year: "Jan - Dec 2022",
            description:
                ["Researched and fine-tuned deep learning models for reflection removal in images, improving image quality metrics such as PSNR and SSIM.", "Curated a large-scale RAW image dataset for training and validation, and synthesized insights from 10+ academic papers to establish high-performing baselines for model development."],
            skills: ["Python", "Machine Learning", "OpenCV", "TensorFlow"],
        },
        {
            position: "Technology Associate Intern",
            organization: "OptShine Digitech Solutions",
            year: "Jan - Dec 2021",
            description:
                ["Launched the company's first production website using React on AWS", "Designed wireframes and prototypes for mobile app interfaces in Figma and Adobe XD."],
            skills: ["HTML", "CSS", "JavaScript", "React", "Figma", "Adobe Suite"],
        },
    ];

    return (
        <section id="experience" className="py-16 md:py-24 px-6 bg-card/30">
            <div className="container mx-auto max-w-7xl">
                <div className="md:text-center md:mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Experience
                    </h2>
                </div>
                <div className="flex flex-col gap-2 items-end max-w-5xl mx-auto">
                <div className="space-y-2">
                    {experience.map((item, index) => (
                        <div
                            key={index}
                            className="py-4 md:p-8 rounded-lg hover:bg-card/60 hover:backdrop-blur-sm animate-fade-in"
                        >
                            <div className="md:flex items-center gap-4 md:gap-8">
                                <div className="flex flex-shrink-0 md:mx-3 min-w-[100px]">
                                    <p className="text-sm text-muted-foreground font-semibold mb-2">
                                        {item.year}
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg font-semibold mb-1">
                                        {item.position} &middot;{" "}
                                        <span className="text-primary font-medium mb-2">
                                            {item.organization}
                                        </span>
                                    </p>
                                    <div>
                                    <ul className="text-muted-foreground my-2">
                                        {item.description.map((description, index) => (
                                            <li key={index} className="ml-4 list-disc">
                                                {description}
                                            </li>
                                        ))}
                                    </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {item.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium text-sm leading-5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <Button variant="link">
                        View All Experiences <BsArrowUpRight className="inline stroke-2 h-3 w-3 ml-2" />
                    </Button>
                    
                </div>
            </div>
        </section>
    );
};

export default Experience;
