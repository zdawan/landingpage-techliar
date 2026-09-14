"use client";

import { ArrowRight, Diamond } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
    return (
        <section
            className="relative min-h-[900px] overflow-hidden bg-cover bg-center bg-no-repeat py-16 md:py-24"
            style={{
                backgroundImage:
                    "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8df7d201-cd8f-49f5-bcf3-bf850449956a_1600w.webp')",
            }}
        >
            {/* BACKGROUND OVERLAY */}

            <div className="absolute inset-0 bg-black/10" />

            {/* CTA CONTENT */}

            <div className="relative z-10 flex min-h-[580px] flex-col items-center justify-center px-6 text-center">

                {/* EYEBROW */}

                <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    <Diamond
                        size={14}
                        strokeWidth={1.5}
                        className="text-white"
                    />

                    <span>Start Your Project</span>
                </div>

                {/* HEADING */}

                <h2 className="max-w-[800px] text-[48px] font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-[60px] md:text-[72px]">
                    Let&apos;s Engineer
                    <br />

                    <span className="font-light italic">
                        What&apos;s Next.
                    </span>
                </h2>

                {/* DESCRIPTION */}

                <p className="mt-6 max-w-[540px] text-base font-normal leading-[1.6] text-white/90 sm:text-lg">
                    Have an engineering challenge in mind?
                    Talk to our team and let&apos;s build a practical,
                    reliable solution together.
                </p>

                {/* CONTACT BUTTON */}

                <a
                    href="/contact"
                    className="group relative mt-10 inline-flex h-[66px] items-center rounded-full bg-[#0274F5] pl-8 pr-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.16)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                >
                    {/* LIQUID WHITE EXPANDING FILL */}

                    <span className="absolute inset-0 z-0 overflow-hidden rounded-full">

                        <span className="absolute left-1/2 top-1/2 z-0 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-[350px] group-hover:w-[350px]" />

                    </span>

                    {/* DUAL TEXT SLIDER */}

                    <span className="relative z-10 h-[24px] overflow-hidden text-[15px] font-semibold text-white">

                        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[24px]">

                            <span className="flex h-[24px] items-center text-white transition-colors duration-300 group-hover:text-[#0274F5] whitespace-nowrap">
                                Contact us
                            </span>

                            <span className="flex h-[24px] items-center text-[#0274F5] whitespace-nowrap">
                                Start a conversation
                            </span>

                        </span>

                    </span>

                    {/* ARROW CIRCLE */}

                    <span className="relative z-10 ml-7 flex h-[50px] w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[#0274F5] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:bg-[#0274F5] group-hover:text-white">

                        {/* ARROW OUT */}

                        <ArrowRight
                            size={20}
                            strokeWidth={2}
                            className="absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-8 group-hover:rotate-[-45deg] group-hover:opacity-0"
                        />

                        {/* ARROW IN */}

                        <ArrowRight
                            size={20}
                            strokeWidth={2}
                            className="absolute -translate-x-8 rotate-[-45deg] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100"
                        />

                    </span>

                </a>
            </div>

            {/* FOOTER CARD */}

            <footer className="relative z-20 mx-auto mb-0 w-[90%] max-w-none rounded-[24px] bg-white px-8 py-14 shadow-[0_12px_60px_rgba(0,0,0,0.09)] sm:px-12 lg:px-16 lg:py-16">

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1.2fr_0.8fr_0.8fr] lg:gap-12">

                    {/* BRAND */}

                    <div>

                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/logo.png"
                                alt="Techlair Automation"
                                className="h-12 sm:h-16 w-auto object-contain max-w-[180px] sm:max-w-[300px]"
                            />
                        </Link>

                        <p className="mt-5 max-w-[300px] text-base font-normal leading-[1.6] text-[#666B70]">
                            Engineering practical solutions through
                            innovation, automation and technical
                            excellence.
                        </p>

                    </div>

                    {/* EXPLORE */}

                    <div>

                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                            Explore
                        </h3>

                        <div className="flex flex-col gap-3.5">

                            <Link href="/" className="footer-link">
                                Home
                            </Link>

                            <a href="/about" className="footer-link">
                                About
                            </a>

                            <a href="/solutions" className="footer-link">
                                Solutions
                            </a>

                            <a href="/industries" className="footer-link">
                                Industries
                            </a>

                            <a href="/contact" className="footer-link">
                                Contact
                            </a>

                        </div>

                    </div>

                    {/* CAPABILITIES */}

                    <div>

                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                            Capabilities
                        </h3>

                        <div className="grid grid-cols-1 gap-3.5">

                            <a href="/solutions/product-development" className="footer-link">
                                Product Development
                            </a>

                            <a href="/solutions/automation" className="footer-link">
                                Automation Solutions
                            </a>

                            <a href="/solutions/vehicle-engineering" className="footer-link">
                                Vehicle Engineering
                            </a>

                            <a href="/solutions/embedded-iot" className="footer-link">
                                Embedded Systems & IoT
                            </a>

                            <a href="/solutions/mechanical-engineering" className="footer-link">
                                Mechanical Engineering
                            </a>

                            <a href="/solutions/prototyping-testing" className="footer-link">
                                Prototyping & Testing
                            </a>

                        </div>

                    </div>

                    {/* COMPANY */}

                    <div>

                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3.5">

                            <a href="/about" className="footer-link">
                                About Techliar
                            </a>

                            <a href="/process" className="footer-link">
                                Our Process
                            </a>

                            <a href="/projects" className="footer-link">
                                Projects
                            </a>

                            <a href="/contact" className="footer-link">
                                Partner With Us
                            </a>

                        </div>

                    </div>

                    {/* SOCIAL MEDIA */}

                    <div>

                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                            Social Media
                        </h3>

                        <div className="flex flex-row flex-wrap items-center gap-3.5">

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E1E1E1] text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#0274F5] hover:bg-[#0274F5] hover:text-white"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E1E1E1] text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#0274F5] hover:bg-[#0274F5] hover:text-white"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E1E1E1] text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#0274F5] hover:bg-[#0274F5] hover:text-white"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 1.47 1.47c0-.81-.66-1.47-1.47-1.47Z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E1E1E1] text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#0274F5] hover:bg-[#0274F5] hover:text-white"
                            >
                                <svg className="h-4 w-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>

                        </div>

                    </div>

                </div>

                {/* BOTTOM BAR */}

                <div className="mt-14 flex flex-col gap-4 border-t border-[#E5E5E5] pt-7 text-sm font-normal text-[#666B70] sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © 2026 Techliar. All rights reserved.
                    </p>

                    <div className="flex gap-6">

                        <a
                            href="/privacy"
                            className="transition-colors duration-200 hover:text-[#111111]"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms"
                            className="transition-colors duration-200 hover:text-[#111111]"
                        >
                            Terms of Use
                        </a>

                    </div>

                </div>

            </footer>

            <style jsx>{`
                .footer-link {
                    width: fit-content;
                    font-size: 15px;
                    color: #666b70;
                    transition: color 200ms ease, transform 200ms ease;
                }

                .footer-link:hover {
                    color: #0274f5;
                    transform: translateX(3px);
                }
            `}</style>
        </section>
    );
}