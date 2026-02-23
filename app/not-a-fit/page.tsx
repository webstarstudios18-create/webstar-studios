import Link from "next/link";
import { ArrowRight, XCircle, CheckCircle } from "lucide-react";

export const metadata = {
    title: "Not a Fit? | WebStar Studios",
    description: "Clarity before commitment. Find out who we work best with—and who we strictly do not.",
    openGraph: {
        title: "Not a Fit? | WebStar Studios",
        images: ['/logo.png'],
    }
};

function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
    return (
        <section className="bg-[#0A0A0A] border-b border-border pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="block text-accent font-semibold tracking-widest uppercase text-sm mb-6">
                    {eyebrow}
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-[#8A9BB0] leading-relaxed max-w-3xl mx-auto">
                    {description}
                </p>
            </div>
        </section>
    );
}

export default function NotAFitPage() {
    return (
        <div className="flex flex-col w-full bg-background">
            <PageHero
                eyebrow="Alignment Check"
                title="We're not for everyone."
                description="We protect our process fiercely because it is the only way we can guarantee our outcomes. If we aren't a fit, it's better we both know now."
            />

            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Not a Fit Column */}
                        <div className="bg-surface border border-border rounded-xl p-8 md:p-10 lg:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 pb-4 border-b border-border/50">
                                We're Probably Not a Fit If...
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "You are a startup without established revenue or clear product-market fit.",
                                    "You believe a website is just a digital brochure or a necessary expense.",
                                    "You want a fast, cheap turnaround and are shopping purely on price.",
                                    "You expect to communicate via Slack, text message, or unscheduled calls.",
                                    "You refuse to pay for a diagnostic phase because you 'already know what you need.'",
                                    "You want to micromanage the design process or treat us like a pair of hands.",
                                    "You are not willing or able to commit time to review strategic milestones."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-text-muted">
                                        <XCircle className="w-6 h-6 mr-4 text-red-500/70 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* A Strong Fit Column */}
                        <div className="bg-surface border border-accent/30 shadow-[0_0_30px_rgba(42,127,191,0.05)] rounded-xl p-8 md:p-10 lg:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 pb-4 border-b border-border/50">
                                We're Probably a Strong Fit If...
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "You run an established, revenue-generating business with proven operations.",
                                    "You view your digital presence as a business system that should qualify leads.",
                                    "You value strategy, structure, and predictability over speed and flash.",
                                    "You respect boundaries and prefer asynchronous, heavily documented communication.",
                                    "You understand that diagnosis must precede prescription.",
                                    "You want a strategic partner to manage the system, not an order-taker.",
                                    "You prioritize outcomes (qualified pipeline) over vanity deliverables (page count)."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-text-primary">
                                        <CheckCircle className="w-6 h-6 mr-4 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="bg-[#0A0A0A] py-24 border-t border-border text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <span className="block text-accent font-semibold tracking-widest uppercase text-sm mb-6">
                        Still Here?
                    </span>
                    <p className="text-2xl md:text-3xl font-bold text-text-primary mb-10 tracking-tight leading-relaxed">
                        If you've read this page and recognized yourself more in the second list than the first — we'd like to hear from you.
                    </p>
                    <Link
                        href="/start-here"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                    >
                        Start Here — Apply for a Diagnostic <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
