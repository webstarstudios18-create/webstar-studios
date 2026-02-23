"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Do you offer free discovery calls?",
        answer: "No. Every engagement begins with a paid Business Diagnostic Audit. This ensures we are dedicating our time to solving your actual problems with structured analysis, not guessing on a sales call."
    },
    {
        question: "Who is this not for?",
        answer: "We are not a fit for startups without revenue, businesses looking for a cheap brochure website, or founders who want to micromanage the design process."
    },
    {
        question: "How long does a website project take?",
        answer: "Our Authority Website & Systems Foundation generally takes 8 to 12 weeks, depending on the complexity of your messaging and the speed of feedback. Timelines are strictly enforced."
    },
    {
        question: "Do you write the copy?",
        answer: "Yes. System design requires messaging alignment. We draft the initial messaging architecture based on our diagnostic, which informs the final copy."
    },
    {
        question: "What happens after the website goes live?",
        answer: "Most clients transition into Ongoing Strategic Oversight, where we analyze performance, run system maintenance, and iterate on lead acquisition strategies monthly."
    },
    {
        question: "How do we get started?",
        answer: "Fill out the intake form on our 'Start Here' page. If we agree we might be a fit, we will send an invoice for the Business Diagnostic Audit to kick off our work."
    }
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#0A0A0A] py-24 border-y border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="block text-accent font-semibold tracking-widest uppercase text-sm mb-4">
                        Common Questions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
                        Before you apply, here's<br /> what most people want to know.
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-border rounded-lg bg-surface overflow-hidden transition-colors hover:border-text-muted/50"
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-lg font-medium text-text-primary">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`flex-shrink-0 h-5 w-5 text-accent transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                />
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                className={`px-6 pb-6 text-text-muted leading-relaxed transition-all duration-300 ease-in-out ${openIndex === index ? "block opacity-100" : "hidden opacity-0"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
