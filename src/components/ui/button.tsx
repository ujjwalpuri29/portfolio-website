import React from "react";

type ButtonVariant =
    | "default"
    | "destructive"
    | "secondary"
    | "outline"
    | "ghost"
    | "link";
type ButtonSize = "default" | "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent/90 hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    md: "h-10 rounded-md px-4",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
};

export const Button: React.FC<ButtonProps> = ({
    variant = "default",
    size = "default",
    className = "",
    ...props
}) => {
    const base =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    return <button className={classes} {...props} />;
};
