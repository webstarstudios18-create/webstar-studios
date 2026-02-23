import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
    title: "Start Here | Apply for a Business Diagnostic | WebStar Studios",
    description: "Apply for a Business Diagnostic Audit to see if WebStar Studios is the right partner for your business.",
    openGraph: {
        title: "Start Here | Apply for a Business Diagnostic | WebStar Studios",
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

export default function StartHerePage() {
    return (
        <div className="flex flex-col w-full bg-background min-h-screen">
            <PageHero
                eyebrow="Application"
                title="Clarity before commitment."
                description="Every engagement begins with this form. We read every submission. We will respond within 48 business hours."
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Left Column: Contact Info */}
                        <div className="lg:col-span-4 space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-text-primary tracking-tight">Direct Access</h2>
                                <p className="text-text-muted leading-relaxed">
                                    We prefer to keep communication centralized and documented. Please use the intake form for project inquiries. For general inquiries:
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <span className="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-1">Email</span>
                                        <a href="mailto:hello@webstarstudios.com" className="text-text-muted hover:text-accent transition-colors">
                                            hello@webstarstudios.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <span className="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-1">Location</span>
                                        <span className="text-text-muted">Remote — Serving clients nationwide.</span>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <span className="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-1">Response Protocol</span>
                                        <span className="text-text-muted">Response time: 48 business hours.<br />M-F, 9AM - 5PM EST.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Embedded Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-surface border border-border rounded-xl p-8 md:p-12 min-h-[600px] flex flex-col items-center justify-center text-center shadow-sm">

                                {/* Embedded Jotform Placeholder */}
                                <div className="w-full bg-[#0A0A0A] border border-border border-dashed rounded-lg p-16 flex flex-col items-center justify-center mb-8">
                                    <span className="text-text-muted font-medium mb-2">Jotform Widget</span>
                                    <span className="text-sm text-text-muted/70">Intake Form Embedded Here — Replace with Jotform Embed Code</span>
                                </div>

                                {/* Post-form confirmation copy */}
                                <div className="text-left w-full mt-4 pt-8 border-t border-border">
                                    <h3 className="text-lg font-bold text-text-primary mb-2">What happens next?</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        If we believe there is alignment based on your application, we will send over an agreement and invoice for the Business Diagnostic Audit to begin our work. If we determine we are not the right fit, we will notify you respectfully and, if possible, refer you to someone who is. We do not do hard sells.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
