"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
    ChevronLeft,
    ShieldAlert,
    Microscope,
    Syringe,
    Brain,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    Clock,
    Users,
    Award,
    Star,
    BookOpen,
    Target,
    Stethoscope,
    FlaskConical,
    HeartHandshake,
    TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ───────────────────────────────────────────────────────── */

const modules = [
    {
        id: "klinische-basis",
        num: "01",
        title: "Klinische Basis",
        subtitle: "Das Fundament",
        tagline: "Sicherheit ist nicht verhandelbar.",
        icon: ShieldAlert,
        color: "text-red-400",
        duration: "3 Tage",
        level: "Einsteiger",
        price: "1.800€",
        description:
            "Das Fundament jeder erstklassigen Behandlung beginnt mit unerschütterlicher Sicherheit. In diesem Modul erlernen Sie die strengen Hygiene- und OP-Standards, die aus über 30 Jahren klinischer Praxis in der plastischen Chirurgie entstanden sind. Von der sterilen Arbeitsumgebung bis zum Notfallprotokoll — hier wird kein Detail dem Zufall überlassen.",
        topics: [
            "Hygiene nach RKI-Richtlinien & Aufbereitungsstandards",
            "Sterilisation, Desinfektion und aseptisches Arbeiten",
            "OP-Standards aus der plastischen Chirurgie",
            "Notfallmanagement & Anaphylaxie-Protokoll",
            "Rechtliche Grundlagen: Heilpraktikergesetz & Dokumentation",
            "Patientenaufklärung & Einwilligungserklärungen",
        ],
        outcomes: [
            "Zertifizierte Hygienebeauftragte/r für Ihre Praxis",
            "Vollständiges Notfall-Kit & Protokoll",
            "Rechtssichere Dokumentationsvorlagen",
        ],
        testimonial: {
            quote: "Das Modul hat mir die Sicherheit gegeben, die ich brauchte, um meine eigene Praxis zu eröffnen. Die Standards sind auf Klinikniveau.",
            author: "Maria S.",
            role: "Heilpraktikerin, Düsseldorf",
        },
    },
    {
        id: "anatomie-material",
        num: "02",
        title: "Anatomie & Material",
        subtitle: "Deep Knowledge",
        tagline: "Wissen, das unter die Haut geht.",
        icon: Microscope,
        color: "text-blue-400",
        duration: "4 Tage",
        level: "Einsteiger – Fortgeschritten",
        price: "2.400€",
        description:
            "Wahre Meisterschaft beginnt mit tiefem Verständnis. Dieses Modul vermittelt fundiertes Wissen über die Gesichtsanatomie — Gefäßverläufe, Nervenversorgung, Gefahrenzonen. Kombiniert mit umfassender Produktkunde zu Hyaluronsäure, PDO-Fäden und Kollagenstimulatoren. Sie lernen nicht nur WAS Sie injizieren, sondern WARUM und WOHIN.",
        topics: [
            "Gesichtsanatomie: Arterien, Venen, Nerven & Gefahrenzonen",
            "Schichtanatomie & Injektionsebenen",
            "Hyaluronsäure: Viskosität, Vernetzungsgrad, Indikationen",
            "PDO-Fäden: Mono, Cog, Screw — Materialwahl & Platzierung",
            "Kollagenstimulatoren: CaHA, PLLA, Polynukleotide",
            "Produktvergleich & evidenzbasierte Auswahl",
        ],
        outcomes: [
            "Sicheres Identifizieren aller Gefahrenzonen",
            "Eigenständige Produktauswahl nach Indikation",
            "Anatomie-Atlas als Nachschlagewerk",
        ],
        testimonial: {
            quote: "Das Anatomie-Wissen war ein Gamechanger. Ich behandle jetzt mit einer Präzision, die mir vorher fehlte.",
            author: "Dr. Katrin H.",
            role: "Ästhetische Ärztin, Frankfurt",
        },
    },
    {
        id: "mesotherapie",
        num: "03",
        title: "Mesotherapie",
        subtitle: "Innere Vitalität",
        tagline: "Heilung von innen nach außen.",
        icon: Syringe,
        color: "text-emerald-400",
        duration: "2 Tage",
        level: "Fortgeschritten",
        price: "1.500€",
        description:
            "Die Kunst der individualisierten Wirkstofftherapie. Erlernen Sie die Zusammenstellung hochpotenter Vitamin-Cocktails, NAD+ Infusionstherapien und Mesotherapie-Protokolle, die auf zellulärer Ebene wirken. Von der mitochondrialen Medizin bis zur regenerativen Hautverjüngung — Ihr Werkzeugkasten für langfristige Ergebnisse.",
        topics: [
            "Vitamin- & Mineralstoff-Infusionen: Indikation & Dosierung",
            "NAD+ Therapie: Anti-Aging auf zellulärer Ebene",
            "Mesotherapie-Cocktails: Rezepturen für jede Indikation",
            "Mikroneedling & Wirkstoffpenetration",
            "Mitochondriale Medizin: Energiestoffwechsel optimieren",
            "Infusionstechniken: peripher & Butterfly-Kanüle",
        ],
        outcomes: [
            "Eigene Cocktail-Rezepturen für Ihre Praxis",
            "NAD+ Infusionsprotokoll sofort umsetzbar",
            "Lieferanten-Netzwerk für Wirkstoffe",
        ],
        testimonial: {
            quote: "Die NAD+ Therapie ist jetzt mein umsatzstärkstes Angebot. Die Patienten kommen alle 4 Wochen wieder.",
            author: "Sandra B.",
            role: "Heilpraktikerin, Köln",
        },
    },
    {
        id: "psychologie",
        num: "04",
        title: "Psychologie",
        subtitle: "Ganzheitlich",
        tagline: "Schönheit beginnt im Gespräch.",
        icon: Brain,
        color: "text-violet-400",
        duration: "1,5 Tage",
        level: "Alle Stufen",
        price: "950€",
        description:
            "Der unterschätzte Erfolgsfaktor jeder ästhetischen Praxis. Lernen Sie die Psychologie hinter dem Patientenwunsch zu verstehen — von der realistischen Erwartungshaltung bis zur Erkennung von Dysmorphophobie. Dieses Modul macht Sie zur vertrauenswürdigen Beraterin, nicht nur zur Behandlerin.",
        topics: [
            "Beratungspsychologie: aktives Zuhören & Empathie",
            "Erwartungsmanagement: Wunsch vs. Machbarkeit",
            "Dysmorphophobie erkennen & professionell reagieren",
            "Umgang mit schwierigen Patienten & Reklamationen",
            "Selbstfürsorge & Burnout-Prävention für Behandler",
            "Ethik in der ästhetischen Medizin",
        ],
        outcomes: [
            "Gesprächsleitfaden für Erstberatungen",
            "Red-Flag Checkliste für Dysmorphophobie",
            "Höhere Patientenzufriedenheit & Weiterempfehlung",
        ],
        testimonial: {
            quote: "Seit dem Psychologie-Modul führe ich bessere Beratungsgespräche. Die Patientenbindung ist deutlich gestiegen.",
            author: "Julia R.",
            role: "Kosmetikerin, Stuttgart",
        },
    },
    {
        id: "praxis-support",
        num: "05",
        title: "Praxis-Support",
        subtitle: "Business Mastery",
        tagline: "Ihre Praxis. Ihr Unternehmen.",
        icon: Briefcase,
        color: "text-amber-400",
        duration: "2 Tage",
        level: "Alle Stufen",
        price: "1.200€",
        description:
            "Exzellenz allein reicht nicht — Sie brauchen ein funktionierendes Business drumherum. Von der Abrechnung über Material-Sourcing bis zur Räumlichkeits-Analyse: Dieses Modul macht aus Ihrer medizinischen Expertise ein profitables, nachhaltiges Unternehmen. Inklusive Marketing-Grundlagen und Social-Media-Strategie.",
        topics: [
            "Abrechnungsmodelle: GOÄ, GebüH & Privatliquidation",
            "Material-Sourcing: Lieferanten, Konditionen, Qualitätskontrolle",
            "Praxisdesign & Räumlichkeits-Analyse",
            "Marketing-Grundlagen: Branding & Positionierung",
            "Social Media Strategie für ästhetische Praxen",
            "Finanzplanung & Praxisgründung",
        ],
        outcomes: [
            "Business-Plan Vorlage für Ihre Praxis",
            "Lieferanten-Datenbank mit Vorzugskonditionen",
            "Social-Media Content-Kalender für 3 Monate",
        ],
        testimonial: {
            quote: "Ohne das Business-Modul hätte ich meine Praxis nicht so erfolgreich aufbauen können. Unbezahlbares Wissen.",
            author: "Petra L.",
            role: "Praxisinhaberin, Hamburg",
        },
    },
];

const journeySteps = [
    { icon: BookOpen, label: "Klinische Basis legen", step: "01" },
    { icon: Microscope, label: "Anatomie beherrschen", step: "02" },
    { icon: FlaskConical, label: "Therapien meistern", step: "03" },
    { icon: HeartHandshake, label: "Patienten verstehen", step: "04" },
    { icon: TrendingUp, label: "Business aufbauen", step: "05" },
];

const included = [
    { icon: Stethoscope, label: "Praxisnahe Supervision" },
    { icon: BookOpen, label: "Ausführliche Skripte & Unterlagen" },
    { icon: Users, label: "Kleine Gruppen für intensives Lernen" },
    { icon: Award, label: "Zertifizierte Fortbildung" },
    { icon: HeartHandshake, label: "Persönliche Betreuung" },
    { icon: TrendingUp, label: "Fokus auf Praxis & Business" },
];

/* ─── Component ──────────────────────────────────────────────────── */

export default function ModulePage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [activeModule, setActiveModule] = useState<string | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".mod-hero-text", {
                y: 60,
                opacity: 0,
                duration: 1.4,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.2,
            });

            gsap.from(".mod-journey-step", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.9,
            });

            gsap.utils.toArray<HTMLElement>(".mod-section").forEach((section) => {
                gsap.from(section.querySelectorAll(".mod-reveal"), {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                    },
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const totalPrice = modules.reduce(
        (sum, m) => sum + parseInt(m.price.replace(/[^\d]/g, "")),
        0
    );
    const bundlePrice = Math.round(totalPrice * 0.8);

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

            {/* ─── Hero ─── */}
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-6 md:px-12 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-champagne/3 rounded-full blur-[200px]" />
                    <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-brand-gold/2 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="mod-hero-text mb-6 inline-flex items-center gap-3">
                        <div className="h-px w-16 bg-brand-gold" />
                        <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-brand-gold">
                            Artist Training Program
                        </span>
                    </div>

                    <h1 className="mod-hero-text font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] mb-8">
                        Artist<br />
                        <span className="italic font-light text-brand-champagne">Module</span>
                    </h1>

                    <p className="mod-hero-text text-white/50 font-light text-lg md:text-xl max-w-2xl leading-relaxed mb-16">
                        Fünf Module. Ein vollständiger Ausbildungsweg. Vom klinischen Fundament 
                        bis zum eigenen Business — jedes Modul einzeln buchbar oder als 
                        komplettes Artist Training Programm mit 20% Vorzugspreis.
                    </p>

                    {/* Learning Journey */}
                    <div className="mod-hero-text">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold block mb-6">
                            Ihr Ausbildungsweg
                        </span>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
                            {journeySteps.map((step, i) => (
                                <div key={step.step} className="mod-journey-step flex items-center">
                                    <a
                                        href={`#${modules[i].id}`}
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="w-10 h-10 border border-white/15 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all duration-300">
                                            <step.icon size={16} className="text-white/50 group-hover:text-brand-gold transition-colors" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold block">
                                                {step.step}
                                            </span>
                                            <span className="text-xs text-white/50 font-light group-hover:text-white/80 transition-colors">
                                                {step.label}
                                            </span>
                                        </div>
                                    </a>
                                    {i < journeySteps.length - 1 && (
                                        <div className="hidden md:block w-8 lg:w-16 h-px bg-white/10 mx-4" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Module Sections ─── */}
            {modules.map((mod, index) => {
                const IconComponent = mod.icon;
                return (
                    <section
                        key={mod.id}
                        id={mod.id}
                        className={`mod-section border-t border-white/5 ${
                            index % 2 === 0 ? "bg-[#141211]" : "bg-[#1c1a19]"
                        }`}
                    >
                        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
                            {/* Module Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
                                <div className="flex items-start gap-6">
                                    <span className="mod-reveal font-serif text-6xl md:text-8xl italic text-white/6 leading-none">
                                        {mod.num}
                                    </span>
                                    <div>
                                        <div className="mod-reveal flex items-center gap-3 mb-3">
                                            <IconComponent size={18} className={mod.color} />
                                            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-gold">
                                                {mod.subtitle}
                                            </span>
                                        </div>
                                        <h2 className="mod-reveal font-serif text-3xl md:text-5xl text-white leading-[1.1]">
                                            {mod.title}
                                        </h2>
                                        <p className="mod-reveal font-serif text-lg md:text-xl italic font-light text-brand-champagne mt-2">
                                            {mod.tagline}
                                        </p>
                                    </div>
                                </div>
                                <div className="mod-reveal flex items-center gap-6 text-sm text-white/40 font-light">
                                    <span className="flex items-center gap-2">
                                        <Clock size={14} className="text-brand-champagne-dark" />
                                        {mod.duration}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Target size={14} className="text-brand-champagne-dark" />
                                        {mod.level}
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                                {/* Left: Content */}
                                <div className="lg:col-span-7">
                                    <p className="mod-reveal text-white/60 font-light text-base md:text-lg leading-relaxed mb-12">
                                        {mod.description}
                                    </p>

                                    {/* Topics */}
                                    <div className="mod-reveal mb-12">
                                        <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-6">
                                            Lerninhalte
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {mod.topics.map((topic, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-3 text-sm text-white/60 font-light leading-relaxed"
                                                >
                                                    <CheckCircle2
                                                        size={14}
                                                        className="text-brand-gold shrink-0 mt-0.5"
                                                    />
                                                    {topic}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Outcomes */}
                                    <div className="mod-reveal">
                                        <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-6">
                                            Was Sie mitnehmen
                                        </h3>
                                        <div className="space-y-3">
                                            {mod.outcomes.map((outcome, i) => (
                                                <div
                                                    key={i}
                                                    className="border border-white/10 px-5 py-4 flex items-center gap-3 hover:border-brand-gold/20 transition-colors duration-300"
                                                >
                                                    <Award size={14} className="text-brand-gold shrink-0" />
                                                    <span className="text-sm text-white/70 font-light">
                                                        {outcome}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Price + Testimonial */}
                                <div className="lg:col-span-5">
                                    {/* Price Card */}
                                    <div className="mod-reveal border border-white/10 p-8 md:p-10 mb-8 sticky top-8">
                                        <div className="mb-8">
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                                                Investment
                                            </span>
                                            <div className="font-serif text-5xl text-brand-gold italic leading-none">
                                                {mod.price}
                                            </div>
                                        </div>

                                        <div className="space-y-4 mb-8 pb-8 border-b border-white/10">
                                            <div className="flex items-center gap-3">
                                                <Clock size={14} className="text-brand-champagne-dark" />
                                                <span className="text-sm text-white/60 font-light">
                                                    {mod.duration}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Users size={14} className="text-brand-champagne-dark" />
                                                <span className="text-sm text-white/60 font-light">
                                                    Max. 8 Teilnehmer
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Award size={14} className="text-brand-champagne-dark" />
                                                <span className="text-sm text-white/60 font-light">
                                                    Offizielles Zertifikat
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Stethoscope size={14} className="text-brand-champagne-dark" />
                                                <span className="text-sm text-white/60 font-light">
                                                    Praxismaterialien inklusive
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setActiveModule(mod.id)}
                                            className="w-full relative overflow-hidden group border border-brand-gold bg-transparent text-brand-gold py-4 uppercase tracking-[0.2em] text-xs font-bold transition-colors duration-500 cursor-pointer"
                                        >
                                            <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                                            <span className="relative z-10 group-hover:text-[#1c1a19] transition-colors duration-500 flex items-center justify-center gap-2">
                                                Modul Buchen
                                                <ArrowRight size={14} />
                                            </span>
                                        </button>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="mod-reveal border-l-2 border-brand-gold/30 pl-6">
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
                                            &ldquo;{mod.testimonial.quote}&rdquo;
                                        </p>
                                        <div>
                                            <span className="text-white/80 text-sm font-medium block">
                                                {mod.testimonial.author}
                                            </span>
                                            <span className="text-white/40 text-xs font-light">
                                                {mod.testimonial.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* ─── What's Included ─── */}
            <section className="mod-section bg-[#141211] py-20 md:py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mod-reveal text-center mb-14">
                        <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-gold block mb-4">
                            In jedem Modul enthalten
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-white italic">
                            Der Rahmen für<br className="hidden md:block" />
                            <span className="font-light text-brand-champagne">Ihre sichere Entwicklung.</span>
                        </h2>
                    </div>

                    <div className="mod-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
                        {included.map((item) => (
                            <div
                                key={item.label}
                                className="bg-[#141211] p-6 md:p-8 text-center group hover:bg-white/2 transition-colors duration-300"
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

            {/* ─── Bundle Offer ─── */}
            <section className="mod-section relative py-20 md:py-28 px-6 md:px-12 bg-[#141211] border-t border-white/5">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/3 rounded-full blur-[200px]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="mod-reveal border border-brand-gold/30 p-10 md:p-16 text-center">
                        <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-gold block mb-4">
                            Komplettpaket — 20% sparen
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.1] mb-4">
                            Das vollständige<br />
                            <span className="italic font-light text-brand-champagne">Artist Training</span>
                        </h2>
                        <p className="text-white/50 font-light max-w-xl mx-auto mb-8 leading-relaxed">
                            Alle 5 Module als zusammenhängendes Ausbildungsprogramm. 
                            Strukturierter Lernpfad, persönliche Betreuung und 
                            bevorzugte Terminvergabe.
                        </p>

                        <div className="flex items-center justify-center gap-4 mb-10">
                            <span className="text-white/30 line-through font-serif text-2xl italic">
                                {totalPrice.toLocaleString("de-DE")}€
                            </span>
                            <span className="font-serif text-5xl md:text-6xl text-brand-gold italic leading-none">
                                {bundlePrice.toLocaleString("de-DE")}€
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
                            {[
                                "Alle 5 Module",
                                "Bevorzugte Termine",
                                "1:1 Mentoring inklusive",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-white/50 font-semibold"
                                >
                                    <CheckCircle2 size={12} className="text-brand-gold" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <a
                            href="mailto:info@beautyakademy.de?subject=Artist%20Training%20Komplettpaket"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-gold text-[#1c1a19] uppercase tracking-[0.2em] text-xs font-bold hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500"
                        >
                            Komplettpaket anfragen
                            <ArrowRight size={14} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── Final CTA ─── */}
            <section className="py-24 md:py-32 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-gold block mb-6">
                        Noch Fragen?
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.1] mb-6">
                        Lassen Sie sich<br />
                        <span className="italic font-light text-brand-champagne">persönlich beraten.</span>
                    </h2>
                    <p className="text-white/50 font-light text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                        Jeder Ausbildungsweg ist individuell. Wir helfen Ihnen, 
                        die richtigen Module für Ihre Ziele auszuwählen.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:info@beautyakademy.de?subject=Modul%20Beratung"
                            className="group px-10 py-5 bg-brand-gold text-[#1c1a19] uppercase tracking-[0.2em] text-xs font-bold hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 flex items-center gap-3"
                        >
                            Kostenlose Beratung
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
                            Einzeln oder im Paket
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
                        <Link href="/masterclasses" className="hover:text-brand-champagne transition-colors">
                            Masterclasses
                        </Link>
                        <Link href="/" className="hover:text-brand-champagne transition-colors">
                            Startseite
                        </Link>
                    </div>
                </div>
            </div>

            {/* ─── Booking Modal ─── */}
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
                            Modul buchen
                        </span>
                        <h3 className="font-serif text-2xl text-white mb-6">
                            {modules.find((m) => m.id === activeModule)?.title}
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
