"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./ui/input";

const AddContact = () => {
    const formSchema = z.object({
        name: z.string().min(1, {
            message: "Name must be at least 1 character",
        }),
        phone: z.coerce.number(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: 0,
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant='outline'
                    className='flex items-center space-x-3 border-purple-600'
                >
                    <PlusIcon className='h-5 w-5' />
                    <p>Add Contact</p>
                </Button>
            </DialogTrigger>
            <DialogContent className=''>
                <DialogHeader>
                    <DialogTitle>Add Contact</DialogTitle>
                    <DialogDescription>
                        Add a new contact to your account
                    </DialogDescription>
                </DialogHeader>
                <hr />
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-3'
                    >
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='mx-2'>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Enter name...'
                                            className='border-r-2 border-l-2 rounded-full border-r-purple-600 border-l-purple-600'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phone'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='mx-2'>
                                        Phone Number
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Enter phone number...'
                                            className='border-r-2 border-l-2 rounded-full border-r-purple-600 border-l-purple-600'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex justify-end'>
                            <Button
                                variant='outline'
                                className='flex items-center space-x-3 border-t-purple-600 border-b-purple-600'
                            >
                                <PlusIcon className='h-5 w-5' />
                                <p>Add Contact</p>
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddContact;
