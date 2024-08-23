import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";

type DarkModeToggleProps = {
    className?: string;
};

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }
    };

    return (
        <Button
            variant={"ghost"}
            type="button"
            onClick={toggleDarkMode}
            className={`ml-auto mr-2 mt-[1px] absolute top-10 right-5 text-secondary-foreground  ${className}`}
            aria-label="Dark mode button"
        >
            {!isDarkMode ? (
                <MoonIcon className="h-5 w-5" />
            ) : (
                <SunIcon className="h-5 w-5" />
            )}
        </Button>
    );
}
