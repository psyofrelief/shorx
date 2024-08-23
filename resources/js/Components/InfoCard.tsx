import type { ReactNode } from "react";

interface InfoCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function InfoCard({ icon, title, description }: InfoCardProps) {
    return (
        <div className="flex-1 text-secondary-foreground/80 px-3 py-8 flex flex-col items-center bg-gradient-to-br from-popover to-accent rounded-lg shadow-lg">
            <p className="mb-2">{icon}</p>
            <h3 className="font-bold text-xl mb-2 md:text-2xl">{title}</h3>
            <p className="text-sm md:text-lg mb-auto md:mb-0 mt-3">
                {description}
            </p>
        </div>
    );
}
