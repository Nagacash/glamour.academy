"use client";

import Link from "next/link";
import {
    ChevronLeft,
    Mail,
    Phone,
    MapPin,
    Clock,
    ArrowRight,
    Instagram,
    Facebook,
} from "lucide-react";

export default function KontaktPage() {
    return (
        <div className="min-h-screen bg-[#1c1a19]">
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
                    <div className="mb-6 inline-flex items-center gap-3">
                        <div className="h-px w-16 bg-brand-gold" />
                        <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-brand-gold">
                            Kontakt
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8">
                        Sprechen Sie<br />
                        <span className="italic font-light text-brand-champagne">mit uns.</span>
                    </h1>

                    <p className="text-white/50 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
                        Wir freuen uns auf Ihre Nachricht — ob Beratung, Terminanfrage
                        oder allgemeine Fragen zu unseren Kursen und Treatments.
                    </p>
                </div>
            </section>

            {/* ─── Contact Grid ─── */}
            <section className="relative px-6 md:px-12 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <div className="border border-white/10 p-8 md:p-10">
                            <h2 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-8">
                                Kontaktdaten
                            </h2>

                            <div className="space-y-6">
                                <a
                                    href="mailto:info@glamour-academy.com"
                                    className="flex items-start gap-4 group"
                                >
                                    <Mail size={18} className="text-brand-gold mt-0.5" />
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-1">
                                            E-Mail
                                        </span>
                                        <span className="text-white/80 font-light group-hover:text-brand-gold transition-colors">
                                            info@glamour-academy.com
                                        </span>
                                    </div>
                                </a>

                                <a
                                    href="tel:+4917661639830"
                                    className="flex items-start gap-4 group"
                                >
                                    <Phone size={18} className="text-brand-gold mt-0.5" />
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-1">
                                            Telefon
                                        </span>
                                        <span className="text-white/80 font-light group-hover:text-brand-gold transition-colors">
                                            +49 0176 61639830
                                        </span>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4">
                                    <MapPin size={18} className="text-brand-gold mt-0.5" />
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-1">
                                            Adresse
                                        </span>
                                        <span className="text-white/80 font-light">
                                            Glamour Akademie<br />
                                            Deutschland
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock size={18} className="text-brand-gold mt-0.5" />
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-1">
                                            Erreichbarkeit
                                        </span>
                                        <span className="text-white/80 font-light">
                                            Mo – Fr: 09:00 – 18:00 Uhr<br />
                                            Sa: nach Vereinbarung
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-4">
                                    Social Media
                                </span>
                                <div className="flex gap-3">
                                    <a
                                        href="#"
                                        aria-label="Instagram"
                                        className="p-3 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-white/50 transition-colors duration-300"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        aria-label="Facebook"
                                        className="p-3 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-white/50 transition-colors duration-300"
                                    >
                                        <Facebook size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="border border-white/10 p-8 md:p-10">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-8">
                            Nachricht senden
                        </h2>

                        <form
                            action={`mailto:info@glamour-academy.com`}
                            method="POST"
                            encType="text/plain"
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                                        Vorname
                                    </label>
                                    <input
                                        type="text"
                                        name="vorname"
                                        required
                                        className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white/80 font-light focus:border-brand-gold focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                                        Nachname
                                    </label>
                                    <input
                                        type="text"
                                        name="nachname"
                                        required
                                        className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white/80 font-light focus:border-brand-gold focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white/80 font-light focus:border-brand-gold focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                                    Betreff
                                </label>
                                <select
                                    name="betreff"
                                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white/80 font-light focus:border-brand-gold focus:outline-none transition-colors"
                                >
                                    <option value="Allgemeine Anfrage" className="bg-[#1c1a19]">Allgemeine Anfrage</option>
                                    <option value="Masterclass Anfrage" className="bg-[#1c1a19]">Masterclass Anfrage</option>
                                    <option value="Artist Training" className="bg-[#1c1a19]">Artist Training</option>
                                    <option value="Terminbuchung" className="bg-[#1c1a19]">Terminbuchung</option>
                                    <option value="Sonstiges" className="bg-[#1c1a19]">Sonstiges</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                                    Nachricht
                                </label>
                                <textarea
                                    name="nachricht"
                                    rows={5}
                                    required
                                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white/80 font-light focus:border-brand-gold focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full group relative overflow-hidden border border-brand-gold bg-transparent text-brand-gold py-4 uppercase tracking-[0.2em] text-xs font-bold transition-colors duration-500 cursor-pointer flex items-center justify-center gap-3"
                            >
                                <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="relative z-10 group-hover:text-[#1c1a19] transition-colors duration-500 flex items-center gap-3">
                                    Nachricht senden
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </form>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
