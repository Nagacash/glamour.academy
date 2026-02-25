"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ArtistAcademy() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background parallax
            gsap.to(".parallax-bg", {
                y: "15%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text reveal
            gsap.from(".academy-title", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(".academy-quote", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                },
            });

            // Gold line grows in on scroll entry
            gsap.to(".academy-gold-line", {
                scaleY: 1,
                duration: 1.4,
                delay: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="academy"
            className="relative py-40 overflow-hidden bg-[#1c1a19] text-white flex items-center justify-center text-center"
        >
            <div
                className="parallax-bg absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
                role="img"
                aria-hidden="true"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512413914564-9642054db0e6?auto=format&fit=crop&q=80&w=2670")' }}
            ></div>
            {/* Grain overlay for depth */}
            <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}></div>

            <div ref={textRef} className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="academy-title uppercase tracking-[0.4em] text-sm md:text-base font-semibold text-brand-gold mb-12">
                    Die Glamour Akademie
                </h2>
                <p className="academy-quote font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-white/90">
                    &ldquo;Erfolg ist kein Zufall, <br className="hidden md:block" />
                    <span className="italic font-light text-brand-champagne">sondern die Summe aus Präzision und Glamour-Branding.&rdquo;</span>
                </p>

                <div className="academy-gold-line mt-16 w-[1px] h-24 bg-gradient-to-b from-brand-gold to-transparent mx-auto origin-top scale-y-0"></div>
            </div>
        </section>
    );
}
