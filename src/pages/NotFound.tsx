import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold">
                        <span className="block">404</span>
                        <span className="text-3xl md:text-4xl font-semibold">
                            Oops! Page Not Found
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                        You have taken a road that was not traveled, and that
                        has made all the difference. <br />
                        But don't worry, you can always try another path.
                    </p>
                    <Link to="/">
                        <Button size="lg" variant="default">
                            Go to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
