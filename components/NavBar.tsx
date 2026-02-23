"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A0A0A] ${isScrolled ? "border-b border-border shadow-md" : "border-b border-transparent"
                }`}
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" aria-label="Home page">
                            {/* Note: In a real app, ensure public/logo.png exists */}
                            <div className="relative w-48 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="WebStar Studios Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link
                            href="/"
                            className="text-text-body hover:text-text-primary transition-colors text-sm font-medium"
                        >
                            Home
                        </Link>

                        {/* Dropdown Menu block */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center text-text-body hover:text-text-primary transition-colors text-sm font-medium py-2"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                Engagements
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {/* Dropdown panel */}
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-surface border border-border ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <p className="px-4 py-3 text-xs text-text-muted border-b border-border font-semibold italic">
                                            "Every engagement begins with a diagnosis — not a proposal."
                                        </p>
                                        <Link
                                            href="/engagements"
                                            className="block px-4 py-2 text-sm text-text-body hover:bg-background hover:text-text-primary transition-colors"
                                            role="menuitem"
                                        >
                                            Business Diagnostic Audit
                                        </Link>
                                        <Link
                                            href="/engagements"
                                            className="block px-4 py-2 text-sm text-text-body hover:bg-background hover:text-text-primary transition-colors"
                                            role="menuitem"
                                        >
                                            Authority Website & Systems Foundation
                                        </Link>
                                        <Link
                                            href="/engagements"
                                            className="block px-4 py-2 text-sm text-text-body hover:bg-background hover:text-text-primary transition-colors"
                                            role="menuitem"
                                        >
                                            Ongoing Strategic Oversight
                                        </Link>
                                        <Link
                                            href="/engagements"
                                            className="block px-4 py-3 text-sm font-semibold text-accent hover:text-accent-hover bg-background mt-1"
                                            role="menuitem"
                                        >
                                            View All Engagements →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/about"
                            className="text-text-body hover:text-text-primary transition-colors text-sm font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/process"
                            className="text-text-body hover:text-text-primary transition-colors text-sm font-medium"
                        >
                            Process
                        </Link>
                        <Link
                            href="/not-a-fit"
                            className="text-text-body hover:text-text-primary transition-colors text-sm font-medium"
                        >
                            Not a Fit?
                        </Link>
                    </div>

                    {/* Start Here Button (Desktop) */}
                    <div className="hidden md:block flex-shrink-0 pl-4 border-l border-border ml-4">
                        <Link
                            href="/start-here"
                            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background"
                        >
                            Start Here
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text-primary hover:bg-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle Navigation"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Slide-in right) */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-64 bg-surface shadow-xl transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden flex flex-col`}
                id="mobile-menu"
            >
                <div className="px-4 py-6 flex items-center justify-between border-b border-border">
                    <span className="text-text-primary font-bold">Menu</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-text-muted hover:text-text-primary"
                        aria-label="Close menu"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="px-2 pt-4 pb-3 space-y-1 flex-grow overflow-y-auto">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-text-body hover:text-text-primary hover:bg-background"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <div className="space-y-1">
                        <Link
                            href="/engagements"
                            className="block px-3 py-2 rounded-md text-base font-medium text-text-body hover:text-text-primary hover:bg-background"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Engagements
                        </Link>
                        <div className="pl-6 space-y-1 border-l-2 border-border ml-3 mt-1 mb-2">
                            <p className="px-3 py-2 text-xs text-text-muted italic border-b border-background pb-2 mb-1">
                                "Every engagement begins with a diagnosis — not a proposal."
                            </p>
                            <Link
                                href="/engagements"
                                className="block px-3 py-2 text-sm text-text-body hover:text-text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Business Diagnostic Audit
                            </Link>
                            <Link
                                href="/engagements"
                                className="block px-3 py-2 text-sm text-text-body hover:text-text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Authority Website & Systems Foundation
                            </Link>
                            <Link
                                href="/engagements"
                                className="block px-3 py-2 text-sm text-text-body hover:text-text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Ongoing Strategic Oversight
                            </Link>
                        </div>
                    </div>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-text-body hover:text-text-primary hover:bg-background"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/process"
                        className="block px-3 py-2 rounded-md text-base font-medium text-text-body hover:text-text-primary hover:bg-background"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Process
                    </Link>
                    <Link
                        href="/not-a-fit"
                        className="block px-3 py-2 rounded-md text-base font-medium text-text-body hover:text-text-primary hover:bg-background"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Not a Fit?
                    </Link>
                </div>
                <div className="p-4 border-t border-border">
                    <Link
                        href="/start-here"
                        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Start Here
                    </Link>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </nav>
    );
}
