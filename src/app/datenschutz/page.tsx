"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Shield,
    Scale,
    FileText,
    Trash2,
    PauseCircle,
    ArrowRightLeft,
    Ban,
    Eye,
    PenLine,
    Lock,
    BarChart3,
    Target,
    ChevronLeft,
    Clock,
    Mail,
} from "lucide-react";

const rights = [
    {
        article: "Art. 15",
        title: "Auskunftsrecht",
        description:
            "Sie haben das Recht, eine Bestätigung zu erhalten, ob personenbezogene Daten verarbeitet werden, und Zugang zu diesen Daten zu erhalten.",
        icon: Eye,
    },
    {
        article: "Art. 16",
        title: "Recht auf Berichtigung",
        description:
            "Sie können die Berichtigung unrichtiger personenbezogener Daten verlangen.",
        icon: PenLine,
    },
    {
        article: "Art. 17",
        title: "Recht auf Löschung",
        description:
            'Sie können die Löschung Ihrer Daten verlangen ("Recht auf Vergessenwerden").',
        icon: Trash2,
    },
    {
        article: "Art. 18",
        title: "Recht auf Einschränkung",
        description:
            "Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.",
        icon: PauseCircle,
    },
    {
        article: "Art. 20",
        title: "Recht auf Datenübertragbarkeit",
        description:
            "Sie haben das Recht, Ihre Daten in einem strukturierten Format zu erhalten.",
        icon: ArrowRightLeft,
    },
    {
        article: "Art. 21",
        title: "Widerspruchsrecht",
        description:
            "Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen.",
        icon: Ban,
    },
];

const legalBases = [
    {
        title: "Einwilligung",
        description: "Freiwillig, spezifisch und informiert erteilt",
    },
    {
        title: "Vertragserfüllung",
        description: "Notwendig zur Durchführung eines Vertrags",
    },
    {
        title: "Rechtliche Verpflichtung",
        description: "Gesetzlich vorgeschrieben",
    },
    {
        title: "Berechtigtes Interesse",
        description: "Nach Interessenabwägung zulässig",
    },
];

const dataCategories = [
    {
        category: "Kontaktdaten",
        level: "Standard",
        details: "Name, E-Mail, Telefon",
    },
    {
        category: "Buchungsdaten",
        level: "Standard",
        details: "Kurstermine, Zahlungen",
    },
    {
        category: "Gesundheitsdaten",
        level: "Erhöht (Art. 9)",
        details: "Zertifizierungen, Qualifikationen",
    },
];

const retentionData = [
    {
        type: "Kontaktanfragen",
        period: "6 Monate",
        basis: "Berechtigtes Interesse",
    },
    {
        type: "Buchungsdaten",
        period: "10 Jahre",
        basis: "Gesetzliche Aufbewahrungspflicht",
    },
    {
        type: "Zertifizierungsnachweise",
        period: "Unbegrenzt",
        basis: "Vertragserfüllung",
    },
    {
        type: "Analysedaten",
        period: "26 Monate",
        basis: "Einwilligung",
    },
];

export default function DatenschutzPage() {
    const [analyticsConsent, setAnalyticsConsent] = useState(false);
    const [marketingConsent, setMarketingConsent] = useState(false);

    return (
        <div className="min-h-screen bg-brand-beige">
            {/* Back navigation */}
            <div className="bg-[#1c1a19]">
                <div className="max-w-5xl mx-auto px-6 pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-champagne transition-colors font-light"
                    >
                        <ChevronLeft size={16} />
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-[#1c1a19] text-white pt-12 pb-16 md:pt-16 md:pb-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 mb-8">
                        <Shield size={20} className="text-brand-gold" />
                        <span className="uppercase tracking-[0.4em] text-xs font-semibold text-brand-gold">
                            DSGVO Konformität
                        </span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-4">
                        Legal &amp;<br />Compliance
                    </h1>
                    <p className="text-white/60 font-light text-lg max-w-xl mx-auto mt-6">
                        Datenschutz nach höchsten europäischen Standards
                    </p>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent mx-auto mt-12" />
                </div>
            </section>

            {/* Ihre Datenschutzrechte */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="uppercase tracking-[0.3em] text-xs font-semibold text-brand-gold block mb-4">
                            Ihre Datenschutzrechte
                        </span>
                        <p className="text-foreground/60 font-light max-w-2xl mx-auto">
                            Nach der DSGVO haben Sie umfassende Rechte bezüglich
                            Ihrer personenbezogenen Daten. Wir bearbeiten alle
                            Anfragen innerhalb von 30 Tagen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rights.map((right) => (
                            <div
                                key={right.article}
                                className="bg-white p-8 border border-brand-champagne/30 hover:border-brand-gold/40 transition-colors duration-300 group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs font-semibold tracking-wider text-brand-gold uppercase">
                                        {right.article}
                                    </span>
                                    <right.icon
                                        size={20}
                                        className="text-brand-champagne-dark group-hover:text-brand-gold transition-colors duration-300"
                                    />
                                </div>
                                <h3 className="font-serif text-lg mb-3">
                                    {right.title}
                                </h3>
                                <p className="text-foreground/60 text-sm font-light leading-relaxed">
                                    {right.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rechtsgrundlagen */}
            <section className="bg-[#1c1a19] text-white py-16 md:py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="uppercase tracking-[0.3em] text-xs font-semibold text-brand-gold block mb-4">
                            Rechtsgrundlagen (Art. 6)
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {legalBases.map((basis) => (
                            <div
                                key={basis.title}
                                className="border border-white/10 p-6 hover:border-brand-gold/30 transition-colors duration-300"
                            >
                                <Scale
                                    size={18}
                                    className="text-brand-gold mb-4"
                                />
                                <h4 className="font-serif text-base mb-2">
                                    {basis.title}
                                </h4>
                                <p className="text-white/50 text-sm font-light leading-relaxed">
                                    {basis.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Datenkategorien */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="uppercase tracking-[0.3em] text-xs font-semibold text-brand-gold block mb-4">
                            Datenkategorien
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {dataCategories.map((cat) => (
                            <div
                                key={cat.category}
                                className="bg-white p-8 border border-brand-champagne/30"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-serif text-lg">
                                        {cat.category}
                                    </h4>
                                    <span
                                        className={`text-[10px] uppercase tracking-wider px-3 py-1 font-semibold ${
                                            cat.level.includes("Erhöht")
                                                ? "bg-brand-gold/10 text-brand-gold border border-brand-gold/30"
                                                : "bg-brand-champagne/20 text-brand-champagne-dark border border-brand-champagne/30"
                                        }`}
                                    >
                                        {cat.level}
                                    </span>
                                </div>
                                <p className="text-foreground/60 text-sm font-light">
                                    {cat.details}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Einwilligungsmanagement */}
            <section className="bg-white py-16 md:py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="uppercase tracking-[0.3em] text-xs font-semibold text-brand-gold block mb-4">
                            Einwilligungsmanagement
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Necessary */}
                        <div className="border border-brand-champagne/30 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock
                                    size={18}
                                    className="text-brand-gold"
                                />
                                <h4 className="font-serif text-base">
                                    Notwendige Cookies
                                </h4>
                            </div>
                            <p className="text-foreground/60 text-sm font-light leading-relaxed mb-4">
                                Erforderlich für den Betrieb der Website.
                                Können nicht deaktiviert werden.
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-5 bg-brand-gold rounded-full relative">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5" />
                                </div>
                                <span className="text-xs text-foreground/40">
                                    Immer aktiv
                                </span>
                            </div>
                        </div>

                        {/* Analytics */}
                        <div className="border border-brand-champagne/30 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <BarChart3
                                    size={18}
                                    className="text-brand-champagne-dark"
                                />
                                <h4 className="font-serif text-base">
                                    Analytik
                                </h4>
                            </div>
                            <p className="text-foreground/60 text-sm font-light leading-relaxed mb-4">
                                Helfen uns zu verstehen, wie Besucher unsere
                                Website nutzen.
                            </p>
                            <button
                                onClick={() =>
                                    setAnalyticsConsent(!analyticsConsent)
                                }
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <div
                                    className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${
                                        analyticsConsent
                                            ? "bg-brand-gold"
                                            : "bg-gray-300"
                                    }`}
                                >
                                    <div
                                        className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${
                                            analyticsConsent
                                                ? "right-0.5"
                                                : "left-0.5"
                                        }`}
                                    />
                                </div>
                                <span className="text-xs text-foreground/40">
                                    {analyticsConsent
                                        ? "Aktiviert"
                                        : "Deaktiviert"}
                                </span>
                            </button>
                        </div>

                        {/* Marketing */}
                        <div className="border border-brand-champagne/30 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Target
                                    size={18}
                                    className="text-brand-champagne-dark"
                                />
                                <h4 className="font-serif text-base">
                                    Marketing
                                </h4>
                            </div>
                            <p className="text-foreground/60 text-sm font-light leading-relaxed mb-4">
                                Personalisierte Werbung basierend auf Ihren
                                Interessen.
                            </p>
                            <button
                                onClick={() =>
                                    setMarketingConsent(!marketingConsent)
                                }
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <div
                                    className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${
                                        marketingConsent
                                            ? "bg-brand-gold"
                                            : "bg-gray-300"
                                    }`}
                                >
                                    <div
                                        className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${
                                            marketingConsent
                                                ? "right-0.5"
                                                : "left-0.5"
                                        }`}
                                    />
                                </div>
                                <span className="text-xs text-foreground/40">
                                    {marketingConsent
                                        ? "Aktiviert"
                                        : "Deaktiviert"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Datenspeicherung & Aufbewahrung */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="uppercase tracking-[0.3em] text-xs font-semibold text-brand-gold block mb-4">
                            Datenspeicherung &amp; Aufbewahrung
                        </span>
                    </div>

                    {/* Desktop table */}
                    <div className="hidden md:block bg-white border border-brand-champagne/30 overflow-hidden">
                        <div className="grid grid-cols-3 bg-[#1c1a19] text-white">
                            <div className="p-4 text-xs uppercase tracking-wider font-semibold">
                                Datentyp
                            </div>
                            <div className="p-4 text-xs uppercase tracking-wider font-semibold">
                                Aufbewahrungsfrist
                            </div>
                            <div className="p-4 text-xs uppercase tracking-wider font-semibold">
                                Grundlage
                            </div>
                        </div>
                        {retentionData.map((row, i) => (
                            <div
                                key={row.type}
                                className={`grid grid-cols-3 ${
                                    i % 2 === 0
                                        ? "bg-white"
                                        : "bg-brand-beige/50"
                                } ${
                                    i < retentionData.length - 1
                                        ? "border-b border-brand-champagne/20"
                                        : ""
                                }`}
                            >
                                <div className="p-4 text-sm font-light">
                                    {row.type}
                                </div>
                                <div className="p-4 text-sm font-light flex items-center gap-2">
                                    <Clock
                                        size={14}
                                        className="text-brand-champagne-dark"
                                    />
                                    {row.period}
                                </div>
                                <div className="p-4 text-sm font-light text-foreground/60">
                                    {row.basis}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile cards */}
                    <div className="md:hidden space-y-4">
                        {retentionData.map((row) => (
                            <div
                                key={row.type}
                                className="bg-white border border-brand-champagne/30 p-5"
                            >
                                <h4 className="font-serif text-base mb-3">
                                    {row.type}
                                </h4>
                                <div className="flex items-center gap-2 text-sm font-light mb-2">
                                    <Clock
                                        size={14}
                                        className="text-brand-champagne-dark shrink-0"
                                    />
                                    {row.period}
                                </div>
                                <p className="text-sm font-light text-foreground/60">
                                    {row.basis}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Datenschutzanfrage stellen */}
            <section className="bg-[#1c1a19] text-white py-16 md:py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <FileText
                        size={28}
                        className="text-brand-gold mx-auto mb-6"
                    />
                    <h2 className="font-serif text-3xl md:text-4xl mb-4">
                        Datenschutzanfrage stellen
                    </h2>
                    <p className="text-white/60 font-light max-w-xl mx-auto mb-10">
                        Für Auskunfts-, Löschungs- oder andere DSGVO-Anfragen
                        kontaktieren Sie unseren Datenschutzbeauftragten.
                    </p>

                    <a
                        href="mailto:datenschutz@beautyakademy.com"
                        className="inline-flex items-center gap-3 px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-[#1c1a19] transition-all duration-300 text-sm uppercase tracking-wider font-semibold"
                    >
                        <Mail size={16} />
                        DSAR Anfrage
                    </a>

                    <div className="mt-10 space-y-2 text-sm text-white/40 font-light">
                        <p>
                            Datenschutzbeauftragter:{" "}
                            <span className="text-brand-champagne">
                                datenschutz@beautyakademy.com
                            </span>
                        </p>
                        <p>
                            Antwortzeit: Innerhalb von 30 Tagen (max. 60 Tage
                            bei komplexen Anfragen)
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="bg-[#1c1a19] border-t border-white/10 py-8 px-6">
                <div className="max-w-5xl mx-auto text-center text-xs text-gray-500 tracking-wider font-light">
                    Letzte Aktualisierung: Februar 2026 · Alle Rechte
                    vorbehalten · DSGVO-konform
                </div>
            </div>
        </div>
    );
}
