import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    return (
        <nav className='p-2 flex items-center justify-between shadow-md border border-b-2 border-b-purple-500'>
            <Link
                href={"/"}
                className='text-xl font-bold border rounded-full p-1'
            >
                Ch
            </Link>
            <div className='flex items-center'>
                <Input
                    className=' lg:w-[600px] rounded-full focus:border-purple-500 active:border-purple-500'
                    placeholder='Search a chat...'
                />
            </div>
            <div>
                <ModeToggle />
                {/* UserButtton */}
            </div>
        </nav>
    );
};

export default Navbar;
