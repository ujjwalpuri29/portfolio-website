import React, { useState, useEffect } from "react";
import Logo from "./Logo.tsx";
import { Button } from "./ui/button";
import { BsList, BsX } from "react-icons/bs";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { label: "Experience", id: "experience" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                (isScrolled || isMobileMenuOpen) ? "bg-card/80 border-b border-border backdrop-blur-md [transition:var(--animate-transition-smooth)] shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="text-xl font-bold hover:text-primary transition-colors cursor-pointer"
                    >
                        <Logo className="text-primary p-4 lg:p-3" />
                    </button>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Button
                                key={link.id}
                                variant="ghost"
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm hover:text-primary transition"
                            >
                                {link.label}
                            </Button>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            {isMobileMenuOpen ? (
                                <BsX className="h-5 w-5" />
                            ) : (
                                <BsList className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 transition-all transition-discrete ">
                        <div className="flex flex-col h-screen gap-2">
                            <div className="flex flex-col flex-1 gap-2">
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.id}
                                        variant="ghost"
                                        onClick={() => scrollToSection(link.id)}
                                        className="justify-start"
                                    >
                                        {link.label}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
