import { Button } from "@/Components/ui/button";
import { Link, router } from "@inertiajs/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";

const formSchema = z.object({
    title: z.string().optional(),
    original_link: z.string().url({ message: "Please enter a valid URL." }),
    short_code: z
        .string()
        .regex(/^[a-zA-Z0-9]*$/, {
            message: "Custom code must be alphanumeric",
        })
        .optional(),
});

interface LinkFormProps {
    errors: {
        original_link?: string[];
        short_code?: string[];
    };
}

export default function CreateLinkForm({ errors }: LinkFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            original_link: "",
            short_code: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post("/links", values, { preserveScroll: true });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="gap-8 flex flex-col mt-10 justify-start flex-1"
            >
                <FormField
                    control={form.control}
                    name="original_link"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Destination</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-md p-5"
                                    placeholder="https://www.google.com"
                                    {...field}
                                />
                            </FormControl>
                            {errors.original_link && (
                                <div className="text-destructive">
                                    {errors.original_link}
                                </div>
                            )}
                            {!errors?.original_link && (
                                <FormDescription>
                                    The original link you want to shorten.
                                </FormDescription>
                            )}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="short_code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Custom Code (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-md p-5"
                                    placeholder="ggl"
                                    {...field}
                                />
                            </FormControl>
                            {errors.short_code && (
                                <div className="text-destructive text-xs">
                                    {errors.short_code}
                                </div>
                            )}
                            {!errors?.short_code && (
                                <FormDescription>
                                    The custom code that will follow shrx.is/
                                </FormDescription>
                            )}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-md p-5"
                                    placeholder="Google"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Enter a title for this link.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="mt-5 sm:mt-auto flex justify-end gap-3">
                    <Button
                        aria-label="Submit form button"
                        className="flex-1"
                        type="submit"
                        size={"lg"}
                    >
                        Submit
                    </Button>
                    <Link href="/links" aria-label="User links redirect link">
                        <Button
                            aria-label="Cancel and redirect to user links button"
                            variant={"outline"}
                            size={"lg"}
                        >
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        </Form>
    );
}
