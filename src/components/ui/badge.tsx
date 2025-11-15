import React from "react";

export const Badge: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className = "",
    ...props
}) => {
    return (
        <div className={`flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full font-medium text-sm ${className}`} {...props} />
    );
};
