import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
    return (
        <section className="bg-surface py-20 md:py-32 border-t border-border relative overflow-hidden">
            {/* Decorative gradient */}
            <div
                className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span className="block text-accent font-semibold tracking-widest uppercase text-sm mb-6">
                    Ready to move forward?
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-8">
                    The first step isn't a call.<br />
                    It's a decision.
                </h2>

                <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                    If the way we work resonates — and if your business is established, revenue-generating, and ready for a system that actually performs — we'd like to hear from you. Fill out the intake form and we'll review it within 48 hours.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                        href="/start-here"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                    >
                        Start Here — Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>

                    <Link
                        href="/process"
                        className="inline-flex items-center justify-center px-8 py-4 border border-border text-base font-medium rounded-md text-text-body hover:text-text-primary hover:border-text-muted hover:bg-background transition-colors"
                    >
                        Learn About Our Process
                    </Link>
                </div>
            </div>
        </section>
    );
}
