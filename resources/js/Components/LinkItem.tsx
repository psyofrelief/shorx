import type { UserLink } from "@/types";
import { Button } from "./ui/button";
import { DeleteAlert } from "./DeleteAlert";
import { EditDialogue } from "./EditDialogue";
import { Separator } from "@/Components/ui/separator";
import ShareDialogue from "./ShareDialogue";
import QrPopover from "./QrPopover";
import { useToast } from "@/Components/ui/use-toast";
import CopyIcon from "@/Components/Svg/CopyIcon";
import { motion } from "framer-motion";

interface LinkProps {
    link: UserLink;
}
export default function LinkItem({ link }: LinkProps) {
    const { toast } = useToast();

    return (
        <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="flex border bg-popover flex-col rounded-lg gap-4 w-full  relative p-7 min-w-full md:flex-row text-popover-foreground shadow-lg"
        >
            <div className="flex flex-col justify-center  whitespace-nowrap text-sm gap-1 w-[180px] sm:w-[300px] ">
                <p className="font-bold text-xl tracking-wide">
                    {link.title || `Link #${link.id}`}
                </p>
                <a
                    href={link.short_code}
                    aria-label="Short url redirect link"
                    rel="noreferrer"
                    target="_blank"
                    className="font-bold italic hover:underline text-primary"
                >
                    shx.is/{link.short_code}
                </a>
                <p className="text-secondary-foreground font-light overflow-hidden text-ellipsis hover:text-wrap">
                    {link.original_link}
                </p>
                <div className="flex mt-4 flex-wrap gap-2 text-xs font-medium">
                    <p>Clicks: {link.clicks}</p>
                    <p className="tracking-wider font-bold">
                        {new Date(link.created_at).toLocaleString()}
                    </p>
                </div>
            </div>
            <Separator className="block md:hidden" />

            <div className="flex  items-start gap-2 ml-auto w-full sm:w-fit">
                <Button
                    aria-label="Copy short link and trigger toast button"
                    onClick={() => {
                        navigator.clipboard.writeText(
                            `https://shx.is/${link.short_code}`,
                        );
                        toast({
                            title: "Success!",
                            description:
                                "The link has been copied to your clipboard.",
                        });
                    }}
                    className="gap-2 flex-1"
                    size={"sm"}
                    variant={"secondary"}
                >
                    <CopyIcon />
                    <span>Copy</span>
                </Button>
                <QrPopover link={link} />

                <EditDialogue link={link} />
                <ShareDialogue link={link} />
                <DeleteAlert link={link} />
            </div>
        </motion.div>
    );
}
