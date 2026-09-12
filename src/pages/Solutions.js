"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import { ArrowUpRight, Shield, Factory, Cpu, Wrench, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
    {
        id: "defense",
        title: "Defense & Tactical Mobility",
        category: "Mobility & Chassis Systems",
        badge: "Featured",
        desc: "Autonomous tactical platforms, heavy armored vehicle chassis, and ruggedized power transmission systems engineered to exceed MIL-STD specs.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80",
        stats: ["MIL-STD Compliant", "Autonomous-Ready", "All-Terrain Capability"],
        icon: Shield,
    },
    {
        id: "automation",
        title: "Industrial Automation & Robotics",
        category: "Robotics & Control Cells",
        badge: "Popular",
        desc: "Next-generation robotic cells, custom PLC programming, and ultra-high-speed automated assembly lines designed for maximum throughput.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=80",
        stats: ["99.9% Uptime", "Industry 4.0 IoT", "Sub-Millimeter Precision"],
        icon: Factory,
    },
    {
        id: "embedded",
        title: "Embedded Systems & Edge AI",
        category: "Hardware & Firmware R&D",
        badge: "New",
        desc: "Custom multi-layer PCB design, real-time operating system (RTOS) firmware, and low-latency edge computing hardware built for mission-critical tasks.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80",
        stats: ["Real-Time RTOS", "Ultra-Low Power", "Edge Intelligence"],
        icon: Cpu,
    },
    {
        id: "engineering",
        title: "Product R&D & CAE Simulation",
        category: "Design & Structural FEA",
        badge: "Core",
        desc: "Finite Element Analysis (FEA) structural simulation, Computational Fluid Dynamics (CFD), thermal optimization, and rapid functional prototyping.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop&q=80",
        stats: ["FEA & CFD Testing", "CAD Optimization", "Rapid Prototyping"],
        icon: Wrench,
    },
    {
        id: "healthcare",
        title: "Healthcare & Bio-Medical Automation",
        category: "Precision Actuation Systems",
        badge: "Certified",
        desc: "High-precision surgical actuators, automated laboratory diagnostics, and ISO-13485 compliant medical equipment built for high reliability.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80",
        stats: ["ISO 13485 Standard", "Micro-Actuation", "Sterile Design"],
        icon: HeartPulse,
    },
];

export default function Solutions() {
    return (
        <main className="bg-white overflow-hidden">

            {/* ================= HERO SECTION ================= */}

            <section className="relative h-screen min-h-[640px] max-h-[900px] w-full overflow-hidden bg-black">

                {/* BACKGROUND IMAGE WITH VIGNETTE */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&auto=format&fit=crop&q=80')",
                    }}
                >
                    {/* DARK GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />
                    <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />
                </div>

                {/* NAVBAR */}
                <div className="relative z-50">
                    <Navbar />
                </div>

                {/* HERO CONTENT CONTAINER */}
                <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[1100px] pt-12"
                    >

                        {/* HERO HEADING MATCHING USER MOCKUP EXACTLY */}
                        <h1 className="text-[clamp(38px,5.5vw,72px)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
                            Engineering Solutions That{" "}
                            <span className="font-light italic text-white/95">Turn</span>
                            <br />
                            <span className="font-light italic text-white/95">Ideas</span>{" "}
                            <span className="font-medium text-white">Into Reality</span>
                        </h1>

                        {/* DISCUSS YOUR PROJECT CTA BUTTON MATCHING MOCKUP */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-9 flex justify-center"
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3.5 rounded-full border border-white/30 bg-white/10 py-2.5 pl-6 pr-2.5 text-sm font-medium text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20 hover:-translate-y-0.5"
                            >
                                <span>Discuss your Project</span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0274F5] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                                    <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>

                {/* BOTTOM SHADOW FADE */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-30 pointer-events-none" />

            </section>


            {/* ================= SOLUTIONS SHOWCASE GRID ================= */}

            <section className="relative bg-white py-24 md:py-32 px-6 md:px-10">

                <div className="mx-auto max-w-[1280px]">

                    {/* SECTION HEADER */}
                    <div className="mb-16 flex flex-col items-start md:flex-row md:items-end md:justify-between gap-6 border-b border-gray-100 pb-10">
                        <div>
                            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0274F5]">
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>Capabilities & Expertise</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[#111111]">
                                End-to-End Engineering Solutions
                            </h2>
                        </div>
                        <p className="max-w-[480px] text-sm md:text-base text-[#6B7075] leading-relaxed">
                            From conceptual R&D to physical manufacturing and automation, we engineer scalable systems tailored for high performance.
                        </p>
                    </div>

                    {/* SOLUTIONS CARDS LIST */}
                    <div className="flex flex-col gap-12 md:gap-16">
                        {solutions.map((item, index) => {
                            const IconComponent = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-gray-100 bg-[#FAF9F5] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#B9D8FB] hover:shadow-[0_20px_50px_rgba(2,116,245,0.06)]`}
                                >
                                    {/* IMAGE COLUMN */}
                                    <div className={`lg:col-span-6 overflow-hidden rounded-2xl ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                                        <div className="relative h-[280px] sm:h-[360px] w-full overflow-hidden rounded-2xl bg-gray-900">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                            <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-gray-900 shadow-sm border border-white/50">
                                                {item.badge}
                                            </span>
                                        </div>
                                    </div>

                                    {/* TEXT COLUMN */}
                                    <div className={`lg:col-span-6 flex flex-col justify-center gap-5 ${isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"}`}>
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0274F5]/10 text-[#0274F5]">
                                                <IconComponent className="h-5 w-5" />
                                            </span>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-[#0274F5]">
                                                {item.category}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-medium tracking-[-0.03em] text-[#111111] leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm sm:text-base leading-relaxed text-[#55595E]">
                                            {item.desc}
                                        </p>

                                        {/* STAT BADGES */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {item.stats.map((stat, i) => (
                                                <span key={i} className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200/80 shadow-2xs">
                                                    ✓ {stat}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-4">
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0274F5] transition-all hover:gap-3"
                                            >
                                                <span>Request technical consultation</span>
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}
            <FinalCTA />

        </main>
    );
}
