import Link from "next/link";
import { ArrowRight, CornerDownRight } from "lucide-react";
import dynamic from 'next/dynamic';

export const metadata = {
    title: "Our Process | WebStar Studios",
    description: "Learn about the heavily structured 5-phase process we use to diagnose, design, and deploy business systems.",
    openGraph: {
        title: "Our Process | WebStar Studios",
        images: ['/logo.png'],
    }
};

const CTABanner = dynamic(() => import("@/components/CTABanner"));

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

export default function ProcessPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                eyebrow="Our Process"
                title="Predictability is a feature."
                description="We do not make things up as we go. Every engagement follows the same rigorous, tested framework to ensure flawless delivery."
            />

            <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Central connecting line for desktop */}
                <div className="hidden md:block absolute left-1/2 top-40 bottom-40 w-px bg-border/50 -translate-x-1/2" />

                <div className="max-w-5xl mx-auto space-y-16 lg:space-y-32 relative z-10">

                    {[
                        {
                            phase: "01",
                            title: "Intake & Alignment",
                            desc: "It begins with an application. If we accept it, we move into the paid Business Diagnostic Audit. We review your current digital assets, interview your stakeholders, and analyze your competition. We look for gaps in your system and misalignments in your message.",
                            produces: "The Diagnostic Report and a Prioritized Remediation Roadmap."
                        },
                        {
                            phase: "02",
                            title: "Strategy & Planning",
                            desc: "Based on the diagnostic, we design the architecture. Not visuals, but structure. We build the wireframes, draft the copy frameworks, and map the user flow from the first click to the final lead form. Nothing moves to design until this is approved.",
                            produces: "Approved Wireframes, Messaging Architecture, and Project Blueprint."
                        },
                        {
                            phase: "03",
                            title: "Execution",
                            desc: "We build the system. This includes custom UX/UI design, development, and integration of your CRM or marketing tech stack. You receive weekly structured updates. We do not do 'live' design reviews; we present completed, thoughtful work for asynchronous feedback.",
                            produces: "A fully developed, staging-environment system ready for review."
                        },
                        {
                            phase: "04",
                            title: "Review & Launch",
                            desc: "We rigorously test across devices, conduct QA on all forms and workflows, and ensure technical SEO is pristine. After your final approval, we execute our 40-point go-live protocol. There is zero downtime during the transition.",
                            produces: "The Live System and a post-launch technical audit."
                        },
                        {
                            phase: "05",
                            title: "Closeout & Transition",
                            desc: "We do not leave you alone with a new system. We provide recorded training on how to manage your new asset. For clients continuing with us, this is where we transition into Ongoing Strategic Oversight.",
                            produces: "Client Training Library and 30-day Post-Launch Warranty."
                        }
                    ].map((step, idx) => {
                        const isEven = idx % 2 === 1;
                        return (
                            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                {/* Visual Block side */}
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-background border-4 border-border flex items-center justify-center relative shadow-[0_0_50px_rgba(42,127,191,0.05)]">
                                        <span className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-accent to-surface">
                                            {step.phase}
                                        </span>
                                        {/* Decorative nodes */}
                                        <div className="absolute top-0 right-1/4 w-3 h-3 rounded-full bg-accent animate-pulse" />
                                        <div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-text-muted" />
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className={`w-full md:w-1/2 bg-background p-8 md:p-10 rounded-2xl border border-border ${isEven ? 'text-right' : 'text-left'}`}>
                                    <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-2 block">
                                        Phase {step.phase}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-muted leading-relaxed mb-6">
                                        {step.desc}
                                    </p>
                                    <div className={`pt-6 border-t border-border/50 flex flex-col ${isEven ? 'items-end' : 'items-start'}`}>
                                        <span className="text-xs font-bold uppercase tracking-wider text-text-body mb-2 flex items-center">
                                            {!isEven && <CornerDownRight className="w-4 h-4 mr-2 text-accent" />}
                                            What this produces:
                                            {isEven && <CornerDownRight className="w-4 h-4 ml-2 text-accent scale-x-[-1]" />}
                                        </span>
                                        <p className="text-sm text-text-primary font-medium italic">
                                            {step.produces}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </section>

            {/* Communication Standards */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                            Our Communication Standards
                        </h2>
                        <p className="mt-4 text-text-muted">How we protect momentum and quality.</p>
                    </div>

                    <div className="bg-surface border border-border rounded-xl p-8 md:p-12">
                        <ul className="space-y-6">
                            {[
                                "We communicate asynchronously via a dedicated client portal. This leaves an auditable trail of decisions.",
                                "We do not use Slack or Teams for client communication. It encourages reactive, poorly-thought-out decisions.",
                                "Weekly status updates are provided every Friday by EOD.",
                                "Calls are strictly scheduled and only used when asynchronous communication is insufficient.",
                                "Response times are guaranteed within 48 business hours."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="w-2 h-2 mt-2 bg-accent rounded-full mr-4 flex-shrink-0" />
                                    <span className="text-lg text-text-body leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
