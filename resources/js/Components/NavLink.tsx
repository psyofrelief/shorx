import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                "block items-center px-1  border-t-2 text-sm font-semibold leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-t-primary  text-secondary-foreground focus:border-foreground "
                    : " border-transparent text-muted-foreground hover:text-secondary-foreground hover:border-primary focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
