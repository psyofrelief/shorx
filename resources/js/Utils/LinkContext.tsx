import { createContext, useContext } from "react";
import type { UserLink } from "@/types";

const LinkContext = createContext<UserLink | null>(null);

export function LinkProvider({
    link,
    children,
}: {
    link: UserLink | null;
    children: React.ReactNode;
}) {
    return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
}

export function useLink() {
    const context = useContext(LinkContext);
    if (!context) {
        throw new Error("useLink must be used within a LinkProvider");
    }
    return context;
}
