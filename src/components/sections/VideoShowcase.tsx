"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

gsap.registerPlugin(ScrollTrigger);

const clips = [
    { src: "/clips/clip1.mp4", alt: "Glamour Academy Highlight 1" },
    { src: "/clips/clip2.mp4", alt: "Glamour Academy Highlight 2" },
    { src: "/clips/clip3.mp4", alt: "Glamour Academy Highlight 3" },
];

function ClipCard({ clip, index }: { clip: typeof clips[number]; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(true);

    const toggle = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    }, []);

    return (
        <GlowCard
            glowColor="orange"
            customSize
            className="video-item !p-0 !gap-0 !shadow-2xl !shadow-brand-champagne/10 aspect-[9/16] bg-[#1c1a19] group"
        >
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                src={clip.src}
                title={clip.alt}
                poster={`/clips/poster${index + 1}.jpg`}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 rounded-2xl"
            />

            {/* Clip number label */}
            <span className="absolute top-4 left-4 text-white text-xs font-semibold tracking-widest z-20 drop-shadow-md">
                {String(index + 1).padStart(2, "0")}
            </span>

            {/* Decorative framing */}
            <div className="absolute inset-0 border-[1px] border-white/20 m-3 md:m-4 rounded-xl pointer-events-none transition-colors duration-500 group-hover:border-brand-gold/50 z-10" />

            {/* Play / Pause toggle */}
            <button
                onClick={toggle}
                aria-label={playing ? "Pause video" : "Play video"}
                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer bg-transparent rounded-2xl"
            >
                <span
                    className={`flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-md border border-white/30 transition-opacity duration-300 ${
                        playing
                            ? "bg-white/0 opacity-0 group-hover:opacity-100"
                            : "bg-white/10 opacity-100"
                    }`}
                >
                    {playing ? (
                        <Pause size={24} className="text-white/90" />
                    ) : (
                        <Play size={24} className="text-white/90 ml-1" />
                    )}
                </span>
            </button>
        </GlowCard>
    );
}

export function VideoShowcase() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".video-item",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="showcase" className="py-24 px-6 bg-brand-beige border-t border-b border-brand-champagne/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 inline-block">
                        Einblicke
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                        Die Kunst der <span className="italic font-light text-brand-champagne-dark">Rejuvenation</span>
                    </h2>
                    <p className="text-foreground/70 font-light max-w-xl mx-auto">
                        Erleben Sie echte Ergebnisse und höchste Präzision direkt aus unserem Praxisalltag.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clips.map((clip, index) => (
                        <ClipCard key={index} clip={clip} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
