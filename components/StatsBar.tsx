"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
    end: number;
    suffix?: string;
    duration?: number;
    label: string;
}

function Counter({ end, suffix = "", duration = 2000, label }: CounterProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const increment = end / (duration / 16); // 60fps approx
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, isVisible]);

    return (
        <div ref={countRef} className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 p-6">
            <div className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight">
                {count}{suffix}
            </div>
            <div className="text-sm font-medium text-text-muted max-w-[200px] leading-relaxed">
                {label}
            </div>
        </div>
    );
}

export default function StatsBar() {
    return (
        <section className="bg-surface border-y border-border py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    <Counter
                        end={100}
                        suffix="%"
                        label="Of engagements start with a paid diagnostic — not a guess."
                    />
                    <Counter
                        end={0}
                        label="Free discovery calls. Access is earned through the intake process."
                    />
                    <Counter
                        end={5}
                        label="Phase delivery framework — the same structured process, every engagement."
                    />
                    <Counter
                        end={1}
                        label="Point of contact. One Principal. Full accountability."
                    />
                </div>
            </div>
        </section>
    );
}
