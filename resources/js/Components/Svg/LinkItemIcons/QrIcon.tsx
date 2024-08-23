import { useEffect, useState } from "react";

export default function QrIcon() {
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        setTheme(localStorage.theme);
    }, []);

    return (
        <svg
            className="w-5 fill-current"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Qr Icon</title>
            <rect fill="none" height="256" width="256" />
            <rect
                fill="current"
                height="64"
                rx="8"
                stroke={theme === "dark" ? "#fafafa" : "#1a1a1a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                width="64"
                x="48"
                y="48"
            />
            <rect
                fill="current"
                height="64"
                rx="8"
                stroke={theme === "dark" ? "#fafafa" : "#1a1a1a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                width="64"
                x="48"
                y="144"
            />
            <rect
                fill="current"
                height="64"
                rx="8"
                stroke={theme === "dark" ? "#fafafa" : "#1a1a1a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                width="64"
                x="144"
                y="48"
            />
            <line
                fill="current"
                stroke={theme === "dark" ? "#fafafa" : "#1a1a1a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="144"
                x2="144"
                y1="144"
                y2="176"
            />
            <polyline
                fill="current"
                points="144 208 176 208 176 144"
                stroke={theme === "dark" ? "#fafafa" : "#1a1a1a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <line
                fill="current"
                stroke={theme === "dark" ? "#fafafa" : "#1a1a1a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="176"
                x2="208"
                y1="160"
                y2="160"
            />
            <line
                fill="current"
                stroke={theme === "dark" ? "#fafafa" : "#1a1a1a"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="208"
                x2="208"
                y1="192"
                y2="208"
            />
        </svg>
    );
}
