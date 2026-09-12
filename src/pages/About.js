"use client";

import Navbar from "../components/Navbar";
import { ArrowRight, Diamond } from "lucide-react";
import { motion } from "framer-motion";
import FinalCTA from "@/components/FinalCTA";
import MissionVision from "@/components/MissionVision";
import AboutStats from "@/components/AboutStats";
import RecentProjects from "@/components/RecentProjects";

export default function About() {
    return (
        <main className="bg-white overflow-hidden">

            {/* ================= ABOUT HERO ================= */}

            <section className="relative min-h-[720px] overflow-hidden">

                {/* ================= BACKGROUND ================= */}

                <motion.div
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1.4,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/about.jpg')",
                    }}
                />

                {/* ================= OVERLAY ================= */}

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/35" />


                {/* ================= NAVBAR ================= */}

                <Navbar />


                {/* ================= HERO CONTENT ================= */}

                <div className="relative z-20 flex min-h-[720px] items-center justify-center px-6 pt-20 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex max-w-[950px] flex-col items-center"
                    >

                        {/* EYEBROW */}

                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/85"
                        >
                            <Diamond
                                size={13}
                                strokeWidth={1.5}
                                className="text-white"
                            />

                            <span>
                                About Techliar
                            </span>
                        </motion.div>


                        {/* HEADING */}

                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 0.45,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-[clamp(48px,6vw,78px)] font-medium leading-[1.02] tracking-[-0.05em] text-white"
                        >
                            Engineering Tomorrow&apos;s

                            <br />

                            <span className="font-light italic">
                                Intelligence
                            </span>
                        </motion.h1>


                        {/* CTA */}

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.75,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            href="/contact"
                            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 py-2 pl-6 pr-2 text-sm font-medium text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/20"
                        >

                            <span className="text-white" style={{ color: "#ffffff" }}>
                                Contact Us
                            </span>

                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0274F5] text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
                                <ArrowRight
                                    size={16}
                                    strokeWidth={2}
                                />
                            </span>

                        </motion.a>

                    </motion.div>

                </div>


                {/* ================= BOTTOM INFO ================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                    }}
                    className="absolute bottom-8 left-6 right-6 z-30 flex items-center justify-between md:left-10 md:right-10"
                >

                    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">

                        <span className="h-[1px] w-8 bg-white/70" />

                        <span>
                            About Us
                        </span>

                    </div>


                    <div className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:block">
                        01 / 01
                    </div>

                </motion.div>

            </section>


            {/* ================= WHY US / SHOWCASE ================= */}

            <section className="overflow-hidden bg-white py-24 md:py-32">

                {/* TEXT CONTENT */}
                <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 items-start md:grid-cols-[1fr_1.2fr] md:gap-16">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >

                        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">
                            <span className="text-[#0274F5]">◇</span>
                            <span>Why Us?</span>
                        </div>

                        <h2 className="max-w-[540px] text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">
                            Engineering Ideas.
                            <br />
                            Delivering Impact.
                        </h2>

                    </motion.div>


                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[720px] md:pt-14"
                    >

                        <p className="text-lg leading-[1.65] text-[#45494D] sm:text-xl md:text-[22px]">
                            Welcome to Techliar, your engineering and technology partner,
                            dedicated to transforming complex challenges into practical
                            solutions. With experience across engineering, automation,
                            embedded systems and product development, we combine technical
                            expertise with intelligent thinking to build solutions that
                            perform in the real world.
                        </p>

                    </motion.div>

                </div>


                {/* ================= INFINITE IMAGE SLIDER ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mt-14 w-full overflow-hidden"
                >

                    <div className="techliar-marquee cursor-pointer">

                        {/* FIRST SET */}
                        <div className="techliar-marquee-track">

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>


                            {/* DUPLICATE SET FOR INFINITE LOOP */}

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                        </div>

                    </div>

                </motion.div>

            </section>

            <MissionVision />

            <AboutStats />

            <RecentProjects />

            <FinalCTA />

        </main>
    );
}