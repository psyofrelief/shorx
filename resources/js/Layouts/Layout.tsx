import Navbar from "@/Components/Shared/Navbar";
import type { PropsWithChildren } from "react";
import { Toaster } from "@/Components/ui/toaster";
import Footer from "@/Components/Shared/Footer";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            {children}
            <Toaster />
            <Footer />
        </div>
    );
}
