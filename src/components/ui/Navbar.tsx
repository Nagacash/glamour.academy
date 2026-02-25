"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Hexagon, Menu, X } from "lucide-react";
import gsap from "gsap";

const navLinks = [
    { href: "#treatments", label: "Treatments" },
    { href: "#academy", label: "Academy" },
    { href: "#mentorship", label: "Mentorship" },
    { href: "#founders", label: "About us" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!overlayRef.current || !linksRef.current) return;

        if (menuOpen) {
            document.body.style.overflow = "hidden";
            gsap.set(overlayRef.current, { display: "flex" });
            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });
            gsap.fromTo(
                linksRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: "power2.out", delay: 0.15 },
            );
        } else {
            document.body.style.overflow = "";
            gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    if (overlayRef.current) gsap.set(overlayRef.current, { display: "none" });
                },
            });
        }
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-colors transition-shadow duration-300 ${
                    scrolled
                        ? "bg-white/70 backdrop-blur-xl shadow-sm"
                        : "bg-transparent"
                }`}
            >
                <div className="w-full px-8 md:px-12 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-[#3e342d]">
                        <Hexagon size={26} fill="#3e342d" strokeWidth={0} aria-hidden="true" />
                        <span className="font-sans font-medium text-lg tracking-[0.15em] uppercase">
                            Glamour Akademie
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-14 text-sm font-medium text-[#3e342d]/90">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="relative group py-1"
                            >
                                {label}
                                <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-[#3e342d] transition-[width] duration-300 ease-out group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Right Area */}
                    <div className="flex items-center space-x-6 text-[13px] font-medium text-[#3e342d]">
                        <div className="hidden sm:block hover:opacity-60 cursor-pointer transition-opacity duration-200">
                            ENG
                        </div>
                        <div className="w-[1px] h-4 bg-[#3e342d]/30 hidden sm:block" />
                        <Link
                            href="#contact"
                            className="hidden sm:inline-block uppercase tracking-widest border-b-[1.5px] border-[#3e342d] pb-0.5 hover:opacity-60 transition-opacity duration-200 font-semibold"
                        >
                            Contact Us
                        </Link>

                        {/* Hamburger — visible on mobile */}
                        <button
                            className="lg:hidden p-2 -mr-2 text-[#3e342d] hover:opacity-60 transition-opacity duration-200"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open navigation menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[60] hidden flex-col bg-[#f5f0eb] opacity-0"
            >
                {/* Overlay Header */}
                <div className="w-full px-8 md:px-12 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-[#3e342d]" onClick={closeMenu}>
                        <Hexagon size={26} fill="#3e342d" strokeWidth={0} aria-hidden="true" />
                        <span className="font-sans font-medium text-lg tracking-[0.15em] uppercase">
                            Glamour Akademie
                        </span>
                    </Link>
                    <button
                        className="p-2 -mr-2 text-[#3e342d] hover:opacity-60 transition-opacity duration-200"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Overlay Links */}
                <div ref={linksRef} className="flex flex-col items-center justify-center flex-1 gap-8">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={closeMenu}
                            className="relative group text-3xl font-medium text-[#3e342d] tracking-wide"
                        >
                            {label}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#3e342d] transition-[width] duration-300 ease-out group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={closeMenu}
                        className="mt-4 uppercase tracking-widest text-sm border-b-[1.5px] border-[#3e342d] pb-0.5 font-semibold text-[#3e342d] hover:opacity-60 transition-opacity duration-200"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
}
