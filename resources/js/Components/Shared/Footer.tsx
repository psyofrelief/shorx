import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <footer className="w-full  px-5 sm:px-10 py-5 flex justify-between bg-gradient-to-b from-background to-accent">
            <p className="text-muted-foreground font-logo">
                <span className="text-primary">Shor</span>X
            </p>
            <div className="flex items-center justify-center gap-3">
                <a
                    href="https://github.com/psyofrelief/shorx"
                    aria-label="Github profile link"
                    rel="noreferrer"
                    target="_blank"
                >
                    <GitHubLogoIcon className="h-7 w-7 text-muted-foreground hover:text-accent-foreground transition-colors" />
                </a>
                <a
                    href="https://www.linkedin.com/in/faried-idris"
                    aria-label="LinkedIn profile link"
                    rel="noreferrer"
                    target="_blank"
                >
                    <LinkedInLogoIcon className="h-7 w-7 text-muted-foreground hover:text-accent-foreground transition-colors" />
                </a>
            </div>
        </footer>
    );
}
