import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

export default function FaqAccordion() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full text-secondary-foreground/80"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>What is a URL shortener?</AccordionTrigger>
                <AccordionContent>
                    A URL shortener is a tool that reduces lengthy URLs to
                    shorter, easier-to-manage links. Long web URLs become
                    shorter and simpler to transmit as a result, particularly on
                    social media and other platforms where character limits
                    apply.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    How does a URL shortener work?
                </AccordionTrigger>
                <AccordionContent>
                    Through a technique known as URL redirection, users are sent
                    to the original, longer URL from a short link when using URL
                    shorteners. A user is immediately sent to the intended
                    location when they click on a shortened link.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    Are shortened links permanent?
                </AccordionTrigger>
                <AccordionContent>
                    In general, ShorX strives for link longevity and
                    performance. However, several services have expiration
                    settings, which means the links may stop working after a
                    predetermined amount of time. For information on the
                    lifespan of the link, it is advisable to review the terms
                    and conditions of the service.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>
                    Can I edit or delete a shortened link?
                </AccordionTrigger>
                <AccordionContent>
                    ShorX allows users to edit or modify a created custom short
                    link once it's generated. However, some services might not
                    offer account-based management where you can delete or
                    modify links from your account.
                </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-5">
                <AccordionTrigger>What is a QR code?</AccordionTrigger>
                <AccordionContent>
                    The abbreviation QR stands for Quick Response code, which is
                    a two-dimensional barcode that stores data in a
                    machine-readable format. It is composed of black squares
                    arranged on a white square grid, giving the impression of a
                    square image. Data in the form of text, URLs, contact
                    details, and other types of information can all be found
                    within QR codes.
                </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-6">
                <AccordionTrigger>How does a QR code work?</AccordionTrigger>
                <AccordionContent>
                    The way QR codes function is by encoding data inside the
                    pattern of white spaces and black squares. The encoded data
                    is quickly interpreted and processed when scanned with a
                    smartphone camera or a QR code scanner app. This enables the
                    user to access the embedded information, which may include a
                    website link, contact information, or other digital content.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger>
                    Can I shorten unlimited links?
                </AccordionTrigger>
                <AccordionContent>
                    There are no restrictions on how many links users can
                    shorten using ShorX. As many links as you like can be
                    shortened.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
                <AccordionTrigger>
                    Can I track statistics for shortened links?
                </AccordionTrigger>
                <AccordionContent>
                    Indeed, ShorX has tracking and analytics tools. It is
                    possible for users to see how many clicks a particular link
                    has received.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
