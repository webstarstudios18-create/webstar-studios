import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from 'next/dynamic';

export const metadata = {
    title: "WebStar Studios | Business Systems & Strategy",
    description: "We help established businesses design and operate systems that improve lead quality, clarity, and execution. Principal, Business Systems & Strategy.",
    openGraph: {
        title: "WebStar Studios | Business Systems & Strategy",
        images: ['/logo.png'],
    },
};

import HeroSection from "@/components/HeroSection";
import TickerStrip from "@/components/TickerStrip";

const EngagementCard = dynamic(() => import("@/components/EngagementCard"));
const StatsBar = dynamic(() => import("@/components/StatsBar"));
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
const FadeIn = dynamic(() => import("@/components/FadeIn"));

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            {/* Section 1 & 2 */}
            <HeroSection />
            <TickerStrip />

            {/* Philosophy Block */}
            <FadeIn>
                <section className="bg-background py-32 border-b border-border text-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <span className="block text-accent font-semibold tracking-widest uppercase text-sm mb-6">
                            The Philosophy
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-8 leading-tight">
                            "A business without systems is just a series of emergencies."
                        </h2>
                        <p className="text-xl text-text-muted leading-relaxed mb-10 max-w-3xl mx-auto">
                            Most business owners build a website hoping it will fix their pipeline. It rarely does. A website is a tool;
                            a system is how that tool predictably generates revenue. We build the latter.
                        </p>
                        <Link href="/about" className="inline-flex items-center text-accent hover:text-accent-hover font-bold text-lg transition-colors">
                            Read our full philosophy <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </FadeIn>

            {/* Engagements Grid */}
            <FadeIn>
                <section className="py-24 md:py-32 bg-surface border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="max-w-3xl mb-16 space-y-6">
                            <span className="block text-accent font-semibold tracking-widest uppercase text-sm">
                                Our Engagements
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
                                Three ways we work together.
                            </h2>
                            <p className="text-xl text-text-muted">
                                Every engagement is structured. Every outcome is defined. Nothing starts without alignment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                            <EngagementCard
                                title="Business Diagnostic Audit"
                                subtitle="This is where every engagement begins."
                                body="A structured, paid diagnostic of your website, messaging, lead flow, and positioning. You receive a clear written report with findings, risk analysis, and a prioritized roadmap. No guesswork. No free advice."
                            />
                            <EngagementCard
                                title="Authority Website & Systems Foundation"
                                subtitle="Built to qualify leads, not just attract them."
                                body="A complete redesign of your web presence as a business system — not a brochure. Includes positioning, messaging architecture, lead intake, and CRM integration. Delivered in structured phases with defined scope."
                            />
                            <EngagementCard
                                title="Ongoing Strategic Oversight"
                                subtitle="For businesses that want to stay sharp."
                                body="A monthly advisory partnership that ensures your systems stay aligned with your growth. Reserved for clients who have completed a Foundation engagement."
                            />
                            <EngagementCard
                                title="Not sure where you fit?"
                                subtitle="Start with the diagnostic."
                                body="Every client relationship begins with a Business Diagnostic Audit. It's the only way we work — because clarity before commitment protects both of us."
                                isPrimary={true}
                            />
                        </div>

                    </div>
                </section>
            </FadeIn>

            {/* Differentiators */}
            <FadeIn>
                <section className="py-24 md:py-32 bg-background border-b border-border overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                        {/* Subtle background flair */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

                        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                            <span className="block text-accent font-semibold tracking-widest uppercase text-sm mb-6">
                                Why Work With Us
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
                                We're not for everyone. That's the point.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                {
                                    title: "Diagnosis Before Prescription",
                                    body: "We do not guess. We do not pitch. We get paid to diagnose your business objectively before we ever discuss building anything."
                                },
                                {
                                    title: "Structure That Protects You",
                                    body: "Our process is heavily structured. Scope is locked. Milestones are clear. You will never wonder what happens next."
                                },
                                {
                                    title: "Outcomes, Not Deliverables",
                                    body: "We care about the system's ability to qualify leads and save you time. That requires rigorous focus on outcomes over flashy features."
                                },
                                {
                                    title: "Calm, Predictable Delivery",
                                    body: "No rushing, no pivoting mid-flight, and no uncompensated scope creep. We move with deliberate speed and clear constraints."
                                }
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#0A0A0A] border border-border p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30"
                                >
                                    <div className="w-12 h-12 bg-surface text-accent font-bold text-xl rounded flex items-center justify-center mb-6">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-4 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-text-muted leading-relaxed">
                                        {feature.body}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </FadeIn>

            {/* Stats / Social Proof Strip */}
            <FadeIn delay={0.2}>
                <StatsBar />
            </FadeIn>

            {/* FAQ Section */}
            <FadeIn>
                <FAQAccordion />
            </FadeIn>

            {/* Final CTA Banner */}
            <FadeIn>
                <CTABanner />
            </FadeIn>
        </div>
    );
}
```
