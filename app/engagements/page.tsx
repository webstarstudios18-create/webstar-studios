import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dynamic from 'next/dynamic';

export const metadata = {
    title: "Our Engagements | WebStar Studios",
    description: "Explore our three structured service offerings: Diagnostic Audit, Foundation, and Ongoing Strategic Oversight.",
    openGraph: {
        title: "Our Engagements | WebStar Studios",
        images: ['/logo.png'],
    }
};

const CTABanner = dynamic(() => import("@/components/CTABanner"));

// Reusable Hero component for interior pages can be extracted, but we'll build it inline per page to maintain the exact requested pattern quickly.
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

export default function EngagementsPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                eyebrow="Our Engagements"
                title="Three ways we work together."
                description="Every engagement is structured. Every outcome is defined. Nothing starts without alignment."
            />

            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                    {/* Card 1: Business Diagnostic Audit */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative aspect-[4/3] bg-background border border-border rounded-xl overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent z-10" />
                            <div className="relative z-20 text-text-muted flex flex-col items-center">
                                <span className="text-sm font-semibold tracking-wider uppercase bg-surface text-accent px-4 py-2 rounded-full border border-border shadow-sm">
                                    Phase 01
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-8 lg:pl-8">
                            <div>
                                <h3 className="text-3xl font-bold text-text-primary mb-4">Business Diagnostic Audit</h3>
                                <p className="text-lg text-text-muted leading-relaxed">
                                    A structured, paid diagnostic of your website, messaging, lead flow, and positioning. You receive a clear written report with findings, risk analysis, and a prioritized roadmap. No guesswork. No free advice.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Complete website teardown (UX, messaging, conversion paths).",
                                    "Competitive positioning review against 3 direct competitors.",
                                    "System mapping for your current lead intake flow.",
                                    "A prioritized, phased roadmap for remediation."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-text-body">
                                        <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div>
                                    <span className="block text-sm text-text-muted uppercase tracking-wider mb-1">Investment</span>
                                    <span className="text-2xl font-bold text-text-primary">$4,000 <span className="text-sm font-normal text-text-muted">flat fee</span></span>
                                </div>
                                <Link
                                    href="/start-here"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                                >
                                    Apply for a Diagnostic <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Authority Website & Systems Foundation */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative aspect-[4/3] bg-background border border-border rounded-xl overflow-hidden flex items-center justify-center group lg:order-last">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent z-10" />
                            <div className="relative z-20 text-text-muted flex flex-col items-center">
                                <span className="text-sm font-semibold tracking-wider uppercase bg-surface text-accent px-4 py-2 rounded-full border border-border shadow-sm">
                                    Phase 02
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-8 lg:pr-8">
                            <div>
                                <h3 className="text-3xl font-bold text-text-primary mb-4">Authority Website & Systems Foundation</h3>
                                <p className="text-lg text-text-muted leading-relaxed">
                                    A complete redesign of your web presence as a business system — not a brochure. Includes positioning, messaging architecture, lead intake, and CRM integration. Delivered in structured phases with defined scope.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Custom web design aligned with your authority positioning.",
                                    "Messaging architecture and copywriting for core pages.",
                                    "Lead intake form construction and basic CRM piping.",
                                    "Technical SEO foundation and site speed optimization."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-text-body">
                                        <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div>
                                    <span className="block text-sm text-text-muted uppercase tracking-wider mb-1">Investment</span>
                                    <span className="text-2xl font-bold text-text-primary">Starting at $15,000 <span className="text-sm font-normal text-text-muted">based on scope</span></span>
                                </div>
                                <Link
                                    href="/start-here"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                                >
                                    Start with the Diagnostic <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Ongoing Strategic Oversight */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative aspect-[4/3] bg-background border border-border rounded-xl overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent z-10" />
                            <div className="relative z-20 text-text-muted flex flex-col items-center">
                                <span className="text-sm font-semibold tracking-wider uppercase bg-surface text-accent px-4 py-2 rounded-full border border-border shadow-sm">
                                    Phase 03
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-8 lg:pl-8">
                            <div>
                                <h3 className="text-3xl font-bold text-text-primary mb-4">Ongoing Strategic Oversight</h3>
                                <p className="text-lg text-text-muted leading-relaxed">
                                    A monthly advisory partnership that ensures your systems stay aligned with your growth. Reserved for clients who have completed a Foundation engagement. We manage the system so you don't have to.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Monthly strategic consulting on lead acquisition and messaging.",
                                    "Iterative improvements to high-value conversion pages.",
                                    "Technical maintenance, security, and uptime monitoring.",
                                    "Priority access for new initiatives and scaling efforts."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-text-body">
                                        <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div>
                                    <span className="block text-sm text-text-muted uppercase tracking-wider mb-1">Investment</span>
                                    <span className="text-2xl font-bold text-text-primary">Starting at $2,500/month <span className="text-sm font-normal text-text-muted">retainer</span></span>
                                </div>
                                <Link
                                    href="/engagements"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm font-bold rounded-md text-text-primary bg-background hover:bg-surface transition-colors shadow-sm"
                                >
                                    Learn About the Foundation First <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom CTA Block */}
            <section className="bg-background py-20 border-t border-border text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <p className="text-xl text-text-muted mb-8">
                        Not sure which engagement is right? <br className="hidden sm:block" />
                        <strong className="text-text-primary">Start with the Diagnostic. It will tell us both.</strong>
                    </p>
                    <Link
                        href="/start-here"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                    >
                        Start Here <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
