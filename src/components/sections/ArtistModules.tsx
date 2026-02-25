"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, Microscope, Syringe, Brain, Briefcase } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const modules = [
    {
        num: "01",
        title: "Klinische Basis",
        desc: "Hygiene, OP-Standards und medizinische Sicherheit aus 30 Jahren Klinik.",
        icon: <ShieldAlert size={28} className="text-brand-champagne-dark mb-4" aria-hidden="true" />,
    },
    {
        num: "02",
        title: "Anatomie & Material",
        desc: "Tiefes Verständnis für Gesichtsanatomie, Hyaluron & PDO-Fäden.",
        icon: <Microscope size={28} className="text-brand-champagne-dark mb-4" aria-hidden="true" />,
    },
    {
        num: "03",
        title: "Mesotherapie",
        desc: "Spezialisierung auf Vitamin- und NAD+ Infusionen für innere Vitalität.",
        icon: <Syringe size={28} className="text-brand-champagne-dark mb-4" aria-hidden="true" />,
    },
    {
        num: "04",
        title: "Psychologie",
        desc: "Ganzheitliche Unterstützung für Körper und Geist in der Beratung.",
        icon: <Brain size={28} className="text-brand-champagne-dark mb-4" aria-hidden="true" />,
    },
    {
        num: "05",
        title: "Praxis-Support",
        desc: "Abrechnung, Material-Sourcing und Räumlichkeits-Analyse.",
        icon: <Briefcase size={28} className="text-brand-champagne-dark mb-4" aria-hidden="true" />,
    },
];

export function ArtistModules() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".module-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="modules" className="py-24 px-6 bg-white border-t border-brand-beige">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif text-3xl md:text-5xl text-foreground text-center mb-16">
                    Exzellenz in <span className="italic font-light text-brand-champagne-dark">jedem Modul.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((mod, i) => (
                        <div key={i} className="module-card bg-brand-beige/30 p-10 border border-brand-champagne/10 hover:border-brand-champagne-dark transition-colors duration-500">
                            <div className="flex justify-between items-start mb-6">
                                {mod.icon}
                                <span className="font-serif text-3xl text-brand-champagne italic opacity-50">{mod.num}</span>
                            </div>
                            <h3 className="text-xl font-serif text-foreground mb-4">{mod.title}</h3>
                            <p className="text-foreground/70 font-light text-sm leading-relaxed">{mod.desc}</p>
                        </div>
                    ))}

                    <div className="module-card bg-brand-gold p-10 text-white flex flex-col justify-center items-center text-center">
                        <h3 className="font-serif text-2xl italic mb-4">Ihre Zukunft beginnt.</h3>
                        <p className="text-white/80 font-light text-sm mb-6">Keine Standardlösungen. Maßgeschneidertes Fachwissen.</p>
                        <Link
                            href="/module#klinische-basis"
                            className="px-6 py-3 border border-white hover:bg-white hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-gold transition-colors duration-300 uppercase tracking-widest text-xs"
                        >
                            Alle Module ansehen
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
