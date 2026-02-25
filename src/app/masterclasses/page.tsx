"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    Sparkles,
    Trophy,
    Users,
    ArrowRight,
    CheckCircle2,
    Clock,
    Award,
    Star,
    GraduationCap,
    ShieldCheck,
    Syringe,
    HeartPulse,
    Gem,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ───────────────────────────────────────────────────────── */

const masterclasses = [
    {
        id: "lip-artist",
        module: "01",
        title: "Lip Artist",
        subtitle: "Advanced Sculpting",
        tagline: "Die Kunst der perfekten Lippe.",
        price: "1.200€",
        duration: "2 Tage Intensiv",
        groupSize: "Max. 6 Teilnehmer",
        image: "/images/masterclasses/lips.png",
        icon: <Sparkles className="w-5 h-5" />,
        accent: "from-rose-900/80 to-[#1c1a19]",
        description:
            "Meistern Sie die anspruchsvollsten Lippenaugmentations-Techniken. Von der klassischen Konturierung bis zur viralen Russian Lips Methode — Sie lernen die gesamte Bandbreite moderner Lippenästhetik unter Anleitung erfahrener Expertinnen.",
        techniques: [
            "Russian Lips — maximales Volumen mit natürlichem Finish",
            "M-Shape Technik — definierte Amorbogen-Modellierung",
            "Klassische Kontur — subtile Lippenrandverstärkung",
            "Hydra Lips — Feuchtigkeitsbasierte Volumetrisierung",
            "Komplikationsmanagement & Hyaluronidase-Protokoll",
        ],
        curriculum: [
            { day: "Tag 1", focus: "Theorie & Anatomie", details: "Lippengefäßsystem, Gefahrenzonen, Produktkunde, Live-Demonstrationen" },
            { day: "Tag 2", focus: "Hands-On Training", details: "Übungen am Modell, individuelle Korrekturen, Foto-Dokumentation, Zertifizierung" },
        ],
        bonus: "Social Media Lip Branding Guide — So vermarkten Sie Ihre neuen Fähigkeiten erfolgreich.",
        testimonial: {
            quote: "Nach dem Kurs habe ich meinen Umsatz im Lippenbereich verdreifacht. Die Techniken sind unglaublich präzise.",
            author: "Dr. Sarah M.",
            role: "Ästhetische Medizin, München",
        },
    },
    {
        id: "face-sculpt",
        module: "02",
        title: "Face Sculpt",
        subtitle: "Total Profile Balance",
        tagline: "Gesichtsarchitektur neu definiert.",
        price: "1.500€",
        duration: "3 Tage Intensiv",
        groupSize: "Max. 4 Teilnehmer",
        image: "/images/masterclasses/face.png",
        icon: <Trophy className="w-5 h-5" />,
        accent: "from-amber-900/80 to-[#1c1a19]",
        description:
            "Das umfassendste Modul unserer Akademie. Erlernen Sie die Kunst der harmonischen Gesichtsproportionierung — vom strategischen Wangenaufbau über die Jawline-Definition bis zur Kinnprojektion. Anatomisch fundiert, ästhetisch exzellent.",
        techniques: [
            "Wangenaufbau — Mid-Face Rejuvenation mit Kanülentechnik",
            "Jawline Contouring — maskuline & feminine Linienführung",
            "Kinnkorrektur — Profilbalance & Projektion",
            "Schläfenregion — Volumenrestauration für Anti-Aging",
            "Liquid Rhinoplasty — nicht-chirurgische Nasenkorrektur",
        ],
        curriculum: [
            { day: "Tag 1", focus: "Anatomie Deep-Dive", details: "Gesichtsgefäße, Danger Zones, Proportionslehre, Behandlungsplanung" },
            { day: "Tag 2", focus: "Live-Demonstrationen", details: "Expertinnen zeigen alle Techniken am Modell, Q&A, Produktvergleich" },
            { day: "Tag 3", focus: "Hands-On & Zertifizierung", details: "Eigenständige Behandlungen unter Supervision, Fotodokumentation, Zertifikat" },
        ],
        bonus: "Anatomie & Notfallmanagement Kurs — Sicherheit als Fundament jeder Behandlung.",
        testimonial: {
            quote: "Die drei Tage waren intensiver als jedes Seminar zuvor. Ich fühle mich jetzt sicher bei komplexen Gesichtsbehandlungen.",
            author: "Annette K.",
            role: "Heilpraktikerin, Hamburg",
        },
    },
    {
        id: "glow-expert",
        module: "03",
        title: "Glow Expert",
        subtitle: "The Science of Radiance",
        tagline: "Strahlende Haut. Auf Zellebene.",
        price: "950€",
        duration: "1,5 Tage Intensiv",
        groupSize: "Max. 8 Teilnehmer",
        image: "/images/masterclasses/glow.png",
        icon: <Users className="w-5 h-5" />,
        accent: "from-emerald-900/80 to-[#1c1a19]",
        description:
            "Tauchen Sie ein in die Wissenschaft der Hauterneuerung. Skinbooster, Mesotherapie und Bio-Remodellierung — erlernen Sie die fortschrittlichsten Protokolle für eine Haut, die von innen strahlt. Evidenzbasiert und sofort umsetzbar.",
        techniques: [
            "Skinbooster — Hyaluronsäure-Mikrodepots für langanhaltende Hydration",
            "Mesotherapie — individuelle Wirkstoff-Cocktails für jede Indikation",
            "Bio-Remodellierung — Kollagenstimulation mit Polynukleotiden",
            "Chemical Peeling Protokolle — von superficial bis medium depth",
            "LED & Mikrostrom-Kombinationstherapien",
        ],
        curriculum: [
            { day: "Tag 1", focus: "Hautphysiologie & Protokolle", details: "Zellbiologie, Wirkstoffkunde, Cocktail-Rezepturen, Live-Demos" },
            { day: "Tag 2 (halber Tag)", focus: "Praxis & Zertifizierung", details: "Hands-On Mesotherapie, Skinbooster-Applikation, Abschlussprüfung" },
        ],
        bonus: "Skin Cocktail Rezepturen — Exklusive Formulierungen für Ihre Praxis.",
        testimonial: {
            quote: "Die Cocktail-Rezepturen allein waren den Kurs wert. Meine Patienten sind begeistert von den Ergebnissen.",
            author: "Lisa W.",
            role: "Kosmetikerin & HP, Berlin",
        },
    },
];

const included = [
    { icon: GraduationCap, label: "Zertifizierte Fortbildung" },
    { icon: ShieldCheck, label: "Notfallmanagement inklusive" },
    { icon: Syringe, label: "Premium Übungsmaterialien" },
    { icon: HeartPulse, label: "30 Tage Follow-Up Mentoring" },
    { icon: Gem, label: "Exklusive Produktrabatte" },
    { icon: Award, label: "Offizielles Akademie-Zertifikat" },
];

/* ─── Component ──────────────────────────────────────────────────── */

export default function MasterclassesPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [activeModule, setActiveModule] = useState<string | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero text stagger
            gsap.from(".mc-page-hero-text", {
                y: 60,
                opacity: 0,
                duration: 1.4,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.2,
            });

            // Stats counter
            gsap.from(".mc-stat", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.8,
            });

            // Module sections reveal
            gsap.utils.toArray<HTMLElement>(".mc-module-section").forEach((section) => {
                gsap.from(section.querySelectorAll(".mc-module-reveal"), {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                    },
                });
            });

            // Included items
            gsap.from(".mc-included-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".mc-included-grid",
                    start: "top 80%",
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="min-h-screen bg-[#1c1a19]">
            {/* ─── Back Nav ─── */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-champagne transition-colors font-light"
                >
                    <ChevronLeft size={16} />
                    Zurück
                </Link>
            </div>

            {/* ─── Cinematic Hero ─── */}
            <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-gold/[0.03] rounded-full blur-[200px]" />
                    <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-champagne/[0.03] rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="mc-page-hero-text mb-6 inline-flex items-center gap-3">
                        <div className="h-px w-16 bg-brand-gold" />
                        <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-brand-gold">
                            Glamour Akademie
                        </span>
                    </div>

                    <h1 className="mc-page-hero-text font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] mb-8">
                        Master<br />
                        <span className="italic font-light text-brand-champagne">classes</span>
                    </h1>

                    <p className="mc-page-hero-text text-white/50 font-light text-lg md:text-xl max-w-2xl leading-relaxed mb-6">
                        Drei exklusive Module. Über 60 Jahre gebündeltes Wissen. 
                        Jede Masterclass ist eine Investition in Exzellenz — 
                        limitiert auf wenige Plätze, um höchste Ausbildungsqualität zu garantieren.
                    </p>

                    <div className="mc-page-hero-text flex flex-wrap gap-3 mb-16">
                        {masterclasses.map((mc) => (
                            <a
                                key={mc.id}
                                href={`#${mc.id}`}
                                className="px-5 py-2.5 border border-white/10 text-white/60 text-xs uppercase tracking-widest font-semibold hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                            >
                                {mc.title}
                            </a>
                        ))}
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
                        {[
                            { value: "60+", label: "Jahre Erfahrung" },
                            { value: "98%", label: "Erfolgsquote" },
                            { value: "3", label: "Exklusive Module" },
                            { value: "500+", label: "Absolventen" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="mc-stat bg-[#1c1a19] p-6 md:p-8 text-center"
                            >
                                <div className="font-serif text-3xl md:text-4xl text-brand-gold mb-1 italic">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Module Sections ─── */}
            {masterclasses.map((mc, index) => (
                <section
                    key={mc.id}
                    id={mc.id}
                    className={`mc-module-section relative ${
                        index % 2 === 0 ? "bg-[#141211]" : "bg-[#1c1a19]"
                    }`}
                >
                    {/* Module Image Banner */}
                    <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
                        <Image
                            src={mc.image}
                            alt={mc.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${mc.accent}`} />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1a19]/90 via-transparent to-transparent" />

                        {/* Module label overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                            <div className="max-w-7xl mx-auto">
                                <span className="mc-module-reveal text-brand-gold font-serif text-7xl md:text-9xl italic opacity-20 leading-none block mb-4">
                                    {mc.module}
                                </span>
                                <div className="mc-module-reveal flex items-center gap-3 mb-3">
                                    <span className="text-brand-gold">{mc.icon}</span>
                                    <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-gold">
                                        {mc.subtitle}
                                    </span>
                                </div>
                                <h2 className="mc-module-reveal font-serif text-4xl md:text-6xl text-white leading-[1.05]">
                                    {mc.title}
                                </h2>
                                <p className="mc-module-reveal font-serif text-xl md:text-2xl italic font-light text-brand-champagne mt-2">
                                    {mc.tagline}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Module Content */}
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                            {/* Left: Description + Techniques */}
                            <div className="lg:col-span-7">
                                <p className="mc-module-reveal text-white/60 font-light text-base md:text-lg leading-relaxed mb-12">
                                    {mc.description}
                                </p>

                                <div className="mc-module-reveal mb-12">
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-6">
                                        Schlüsseltechniken
                                    </h3>
                                    <ul className="space-y-4">
                                        {mc.techniques.map((tech, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-4 text-sm text-white/70 font-light leading-relaxed"
                                            >
                                                <div className="w-1.5 h-px bg-brand-gold mt-2.5 shrink-0" />
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Curriculum */}
                                <div className="mc-module-reveal">
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-6">
                                        Kursablauf
                                    </h3>
                                    <div className="space-y-4">
                                        {mc.curriculum.map((day, i) => (
                                            <div
                                                key={i}
                                                className="border border-white/10 p-6 hover:border-brand-gold/20 transition-colors duration-300"
                                            >
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-brand-gold font-serif italic text-lg">
                                                        {day.day}
                                                    </span>
                                                    <span className="h-px flex-1 bg-white/10" />
                                                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                                                        {day.focus}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-white/50 font-light leading-relaxed">
                                                    {day.details}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Pricing Card + Testimonial */}
                            <div className="lg:col-span-5">
                                {/* Pricing Card */}
                                <div className="mc-module-reveal border border-white/10 p-8 md:p-10 mb-8 sticky top-8">
                                    <div className="mb-8">
                                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                                            Investment
                                        </span>
                                        <div className="font-serif text-5xl text-brand-gold italic leading-none">
                                            {mc.price}
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8 pb-8 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <Clock size={14} className="text-brand-champagne-dark" />
                                            <span className="text-sm text-white/60 font-light">
                                                {mc.duration}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Users size={14} className="text-brand-champagne-dark" />
                                            <span className="text-sm text-white/60 font-light">
                                                {mc.groupSize}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Award size={14} className="text-brand-champagne-dark" />
                                            <span className="text-sm text-white/60 font-light">
                                                Offizielles Zertifikat
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bonus */}
                                    <div className="mb-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Sparkles size={14} className="text-brand-gold" />
                                            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                                                Expert Bonus
                                            </span>
                                        </div>
                                        <p className="text-sm text-white/50 font-light italic leading-relaxed">
                                            {mc.bonus}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setActiveModule(mc.id)}
                                        className="w-full relative overflow-hidden group border border-brand-gold bg-transparent text-brand-gold py-4 uppercase tracking-[0.2em] text-xs font-bold transition-colors duration-500 cursor-pointer"
                                    >
                                        <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                                        <span className="relative z-10 group-hover:text-[#1c1a19] transition-colors duration-500 flex items-center justify-center gap-2">
                                            Platz Reservieren
                                            <ArrowRight size={14} />
                                        </span>
                                    </button>
                                </div>

                                {/* Testimonial */}
                                <div className="mc-module-reveal border-l-2 border-brand-gold/30 pl-6">
                                    <div className="flex gap-1 mb-3">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star
                                                key={s}
                                                size={12}
                                                fill="#d4af37"
                                                className="text-brand-gold"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-white/60 font-light italic text-sm leading-relaxed mb-4">
                                        &ldquo;{mc.testimonial.quote}&rdquo;
                                    </p>
                                    <div>
                                        <span className="text-white/80 text-sm font-medium block">
                                            {mc.testimonial.author}
                                        </span>
                                        <span className="text-white/40 text-xs font-light">
                                            {mc.testimonial.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ─── What's Included ─── */}
            <section className="bg-[#141211] py-20 md:py-28 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-gold block mb-4">
                            In jeder Masterclass enthalten
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-white italic">
                            Alles für Ihren Erfolg
                        </h2>
                    </div>

                    <div className="mc-included-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
                        {included.map((item) => (
                            <div
                                key={item.label}
                                className="mc-included-item bg-[#141211] p-6 md:p-8 text-center group hover:bg-white/[0.02] transition-colors duration-300"
                            >
                                <item.icon
                                    size={24}
                                    className="text-brand-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="text-[10px] uppercase tracking-wider text-white/50 font-semibold leading-tight block">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Final CTA ─── */}
            <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/[0.04] rounded-full blur-[200px]" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-gold block mb-6">
                        Bereit für den nächsten Schritt?
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                        Ihre Transformation<br />
                        <span className="italic font-light text-brand-champagne">beginnt hier.</span>
                    </h2>
                    <p className="text-white/50 font-light text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                        Die Plätze sind streng limitiert. Sichern Sie sich Ihren Zugang 
                        zu Hamburgs exklusivster Ästhetik-Ausbildung.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:info@beautyakademy.de?subject=Masterclass%20Anfrage"
                            className="group relative overflow-hidden px-10 py-5 bg-brand-gold text-[#1c1a19] uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] flex items-center gap-3"
                        >
                            Jetzt Anfragen
                            <ArrowRight
                                size={14}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href="tel:+491234567890"
                            className="px-10 py-5 border border-white/20 text-white/60 uppercase tracking-[0.2em] text-xs font-bold hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                        >
                            +49 (0) 123 456 789
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6 text-[10px] uppercase tracking-widest text-white/30 font-semibold">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 size={12} />
                            Ratenzahlung möglich
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 size={12} />
                            Kostenlose Beratung
                        </span>
                    </div>
                </div>
            </section>

            {/* ─── Footer Strip ─── */}
            <div className="border-t border-white/10 py-8 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 tracking-wider font-light">
                    <span>&copy; {new Date().getFullYear()} Glamour Akademie. Alle Rechte vorbehalten.</span>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/datenschutz" className="hover:text-brand-champagne transition-colors">
                            Datenschutz
                        </Link>
                        <Link href="/" className="hover:text-brand-champagne transition-colors">
                            Startseite
                        </Link>
                    </div>
                </div>
            </div>

            {/* ─── Reservation Modal ─── */}
            {activeModule && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
                    onClick={() => setActiveModule(null)}
                >
                    <div
                        className="bg-[#1c1a19] border border-white/10 p-8 md:p-12 max-w-lg w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveModule(null)}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-xl cursor-pointer"
                        >
                            ×
                        </button>

                        <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold block mb-2">
                            Platz reservieren
                        </span>
                        <h3 className="font-serif text-2xl text-white mb-6">
                            {masterclasses.find((m) => m.id === activeModule)?.title} Masterclass
                        </h3>

                        <div className="space-y-4 mb-8">
                            <input
                                type="text"
                                placeholder="Ihr Name"
                                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 font-light focus:border-brand-gold focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="E-Mail Adresse"
                                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 font-light focus:border-brand-gold focus:outline-none transition-colors"
                            />
                            <input
                                type="tel"
                                placeholder="Telefonnummer (optional)"
                                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 font-light focus:border-brand-gold focus:outline-none transition-colors"
                            />
                            <textarea
                                placeholder="Ihre Nachricht (optional)"
                                rows={3}
                                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 font-light focus:border-brand-gold focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        <button className="w-full bg-brand-gold text-[#1c1a19] py-4 uppercase tracking-[0.2em] text-xs font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer">
                            Anfrage Absenden
                        </button>

                        <p className="text-[10px] text-white/30 text-center mt-4 font-light">
                            Unverbindliche Anfrage · Antwort innerhalb von 24 Stunden
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
