"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";
import CoreExpertise from "../components/CoreExpertise";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChoose from "@/components/WhyChoose";
import EngineeringProcess from "../components/EngineeringProcess";
import FinalCTA from "../components/FinalCTA";
import { motion, AnimatePresence } from "framer-motion";
import IndustriesWeWork from "../components/IndustriesWeWork";

export default function Home() {
    const [loaderFinished, setLoaderFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaderFinished(true);
        }, 1600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="bg-white overflow-hidden">

            {/* ================= KORA FULLSCREEN PRELOADER OVERLAY ================= */}
            <AnimatePresence>
                {!loaderFinished && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-[#FAF9F5] pointer-events-none"
                    />
                )}
            </AnimatePresence>


            {/* ================= HERO ================= */}

            <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#FAF9F5]">

                {/* KORA CENTER-TO-FULL EXPANDING HERO MEDIA */}
                <motion.div
                    initial={{
                        width: "320px",
                        height: "190px",
                        borderRadius: "28px",
                        top: "50%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "0px",
                        top: "0%",
                        left: "0%",
                        x: "0%",
                        y: "0%",
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        opacity: { duration: 0.4, delay: 0.1 },
                        scale: { duration: 0.4, delay: 0.1 },
                        width: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                        height: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                        borderRadius: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                        top: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                        left: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                        x: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                        y: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className="absolute z-10 overflow-hidden bg-cover bg-center shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
                    style={{
                        backgroundImage: "url('/images/hero.png')",
                    }}
                >
                    {/* Dark Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="absolute inset-0 bg-black/35"
                    />

                    {/* Bottom Fade */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="absolute bottom-0 left-0 right-0 z-10 h-44 bg-gradient-to-b from-transparent via-white/60 to-white"
                    />
                </motion.div>


                {/* Navbar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-50"
                >
                    <Navbar />
                </motion.div>


                {/* ================= HERO CONTENT ================= */}

                <div className="relative z-20 flex h-full items-center justify-center px-6 pt-16 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[1000px]"
                    >

                        {/* Eyebrow */}
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-5 text-xs font-semibold tracking-[0.25em] text-white/85"
                        >
                            ENGINEERING • AUTOMATION • INNOVATION
                        </motion.p>


                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(45px,5.5vw,76px)] font-medium leading-[1.02] tracking-[-0.04em] text-white"
                        >

                            Engineering Innovation
                            <br />

                            for{" "}

                            <span className="font-light italic text-white">
                                Real-World
                            </span>{" "}

                            Challenges

                        </motion.h1>

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


                {/* ================= SCROLL INDICATOR ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2"
                >
                    <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#111111]">
                        <motion.span
                            animate={{ width: ["18px", "30px", "18px"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="h-[2px] rounded-full bg-[#111111]"
                        />

                        <span className="uppercase text-[#111111]">
                            SCROLL TO EXPLORE
                        </span>
                    </div>
                </motion.div>

            </section>

            {/* ================= INTRO SECTION ================= */}

            <section className="relative overflow-hidden bg-white">

                {/* Intro content */}
                <div className="mx-auto flex min-h-[420px] items-center justify-center px-6 py-28 md:min-h-[520px] md:py-36">

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[1040px] text-center text-[32px] font-medium leading-[1.15] tracking-[-0.035em] text-[#111111] sm:text-[42px] md:text-[54px]"
                    >

                        Building the future

                        {/* IMAGE PILL 1 */}
                        <motion.span
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.3 }}
                            className="mx-2 inline-flex h-[38px] w-[90px] translate-y-[4px] overflow-hidden rounded-full bg-gradient-to-r from-[#0274F5] via-[#6FA9F5] to-[#E8F2FF] align-middle sm:h-[48px] sm:w-[110px] md:h-[58px] md:w-[130px]"
                        >

                            <img
                                src="/images/hero.png"
                                alt=""
                                className="h-full w-full object-cover"
                            />

                        </motion.span>

                        through

                        <br className="hidden sm:inline" />

                        {" "}engineering excellence, innovation, and

                        <br className="hidden sm:inline" />

                        {" "}intelligent

                        {/* IMAGE PILL 2 */}
                        <motion.span
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.3 }}
                            className="mx-2 inline-flex h-[38px] w-[90px] translate-y-[4px] overflow-hidden rounded-full bg-gradient-to-r from-[#0274F5] via-[#6FA9F5] to-[#E8F2FF] align-middle sm:h-[48px] sm:w-[110px] md:h-[58px] md:w-[130px]"
                        >

                            <img
                                src="/images/hero.png"
                                alt=""
                                className="h-full w-full object-cover"
                            />

                        </motion.span>

                        design.

                    </motion.p>

                </div>

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

            <CoreExpertise />

            <IndustriesSection />

            <IndustriesWeWork />

            <EngineeringProcess />

            <WhyChoose />

            <FinalCTA />

        </main>
    );
}