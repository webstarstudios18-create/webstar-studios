import { ArrowRight } from "lucide-react";

interface EngagementCardProps {
    title: string;
    subtitle: string;
    body: string;
    isPrimary?: boolean;
}

export default function EngagementCard({ title, subtitle, body, isPrimary = false }: EngagementCardProps) {
    return (
        <div className={`p-8 md:p-10 rounded-xl border flex flex-col h-full transition-all duration-300 ${isPrimary
                ? "bg-accent/5 border-accent shadow-[0_0_30px_rgba(42,127,191,0.15)] ring-1 ring-accent"
                : "bg-surface border-border hover:border-text-muted"
            }`}>
            <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-text-primary tracking-tight">
                    {title}
                </h3>
                <p className={`text-sm font-semibold uppercase tracking-wider ${isPrimary ? "text-accent" : "text-text-body"}`}>
                    {subtitle}
                </p>
                <p className="text-text-muted leading-relaxed pt-4 border-t border-border/50">
                    {body}
                </p>
            </div>

            {isPrimary && (
                <div className="mt-8 pt-6">
                    <a
                        href="/start-here"
                        className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-sm font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
                    >
                        Start Here <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            )}
        </div>
    );
}
