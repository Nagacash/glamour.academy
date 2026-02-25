import Link from "next/link";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1c1a19] text-white pt-20 pb-10 border-t border-brand-champagne/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-1">
                    <h2 className="font-serif text-2xl tracking-widest mb-6">BeautyAkademy</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans font-light">
                        Wir verbinden klinische Präzision mit ästhetischer Empathie. Die Glamour Akademie für anspruchsvolle Treatments & Masterclasses.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Instagram" rel="noopener noreferrer" className="p-2 border border-gray-600 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
                            <Instagram size={18} />
                        </a>
                        <a href="#" aria-label="Facebook" rel="noopener noreferrer" className="p-2 border border-gray-600 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="uppercase tracking-[0.2em] text-xs font-semibold mb-6 text-brand-gold">Treatments</h3>
                    <ul className="space-y-4 text-sm text-gray-400 font-light">
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">Anti-Aging</Link></li>
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">Lippenauffüllung</Link></li>
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">Fadenlifting</Link></li>
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">Lymphdrainage</Link></li>
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">Injektionslipolyse</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="uppercase tracking-[0.2em] text-xs font-semibold mb-6 text-brand-gold">Akademie</h3>
                    <ul className="space-y-4 text-sm text-gray-400 font-light">
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">Glamour Akademie</Link></li>
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">Masterclasses</Link></li>
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">Artist Module</Link></li>
                        <li><Link href="#" className="hover:text-brand-champagne transition-colors">1:1 Mentoring</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="uppercase tracking-[0.2em] text-xs font-semibold mb-6 text-brand-gold">Kontakt</h3>
                    <ul className="space-y-4 text-sm text-gray-400 font-light">
                        <li className="flex items-center space-x-3">
                            <Phone size={16} className="text-brand-champagne-dark" />
                            <span>+49 (0) 123 456 789</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={16} className="text-brand-champagne-dark" />
                            <span>info@beautyakademy.de</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-wider">
                <p suppressHydrationWarning>&copy; {new Date().getFullYear()} BeautyAkademy. Alle Rechte vorbehalten.</p>
                <nav aria-label="Rechtliches" className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-brand-champagne transition-colors">Impressum</Link>
                    <Link href="/datenschutz" className="hover:text-brand-champagne transition-colors">Datenschutz</Link>
                    <Link href="#" className="hover:text-brand-champagne transition-colors">AGB</Link>
                </nav>
            </div>
        </footer>
    );
}
