import AttachFiles from "@/components/attach-files";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilePlusIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import React from "react";

const Page = () => {
    return (
        <div className='w-full h-[82vh] space-y-2 px-2'>
            <div className='h-full overflow-x-hidden scrollbar-thin'></div>
            <div className='flex items-center justify-between'>
                <div className='w-2/3'>
                    <Input
                        className='rounded-full'
                        placeholder='Enter your message here...'
                    />
                </div>
                <div className='w-1/3 flex items-center justify-end space-x-2'>
                    <AttachFiles />
                    <Button
                        variant='outline'
                        size='icon'
                        className='rounded-full border-2 border-purple-500'
                    >
                        <PaperPlaneIcon className='h-4 w-4' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Page;
