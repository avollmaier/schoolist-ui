"use client";

import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {
    BookOpenCheck,
    CalendarDays,
    CheckCheck,
    FileStack,
    LayoutDashboard,
    Settings,
    Shapes,
    Users
} from "lucide-react";
import {usePathname} from "next/navigation";
import {UserService} from "@/app/api/userservice";


const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Calendar",
        icon: CalendarDays,
        href: "/calendar",
        color: "text-violet-500"
    },
    {
        label: "Classes",
        icon: Users,
        href: "/classes",
        color: "text-pink-700"
    },
    {
        label: "Grades",
        icon: BookOpenCheck,
        href: "/grades",
        color: "text-green-700"
    },
    {
        label: "Classroom-Material",
        icon: FileStack,
        href: "/material",
        color: "text-orange-700"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },

];


const Sidebar = () => {
    const [isTeacher, setIsTeacher] = useState(false);
    const userService = new UserService();

    useEffect(() => {
        const checkRole = async () => {
            const result = await userService.isTeacher();
            setIsTeacher(result);
            if (result) console.log("Teacher");
        };
        checkRole();
    }, [userService]);
    
    const pathName = usePathname();
    return (
        <div className={"space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white"}>
            <div className={"px-3 py-2 flex-1"}>
                <Link href={"/dashboard"} className={"flex items-center pl-3 mb-14"}>
                    <div className={"relative h-8 w-8 mr-4"}>
                        <Image fill src={"/logo.png"} alt={"Logo"}/>
                    </div>
                    <div>
                        <h1 className={"text-2xl font-bold"}>Schoolist</h1>
                    </div>
                </Link>
                <div className={"space-y-1"}>
                    {routes.map((route) => (
                        <Link href={route.href} key={route.href}
                              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                              pathName === route.href ? "text-white bg-white/10" : "text-zinc-400")}>
                            <div className={"flex items-center flex-1"}>
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar