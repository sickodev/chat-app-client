import LeftNavbar from "@/components/shared/left-navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='flex space-x-3 p-1'>
            <LeftNavbar />
            {children}
        </section>
    );
};

export default MainLayout;
