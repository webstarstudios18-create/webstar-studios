import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0A0A0A] border-t border-border pt-16 pb-8" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" aria-label="Home page">
                            <div className="text-2xl font-bold text-text-primary tracking-tight">
                                WebStar<span className="text-accent">Studios</span>
                            </div>
                        </Link>
                        <p className="text-text-muted text-sm max-w-xs">
                            Business Systems & Strategy for Established Firms.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-text-muted hover:text-accent transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-text-muted hover:text-accent transition-colors"
                                aria-label="X (formerly Twitter)"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-6">
                            Navigation
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-base text-text-muted hover:text-text-primary transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/engagements"
                                    className="text-base text-text-muted hover:text-text-primary transition-colors"
                                >
                                    Engagements
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/process"
                                    className="text-base text-text-muted hover:text-text-primary transition-colors"
                                >
                                    Process
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/not-a-fit"
                                    className="text-base text-text-muted hover:text-text-primary transition-colors"
                                >
                                    Not a Fit?
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/insights"
                                    className="text-base text-text-muted hover:text-text-primary transition-colors"
                                >
                                    Insights
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/start-here"
                                    className="text-base text-text-primary font-medium hover:text-accent transition-colors"
                                >
                                    Start Here →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-6">
                            Contact
                        </h3>
                        <div className="space-y-4 text-base text-text-muted">
                            <p>
                                <a
                                    href="mailto:hello@webstarstudios.com"
                                    className="hover:text-text-primary transition-colors"
                                >
                                    hello@webstarstudios.com
                                </a>
                            </p>
                            <p>Remote — Serving clients nationwide.</p>
                            <p className="flex items-center text-sm">
                                <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2"></span>
                                Response time: 48 business hours.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-text-muted">
                        &copy; {currentYear} WebStar Studios. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-text-muted">
                        <Link href="/privacy" className="hover:text-text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-text-primary transition-colors">
                            Terms of Engagement
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
