import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { Button } from "./ui/button";

const Contact = () => {
    const contactInfo = [
        {
            label: "GitHub",
            icon: BsGithub,
            link: "https://github.com/ujjwalpuri29",
        },
        {
            label: "LinkedIn",
            icon: BsLinkedin,
            link: "https://www.linkedin.com/in/ujjwal-puri/",
        },
        {
            label: "Email",
            icon: BsEnvelope,
            link: "mailto:ujjwalpuri.work@gmail.com",
        },
    ];

    return (
        <section id="contact" className="pt-16 pb-24 md:pt-24 md:pb-36 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="md:text-center md:mb-8 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        I'm currently seeking <span className="text-foreground font-semibold">Summer 2026 internship opportunities</span>.<span className="md:hidden"> Feel free to reach out if you'd like to collaborate or discuss creative ideas!</span>
                    </p>
                    <p className="text-lg text-muted-foreground hidden md:block">
                        Feel free to reach out if you'd like to collaborate or discuss creative ideas!
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-start md:justify-center items-center pt-4">
                    {contactInfo.map((info, index) => (
                        <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button key={index} size={window.innerWidth >= 768 ? "lg" : "icon"} variant={window.innerWidth >= 768 ? "outline" : "ghost"} className="flex justify-center items-center gap-3">
                                <info.icon className="h-5 w-5" />
                                <p className="text-lg font-semibold hidden md:block">
                                    {info.label}
                                </p>
                            </Button>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
