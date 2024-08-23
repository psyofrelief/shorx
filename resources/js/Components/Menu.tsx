import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import MenuIcon from "./Svg/MenuIcon";
import NavLink from "./NavLink";
import type { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { Button } from "./ui/button";
import { Inertia } from "@inertiajs/inertia";

export default function Menu() {
    const { auth }: PageProps = usePage<PageProps>().props;
    const user = auth.user;

    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-10 px-10 pt-[72px] pb-10">
                {user ? (
                    <>
                        <NavLink
                            as="button"
                            aria-label="User links redirect button"
                            active={window.location.pathname === "/links"}
                            href="/links"
                            className="text-xl py-8 rounded-md border-2"
                        >
                            Links
                        </NavLink>
                        <NavLink
                            as="button"
                            aria-label="Create link redirect button"
                            active={window.location.pathname === "/create"}
                            href="/create"
                            className="text-xl py-8 rounded-md border-2 "
                        >
                            Create
                        </NavLink>
                    </>
                ) : (
                    <>
                        <Link
                            aria-label="Login redirect link"
                            href="/login"
                            className="mt-auto"
                        >
                            <Button
                                aria-label="Login redirect button"
                                variant={"outline"}
                                className="w-full py-8 text-lg"
                                size={"lg"}
                            >
                                Login
                            </Button>
                        </Link>
                        <Link
                            href="/register"
                            aria-label="Register redirect link"
                        >
                            <Button
                                aria-label="Register redirect button"
                                className="w-full py-8 text-lg"
                                size={"lg"}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </>
                )}
                {user && (
                    <Button
                        className="mt-auto py-8 text-lg"
                        aria-label="Logout button"
                        size={"lg"}
                        onClick={() => Inertia.post(route("logout"))}
                    >
                        Logout
                    </Button>
                )}
            </SheetContent>
        </Sheet>
    );
}
