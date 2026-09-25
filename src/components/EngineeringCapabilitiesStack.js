"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Diamond } from "lucide-react";

/* =========================================================
   DATA — swap image/title/description/deliver per card
   (4-5 bullet points max per "What We Deliver" list)
========================================================= */

const features = [
    {
        number: "01",
        title: "Product Development",
        description:
            "Connect your AI with the tools you already use every day to keep data aligned and workflows seamless, from concept through to a shipped product.",
        image: "/images/hero.png",
        bg: "#F3F8FE",
        deliver: [
            "Product Strategy & Planning",
            "Concept Design",
            "Hardware Development",
            "Software Development",
            "System Integration",
        ],
    },
    {
        number: "02",
        title: "Automation Solutions",
        description:
            "Design intelligent automation systems that simplify processes, improve efficiency, and create reliable, repeatable workflows.",
        image: "/images/hero.png",
        bg: "#F7F5FC",
        deliver: [
            "Process Automation",
            "Industrial Automation",
            "Robotic Integration",
            "PLC & Control Systems",
            "Workflow Optimization",
        ],
    },
    {
        number: "03",
        title: "Vehicle Engineering",
        description:
            "Develop practical vehicle engineering solutions that combine mechanical, electrical and intelligent systems into one reliable platform.",
        image: "/images/hero.png",
        bg: "#F3F8F6",
        deliver: [
            "Vehicle Architecture",
            "Mechanical Engineering",
            "Electrical Systems",
            "Prototype Development",
            "Testing & Validation",
        ],
    },
    {
        number: "04",
        title: "Special Projects",
        description:
            "Take on complex, one-off engineering challenges with a dedicated team built to move fast without cutting corners.",
        image: "/images/hero.png",
        bg: "#F8F5F2",
        deliver: [
            "Rapid Prototyping",
            "Custom Engineering",
            "Cross-Disciplinary Support",
            "Design Iteration",
        ],
    },
];

/* =========================================================
   SECTION
========================================================= */

export default function PowerfulFeatures() {
    return (
        <section className="bg-white px-4 py-20 sm:px-6 md:px-10 lg:py-28">
            <div className="mx-auto max-w-[1280px]">

                {/* ================= HEADER ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-14 flex flex-col items-center text-center sm:mb-16 lg:mb-20"
                >

                    <div className="mb-3.5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7075] sm:text-sm">
                        <Diamond size={14} strokeWidth={1.5} className="text-[#0274F5]" />
                        <span>Features</span>
                    </div>

                    <h2 className="max-w-[750px] text-[34px] font-medium leading-[1.08] tracking-[-0.04em] text-[#111111] sm:text-[44px] md:text-[52px] lg:text-[56px]">
                        Powerful Features for Your Engineering
                    </h2>

                </motion.div>

                {/* ================= STACKED STICKY CARDS ================= */}

                <div className="relative mx-auto max-w-[1180px] pb-0 sm:pb-0">
                    {features.map((item, index) => (
                        <StickyFeatureCard
                            key={item.number}
                            item={item}
                            index={index}
                            total={features.length}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

/* =========================================================
   STICKY FEATURE CARD (STACKING SCROLL ANIMATION)
   -- same mechanic as EngineeringCapabilitiesStack.js:
      each card pins via `sticky`, and as the user scrolls
      past it the card scales down, shifts up slightly, and
      dims underneath the next incoming card.
========================================================= */

function StickyFeatureCard({ item, index, total }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "end start"],
    });

    const isLast = index === total - 1;
    const isReversed = index % 2 === 1;

    const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.94]);
    const y = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -16]);
    const dimOpacity = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : 0.25]);

    // progressive sticky offset so each card pins slightly lower than the last
    const topOffset = 100 + index * 12;

    return (
        <div
            ref={cardRef}
            className={`sticky mx-auto w-full max-w-[1180px] ${isLast ? "mb-0" : "mb-20 sm:mb-28 lg:mb-36"}`}
            style={{
                top: `${topOffset}px`,
                zIndex: index + 1,
            }}
        >
            <motion.div
                style={{ scale, y }}
                transition={{ ease: [0.16, 1, 0.3, 1] }}
                className="w-full origin-top"
            >
                <div
                    style={{ backgroundColor: item.bg }}
                    className="relative flex min-h-[480px] w-full flex-col overflow-hidden rounded-[28px] border border-black/[0.045] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:min-h-[520px] sm:p-9 lg:min-h-[550px] lg:p-12"
                >

                    {/* DIMMING OVERLAY FOR STACKED BEHIND CARDS */}

                    <motion.div
                        style={{ opacity: dimOpacity }}
                        className="pointer-events-none absolute inset-0 z-20 rounded-[28px] bg-black/10 transition-opacity"
                    />

                    {/* CARD CONTENT GRID */}

                    <div className="grid h-full flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">

                        {/* TEXT COLUMN */}

                        <div
                            className={`flex flex-col justify-center ${isReversed ? "lg:order-2" : "lg:order-1"
                                }`}
                        >

                            <span className="text-xs font-bold tracking-[0.14em] text-[#0274F5] sm:text-sm">
                                {item.number}
                            </span>

                            <h3 className="mt-3 max-w-[460px] text-2xl font-medium leading-[1.15] tracking-[-0.03em] text-[#111111] sm:text-[30px] md:text-[34px] lg:text-[36px]">
                                {item.title}
                            </h3>

                            <p className="mt-4 max-w-[460px] text-base leading-[1.65] text-[#55595E] sm:text-lg">
                                {item.description}
                            </p>

                            {/* DIVIDER */}

                            <div className="mt-6 mb-4 h-px w-full max-w-[460px] bg-black/[0.08]" />

                            {/* WHAT WE DELIVER */}

                            <div className="max-w-[460px]">

                                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-[#0274F5] sm:text-sm">
                                    What We Deliver
                                </span>

                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    {item.deliver.map((point) => (
                                        <div
                                            key={point}
                                            className="flex items-center gap-2.5 text-sm font-normal text-[#55595E] sm:text-[15px]"
                                        >
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0274F5]" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>

                        {/* IMAGE COLUMN */}

                        <div
                            className={`flex items-center justify-center ${isReversed ? "lg:order-1" : "lg:order-2"
                                }`}
                        >
                            <div className="group relative aspect-[4/3] w-full max-h-[340px] overflow-hidden rounded-[18px] border border-black/5 bg-white/60 shadow-sm sm:max-h-[380px]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                                />
                            </div>
                        </div>

                    </div>

                    {/* WATERMARK NUMBER */}

                    <span className="pointer-events-none absolute bottom-[-20px] right-6 select-none text-[130px] font-medium leading-none tracking-[-0.08em] text-[#0274F5]/[0.035] sm:right-8 sm:text-[180px] lg:text-[200px]">
                        {item.number}
                    </span>

                </div>
            </motion.div>
        </div>
    );
}