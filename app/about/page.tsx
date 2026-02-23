import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from 'next/dynamic';

export const metadata = {
    title: "About WebStar Studios | Business Systems & Strategy",
    description: "We help established businesses design and operate systems that improve lead quality, clarity, and execution. Principal, Business Systems & Strategy.",
    openGraph: {
        title: "About WebStar Studios | Business Systems & Strategy",
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

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-background">
            <PageHero
                eyebrow="Who We Are"
                title="We build systems for the serious."
                description="Not an agency. Not freelancers. We are a strategic partner for businesses that have outgrown their current infrastructure."
            />

            {/* Story Block */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        <div className="relative aspect-[4/5] bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] to-transparent opacity-80 z-10" />
                            <div className="relative z-20 text-text-muted flex flex-col items-center">
                                <span className="block w-16 h-16 border-2 border-text-muted/30 rounded-full mb-4 flex items-center justify-center">
                                    <span className="block w-3 h-3 bg-text-muted/50 rounded-full"></span>
                                </span>
                                <span className="text-sm font-medium tracking-widest uppercase">Principal Portrait</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
                                Built from the ground up.<br /> On purpose.
                            </h2>

                            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                                <p>
                                    WebStar Studios was not founded to be everything to everyone. It was founded because the digital agency model is largely broken. Most agencies are incentivized to sell you deliverables you don't need, build them as quickly as possible, and disappear before you realize the pipeline isn't actually converting.
                                </p>
                                <p>
                                    We saw established businesses—companies with great operating models, strong leadership, and revenue—struggling simply because their digital front door was built by someone who didn't understand business strategy.
                                </p>
                                <p>
                                    So we built a different kind of firm. One that refuses to write a line of code or draft a wireframe until the business problem is fully diagnosed. We do not pitch. We do not guess. We diagnose, we prescribe, and we build.
                                </p>
                                <p className="font-medium text-text-body border-l-2 border-accent pl-4">
                                    We are intentionally small, highly structured, and unapologetically exacting. Because that is what is required to do this work correctly.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="py-24 bg-surface border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                            Four principles that govern every engagement.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Diagnosis before prescription",
                                body: "Doctors do not prescribe surgery without tests. We do not build websites without diagnostics. If you aren't willing to pay for a diagnosis, we aren't willing to guess at a solution."
                            },
                            {
                                title: "Structure is a service",
                                body: "Chaos is expensive. We operate on rigid frameworks and defined phases because predictability is the highest form of professional respect."
                            },
                            {
                                title: "We select clients as carefully as they select us",
                                body: "We only work with established, revenue-generating businesses that view strategy as an investment, not an expense to be minimized."
                            },
                            {
                                title: "Outcomes over deliverables",
                                body: "A beautiful website that doesn't capture leads is a liability. We measure success by the system's ability to drive your business forward, not by how many pages we built."
                            }
                        ].map((principle, idx) => (
                            <div key={idx} className="bg-background border border-border p-10 rounded-xl hover:border-text-muted/50 transition-colors">
                                <h3 className="text-xl font-bold text-text-primary mb-4 pb-4 border-b border-border/50">
                                    {principle.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed">
                                    {principle.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        <div className="space-y-6 relative">
                            <span className="text-6xl text-accent opacity-20 absolute -top-6 -left-4 font-serif leading-none">"</span>
                            <p className="text-xl text-text-body leading-relaxed relaitve z-10 italic">
                                Working with WebStar wasn't like hiring an agency. It felt like bringing on a fractional COO who happened to know how to build digital systems. The diagnostic phase alone uncovered three major holes in our lead flow we hadn't seen.
                            </p>
                            <div>
                                <p className="font-bold text-text-primary">Sarah Jenkins</p>
                                <p className="text-sm text-text-muted">CEO, Jenkins Logistics Partners</p>
                            </div>
                        </div>

                        <div className="space-y-6 relative">
                            <span className="text-6xl text-accent opacity-20 absolute -top-6 -left-4 font-serif leading-none">"</span>
                            <p className="text-xl text-text-body leading-relaxed relaitve z-10 italic">
                                They told us 'no' more times in the first two weeks than our last agency did in two years. I respect that. They guarded the scope and the strategy, and the final product is the first time our website has actually felt like our business.
                            </p>
                            <div>
                                <p className="font-bold text-text-primary">Marcus Thorne</p>
                                <p className="text-sm text-text-muted">Managing Partner, Thorne Advisory Group</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="bg-surface py-24 border-t border-border text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <p className="text-2xl font-bold text-text-primary mb-8 tracking-tight">
                        If this is how you want to work, let's find out if we're a fit.
                    </p>
                    <Link
                        href="/start-here"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                    >
                        Start Here <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
