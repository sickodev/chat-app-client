import React from "react";
import AddContact from "../add-contact";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const contacts = [
    {
        id: 1,
        name: "John",
        username: "john",
    },
    {
        id: 2,
        name: "Jane",
        username: "jane",
    },
    {
        id: 3,
        name: "Bob",
        username: "bob",
    },
];

const LeftNavbar = () => {
    return (
        <nav className='shadow-lg border'>
            <h3 className='font-bold text-xl pl-2 my-2'>Contacts</h3>
            <hr className='opacity-60' />
            <div className='px-1 py-2 flex flex-col justify-between gap-2 min-w-[300px] h-[83vh] '>
                <div className='overflow-x-hidden scrollbar-thin dark:scrollbar-thumb-slate-500 dark:scrollbar-track-slate-950 scrollbar-thumb-zinc-100 scrollbar-track-zinc-300'>
                    {contacts.map((contact) => (
                        <Link
                            href={`/chat/${contact.id}`}
                            key={contact.id}
                            className='flex items-center gap-2 my-2 p-2 hover:dark:bg-black/20 hover:bg-gray-400/20'
                        >
                            <div className='w-[70px] h-[50px] relative'>
                                <Image
                                    src={
                                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    }
                                    alt=''
                                    fill
                                    className='rounded-full object-cover'
                                />
                            </div>
                            <div className='w-full'>
                                <p>{contact.name}</p>
                                <p className='dark:text-muted text-black/20 text-sm'>
                                    {contact.username}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='space-y-2'>
                    <hr />
                    <div className='space-y-2 flex justify-between'>
                        <AddContact />
                        <UserButton />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default LeftNavbar;
