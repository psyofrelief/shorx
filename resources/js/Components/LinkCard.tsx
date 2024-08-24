import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";

import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import ShareCarousel from "./ShareCarousel";
import { toast } from "./ui/use-toast";
import CopyIcon from "./Svg/CopyIcon";
import type { UserLink } from "@/types";

interface LinkProps {
    link: UserLink;
}
export default function LinkCard({ link }: LinkProps) {
    // State to track dialogue's visibility
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Open dialogue when link is received or updated
        if (link) {
            setIsOpen(true);
        }
    }, [link]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="rounded-md gap-6">
                <DialogHeader>
                    <DialogTitle className="font-boldest text-2xl">
                        Here's your link!
                    </DialogTitle>
                    <DialogDescription>
                        Copy the link below or share it directly.
                    </DialogDescription>
                </DialogHeader>
                <div className="bg-secondary flex flex-col text-center gap-5 p-5 rounded-md shadow">
                    <a
                        aria-label="Short url redirect link"
                        href={link.short_code}
                        rel="noreferrer"
                        target="_blank"
                        className="text-primary underline underline-offset-4 hover: text-lg font-bold"
                    >
                        shrx.me/{link.short_code}
                    </a>
                    <Button
                        aria-label="Short link copy button"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                `https://shrx.me/${link.short_code}`,
                            );
                            toast({
                                title: "Success!",
                                description:
                                    "The link has been copied to your clipboard.",
                            });
                        }}
                        size={"lg"}
                        type="button"
                        className="flex-0 flex items-center gap-2 md:flex-0 mx-0 md:mx-auto"
                    >
                        <CopyIcon />
                        Copy Link
                    </Button>
                </div>
                <Separator />
                <DialogFooter className="flex">
                    <ShareCarousel link={link} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
