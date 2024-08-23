import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";

const formSchema = z.object({
    original_link: z.string().url({ message: "Please enter a valid URL." }),
});

interface PageProps {
    user: {
        id: number;
        name: string;
        email: string;
    } | null;
}

export default function HomeLinkForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            original_link: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post("/", values, {
            preserveScroll: true,
            onSuccess: () => {
                form.reset();
            },
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex rounded-2xl  flex-col p-8  border border-muted-foreground/30 bg-popover flex-1 shadow-xl w-full max-w-[800px] space-y-10"
            >
                <hgroup className="grid gap-2">
                    <p className="font-bold text-xl">Shorten a long link</p>
                    <p className="text-md text-muted-foreground">
                        No credit card required
                    </p>
                </hgroup>
                <FormField
                    control={form.control}
                    name="original_link"
                    render={() => (
                        <FormItem className="grid space-y-2">
                            <FormLabel
                                htmlFor="original_link"
                                className="text-md"
                            >
                                Original Link
                            </FormLabel>
                            <input
                                id="original_link"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-5 sm:px-4 sm:py-7 text-md sm:text-lg shadow-sm transition-colors file:border-0 file:bg-transparent file:text-lg file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                type="url"
                                placeholder="https://example.com"
                                required
                                {...form.register("original_link")} // Registering the input
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    aria-label="Submit form button"
                    type="submit"
                    size={"lg"}
                    className="mr-0 to sm:mr-auto"
                >
                    Shorten Link
                </Button>
            </form>
        </Form>
    );
}
