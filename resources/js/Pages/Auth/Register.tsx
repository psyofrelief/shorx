import { Head, Link } from "@inertiajs/react";
import RegisterForm from "@/Components/Forms/RegisterForm";
import { Button } from "@/Components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import SignUpImage from "@/Components/Svg/SignUpImage";
import DarkModeToggle from "@/Components/Shared/DarkModeToggle";

export default function Register() {
    return (
        <main className="bg-gradient-to-b from-background to-accent/40 w-full flex h-screen">
            <Head title="Sign Up" />
            <meta
                name="description"
                content="Join us to start shortening your URLs! Quick sign-up to manage and share your links efficiently."
            />

            <Link href="/" aria-label="Home page redirect link">
                <Button
                    className="gap-1 px-5 text-secondary-foreground absolute left-5 top-10"
                    type="button"
                    variant={"ghost"}
                    aria-label="Home button"
                >
                    <HomeIcon className="h-5 w-5" />
                </Button>
            </Link>
            <div className="flex items-center justify-center   flex-1">
                <RegisterForm />
            </div>
            <div className="flex-1 hidden bg-gradient-to-br from-background to-accent lg:flex border-l border-l-muted lg:flex-col items-center justify-center gap-8 p-20 ">
                <Link
                    href="/"
                    aria-label="Home page redirect link"
                    className="mr-2 font-logo text-4xl font-extrabold text-muted-foreground"
                >
                    <span className="text-primary">Shor</span>X
                </Link>
                <SignUpImage />
            </div>
            <DarkModeToggle className="" />
        </main>
    );
}
