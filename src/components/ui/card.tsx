import React from "react";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`flex flex-col bg-card/90 border border-border rounded-md animate-fade-in text-card-foreground p-4 md:p-8 ${className}`}
        {...props}
    />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={`text-lg font-semibold leading-6 ${className}`}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={`flex flex-col flex-grow gap-4 py-3 text-sm text-muted-foreground ${className}`}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

const CardTagsContainer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={`flex flex-wrap gap-2 ${className}`} {...props} />
));
CardTagsContainer.displayName = "CardTagsContainer";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={`flex justify-between items-center mt-auto pt-3 gap-2 ${className}`}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";

export { Card, CardFooter, CardTitle, CardDescription, CardTagsContainer };
