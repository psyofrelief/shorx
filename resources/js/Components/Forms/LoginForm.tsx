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

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z.string(),
});

export function LoginForm() {
    const { errors } = usePage().props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post("/login", values);
    }

    const email = form.watch("email");
    const password = form.watch("password");

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-[350px] mx-auto"
            >
                <Card className="w-full px-1 border-muted-foreground/30">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
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
                        {errors && (
                            <p className="text-sm mt-4 text-center font-medium text-destructive">
                                {errors.email}
                            </p>
                        )}
                    </CardContent>

                    <CardFooter className="grid">
                        <Button
                            aria-label="Sign in and submit form button"
                            className="w-full"
                            type="submit"
                            disabled={!email || !password}
                        >
                            Sign in
                        </Button>
                        <div className="mt-4 text-center text-sm">
                            Don't have an account?{" "}
                            <Link
                                aria-label="Register redirect link"
                                href="/register"
                                className="underline"
                            >
                                Sign up
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
}
