import CreateLinkForm from "@/Components/Forms/CreateLinkForm";
import LinkCard from "@/Components/LinkCard";
import Layout from "@/Layouts/Layout";
import type { PageProps } from "@/types";
import { LinkProvider } from "@/Utils/LinkContext";
import { Head, usePage } from "@inertiajs/react";

export default function Create() {
    const { errors } = usePage().props;
    const { link }: PageProps = usePage<PageProps>().props;

    return (
        <LinkProvider link={link}>
            <Head title="Create" />
            <meta
                name="description"
                content="Create custom shortened links with ease. Personalize your URLs with custom codes and track their performance instantly."
            />
            <Layout>
                <main className="flex-1 flex-col justify-start  flex py-10 gap-1 px-5 lg:px-80 md:px-40">
                    <h1 className="text-secondary-foreground text-3xl font-boldest">
                        Create link
                    </h1>
                    <CreateLinkForm errors={errors} />
                </main>
                {link && <LinkCard />}
            </Layout>
        </LinkProvider>
    );
}
