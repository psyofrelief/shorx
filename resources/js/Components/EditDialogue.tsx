import { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import EditIcon from "@/Components/Svg/LinkItemIcons/EditIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { router } from "@inertiajs/react";
import type { UserLink as LinkType } from "@/types";

const formSchema = z.object({
    id: z.number(),
    title: z.string().min(1),
    original_link: z.string().min(1, { message: "Link is required" }),
    short_code: z
        .string()
        .min(1, { message: "Short code is required" })
        .regex(/^[a-zA-Z0-9]*$/, {
            message: "Short code must be alphanumeric",
        }),
});

type FormData = z.infer<typeof formSchema>;

interface LinkProps {
    link: LinkType;
}

export function EditDialogue({ link }: LinkProps) {
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: link.id,
            title: link.title,
            original_link: link.original_link,
            short_code: link.short_code,
        },
    });

    const onSubmit = (data: FormData) => {
        router.put(`/links/${link.id}`, data, {
            onSuccess: () => {
                // Close the dialog on successful update
                setIsOpen(false);
            },
            onError: (errors) => {
                console.error("Error:", errors);
            },
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    type="button"
                    aria-label="Show edit dialogue button"
                    variant={"ghost"}
                    size={"sm"}
                    className="gap-2"
                    onClick={() => setIsOpen(true)}
                >
                    <EditIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit link</DialogTitle>
                    <DialogDescription>
                        Make changes to your link here. Click update when you're
                        done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="original_link" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            {...register("title")}
                            className="col-span-3"
                        />
                        {errors.title && (
                            <p className="text-destructive w-full col-span-4 text-end text-sm font-semibold">
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="original_link" className="text-right">
                            Original
                        </Label>
                        <Input
                            id="original_link"
                            {...register("original_link")}
                            className="col-span-3"
                        />
                        {errors.original_link && (
                            <p className="text-destructive w-full col-span-4 text-end text-sm font-semibold">
                                {errors.original_link.message}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="short_code" className="text-right">
                            Short Code
                        </Label>
                        <Input
                            id="short_code"
                            {...register("short_code")}
                            className="col-span-3"
                        />
                        {errors.short_code && (
                            <p className="text-destructive w-full col-span-4 text-end text-sm font-semibold">
                                {errors.short_code.message}
                            </p>
                        )}
                    </div>
                    <DialogFooter className="gap-2">
                        <Button type="submit" aria-label="Update link button">
                            Update
                        </Button>
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                aria-label="Cancel and close dialogue button"
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
