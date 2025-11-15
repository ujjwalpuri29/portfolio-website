import {
    SiPython,
    SiJavascript,
    SiTypescript,
    SiCplusplus,
    SiC,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiReact,
    SiTailwindcss,
    SiReactquery,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFlask,
    SiFastapi,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiOpencv,
    SiGooglecloud,
    SiGit,
    SiGithub,
    SiFigma,
    SiTableau,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import PowerBIIcon from "../assets/icons/PowerBIIcon";

const Skills = () => {
    const skillCategories = [
        {
            category: "Languages",
            skills: [
                { name: "Python", icon: SiPython },
                { name: "Javascript", icon: SiJavascript },
                { name: "TypeScript", icon: SiTypescript },
                { name: "C++", icon: SiCplusplus },
                { name: "C", icon: SiC },
                { name: "SQL", icon: SiMysql },
                { name: "HTML", icon: SiHtml5 },
                { name: "CSS", icon: SiCss3 },
            ],
        },
        {
            category: "Frontend",
            skills: [
                { name: "React", icon: SiReact },
                { name: "Tailwind", icon: SiTailwindcss },
                { name: "React Native", icon: SiReactquery },
            ],
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express", icon: SiExpress },
                { name: "MongoDB", icon: SiMongodb },
                { name: "Flask", icon: SiFlask },
                { name: "FastAPI", icon: SiFastapi },
            ],
        },
        {
            category: "AI/ML",
            skills: [
                { name: "TensorFlow", icon: SiTensorflow },
                { name: "PyTorch", icon: SiPytorch },
                { name: "Scikit-learn", icon: SiScikitlearn },
                { name: "OpenCV", icon: SiOpencv },
            ],
        },
        {
            category: "Tools and Platforms",
            skills: [
                { name: "AWS", icon: FaAws },
                { name: "Google Cloud", icon: SiGooglecloud },
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "Figma", icon: SiFigma },
            ],
        },
        {
            category: "Data Analysis & Visualization",
            skills: [
                { name: "Power BI", icon: PowerBIIcon },
                { name: "Tableau", icon: SiTableau },
                { name: "Excel", icon: PiMicrosoftExcelLogoFill },
            ],
        },
    ];

    return (
        <section id="skills" className="py-16 md:py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="md:text-center md:mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Skills &{" "}
                        <span className="text-primary">Technologies</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 items-stretch md:auto-rows-fr">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-card/90 border border-border p-4 md:p-8 rounded-md animate-fade-in h-full"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <p className="text-lg font-semibold mb-4">
                                {category.category}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full font-medium text-sm"
                                        >
                                            <skill.icon className="text-sm" />
                                            <span className="text-sm">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
