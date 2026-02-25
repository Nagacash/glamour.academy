"use client";
import { GlareCard } from "@/components/ui/glare-card";
import { Hexagon } from "lucide-react";

export function GlareCardDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <GlareCard className="flex flex-col items-center justify-center">
                <Hexagon className="h-14 w-14 text-white" strokeWidth={1.5} />
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Abstract"
                />
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6 text-white text-left">
                <p className="font-bold text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4 leading-relaxed">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
        </div>
    );
}
