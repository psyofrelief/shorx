import NavLink from "@/Components/NavLink";
import { Button } from "@/Components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import type { PageProps } from "@/types";
import { Inertia } from "@inertiajs/inertia";
import DarkModeToggle from "@/Components/Shared/DarkModeToggle";
import Menu from "@/Components/Menu";

export default function Navbar() {
    const { auth }: PageProps = usePage<PageProps>().props;
    const user = auth.user;

    return (
        <nav className=" min-w-full justify-between p-4 flex border-b border-b-muted">
            <section className="flex items-center gap-4">
                <Link
                    aria-label="Home page redirect link"
                    href="/"
                    className="mr-2 font-logo text-xl text-muted-foreground hover:text-foreground"
                >
                    <span className="text-primary">Shor</span>X
                </Link>
                {user && (
                    <>
                        <NavLink
                            active={window.location.pathname === "/links"}
                            href="/links"
                            className="hidden sm:inline-flex"
                            aria-label="User links redirect link"
                        >
                            Links
                        </NavLink>
                        <NavLink
                            active={window.location.pathname === "/create"}
                            href="/create"
                            className="hidden sm:inline-flex"
                            aria-label="User create redirect link"
                        >
                            Create
                        </NavLink>
                    </>
                )}
            </section>

            <DarkModeToggle className="relative top-0 my-auto right-0" />
            <section className=" gap-5 sm:gap-3 hidden sm:flex items-end">
                {user ? (
                    <Button
                        onClick={() => Inertia.post(route("logout"))}
                        aria-label="Logout button"
                        variant={"default"}
                    >
                        Logout
                    </Button>
                ) : (
                    <>
                        <Link
                            href="/login"
                            aria-label="Login redirect link"
                            className="my-auto"
                            tabIndex={-1}
                        >
                            <Button
                                aria-label="Login redirect button"
                                variant={"ghost"}
                                className=" p-5 "
                            >
                                Login
                            </Button>
                        </Link>
                        <Link
                            href="/register"
                            aria-label="Register redirect link"
                            tabIndex={-1}
                        >
                            <Button
                                className=" p-5"
                                aria-label="Register redirect button"
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </>
                )}
            </section>
            <section className="sm:hidden cursor-pointer ml-1 flex items-center">
                <Menu />
            </section>
        </nav>
    );
}
