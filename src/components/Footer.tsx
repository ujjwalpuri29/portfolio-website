import { BsHeart } from "react-icons/bs";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 py-6 px-6">
            <div className="container mx-auto max-w-6xl text-muted-foreground md:text-right">
                    © {currentYear} Portfolio. Built with{" "}
                    <BsHeart className="inline h-4 w-4 text-primary" /> and lots
                    of code.
            </div>
        </footer>
    );
};

export default Footer;
