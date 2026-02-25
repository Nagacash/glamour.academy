"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function Mentorship() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image Parallax
            gsap.to(imgRef.current, {
                y: "20%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text Reveal
            gsap.from(".mentor-text", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="mentorship" className="py-0 overflow-hidden bg-brand-beige">
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* Left Side: Dark Info Panel */}
                <div className="lg:w-1/2 bg-[#1c1a19] text-white p-12 lg:p-24 flex flex-col justify-center relative z-10 hidden lg:flex">
                    <div className="mentor-text mb-4">
                        <span className="uppercase tracking-[0.3em] text-xs font-semibold text-brand-gold">1:1 Mentoring</span>
                    </div>
                    <h2 className="mentor-text font-serif text-5xl lg:text-6xl leading-[1.1] mb-8">
                        Precision erleben.<br />
                        <span className="italic font-light text-brand-champagne">Artist Training.</span>
                    </h2>
                    <p className="mentor-text text-white/70 font-light leading-relaxed max-w-lg mb-12">
                        Persönliches Mentoring vor Ort in Deiner eigenen Praxis. Wir bringen 60 Jahre gebündeltes Wissen direkt zu Dir. Kein Anfang allein, sondern echte Exzellenz-Förderung.
                    </p>

                    <div className="mentor-text">
                        <Link
                            href="/module#klinische-basis"
                            className="relative inline-flex overflow-hidden group border border-brand-gold bg-transparent text-brand-gold px-8 py-4 uppercase tracking-widest text-xs transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c1a19]"
                        >
                            <span
                                className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                                aria-hidden="true"
                            ></span>
                            <span className="relative z-10 group-hover:text-[#1c1a19] transition-colors duration-500">
                                Jetzt Starten
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right Side: Large Parallax Image */}
                <div className="lg:w-1/2 relative h-screen w-full lg:h-auto overflow-hidden">
                    <img
                        ref={imgRef}
                        src="/images/team5.webp"
                        alt="Mentorship hands on training"
                        loading="lazy"
                        className="absolute inset-x-0 -top-[20%] h-[140%] w-full object-cover mix-blend-multiply opacity-80 scale-105"
                    />
                    {/* Mobile Overlay Content */}
                    <div className="absolute inset-0 bg-black/60 lg:hidden flex flex-col justify-center p-8 text-center">
                        <h2 className="font-serif text-4xl text-white mb-6">
                            Precision erleben.<br />
                            <span className="italic text-brand-champagne">Artist Training.</span>
                        </h2>
                        <Link
                            href="/module#klinische-basis"
                            className="relative inline-flex overflow-hidden group border border-brand-gold bg-brand-gold text-[#1c1a19] px-8 py-4 uppercase tracking-widest text-xs mx-auto transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            Jetzt Starten
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
