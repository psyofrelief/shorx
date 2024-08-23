import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";
import DeleteIcon from "@/Components/Svg/LinkItemIcons/DeleteIcon";
import type { UserLink } from "@/types";
import { router } from "@inertiajs/react";

interface LinkProps {
    link: UserLink;
}

export function DeleteAlert({ link }: LinkProps) {
    const handleDelete = () => {
        router.delete(`/links/${link.id}`);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="gap-1 px-3"
                    variant="destructive"
                    size={"sm"}
                    aria-label="Delete link button"
                >
                    <DeleteIcon />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this link from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="hover:opacity-90 transition-all"
                        onClick={handleDelete}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
