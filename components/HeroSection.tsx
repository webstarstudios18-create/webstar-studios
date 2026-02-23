import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#0A0A0A] overflow-hidden">
            {/* Animated Mesh Background (CSS implementation) */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-[#0A0A0A] to-[#0A0A0A]"
                    aria-hidden="true"
                />
                <div
                    className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000"
                    aria-hidden="true"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column */}
                    <div className="space-y-8">
                        <span className="block text-accent font-semibold tracking-widest uppercase text-sm">
                            Principal, Business Systems & Strategy
                        </span>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight leading-tight">
                            Your business doesn't have a website problem.<br />
                            It has a <span className="text-accent underline decoration-accent/30 underline-offset-4">systems</span> problem.
                        </h1>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                            <Link
                                href="/start-here"
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                            >
                                Start Your Diagnostic <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>

                            <Link
                                href="/process"
                                className="inline-flex items-center justify-center px-8 py-4 border border-border text-base font-medium rounded-md text-text-body hover:text-text-primary hover:border-text-muted hover:bg-surface transition-colors"
                            >
                                See How It Works
                            </Link>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12 lg:pl-10 lg:border-l border-border/50">
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
                            Most established businesses aren't struggling because they need more traffic. They're struggling because their website, messaging, and lead flow aren't working together. We fix that — systematically, not cosmetically.
                        </p>

                        <div className="pt-8 border-t border-border/50">
                            <p className="text-sm font-medium text-text-body uppercase tracking-wider flex items-center">
                                <span className="w-8 h-px bg-accent mr-4"></span>
                                Trusted by established businesses who were done guessing.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
