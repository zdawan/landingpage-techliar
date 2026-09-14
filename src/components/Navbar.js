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
    Menu,
    X,
} from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileWorkExpanded, setIsMobileWorkExpanded] = useState(false);
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

    const [scrolled, setScrolled] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsMenuOpen(false);
        }, 150);
    };

    const handleClick = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsMenuOpen((prev) => !prev);
    };

    // Close dropdown on click outside & track scroll direction anywhere on page
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

        function handleScroll() {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY;

            // Trigger direction change anywhere on page with 3px jitter tolerance
            if (Math.abs(delta) > 3) {
                if (delta > 0 && currentScrollY > 10) {
                    // Scrolling down anywhere -> shrink on desktop
                    setScrolled(true);
                } else if (delta < 0) {
                    // Scrolling up anywhere -> expand back to default state
                    setScrolled(false);
                }
                lastScrollY = currentScrollY;
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.header
                initial={false}
                animate={{
                    top: scrolled ? 14 : 20,
                    maxWidth: scrolled ? "812px" : "1160px",
                }}
                transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="fixed left-1/2 z-50 -translate-x-1/2 w-[calc(100%-32px)] sm:w-[calc(100%-48px)] md:w-full"
            >
                <motion.div
                    animate={{
                        height: scrolled ? 54 : 64,
                        paddingLeft: scrolled ? 16 : 20,
                        paddingRight: scrolled ? 8 : 12,
                    }}
                    transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center justify-between rounded-full border border-white/60 bg-white/60 ring-1 ring-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-150 transition duration-300 hover:bg-white/75 hover:border-white/90"
                >

                    {/* LOGO */}
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2.5 sm:gap-3">
                        <span className="flex h-8 w-8 sm:h-9 sm:w-9 -skew-x-[8deg] items-center justify-center gap-[3px] rounded-[10px] bg-[#0274F5] shadow-md shrink-0">
                            <span className="h-[11px] sm:h-[13px] w-[3.5px] sm:w-[4px] rounded-full bg-white" />
                            <span className="h-5 sm:h-6 w-[3.5px] sm:w-[4px] rounded-full bg-white" />
                            <span className="h-[14px] sm:h-[16px] w-[3.5px] sm:w-[4px] rounded-full bg-white" />
                        </span>
                        <span className="flex flex-col leading-none">
                            <strong className="text-sm sm:text-base font-bold tracking-[-0.03em] text-[#111111]">
                                TECHLIAR
                            </strong>
                            <small className="mt-0.5 sm:mt-1 text-[8px] sm:text-[9px] font-semibold tracking-[0.14em] text-[#0274F5]">
                                AUTOMATION
                            </small>
                        </span>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <nav className="ml-auto mr-8 hidden items-center gap-7 md:flex">
                        <Link
                            href="/"
                            className="text-sm font-medium text-[#111111] transition-opacity hover:opacity-80"
                            style={{ color: "#111111" }}
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="text-sm font-medium text-[#111111] transition-opacity hover:opacity-80"
                            style={{ color: "#111111" }}
                        >
                            About
                        </Link>

                        <Link
                            href="/solutions"
                            className="text-sm font-medium text-[#111111] transition-opacity hover:opacity-80"
                            style={{ color: "#111111" }}
                        >
                            Solutions
                        </Link>

                        {/* MEGA DROPDOWN MENU */}
                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                type="button"
                                onClick={handleClick}
                                className="flex items-center gap-1.5 text-sm font-medium text-[#111111] transition-opacity hover:opacity-80 focus:outline-none"
                                style={{ color: "#111111" }}
                                aria-expanded={isMenuOpen}
                            >
                                <span>Work</span>
                                <ChevronDown
                                    className={`h-4 w-4 text-[#111111] transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""
                                        }`}
                                    style={{ color: "#111111" }}
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
                    </nav>

                    {/* RIGHT ACTION BUTTON & MOBILE TOGGLE */}
                    <div className="flex items-center gap-2">
                        {/* DESKTOP CONTACT BUTTON */}
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="group relative hidden md:flex h-[46px] items-center overflow-hidden rounded-full bg-[#0274F5] pl-5 pr-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
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

                        {/* HAMBURGER TOGGLE BUTTON (MOBILE ONLY) */}
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-[#111111] transition hover:bg-black/10 md:hidden ml-1 shrink-0 focus:outline-none"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5 text-[#111111]" />
                            ) : (
                                <Menu className="h-5 w-5 text-[#111111]" />
                            )}
                        </button>
                    </div>

                </motion.div>
            </motion.header>

            {/* ================= MOBILE MENU DRAWER OVERLAY ================= */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 flex flex-col justify-between bg-white/95 px-6 pt-24 pb-8 backdrop-blur-2xl md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 pt-2">

                            {/* NAVIGATION LINKS */}
                            <nav className="flex flex-col gap-3">
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between rounded-2xl p-3 text-3xl font-medium text-[#111111] transition hover:bg-gray-100/70 hover:text-[#0274F5] sm:text-4xl"
                                >
                                    <span>Home</span>
                                    <ArrowRight className="h-6 w-6 text-gray-400" />
                                </Link>

                                <Link
                                    href="/about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between rounded-2xl p-3 text-3xl font-medium text-[#111111] transition hover:bg-gray-100/70 hover:text-[#0274F5] sm:text-4xl"
                                >
                                    <span>About</span>
                                    <ArrowRight className="h-6 w-6 text-gray-400" />
                                </Link>

                                <Link
                                    href="/solutions"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between rounded-2xl p-3 text-3xl font-medium text-[#111111] transition hover:bg-gray-100/70 hover:text-[#0274F5] sm:text-4xl"
                                >
                                    <span>Solutions</span>
                                    <ArrowRight className="h-6 w-6 text-gray-400" />
                                </Link>

                                {/* WORK ACCORDION */}
                                <div className="flex flex-col">
                                    <button
                                        type="button"
                                        onClick={() => setIsMobileWorkExpanded(!isMobileWorkExpanded)}
                                        className="flex items-center justify-between rounded-2xl p-3 text-3xl font-medium text-[#111111] transition hover:bg-gray-100/70 hover:text-[#0274F5] focus:outline-none sm:text-4xl"
                                    >
                                        <span>Work</span>
                                        <ChevronDown
                                            className={`h-7 w-7 text-gray-500 transition-transform duration-300 ${
                                                isMobileWorkExpanded ? "rotate-180 text-[#0274F5]" : ""
                                            }`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {isMobileWorkExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                className="mt-2 flex flex-col gap-2 overflow-hidden pl-3 border-l-2 border-[#0274F5]/30 ml-3"
                                            >
                                                {solutionsList.map((item) => {
                                                    const IconComp = item.icon;
                                                    return (
                                                        <Link
                                                            key={item.id}
                                                            href={item.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="flex items-center gap-3.5 rounded-xl p-3 transition hover:bg-gray-100"
                                                        >
                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0274F5]/10 text-[#0274F5]">
                                                                <IconComp className="h-5 w-5" />
                                                            </div>
                                                            <div className="flex flex-col min-w-0">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-base font-semibold text-gray-900 truncate sm:text-lg">
                                                                        {item.title}
                                                                    </span>
                                                                    {item.badge && (
                                                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0274F5]/10 text-[#0274F5]">
                                                                            {item.badge}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <span className="text-xs text-gray-500 font-normal truncate mt-0.5 sm:text-sm">
                                                                    {item.category}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </nav>
                        </div>

                        {/* MOBILE DRAWER FOOTER CTA */}
                        <div className="mt-8 flex flex-col gap-4 border-t border-gray-200/80 pt-6">
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group relative flex h-13 w-full items-center justify-between overflow-hidden rounded-full bg-[#0274F5] px-6 py-3.5 shadow-lg transition hover:bg-[#0056C6]"
                            >
                                <span className="text-base font-semibold text-white uppercase tracking-wider">
                                    Contact Us
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0274F5]">
                                    <ArrowRight className="h-4.5 w-4.5" />
                                </span>
                            </Link>

                            <div className="flex items-center justify-between text-xs font-medium text-gray-500 px-2">
                                <span>hello@techliar.co</span>
                                <span>MIL-STD & ISO Certified</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}