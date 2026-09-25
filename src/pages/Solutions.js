"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { ArrowRight, Diamond, Search, CheckCircle2, Cpu, Wrench, Shield, Factory } from "lucide-react";
import Link from "next/link";
import EngineeringProcess from "@/components/EngineeringProcess";
import WhyChoose from "@/components/WhyChoose";
import IndustriesWeWork from "@/components/IndustriesWeWork";
import FinalCTA from "@/components/FinalCTA";
import EngineeringCapabilitiesStack from "@/components/EngineeringCapabilitiesStack";
import Contactdetails from "@/components/Contactdetails";

export default function Solutions() {
    const teams = [
        {
            name: "Stefan Quandt",
            role: "Mechanical & CAE Lead",
            email: "stefan@techliar.co",
            icon: Wrench,
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        },
        {
            name: "John Mars",
            role: "Embedded RTOS & Edge AI",
            email: "john@techliar.co",
            icon: Cpu,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        },
        {
            name: "Lara Devgan",
            role: "Industrial Automation",
            email: "lara@techliar.co",
            icon: Factory,
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
        },
    ];

    return (
        <main className="bg-white overflow-x-clip">

            {/* ================= HERO SECTION ================= */}

            <section className="relative min-h-[720px] overflow-hidden bg-black">

                {/* BACKGROUND IMAGE WITH VIGNETTE */}
                <div
                    className="absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat transition-transform duration-1000 scale-105"
                    style={{
                        backgroundImage: "url('/images/solutions.jpg')",
                    }}
                >
                    {/* DARK GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* NAVBAR */}
                <div className="relative z-50">
                    <Navbar />
                </div>

                {/* HERO CONTENT CONTAINER */}
                <div className="relative z-20 flex min-h-[720px] items-center justify-center px-6 pt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[1100px]"
                    >

                        {/* HERO HEADING MATCHING USER MOCKUP EXACTLY */}
                        <h1 className="text-[clamp(38px,5.5vw,72px)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
                            Engineering Solutions That{" "}
                            <span className="font-light italic text-white/95">Turn</span>
                            <br />
                            <span className="font-light italic text-white/95">Ideas</span>{" "}
                            <span className="font-medium text-white">Into Reality</span>
                        </h1>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <a
                                href="/contact"
                                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 py-2 pl-6 pr-2 text-sm font-regular text-white shadow-lg backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/60"
                            >

                                <span className="text-white">
                                    Discuss your project
                                </span>

                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0274F5] text-white">
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                                </span>

                            </a>
                        </motion.div>

                    </motion.div>
                </div>

                {/* BOTTOM INFO BAR */}
                <div className="absolute bottom-8 left-6 right-6 z-30 flex items-center justify-between md:left-10 md:right-10">
                    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                        <span className="h-[1px] w-8 bg-white/70" />
                        <span>Solutions</span>
                    </div>
                    <div className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:block">
                        01 / 01
                    </div>
                </div>

            </section>


            {/* ================= OVERVIEW SECTION ================= */}

            <section className="relative bg-white py-24 md:py-32 px-6 md:px-12">

                <div className="mx-auto max-w-[1280px]">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* LEFT COLUMN: TEXT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-5 flex flex-col"
                        >
                            {/* EYEBROW */}
                            <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7075]">
                                <Diamond size={14} strokeWidth={1.5} className="text-[#0274F5]" />
                                <span>Overview</span>
                            </div>

                            {/* HEADING */}
                            <h2 className="text-[36px] sm:text-[44px] lg:text-[50px] font-medium leading-[1.08] tracking-[-0.035em] text-[#111111]">
                                Built for Complex Engineering Challenges
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="mt-6 text-base sm:text-lg leading-[1.65] text-[#55595E]">
                                Every industry has unique technical requirements. Our multidisciplinary engineering team combines software, electronics, mechanical design, and manufacturing expertise to deliver scalable, reliable, and production-ready solutions across diverse sectors.
                            </p>

                            {/* FAST HIGHLIGHTS */}
                            <div className="mt-8 flex flex-col gap-3 pt-2">
                                {[
                                    "Multidisciplinary engineering synergy",
                                    "Turnkey design-to-production pipeline",
                                    "ISO & MIL-STD compliant execution",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 text-sm font-medium text-[#111111]">
                                        <CheckCircle2 className="h-4.5 w-4.5 text-[#0274F5] shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>


                        {/* RIGHT COLUMN: VISUAL CARD CONTAINER MATCHING MOCKUP */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            <div className="relative min-h-[480px] sm:min-h-[520px] w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F2F7FE] via-[#EBF3FF] to-[#E2EFFF] p-6 sm:p-10 border border-[#D2E4FC] shadow-[0_20px_50px_rgba(2,116,245,0.06)] flex flex-col justify-center items-center">

                                {/* FLOATING CARD WIDGET matching mockup */}
                                <div className="relative z-10 w-full max-w-[420px] flex flex-col gap-3 transition-transform duration-500 hover:scale-[1.02]">

                                    {/* CARD HEADER: ATTENDEES / TEAM */}
                                    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900">
                                                Active Engineering Team
                                            </h4>
                                            <div className="mt-2 flex items-center gap-2">
                                                <div className="flex -space-x-2">
                                                    {teams.map((t, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={t.avatar}
                                                            alt={t.name}
                                                            className="h-7 w-7 rounded-full object-cover border-2 border-white"
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500 font-medium ml-1">
                                                    Assigned 5 disciplines
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CARD INPUT SEARCH BAR */}
                                    <div className="relative flex items-center rounded-2xl bg-white/90 p-3 px-4 shadow-[0_8px_25px_rgba(0,0,0,0.05)] border border-[#FF6B52]/40 ring-2 ring-[#FF6B52]/10 backdrop-blur-md">
                                        <Search className="h-4 w-4 text-gray-400 mr-2" />
                                        <input
                                            type="text"
                                            readOnly
                                            value="Type engineering discipline..."
                                            className="w-full bg-transparent text-xs text-gray-400 focus:outline-none cursor-default font-normal"
                                        />
                                    </div>

                                    {/* CARD DISCIPLINE LIST */}
                                    <div className="flex flex-col gap-2 rounded-2xl bg-white p-3 sm:p-4 shadow-[0_12px_35px_rgba(0,0,0,0.08)] border border-gray-100/90">
                                        {teams.map((t, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-between rounded-xl p-2.5 transition-colors hover:bg-gray-50/80"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={t.avatar}
                                                        alt={t.name}
                                                        className="h-9 w-9 rounded-full object-cover shadow-sm"
                                                    />
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-semibold text-gray-900 leading-tight">
                                                            {t.name}
                                                        </span>
                                                        <span className="text-[11px] text-gray-500 font-normal">
                                                            {t.role}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[10px] font-semibold text-[#0274F5] bg-[#0274F5]/10 px-2 py-0.5 rounded-full">
                                                    Active
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* DECORATIVE VIBRANT BLUE WAVE AT BOTTOM */}
                                <div className="absolute -bottom-6 left-0 right-0 h-44 overflow-hidden pointer-events-none">
                                    <svg
                                        viewBox="0 0 1200 300"
                                        className="h-full w-full object-cover opacity-90"
                                        preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#0274F5" stopOpacity="0.9" />
                                                <stop offset="50%" stopColor="#0056C6" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#00A3FF" stopOpacity="0.95" />
                                            </linearGradient>
                                            <linearGradient id="waveGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#4DA3FF" stopOpacity="0.7" />
                                                <stop offset="100%" stopColor="#0274F5" stopOpacity="0.9" />
                                            </linearGradient>
                                        </defs>

                                        <path
                                            d="M0,160 C300,280 600,80 1200,220 L1200,300 L0,300 Z"
                                            fill="url(#waveGradient2)"
                                        />
                                        <path
                                            d="M0,190 C400,100 800,260 1200,140 L1200,300 L0,300 Z"
                                            fill="url(#waveGradient1)"
                                        />
                                    </svg>
                                </div>

                            </div>
                        </motion.div>

                    </div>

                </div>

            </section>

            <EngineeringCapabilitiesStack />

            <IndustriesWeWork />

            <EngineeringProcess />

            <WhyChoose />

            <Contactdetails />

            <FinalCTA />

        </main>
    );
}
