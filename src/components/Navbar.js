"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
    ChevronDown,
    ArrowRight,
    HeartPulse,
    Landmark,
    ShoppingBag,
    Factory,
    Laptop,
} from "lucide-react";

export default function Navbar() {
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsIndustriesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const industries = [
        {
            title: "Healthcare & Life Sciences",
            desc: "AI & automated solutions for patient care & operations",
            href: "/industries/healthcare",
            icon: HeartPulse,
        },
        {
            title: "Finance & Banking",
            desc: "Automated compliance, fraud detection & analytics",
            href: "/industries/finance",
            icon: Landmark,
        },
        {
            title: "E-Commerce & Retail",
            desc: "Smart supply chain & customer experience AI",
            href: "/industries/retail",
            icon: ShoppingBag,
        },
        {
            title: "Manufacturing & Logistics",
            desc: "Predictive maintenance & robotics automation",
            href: "/industries/logistics",
            icon: Factory,
        },
        {
            title: "Technology & SaaS",
            desc: "Enterprise cloud architecture & DevOps workflows",
            href: "/industries/technology",
            icon: Laptop,
        },
    ];

    return (
        <header className="absolute left-1/2 top-6 z-50 w-[calc(100%-48px)] max-w-[1160px] -translate-x-1/2">

            <div className="flex h-[66px] items-center rounded-full border border-white/40 bg-white/80 px-3 pl-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">

                {/* LOGO */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                >

                    {/* Logo mark */}
                    <span className="flex h-9 w-9 -skew-x-[8deg] items-center justify-center gap-[3px] rounded-[10px] bg-[#0274F5]">

                        <span className="h-[13px] w-[4px] rounded-full bg-white" />

                        <span className="h-6 w-[4px] rounded-full bg-white" />

                        <span className="h-[16px] w-[4px] rounded-full bg-white" />

                    </span>

                    {/* Logo text */}
                    <span className="flex flex-col leading-none">

                        <strong className="text-base font-bold tracking-[-0.03em] text-[#111111]">
                            TECHLIAR
                        </strong>

                        <small className="mt-1 text-[9px] font-semibold tracking-[0.14em] text-[#0274F5]">
                            AUTOMATION
                        </small>

                    </span>

                </Link>


                {/* DESKTOP NAVIGATION */}
                <nav className="ml-auto mr-8 hidden items-center gap-7 md:flex">

                    <Link
                        href="/"
                        className="text-sm font-medium text-[#252525] transition-colors hover:text-[#0274F5]"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm font-medium text-[#252525] transition-colors hover:text-[#0274F5]"
                    >
                        About
                    </Link>

                    <Link
                        href="/solutions"
                        className="text-sm font-medium text-[#252525] transition-colors hover:text-[#0274F5]"
                    >
                        Solutions
                    </Link>

                    {/* INDUSTRIES DROPDOWN */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setIsIndustriesOpen((prev) => !prev)}
                            className="flex items-center gap-1.5 text-sm font-medium text-[#252525] transition-colors hover:text-[#0274F5] focus:outline-none"
                            aria-expanded={isIndustriesOpen}
                        >
                            <span>Industries</span>
                            <ChevronDown
                                className={`h-4 w-4 text-[#252525] transition-transform duration-200 ${isIndustriesOpen ? "rotate-180 text-[#0274F5]" : ""
                                    }`}
                            />
                        </button>

                        {/* DROPDOWN MENU */}
                        <div
                            className={`absolute left-1/2 top-full mt-4 w-80 -translate-x-1/2 rounded-2xl border border-white/50 bg-white/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-200 ${isIndustriesOpen
                                ? "visible opacity-100 translate-y-0 scale-100"
                                : "invisible opacity-0 -translate-y-2 scale-95 pointer-events-none"
                                }`}
                        >
                            <div className="px-3 py-2 border-b border-gray-100">
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                                    Industries We Serve
                                </p>
                            </div>
                            <div className="mt-1 flex flex-col gap-1">
                                {industries.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            onClick={() => setIsIndustriesOpen(false)}
                                            className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[#0274F5]/5"
                                        >
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[#0274F5] transition-transform group-hover:scale-110 group-hover:bg-[#0274F5]/10">
                                                <IconComponent className="h-4 w-4" />
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-gray-900 group-hover:text-[#0274F5]">
                                                    {item.title}
                                                </span>
                                                <span className="text-xs text-gray-500 leading-snug">
                                                    {item.desc}
                                                </span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/work"
                        className="text-sm font-medium text-[#252525] transition-colors hover:text-[#0274F5]"
                    >
                        Work
                    </Link>

                </nav>


                {/* CONTACT BUTTON */}
                <Link
                    href="/contact"
                    className="ml-auto flex h-[48px] items-center gap-3 rounded-full bg-[#0274F5] pl-5 pr-2 text-sm font-medium text-white transition hover:-translate-y-[1px] hover:bg-[#0069df] md:ml-0"
                >
                    <span className="text-white" >Contact Us</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0274F5]">
                        <ArrowRight className="h-4 w-4" />
                    </span>
                </Link>

            </div>

        </header>
    );
}