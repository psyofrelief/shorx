import Layout from "@/Layouts/Layout";
import { usePage, Head, Link } from "@inertiajs/react";
import type { PageProps } from "@/types";
import { Button } from "@/Components/ui/button";
import RightArrowIcon from "@/Components/Svg/RightArrowIcon";
import LinkCard from "@/Components/LinkCard";
import { LinkProvider } from "@/Utils/LinkContext";
import QrCodeIcon from "@/Components/Svg/InfoCardIcons/QrCodeIcon";
import ManageIcon from "@/Components/Svg/InfoCardIcons/ManageIcon";
import StatsIcon from "@/Components/Svg/InfoCardIcons/StatsIcon";
import FaqAccordion from "@/Components/FaqAccordion";
import HeaderImage from "@/Components/Svg/HeaderImage";
import { motion } from "framer-motion";
import InfoCard from "@/Components/InfoCard";
import HomeLinkForm from "@/Components/Forms/HomeLinkForm";
import { useEffect } from "react";

export default function Home() {
    const { auth, flash }: PageProps = usePage<PageProps>().props;
    const link = flash.link;
    const user = auth.user;

    useEffect(() => {
        console.log(link);
    }, [link]);
    return (
        <Layout>
            <Head title="Home" />
            <meta
                name="description"
                content="Discover quick and easy ways to manage your digital content. Shorten links, track click data, and enhance user engagement with seamless, powerful tools."
            />
            <main className=" flex flex-col">
                <header className="grid sm:flex sm:grid-cols-2 px-3 text-center sm:text-start items-center sm:px-10 py-20">
                    <div className="flex flex-col justify-center  flex-1">
                        <h1 className="text-4xl leading-tight font-extrabold xxl:text-[4.5rem] mb-7 sm:text-[3.2rem]">
                            Wrap Up Your Endless Links
                        </h1>
                        <p className="text-lg sm:text-xl text-secondary-foreground font-medium">
                            Conveniently shorten URLs and create QR Codes to
                            engage viewers right away and increase interaction.
                        </p>
                        <div className="flex gap-2 mt-12 justify-center sm:justify-start">
                            {!user ? (
                                <Link
                                    href="/register"
                                    aria-label="Register redirect link"
                                >
                                    <Button aria-label="Register redirect button">
                                        Get started for free{" "}
                                        <span className="ml-1">
                                            <RightArrowIcon />
                                        </span>
                                    </Button>
                                </Link>
                            ) : (
                                <Link
                                    href="/create"
                                    aria-label="Create redirect link"
                                >
                                    <Button aria-label="Create link redirect button">
                                        Create a link{" "}
                                        <span className="ml-1">
                                            <RightArrowIcon />
                                        </span>
                                    </Button>
                                </Link>
                            )}
                            <a
                                href="https://github.com/psyofrelief/shorx"
                                rel="noreferrer"
                                aria-label="Github repo redirect link"
                                target="_blank"
                            >
                                <Button
                                    aria-label="Github repo redirect button"
                                    variant={"outline"}
                                >
                                    Learn more
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className=" justify-center p-20  items-center  hidden md:flex">
                        <HeaderImage />
                    </div>
                </header>
                {!user && (
                    <section className=" bg-secondary/80 dark:bg-gradient-to-t from-background to-popover 5ustify-center flex flex-col flex-1 min-w-full py-20 px-10 sm:px-5 items-center">
                        <div className="text-center mb-16 space-y-2">
                            <p className="font-extrabold text-primary text-xl">
                                GREAT CONNECTIONS START WITH A CLICK OR SCAN
                            </p>
                            <h2 className="font-extrabold text-3xl ">
                                Sign up for a free account and put ShorX to work
                            </h2>
                        </div>
                        <HomeLinkForm />
                    </section>
                )}

                {link && <LinkCard link={link} />}
                <section className="flex-col sm:flex-row sm:flex justify-center gap-2 md:gap-8 bg-background text-secondary-foreground py-20 px-10 space-y-6 sm:space-y-0 text-center">
                    <InfoCard
                        title="Qr Codes"
                        description="Turn your short link into a QR code for
                                effortless sharing"
                        icon={<QrCodeIcon />}
                    />
                    <InfoCard
                        title="Statistics"
                        description="Track the clicks your shortened URL has received"
                        icon={<StatsIcon />}
                    />
                    <InfoCard
                        title="Management"
                        description="Easily manage all of your shortened links in one place"
                        icon={<ManageIcon />}
                    />
                </section>
                <motion.section
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    className="p-5 sm:p-10 "
                >
                    <h2 className="text-2xl font-bold mb-8">
                        Frequently Asked Questions
                    </h2>
                    <FaqAccordion />
                </motion.section>
            </main>
        </Layout>
    );
}
