"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const sectionIds = [
    "hero",
    "showcase",
    "treatments",
    "academy",
    "masterclasses",
    "modules",
    "mentorship",
    "founders",
];

export function SectionNav() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero
            setVisible(window.scrollY > 200);

            // Determine which section is currently in view
            let active = 0;
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2) {
                        active = i;
                        break;
                    }
                }
            }
            setCurrentIndex(active);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = useCallback((index: number) => {
        const clamped = Math.max(0, Math.min(index, sectionIds.length - 1));
        const el = document.getElementById(sectionIds[clamped]);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const goUp = () => scrollTo(currentIndex - 1);
    const goDown = () => scrollTo(currentIndex + 1);

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === sectionIds.length - 1;

    return (
        <div
            className={`fixed right-6 bottom-8 z-[100] flex flex-col items-center gap-2 transition-[opacity,transform] duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            {/* Up Button */}
            <button
                onClick={goUp}
                disabled={isFirst}
                aria-label="Previous section"
                className={`w-11 h-11 rounded-full border backdrop-blur-md flex items-center justify-center transition-[background-color,color,border-color] duration-300 shadow-lg touch-manipulation ${
                    isFirst
                        ? "border-[#3e342d]/10 text-[#3e342d]/20 cursor-default"
                        : "border-[#3e342d]/30 text-[#3e342d]/70 hover:bg-[#3e342d] hover:text-white hover:border-[#3e342d] bg-white/70"
                }`}
            >
                <ChevronUp size={18} strokeWidth={2.5} />
            </button>

            {/* Dot indicators */}
            <div className="flex flex-col items-center gap-1.5 py-2 px-1.5 rounded-full bg-white/60 backdrop-blur-sm">
                {sectionIds.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        aria-label={`Go to section ${i + 1}`}
                        className={`rounded-full transition-[width,height,background-color] duration-300 touch-manipulation ${
                            i === currentIndex
                                ? "w-2 h-5 bg-brand-gold"
                                : "w-1.5 h-1.5 bg-[#3e342d]/25 hover:bg-[#3e342d]/50"
                        }`}
                    />
                ))}
            </div>

            {/* Down Button */}
            <button
                onClick={goDown}
                disabled={isLast}
                aria-label="Next section"
                className={`w-11 h-11 rounded-full border backdrop-blur-md flex items-center justify-center transition-[background-color,color,border-color] duration-300 shadow-lg touch-manipulation ${
                    isLast
                        ? "border-[#3e342d]/10 text-[#3e342d]/20 cursor-default"
                        : "border-[#3e342d]/30 text-[#3e342d]/70 hover:bg-[#3e342d] hover:text-white hover:border-[#3e342d] bg-white/70"
                }`}
            >
                <ChevronDown size={18} strokeWidth={2.5} />
            </button>
        </div>
    );
}
