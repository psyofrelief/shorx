import { Head, Link } from "@inertiajs/react";
import { LoginForm } from "@/Components/Forms/LoginForm";
import { Button } from "@/Components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import LoginImage from "@/Components/Svg/LoginImage";
import DarkModeToggle from "@/Components/Shared/DarkModeToggle";

export default function Login({ status }: { status?: string }) {
    return (
        <main className="bg-gradient-to-b from-background to-accent/40 w-full flex h-screen">
            <Head title="Log in" />
            <meta
                name="description"
                content="Access your account to manage and track your custom shortened links. Secure and easy login to start your session."
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

            <DarkModeToggle className="border border-muted" />
            <div className="flex flex-col items-center justify-center pt-12  flex-1">
                {status && (
                    <div className="mb-4 font-semibold text-md text-green-600">
                        {status}
                    </div>
                )}
                <LoginForm />
            </div>
            <div className=" hidden flex-1 border-l border-l-muted bg-gradient-to-br from-background to-accent lg:flex lg:flex-col gap-8 p-20 items-center justify-center">
                <Link
                    href="/"
                    aria-label="Home page redirect link"
                    className="mr-2 font-logo text-4xl font-extrabold text-muted-foreground"
                >
                    <span className="text-primary">Shor</span>X
                </Link>
                <LoginImage />
            </div>
        </main>
    );
}
