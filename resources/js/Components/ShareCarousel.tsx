import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import TwitterIcon from "./Svg/ShareIcons/TwitterIcon";
import FacebookIcon from "./Svg/ShareIcons/FacebookIcon";
import InstagramIcon from "./Svg/ShareIcons/InstagramIcon";
import WhatsappIcon from "./Svg/ShareIcons/WhatsappIcon";
import SnapchatIcon from "./Svg/ShareIcons/SnapchatIcon";
import LinkedinIcon from "./Svg/ShareIcons/LinkedinIcon";
import YoutubeIcon from "./Svg/ShareIcons/YoutubeIcon";
import type { UserLink } from "@/types";

interface LinkProps {
    link: UserLink;
}

export default function ShareCarousel({ link }: LinkProps) {
    const shortUrl = `https://shx.is/${link.short_code}`;

    return (
        <Carousel className="flex-1 max-w-[250px] mx-auto">
            <CarouselContent>
                <CarouselItem className="basis-1/5 pl-4 h-10 mt-auto">
                    <a
                        rel="noreferrer"
                        aria-label="Twitter share link"
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20link%20shortened%20with%20ShorX%0D%0A${encodeURIComponent(shortUrl)}`}
                    >
                        <TwitterIcon />
                    </a>
                </CarouselItem>
                <CarouselItem className="basis-1/5 pl-4 h-9 my-auto">
                    <a
                        rel="noreferrer"
                        aria-label="Facebook share link"
                        target="_blank"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shortUrl)}`}
                    >
                        <FacebookIcon />
                    </a>
                </CarouselItem>
                <CarouselItem className="basis-1/5 pl-4 h-9 my-auto">
                    <a
                        rel="noreferrer"
                        aria-label="Instagram share link"
                        target="_blank"
                        href={`https://www.instagram.com/?url=${encodeURIComponent(shortUrl)}`}
                    >
                        <InstagramIcon />
                    </a>
                </CarouselItem>
                <CarouselItem className="basis-1/5 pl-4 h-9 my-auto">
                    <a
                        rel="noreferrer"
                        aria-label="WhatsApp share link"
                        target="_blank"
                        href={`https://wa.me/?text=${encodeURIComponent(shortUrl)}`}
                    >
                        <WhatsappIcon />
                    </a>
                </CarouselItem>
                <CarouselItem className="basis-1/5 pl-4 h-9 my-auto">
                    <a
                        rel="noreferrer"
                        aria-label="Snapchat share link"
                        target="_blank"
                        href={`https://www.snapchat.com/scan?attachmentUrl=${encodeURIComponent(shortUrl)}`}
                    >
                        <SnapchatIcon />
                    </a>
                </CarouselItem>
                <CarouselItem className="basis-1/5 pl-4 h-9 my-auto">
                    <a
                        rel="noreferrer"
                        target="_blank"
                        aria-label="LinkedIn share link"
                        href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shortUrl)}`}
                    >
                        <LinkedinIcon />
                    </a>
                </CarouselItem>
                <CarouselItem className="basis-1/5 pl-4 h-9 my-auto">
                    <a
                        rel="noreferrer"
                        aria-label="YouTube share link"
                        target="_blank"
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(shortUrl)}`}
                    >
                        <YoutubeIcon />
                    </a>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
