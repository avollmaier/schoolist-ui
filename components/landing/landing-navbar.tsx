"use client"

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export const LandingNavbar = () => {

    return (
        <nav className={"p-4 bg-transparent flex items-center justify-between"}>
            <Link href={"/"} className={"flex items-center"}>
                <div className={"relative h-8 w-8 mr-4"}>
                    <Image fill src={"/logo.png"} alt={"Logo"}/>
                </div>
                <h1 className={"text-2xl font-bold text-white"}>Schoolist</h1>

            </Link>
            <div>
                <Link href={"/dashboard"}>
                    <Button variant={"outline"} className={"rounded-full"}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>

    )
}