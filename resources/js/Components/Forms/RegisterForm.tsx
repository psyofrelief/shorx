import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, router, usePage } from "@inertiajs/react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";

const formSchema = z
    .object({
        name: z
            .string()
            .min(2, { message: "Name must contain at least 2 characters." }),
        email: z.string().email({ message: "Please enter a valid email." }),
        password: z.string().min(6, {
            message: "Password must contain at least 6 characters.",
        }),
        password_confirmation: z.string(),
    })
    .superRefine(({ password_confirmation, password }, ctx) => {
        if (password_confirmation !== password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
                path: ["password_confirmation"],
            });
        }
    });

export default function RegisterForm() {
    const { errors } = usePage().props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post("/register", values);
    }
    const email = form.watch("email");
    const password = form.watch("password");
    const passwordConfirmation = form.watch("password_confirmation");

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card className="w-full px-1 border-muted-foreground/30">
                    <CardHeader>
                        <CardTitle className="text-2xl">Sign Up</CardTitle>
                        <CardDescription>
                            Enter your details below to create an account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 pb-1">
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem className="grid">
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        {...form.register("name")} // Registering the input
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={() => (
                                <FormItem className="grid">
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        {...form.register("email")} // Registering the input
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel htmlFor="password">
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            required
                                            {...form.register("password")} // Registering the input
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password_confirmation"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel htmlFor="password_confirmation">
                                        Password Confirmation
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            placeholder="Confirm Password"
                                            required
                                            {...form.register(
                                                "password_confirmation",
                                            )} // Registering the input
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {errors && (
                            <p className="text-sm mt-4 text-center font-medium text-destructive">
                                {errors.name || errors.email || errors.password}
                            </p>
                        )}
                    </CardContent>

                    <CardFooter className="grid">
                        <Button
                            aria-label="Register and submit form button"
                            className="w-full"
                            type="submit"
                            disabled={
                                !email || !password || !passwordConfirmation
                            }
                        >
                            Create Account
                        </Button>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                aria-label="Login redirect link"
                                href="/login"
                                className="underline"
                            >
                                Log in
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
}
