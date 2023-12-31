"use client";

import {ArrowRight, CalendarDays} from "lucide-react";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {Separator} from "@/components/ui/separator";

const DashboardPage = () => {
    const tools = [
        {
            label: "Calendar",
            icon: CalendarDays,
            color: "text-violet-500",
            bgColor: "bg-violet-500/10",
            href: "/calendar",
        },
        {
            label: "Classes",
            icon: CalendarDays,
            color: "text-pink-700",
            bgColor: "bg-pink-700/10",
            href: "/classes",
        },
        {
            label: "Grades",
            icon: CalendarDays,
            color: "text-green-700",
            bgColor: "bg-green-700/10",
            href: "/grades",
        },
        {
            label: "Material",
            icon: CalendarDays,
            color: "text-orange-700",
            bgColor: "bg-orange-700/10",
            href: "/material",
        }
    ]
    const router = useRouter();

    return (
        <div className={"flex justify-between flex-col flex-grow"}>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore the power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the smartest AI - Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-8 lg:px-12 gap-4 grid grid-cols-2 mb-12">
                {tools.map((tool) => (
                    <Card onClick={() => router.push(tool.href)} key={tool.href}
                          className="p-4 border-black/5 flex items-center hover:shadow-md transition cursor-pointer">
                        <div className="flex items-center justify-between flex-grow">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7", tool.color)}/>
                            </div>
                            <div className="font-semibold text-base md:text-lg lg:text-xl whitespace-nowrap p-2">
                                {tool.label}
                            </div>
                            <div>
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div>
               <Separator/>
            </div>
        </div>
    );
}
export default DashboardPage