"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlareCard } from "@/components/ui/glare-card";

gsap.registerPlugin(ScrollTrigger);

const founders = [
    {
        name: "Sonja Ackermann",
        role: "Krankenschwester & Heilpraktikerin",
        title: "Medizinische Leitung",
        image: "/images/team2.webp",
        intro: "Im Dienste der Gesundheit: Sonja ist seit über 30 Jahren medizinisch tätig. Ihre Laufbahn begann in der Gynäkologie und Onkologie sowie der OP-Pflege für Plastische Chirurgie. Seit 2011 ist sie in eigener Praxis in Hamburg Schnelsen tätig und vereint fundiertes klinisches Wissen mit modernster mitochondrialer Medizin und funktioneller Stressmedizin.",
        qualifications: [
            "Examen AK St. Georg, Hamburg",
            "OP Krankenschwester Plastische Chirurgie (Klinik Pöseldorf)",
            "Staatlich überprüfte Heilpraktikerin seit 2010",
            "Spezialisierung in Stress- & Mitochondrienmedizin",
            "Expertin für Full Face Lifting (Teoxane Academy)",
        ],
        specialties: [
            "OP-Pflege Plastische Chirurgie",
            "Mitochondriale Medizin",
            "Epigenetik",
            "Funktionelle Medizin",
        ],
    },
    {
        name: "Annette Fascher-Wendlandt",
        role: "Heilpraktikerin & Psychologische Beraterin",
        title: "Ästhetische Leitung",
        image: "/images/team1.webp",
        intro: "Schönheit als Berufung: Annette ist seit über 30 Jahren leidenschaftlich in der Schönheitsbranche tätig. Als Expertin für Anti-Aging und Bodyforming bei Mesoskin Hamburg ist sie spezialisiert auf Hyaluron, PDO-Fäden und Infusionstherapien. Ihre Philosophie: Ein harmonisches Zusammenspiel von innerem Wohlbefinden und äußerer Ausstrahlung.",
        qualifications: [
            "Heilpraktikerin seit 1995",
            "Gründerin Mesoskin Hamburg",
            "Psychologische Beraterin (Ganzheitliche Unterstützung)",
            "Expertin für Vitamin- & NAD+ Infusionen",
            "Master Class Expertin für PDO-Fäden",
        ],
        specialties: [
            "Anti-Aging Expertin",
            "Infusionstherapie (NAD+)",
            "PDO Fadenlifting",
            "Psychologische Beratung",
        ],
    },
];

export function Founders() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".founders-header", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(".founders-tagline", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });

            gsap.from(".founder-card", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".founder-card",
                    start: "top 85%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="founders" className="overflow-hidden">
            {/* Top Banner */}
            <div className="bg-[#1c1a19] text-white py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="founders-tagline mb-6">
                        <span className="uppercase tracking-[0.4em] text-xs font-semibold text-brand-gold">
                            The Visionaries
                        </span>
                        <p className="text-white/60 font-light mt-2 text-sm tracking-wide">
                            Mentorship from the industry&apos;s true icons.
                        </p>
                    </div>
                    <div className="founders-tagline mb-12">
                        <span className="uppercase tracking-[0.4em] text-xs font-semibold text-brand-champagne">
                            The Collective
                        </span>
                        <p className="text-white/60 font-light mt-2 text-sm tracking-wide">
                            Joining the most exclusive medical circle.
                        </p>
                    </div>

                    <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent mx-auto mb-12"></div>

                    <h2 className="founders-header font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-4">
                        Expertise &amp; Leidenschaft
                    </h2>
                    <p className="founders-header font-serif text-xl md:text-2xl italic font-light text-brand-champagne leading-relaxed">
                        Zwei Koryphäen.<br />
                        Ein Versprechen.
                    </p>
                </div>
            </div>

            {/* Founder Cards */}
            <div className="bg-brand-beige py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {founders.map((founder, i) => (
                        <div
                            key={i}
                            className="founder-card bg-white mt-8 lg:mt-0 flex flex-col group overflow-hidden"
                        >
                            {/* Image */}
                            <GlareCard className="relative h-96 md:h-[500px] w-full aspect-[3/4]">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a19]/80 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none z-10">
                                    <h3 className="font-serif text-3xl text-white mb-1">{founder.name}</h3>
                                    <p className="text-brand-champagne text-sm font-light">
                                        {founder.role} | {founder.title}
                                    </p>
                                </div>
                            </GlareCard>

                            {/* Content */}
                            <div className="p-8 lg:p-10">
                                <p className="text-foreground/70 font-light leading-relaxed mb-8">
                                    {founder.intro}
                                </p>

                                {/* Qualifications */}
                                <div className="mb-8">
                                    <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-4">
                                        Werdegang &amp; Qualifikationen
                                    </span>
                                    <ul className="space-y-2">
                                        {founder.qualifications.map((q, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-foreground/70 font-light">
                                                <div className="w-1 h-1 rounded-full bg-brand-gold mr-3 mt-2 shrink-0"></div>
                                                {q}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Specialties */}
                                <div className="pt-6 border-t border-brand-champagne/30">
                                    <div className="flex flex-wrap gap-2">
                                        {founder.specialties.map((s, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-1.5 text-xs uppercase tracking-wider text-brand-champagne-dark border border-brand-champagne/40 font-light hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 cursor-default"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
