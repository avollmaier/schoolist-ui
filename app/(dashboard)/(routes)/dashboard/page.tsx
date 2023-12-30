"use client";

import {ArrowRight, CalendarDays} from "lucide-react";
import Link from "next/link";
import {Card} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";

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
            label: "Classroom-Material",
            icon: CalendarDays,
            color: "text-orange-700",
            bgColor: "bg-orange-700/10",
            href: "/material",
        }
    ]
    const router = useRouter();

    return (
        <div>
            <div className={"mb-8 space-y-4"}>
                <h2 className={"text-2xl md:text-4xl font-bold text-center"}>
                    Explore the power of Schoolist
                </h2>
                <p className={"text-muted-foreground font-light text-sm md_text-lg text-center"}>
                    The best teacher management system for your school.
                </p>
            </div>
            <div className={"px-4 md:px-20 lg:px-43 space-y-4"}>
                {tools.map((tool) => (
                    <Link href={tool.href} key={tool.href}>
                        <Card
                            onClick={() => router.push(tool.href)}
                            key={tool.href}
                              className={"p-4 border-black/5 flex items-center justify-center justify-between hover:shadow-md transition cursor-pointer"}>


                            <div className={"flex items-center gap-x-4"}>
                                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                    <tool.icon className={cn("w-8 h-8", tool.color)}/>
                                </div>
                                <div className={"font-semibold"}>
                                    <h3 className={"text-lg font-bold"}>{tool.label}</h3>
                                </div>
                                <ArrowRight className={"w-5 h-5"}/>
                            </div>

                        </Card>

                    </Link>
                ))}
            </div>
        </div>
    )
}
export default DashboardPage