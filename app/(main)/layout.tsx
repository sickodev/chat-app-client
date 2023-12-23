import LeftNavbar from "@/components/shared/left-navbar";
import Navbar from "@/components/shared/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <Navbar />
            <div className='flex space-x-3 p-1'>
                <LeftNavbar />
                {children}
            </div>
        </section>
    );
};

export default MainLayout;
