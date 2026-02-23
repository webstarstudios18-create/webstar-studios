export default function TickerStrip() {
    const statements = [
        "No free discovery calls.",
        "Paid diagnostics only.",
        "We work with established businesses — not startups.",
        "Scope is defined before work begins.",
        "Structure is not bureaucracy. It's respect.",
        "We don't compete on price. We don't need to.",
        "Clarity before commitment. Every time.",
        "Your website should work for you — not just look good."
    ];

    // We duplicate the array to allow for seamless endless scrolling
    const tickerItems = [...statements, ...statements];

    return (
        <div className="w-full bg-surface border-y border-border overflow-hidden py-4 flex items-center">
            <div className="flex whitespace-nowrap animate-marquee">
                {tickerItems.map((statement, idx) => (
                    <div key={idx} className="flex items-center">
                        <span className="text-text-muted font-medium text-sm tracking-wide uppercase px-8">
                            {statement}
                        </span>
                        {/* Diamond Separator */}
                        <span className="w-1.5 h-1.5 bg-accent rotate-45 mx-2" aria-hidden="true"></span>
                    </div>
                ))}
            </div>
        </div>
    );
}
