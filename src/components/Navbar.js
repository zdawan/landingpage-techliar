"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    ArrowRight,
    HeartPulse,
    Shield,
    Factory,
    Cpu,
    Wrench,
    Sparkles,
} from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const solutionsList = [
        {
            id: "defense",
            title: "Defense & Tactical Mobility",
            category: "Mobility & Chassis",
            badge: "Featured",
            desc: "Autonomous tactical platforms, heavy armored vehicle chassis & ruggedized drive systems.",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
            href: "/solutions/defense",
            icon: Shield,
            stats: "MIL-STD • Autonomous Ready",
        },
        {
            id: "automation",
            title: "Industrial Automation",
            category: "Robotics & Control",
            badge: "Popular",
            desc: "Next-gen robotic cells, custom PLC programming, and high-speed automated assembly lines.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
            href: "/solutions/automation",
            icon: Factory,
            stats: "99.9% Uptime • Industry 4.0",
        },
        {
            id: "embedded",
            title: "Embedded Systems & IoT",
            category: "Hardware & Firmware",
            badge: "New",
            desc: "Custom PCB design, real-time OS firmware development & low-latency edge computing.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
            href: "/solutions/embedded",
            icon: Cpu,
            stats: "Real-time RTOS • Edge AI",
        },
        {
            id: "engineering",
            title: "Product R&D & CAE",
            category: "Design & Analysis",
            badge: "Core",
            desc: "FEA structural simulation, CAD modeling, thermal optimization & rapid prototyping.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
            href: "/solutions/engineering",
            icon: Wrench,
            stats: "FEA & CFD • Rapid Prototyping",
        },
        {
            id: "healthcare",
            title: "Healthcare Robotics",
            category: "Bio-Automation",
            badge: "Certified",
            desc: "Precision surgical actuators, diagnostic automation & ISO-13485 compliant devices.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
            href: "/solutions/healthcare",
            icon: HeartPulse,
            stats: "ISO 13485 • Precision Motors",
        },
    ];

    const [activeSolution, setActiveSolution] = useState(solutionsList[0]);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="absolute left-1/2 top-6 z-50 w-[calc(100%-48px)] max-w-[1160px] -translate-x-1/2">
            <div className="flex h-[66px] items-center rounded-full border border-white/40 bg-white/10 px-3 pl-6 shadow-lg backdrop-blur-xl transition duration-300 hover:bg-white/15 hover:border-white/60">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3">
                    <span className="flex h-9 w-9 -skew-x-[8deg] items-center justify-center gap-[3px] rounded-[10px] bg-[#0274F5] shadow-md">
                        <span className="h-[13px] w-[4px] rounded-full bg-white" />
                        <span className="h-6 w-[4px] rounded-full bg-white" />
                        <span className="h-[16px] w-[4px] rounded-full bg-white" />
                    </span>
                    <span className="flex flex-col leading-none">
                        <strong className="text-base font-bold tracking-[-0.03em] text-white">
                            TECHLIAR
                        </strong>
                        <small className="mt-1 text-[9px] font-semibold tracking-[0.14em] text-[#6FA9F5]">
                            AUTOMATION
                        </small>
                    </span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="ml-auto mr-8 hidden items-center gap-7 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-white transition-opacity hover:opacity-80"
                        style={{ color: "#ffffff" }}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm font-medium text-white transition-opacity hover:opacity-80"
                        style={{ color: "#ffffff" }}
                    >
                        About
                    </Link>

                    {/* MEGA DROPDOWN MENU */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="flex items-center gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-80 focus:outline-none"
                            style={{ color: "#ffffff" }}
                            aria-expanded={isMenuOpen}
                        >
                            <span>Solutions</span>
                            <ChevronDown
                                className={`h-4 w-4 text-white transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                                style={{ color: "#ffffff" }}
                            />
                        </button>

                        {/* MEGA MENU CONTAINER */}
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute -left-64 top-full mt-4 w-[740px] lg:w-[820px] rounded-3xl border border-gray-200/80 bg-white p-4 shadow-[0_25px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
                                >
                                    <div className="grid grid-cols-12 gap-4">

                                        {/* LEFT COLUMN: LIST OF TABS */}
                                        <div className="col-span-6 flex flex-col justify-between p-2">
                                            <div>
                                                <div className="mb-3 px-3 py-1 flex items-center justify-between">
                                                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                                        <Sparkles className="h-3 w-3 text-[#0274F5]" />
                                                        Engineering Expertise
                                                    </span>
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    {solutionsList.map((item) => {
                                                        const isActive = activeSolution.id === item.id;
                                                        return (
                                                            <Link
                                                                key={item.id}
                                                                href={item.href}
                                                                onMouseEnter={() => setActiveSolution(item)}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className={`group relative flex items-center rounded-2xl p-3 px-3.5 transition-all duration-200 ${isActive
                                                                    ? "bg-[#0274F5]/10"
                                                                    : "hover:bg-gray-100/80"
                                                                    }`}
                                                            >
                                                                <div className="flex flex-col flex-1 min-w-0">
                                                                    <div className="flex items-center justify-between">
                                                                        <span className={`text-sm font-semibold truncate leading-tight transition-colors ${isActive
                                                                            ? "text-[#0274F5]"
                                                                            : "text-gray-900 group-hover:text-[#0274F5]"
                                                                            }`}>
                                                                            {item.title}
                                                                        </span>
                                                                        {item.badge && (
                                                                            <span
                                                                                className={`ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive
                                                                                    ? "bg-[#0274F5] text-white"
                                                                                    : "bg-gray-100 text-gray-600"
                                                                                    }`}
                                                                            >
                                                                                {item.badge}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <span className="text-xs text-gray-500 truncate mt-0.5 font-normal">
                                                                        {item.category}
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            <div className="mt-4 border-t border-gray-100 pt-3 px-3 flex items-center justify-between">
                                                <span className="text-xs text-gray-500">Need a custom solution?</span>
                                                <Link
                                                    href="/contact"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="text-xs font-semibold text-[#0274F5] hover:underline flex items-center gap-1"
                                                >
                                                    Talk to Engineer <ArrowRight className="h-3 w-3" />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* RIGHT COLUMN: DYNAMIC PREVIEW CARD */}
                                        <div className="col-span-6">
                                            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0B0F17] p-5 text-white shadow-inner flex flex-col justify-between border border-gray-800">

                                                {/* DYNAMIC CONTENT FADE */}
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={activeSolution.id}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="flex flex-col h-full justify-between gap-4"
                                                    >
                                                        {/* IMAGE BOX */}
                                                        <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-900 border border-white/10">
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img
                                                                src={activeSolution.image}
                                                                alt={activeSolution.title}
                                                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-black/20" />
                                                            <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/20">
                                                                {activeSolution.category}
                                                            </span>
                                                        </div>

                                                        {/* TEXT CONTENT */}
                                                        <div className="flex flex-col gap-1.5">
                                                            <span className="text-[11px] font-semibold tracking-wider text-[#0274F5] uppercase">
                                                                {activeSolution.stats}
                                                            </span>
                                                            <h4 className="text-lg font-bold leading-tight text-white">
                                                                {activeSolution.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-300 leading-relaxed font-normal">
                                                                {activeSolution.desc}
                                                            </p>
                                                        </div>

                                                        {/* ACTION BUTTON */}
                                                        <Link
                                                            href={activeSolution.href}
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="group/btn mt-2 inline-flex items-center justify-between w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white hover:text-black"
                                                        >
                                                            <span>Learn more</span>
                                                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                                                        </Link>
                                                    </motion.div>
                                                </AnimatePresence>

                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href="/work"
                        className="text-sm font-medium text-white transition-opacity hover:opacity-80"
                        style={{ color: "#ffffff" }}
                    >
                        Work
                    </Link>
                </nav>

                {/* CONTACT BUTTON */}
                <Link
                    href="/contact"
                    className="group relative ml-auto flex h-[46px] items-center overflow-hidden rounded-full bg-[#0274F5] pl-5 pr-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] md:ml-0"
                >
                    {/* LIQUID WHITE EXPANDING FILL */}
                    <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
                        <span className="absolute left-1/2 top-1/2 z-0 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-[250px] group-hover:w-[250px]" />
                    </span>

                    {/* DUAL TEXT SLIDER */}
                    <span className="relative z-10 h-[18px] overflow-hidden text-xs font-semibold uppercase tracking-wider">
                        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[18px]">
                            <span className="flex h-[18px] items-center text-white transition-colors duration-300 group-hover:text-[#0274F5] whitespace-nowrap">
                                Contact Us
                            </span>
                            <span className="flex h-[18px] items-center text-[#0274F5] whitespace-nowrap">
                                Let&apos;s Talk
                            </span>
                        </span>
                    </span>

                    {/* ARROW CIRCLE */}
                    <span className="relative z-10 ml-3.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[#0274F5] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:bg-[#0274F5] group-hover:text-white">
                        <ArrowRight
                            size={15}
                            strokeWidth={2.2}
                            className="absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-6 group-hover:rotate-[-45deg] group-hover:opacity-0"
                        />
                        <ArrowRight
                            size={15}
                            strokeWidth={2.2}
                            className="absolute -translate-x-6 rotate-[-45deg] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100"
                        />
                    </span>
                </Link>

            </div>
        </header>
    );
}