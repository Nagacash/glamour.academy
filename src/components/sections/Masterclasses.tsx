"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles, Trophy, Users } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const classes = [
    {
        title: "Lip Artist",
        subtitle: "Advanced Sculpting",
        price: "1.200€",
        image: "/images/masterclasses/lips.png",
        techniques: ["Russian Lips", "M-Shape", "Klassische Kontur"],
        bonus: "Social Media Lip Branding Guide",
        icon: <Sparkles className="w-5 h-5" />,
    },
    {
        title: "Face Sculpt",
        subtitle: "Total Profile Balance",
        price: "1.500€",
        image: "/images/masterclasses/face.png",
        techniques: ["Wangenaufbau", "Jawline", "Kinnkorrektur"],
        bonus: "Anatomie & Notfallmanagement Kurs",
        icon: <Trophy className="w-5 h-5" />,
    },
    {
        title: "Glow Expert",
        subtitle: "The Science of Radiance",
        price: "950€",
        image: "/images/masterclasses/glow.png",
        techniques: ["Skinbooster", "Mesotherapie", "Bio-Remodellierung"],
        bonus: "Skin Cocktail Rezepturen",
        icon: <Users className="w-5 h-5" />,
    },
];

export function Masterclasses() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".mc-header-text", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                },
            });

            // Cards animation
            gsap.from(".mc-card-reveal", {
                y: 80,
                opacity: 0,
                duration: 1.4,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".mc-grid",
                    start: "top 80%",
                },
            });

            // Parallax on images - reduced movement to avoid sub-pixel blur
            gsap.utils.toArray<HTMLElement>(".mc-image-parallax").forEach((img) => {
                gsap.to(img, {
                    y: "10%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="masterclasses"
            className="relative py-20 lg:py-28 overflow-hidden bg-brand-beige"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-champagne/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div ref={headerRef} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 lg:mb-20">
                    <div className="w-full lg:w-1/2">
                        <div className="mc-header-text mb-4 inline-flex items-center gap-3">
                            <div className="h-px w-12 bg-brand-gold"></div>
                            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-gold">
                                The Elite Training
                            </span>
                        </div>
                        <h2 className="mc-header-text font-serif text-5xl md:text-7xl leading-[1.1] text-[#1c1a19] mb-8">
                            Meisterhaft in der <br />
                            <span className="italic font-light text-brand-gold/80">Ästhetik.</span>
                        </h2>
                        <p className="mc-header-text text-lg text-[#1c1a19]/70 font-light max-w-2xl leading-relaxed italic mb-8">
                            Transformieren Sie Ihre Expertise mit unseren Deep-Dive Masterclasses.
                            Wissenschaft trifft auf künstlerische Präzision.
                        </p>
                        <div className="mc-header-text space-y-4 text-sm text-[#1c1a19]/60 font-light leading-relaxed max-w-lg">
                            <p>
                                Unsere Masterclasses vereinen über 60 Jahre klinische Erfahrung in kompakten, 
                                praxisorientierten Intensivkursen. Jede Einheit wird von erfahrenen Fachärztinnen 
                                und Heilpraktikerinnen geleitet, die ihr Wissen aus Hunderten realer Behandlungen einbringen.
                            </p>
                            <p>
                                Von fortgeschrittenen Injektionstechniken bis hin zu innovativen Anti-Aging-Protokollen — 
                                unsere Module sind darauf ausgelegt, Ihre Fähigkeiten auf das nächste Level zu heben. 
                                Kleine Gruppengrößen garantieren individuelles Feedback und maximalen Lernerfolg.
                            </p>
                        </div>
                    </div>
                    <div className="mc-header-text w-full lg:w-1/2">
                        <div className="overflow-hidden rounded-sm">
                            <img
                                src="/images/team4.webp"
                                alt="Elite Training Team"
                                loading="lazy"
                                className="w-full h-auto object-cover aspect-[4/3]"
                            />
                        </div>
                    </div>
                </div>

                <div className="mc-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {classes.map((cls, i) => (
                        <div
                            key={i}
                            className="mc-card-reveal group relative flex flex-col h-full bg-white border border-brand-champagne/40 overflow-hidden transition-all duration-700 hover:border-brand-gold/40 shadow-sm hover:shadow-xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-[400px] overflow-hidden bg-white">
                                <img
                                    src={cls.image}
                                    alt={cls.title}
                                    className="mc-image-parallax w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-100"
                                />

                                <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-700 group-hover:opacity-0" />

                                {/* Label Overlay */}
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="bg-white/95 px-4 py-2 flex items-center gap-2 border border-brand-champagne/50">
                                        <span className="text-brand-gold">{cls.icon}</span>
                                        <span className="uppercase tracking-widest text-[9px] font-bold text-[#1c1a19]">
                                            {cls.subtitle}
                                        </span>
                                    </div>
                                </div>

                                {/* Price Overlay */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="bg-[#1c1a19] text-white px-5 py-3 border border-brand-gold/30 shadow-lg">
                                        <span className="block text-[10px] uppercase tracking-widest text-brand-champagne/60 mb-0.5">Investment</span>
                                        <span className="text-xl font-serif italic text-brand-gold leading-none">{cls.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <span className="text-[10px] text-brand-gold/80 uppercase tracking-[0.3em] font-semibold block mb-1">Module {i + 1}</span>
                                        <h3 className="font-serif text-3xl text-[#1c1a19]">{cls.title}</h3>
                                    </div>
                                    <div className="h-12 w-12 rounded-full border border-brand-champagne flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-[#1c1a19] transition-all duration-500 transform group-hover:rotate-45">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-[#1c1a19]/50 block mb-4 font-bold">Schlüsseltechniken</span>
                                        <ul className="space-y-3">
                                            {cls.techniques.map((tech, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-[#1c1a19] font-light">
                                                    <div className="w-1.5 h-[1px] bg-brand-gold mr-3"></div>
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 border-t border-brand-champagne/50">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 bg-brand-beige p-1.5 rounded">
                                            <Sparkles className="w-4 h-4 text-brand-gold" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-[#1c1a19]/50 block mb-1 font-bold">Expert Bonus</span>
                                            <p className="text-sm font-medium leading-relaxed text-[#1c1a19]/80 italic">
                                                {cls.bonus}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Reveal Effect */}
                            <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-12 text-center">
                    <p className="font-light text-[#1c1a19]/60 italic mb-8">
                        Limitierte Plätze für maximale Ausbildungsqualität.
                    </p>
                    <Link href="/masterclasses" className="group relative inline-block px-12 py-5 bg-[#1c1a19] text-brand-champagne uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500 hover:bg-[#2a2826] hover:text-white">
                        <span className="relative z-10">Alle Masterclasses Ansehen</span>
                        <div className="absolute inset-0 border border-brand-gold scale-[1.05] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
