import React from "react";

interface LogoProps {
    className?: string;
    size?: number | string;
}
const Logo: React.FC<LogoProps> = ({ className = "", size = 64 }) => (
    <svg
        id="Logo"
        data-name="Logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 552.03 738.29"
        width={size}
        height={size}
        fill="currentColor"
        className={className}
    >
        <path
            d="M373.87,545.42V831c0,24.11,3.13,45.61,8.95,64.24,10,31.93,27.81,55.44,51.3,69.22l-60.25-34.79-77-44.46-.69-.39c-37.29-21.79-60.42-68-60.42-133.57V465.68l98-56.59,40.11-23.16L512,465.68l-69.06,39.87Z"
            transform="translate(-235.75 -226.16)"
        />
        <path
            d="M787.78,305.91,650.13,385.38V671.49c0,43.86-31.08,97.69-69.07,119.62-19,11-36.31,12-48.83,4.7S512,773.13,512,751.24V305.64l97.53-56.31,40.12-23.17.48.28Z"
            transform="translate(-235.75 -226.16)"
        />
    </svg>
);

export default Logo;
