import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { Button } from "./ui/button";
import type { UserLink } from "@/types";
import { useEffect, useState } from "react";
import QrIcon from "@/Components/Svg/LinkItemIcons/QrIcon";
import Loader from "./Loader";

interface LinkProps {
    link: UserLink;
}

export default function QrPopover({ link }: LinkProps) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <Popover>
            <PopoverTrigger
                asChild
                className=" text-sm font-semibold py-0 text-gray-700 bg-transparent  border-black rounded-md h-8 "
            >
                <Button
                    type="button"
                    aria-label="Display QR code button"
                    variant={"ghost"}
                    size={"sm"}
                    className="gap-1 text-secondary-foreground"
                >
                    <QrIcon />
                    <span>QR</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="relative flex justify-center p-3 border-foreground bg-black border-2 rounded-xl shadow-2xl   items-center w-fit">
                {isLoading && (
                    <div className=" inset-0 flex justify-center items-center text-white">
                        <Loader />
                    </div>
                )}
                <a
                    href={link.qr_link}
                    rel="noreferrer"
                    aria-label="Qr code image redirect link"
                    target="_blank"
                >
                    <img
                        src={link.qr_link}
                        alt="Qr Code"
                        onLoad={handleImageLoad}
                        style={{
                            display: isLoading ? "none" : "block",
                        }}
                    />
                </a>
            </PopoverContent>
        </Popover>
    );
}
