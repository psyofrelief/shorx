import { usePage, Head } from "@inertiajs/react";
import type { PageProps, UserLink, PaginatedLinks } from "@/types";
import Layout from "@/Layouts/Layout";
import LinkItem from "@/Components/LinkItem";
import LinkCard from "@/Components/LinkCard";
import { LinkProvider } from "@/Utils/LinkContext";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";

interface LinkProps {
    link: UserLink;
}

export default function Index() {
    const { links }: { links: PaginatedLinks<UserLink> } =
        usePage<PageProps>().props;

    const { flash }: PageProps = usePage<PageProps>().props;
    const link = flash.link;

    const { data: linkItems, links: paginationLinks } = links;

    return (
        <>
            <Head title="Links" />
            <meta
                name="description"
                content="Manage your custom shortened links effortlessly. View, edit, and track performance to optimize your engagement from a single dashboard."
            />
            <Layout>
                <main className="flex flex-col flex-1">
                    <div className="flex-1 gap-5 py-10 px-5 xl:px-[320px] md:px-[75px] flex flex-col">
                        {linkItems.length ? (
                            <h1 className="text-3xl font-boldest mb-8 text-secondary-foreground">
                                Your Links
                            </h1>
                        ) : (
                            <h1 className="text-3xl text-center font-extrabold text-muted-foreground">
                                Create a custom link to view it here.
                            </h1>
                        )}
                        {linkItems.map((link) => (
                            <LinkItem key={link.id} link={link} />
                        ))}
                    </div>
                    {link && <LinkCard link={link} />}

                    {/* Pagination Controls*/}
                    <Pagination className="mt-auto">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={paginationLinks[0].url || "#"}
                                    aria-label="Previous page link"
                                />
                            </PaginationItem>

                            {paginationLinks.map((pagination, index) => {
                                if (
                                    pagination.label === "&laquo; Previous" ||
                                    pagination.label === "Next &raquo;"
                                ) {
                                    return;
                                }
                                return (
                                    <PaginationItem key={Math.random()}>
                                        <PaginationLink
                                            href={pagination.url || "#"}
                                            isActive={
                                                pagination.url ===
                                                window.location.href
                                            }
                                        >
                                            {index}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}
                            <PaginationItem>
                                <PaginationNext
                                    aria-label="Next page link"
                                    href={
                                        paginationLinks[
                                            paginationLinks.length - 1
                                        ].url || "#"
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </main>
            </Layout>
        </>
    );
}
