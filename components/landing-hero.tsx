"use client"

import {useAuth} from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const LandingHero = () => {
    const {isSignedIn} = useAuth();


    return (
        <div className={"text-white font-bold py-36 text-center space-y-5"}>
            <div className={"text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold"}>
                <h1>
                    Nina du bist die
                </h1>
                <div className={"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"}>
                    <TypewriterComponent
                        options={{
                            strings: ["Beste Freundin der Welt", "Coolste Person der Welt"],
                            autoStart: true,
                            loop: true,

                        }}
                    />
                </div>
            </div>
            <div className={"text-sm md:text-xl font-light text-zinc-400"}>
                Manage your school life with ease.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="secondary" className={"md:text-lg p-4 md:p-6 rounded-full"}>
                        Start managing for free
                    </Button>
                </Link>

            </div>

        </div>

    )
}