"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ChatNavbar = () => {
    const params = usePathname();
    return <div>{params.substring(6)}</div>;
};

export default ChatNavbar;
