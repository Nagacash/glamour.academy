"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const treatments = [
    { name: "Infusionskonzept", description: "Intravenöse Nährstoff-Infusionen für Regeneration und Vitalität.", price: "ab 199 € / Stunde", duration: "3 bis 5 Stunden (abhängig von Vorkenntnissen)" },
    { name: "Lippen 👄", description: "Volumenauffüllung und Konturierung mit Premium-Hyaluronsäure.", price: "ab 199 € / Stunde", duration: "3 bis 5 Stunden (abhängig von Vorkenntnissen)" },
    { name: "PDO Fäden", description: "Fadenlifting mit resorbierbaren PDO-Fäden für natürliche Straffung.", price: "ab 199 € / Stunde", duration: "3 bis 5 Stunden (abhängig von Vorkenntnissen)" },
    { name: "Mesotherapie und Fettlypolyse", description: "Mikro-Injektionen mit Wirkstoffen für Hautverjüngung, Revitalisierung und gezielte Fettreduktion.", price: "ab 199 € / Stunde", duration: "3 bis 5 Stunden (abhängig von Vorkenntnissen)" },
    { name: "Hygieneberatung", description: "Individuelle Beratung zu Hygiene, Praxisausstattung und -konzeption.", price: "ab 199 € / Stunde", duration: "3 bis 5 Stunden (abhängig von Vorkenntnissen)" },
];

export function TreatmentsOverview() {
    const sectionRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal the title and description
            gsap.from(".treatment-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            // Reveal the treatment list items
            const items = gsap.utils.toArray(".treatment-item") as HTMLElement[];
            items.forEach((item, index) => {
                gsap.from(item, {
                    x: -30,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 80%",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="treatments" className="py-16 md:py-32 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">
                {/* Left Side: Sticky Intro */}
                <div className="md:w-1/3 md:sticky md:top-32 treatment-header">
                    <span className="text-brand-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 inline-block">
                        Einzelmodule
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-8">
                        Module &amp;<br />
                        <span className="italic font-light text-brand-champagne-dark">Ausbildung</span>
                    </h2>
                    <p className="text-foreground/70 font-light leading-relaxed mb-10">
                        Jede Behandlung ist ein holistischer Prozess. Wir kombinieren die modernsten Techniken mit hochwirksamen, sicheren Präparaten, um Ihre natürliche Ausstrahlung zu perfektionieren.
                    </p>
                    <div className="h-[1px] w-12 bg-brand-gold mb-10"></div>

                    <img
                        src="/images/team6.webp"
                        alt="Treatment product macro"
                        width={534}
                        height={668}
                        loading="lazy"
                        className="w-full aspect-[4/5] object-cover mix-blend-multiply opacity-90 shadow-2xl"
                    />
                </div>

                {/* Right Side: scrolling list */}
                <div className="md:w-2/3 w-full">
                    <ul ref={listRef} className="space-y-0">
                        {treatments.map((treatment, index) => (
                            <li
                                key={index}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") e.currentTarget.click(); }}
                                className="treatment-item group border-t border-brand-champagne/30 pt-10 pb-12 cursor-pointer first:border-transparent md:first:border-brand-champagne/30"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 transition-[padding] duration-500 group-hover:pl-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-serif text-foreground mb-3 transition-colors duration-300 group-hover:text-brand-gold">
                                            {treatment.name}
                                        </h3>
                                        <p className="text-foreground/60 font-light max-w-md">
                                            {treatment.description}
                                        </p>
                                        <p className="text-xs text-foreground/40 mt-2">
                                            Dauer: {treatment.duration}
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-6">
                                        {/* Price - hidden by default, fades in on hover */}
                                        <div className="opacity-100 translate-x-0 md:opacity-0 md:translate-x-4 transition-[opacity,transform] duration-500 md:group-hover:opacity-100 md:group-hover:translate-x-0">
                                            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-1">Investition</span>
                                            <span className="font-serif italic text-brand-champagne-dark">{treatment.price}</span>
                                        </div>

                                        <button aria-label="Treatment details" className="h-14 w-14 rounded-full border border-brand-champagne-dark flex items-center justify-center text-brand-champagne-dark group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-[background-color,border-color,color] duration-300">
                                            <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
