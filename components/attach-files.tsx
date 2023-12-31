"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FilePlusIcon } from "@radix-ui/react-icons";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

const AttachFiles = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full border-2 border-purple-500'
                >
                    <FilePlusIcon className='h-4 w-4' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload A File</DialogTitle>
                    <DialogDescription>
                        Upload image, videos, documents anything you want..
                    </DialogDescription>
                </DialogHeader>
                <hr />
                <div>
                    <Input type='file' className='rounded-full' />
                </div>
                <div className='flex justify-end'>
                    <Button
                        variant='outline'
                        className='border-green-500 space-x-2'
                    >
                        <FilePlusIcon />
                        <p>Add File</p>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AttachFiles;
