import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import ShareCarousel from "./ShareCarousel";
import { Separator } from "./ui/separator";
import ShareIcon from "@/Components/Svg/LinkItemIcons/ShareIcon";
import type { UserLink } from "@/types";

interface LinkProps {
    link: UserLink;
}
export default function ShareDialogue({ link }: LinkProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    aria-label="Trigger share dialogue button"
                    type="button"
                    variant={"ghost"}
                    size={"sm"}
                >
                    <ShareIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Share your link</DialogTitle>
                </DialogHeader>

                <Separator />

                <div className="flex">
                    <ShareCarousel link={link} />
                </div>
            </DialogContent>
        </Dialog>
    );
}
