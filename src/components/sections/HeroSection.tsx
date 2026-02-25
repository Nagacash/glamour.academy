"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Play, Sparkles, Star, Award, Headphones } from "lucide-react";

type HeroSectionProps = {
  onOpenAssistant?: () => void;
};

gsap.registerPlugin(ScrollTrigger);

export function HeroSection({ onOpenAssistant }: HeroSectionProps) {
    const containerRef = useRef<HTMLElement>(null);
    const focalImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1.4,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.3,
            });

            gsap.from(".hero-image-reveal", {
                scale: 1.1,
                opacity: 0,
                duration: 1.8,
                ease: "power2.out",
                delay: 0.1,
            });

            gsap.from(".floating-card", {
                x: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.8,
            });

            gsap.to(focalImageRef.current, {
                y: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative w-full bg-brand-beige overflow-x-hidden"
        >
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-rose via-brand-beige to-brand-champagne" />
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-gold/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/40 rounded-full blur-[100px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-20 md:pb-28 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 min-h-[100svh]">
                {/* Left Side: Typography & Branding */}
                <div className="w-full lg:w-[50%] flex flex-col items-start z-20 lg:pt-12 xl:pt-20">
                    <div className="hero-text flex items-center gap-2 mb-6">
                        <span className="h-[1px] w-8 bg-brand-gold/60" />
                        <span className="text-brand-gold font-medium tracking-[0.3em] text-xs uppercase">
                            Premium Aesthetic Academy
                        </span>
                    </div>

                    <h1 className="hero-text font-serif text-brand-foreground text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8">
                        The Glamour Akademie of <br />
                        <span className="italic font-light">Hamburg</span>{" "}
                        Beauty
                    </h1>

                    <p className="hero-text text-brand-foreground/70 text-lg md:text-xl font-light mb-12 max-w-lg leading-relaxed">
                        Erfolg ist kein Zufall, sondern die Summe aus Präzision
                        und dem richtigen Glamour-Branding.
                    </p>

                    <div className="hero-text flex flex-wrap items-center gap-6">
                        {onOpenAssistant && (
                            <button
                                type="button"
                                onClick={onOpenAssistant}
                                className="px-10 py-5 bg-[#1c1a19] text-white rounded-full font-bold text-xs tracking-[0.2em] hover:bg-brand-gold transition-all duration-500 shadow-2xl hover:shadow-brand-gold/20 flex items-center gap-3 group"
                            >
                                AI Website Support
                                <Headphones
                                    size={14}
                                    className="group-hover:scale-110 transition-transform"
                                />
                            </button>
                        )}
                        <Link
                            href="#academy"
                            className="px-10 py-5 border-2 border-[#1c1a19] text-[#1c1a19] rounded-full font-bold text-xs tracking-[0.2em] hover:bg-[#1c1a19] hover:text-white transition-all duration-500 flex items-center gap-3 group"
                        >
                            JOIN THE ACADEMY
                            <Sparkles
                                size={14}
                                className="group-hover:rotate-12 transition-transform"
                            />
                        </Link>

                        <Link
                            href="#showcase"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-14 h-14 rounded-full border border-brand-foreground/10 flex items-center justify-center group-hover:bg-brand-gold/5 transition-colors duration-300">
                                <Play
                                    size={18}
                                    className="text-brand-foreground ml-1"
                                />
                            </div>
                            <span className="text-brand-foreground font-semibold text-xs tracking-widest uppercase border-b border-brand-foreground/20 pb-1 group-hover:border-brand-gold transition-colors">
                                Roomtour
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right Side: Image + Cards */}
                <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-end">
                    {/* Image wrapper — relative container for floating cards */}
                    <div className="relative w-[85%] sm:w-[70%] lg:w-[90%]">
                        {/* Main Focal Image */}
                        <div
                            ref={focalImageRef}
                            className="hero-image-reveal relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-white/40"
                        >
                            <img
                                src="/images/hero/hero-focal.png"
                                alt="Elite Beauty Professional"
                                className="w-full h-full object-cover scale-105"
                                width={1000}
                                height={1250}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Card 1: Stats — desktop only, overlaps left edge */}
                        <div className="floating-card absolute -left-8 top-1/4 bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 w-48 hidden md:block z-30">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-brand-gold/10 rounded-lg">
                                    <Award
                                        className="text-brand-gold"
                                        size={20}
                                    />
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-brand-foreground uppercase opacity-60">
                                    Success
                                </span>
                            </div>
                            <div className="text-3xl font-serif text-brand-foreground leading-none mb-1">
                                98%
                            </div>
                            <div className="text-[11px] text-brand-foreground/60 leading-tight">
                                Post-training certification success rate.
                            </div>
                        </div>

                        {/* Card 2: Micro Detail — xl only */}
                        <div className="floating-card absolute -right-4 bottom-20 bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-4 shadow-2xl border border-white/50 w-64 hidden xl:block z-30">
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                                <img
                                    src="/images/hero/texture-macro.png"
                                    alt="Skin Texture Detail"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                    <Sparkles
                                        className="text-white/80"
                                        size={24}
                                    />
                                </div>
                            </div>
                            <div className="px-2 pb-2">
                                <h4 className="text-sm font-bold tracking-tight text-brand-foreground mb-1">
                                    Molecular Aesthetics
                                </h4>
                                <p className="text-[10px] text-brand-foreground/50 leading-relaxed uppercase tracking-widest font-medium">
                                    Radiant Protocol v2.4
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badge — always in flow, uses negative margin to overlap image */}
                    <div className="floating-card -mt-8 relative z-40 bg-brand-gold text-white rounded-full py-3 px-8 flex items-center gap-4 shadow-2xl">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-brand-gold bg-brand-beige overflow-hidden"
                                >
                                    <img
                                        src={`https://i.pravatar.cc/100?u=${i + 10}`}
                                        alt="Expert"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star
                                        key={i}
                                        size={10}
                                        fill="currentColor"
                                    />
                                ))}
                            </div>
                            <div className="text-[10px] font-bold tracking-tighter uppercase leading-none mt-1">
                                1200+ Mentors
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent / Navigation Teaser */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-4 opacity-40 hidden md:flex">
                <div className="h-12 w-[1px] bg-gradient-to-b from-brand-foreground/20 to-transparent" />
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-foreground">
                    Scroll to explore
                </span>
            </div>

            {/* Design detail: Large faded text in background */}
            <div className="absolute bottom-28 left-6 lg:left-20 pointer-events-none select-none hidden md:block z-0">
                <span className="text-[100px] lg:text-[140px] xl:text-[180px] font-serif italic text-brand-foreground/[0.04] leading-none tracking-tight">
                    Excellence
                </span>
            </div>
        </section>
    );
}
