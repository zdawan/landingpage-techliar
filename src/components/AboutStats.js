"use client";

import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

const stats = [
    {
        value: "100+",
        title: "Products Delivered",
        description:
            "Successfully engineered and deployed.",
    },
    {
        value: "14+",
        title: "Years of Excellence",
        description:
            "Building innovative engineering solutions.",
    },
    {
        value: "7+",
        title: "Industries Served",
        description:
            "Delivering solutions across diverse industries.",
    },
    {
        value: "50+",
        title: "Active Projects",
        description:
            "Engineered for performance and long-term scale.",
    },
];

export default function AboutStats() {
    return (
        <section className="bg-white px-6 py-24 md:px-10 lg:py-32">

            <div className="mx-auto max-w-[1280px]">

                {/* ================= HEADER ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mb-14 flex flex-col items-center text-center"
                >

                    <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">

                        <Diamond
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#0274F5]"
                        />

                        <span>
                            Our Impact
                        </span>

                    </div>

                    <h2 className="max-w-[700px] text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">
                        Proven Through Real-World Results
                    </h2>

                </motion.div>


                {/* ================= 3x2 GRID ================= */}

                <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">

                    {/* ROW 1 */}

                    <StatCard
                        value={stats[0].value}
                        title={stats[0].title}
                        description={stats[0].description}
                        index={0}
                    />

                    <StatCard
                        value={stats[1].value}
                        title={stats[1].title}
                        description={stats[1].description}
                        index={1}
                    />

                    <ResultDrivenCard />

                    {/* ROW 2 */}

                    <StatCard
                        value={stats[2].value}
                        title={stats[2].title}
                        description={stats[2].description}
                        index={2}
                    />

                    <ImageCard />

                    <StatCard
                        value={stats[3].value}
                        title={stats[3].title}
                        description={stats[3].description}
                        index={3}
                    />

                </div>

            </div>

        </section>
    );
}


/* =========================================
   STAT CARD
========================================= */

function StatCard({
    value,
    title,
    description,
    index,
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                margin: "-50px",
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex h-[270px] flex-col justify-between overflow-hidden rounded-[16px] border border-[#E4E7EA] bg-white p-6 pt-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9D8FB] hover:shadow-[0_12px_35px_rgba(2,116,245,0.07)] sm:h-[290px] sm:p-7 sm:pt-9"
        >

            {/* NUMBER */}

            <div
                className="mt-1 tracking-[-0.03em]"
                style={{
                    fontFamily: '"Bricolage Grotesque", sans-serif',
                    fontSize: 'clamp(54px, 6vw, 90px)',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '1.0',
                    color: '#0274F5',
                }}
            >
                {value}
            </div>


            {/* CONTENT */}

            <div>

                <h3 className="text-lg font-medium tracking-[-0.025em] text-[#111111] sm:text-xl md:text-[22px]">
                    {title}
                </h3>

                <p className="mt-1.5 max-w-[260px] text-sm leading-[1.5] text-[#8E9398]">
                    {description}
                </p>

            </div>


            {/* DECORATIVE DOTS */}

            {index === 0 && (
                <div className="absolute bottom-7 right-6 flex -space-x-2">

                    <span className="h-6 w-6 rounded-full bg-[#D9D9D9]" />
                    <span className="h-6 w-6 rounded-full bg-[#BDBDBD]" />
                    <span className="h-6 w-6 rounded-full bg-[#858585]" />
                    <span className="h-6 w-6 rounded-full bg-[#4A4A4A]" />

                </div>
            )}

        </motion.div>
    );
}


/* =========================================
   RESULT DRIVEN
========================================= */

function ResultDrivenCard() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                margin: "-50px",
            }}
            transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex h-[270px] flex-col justify-between overflow-hidden rounded-[16px] bg-gradient-to-b from-[#0274F5] via-[#2588F3] to-[#BFDFFF] p-6 text-white sm:h-[290px] sm:p-7"
        >

            {/* CONTENT */}

            <div className="relative z-10">

                <h3 className="text-lg font-medium tracking-[-0.025em] sm:text-xl md:text-[22px]">
                    Result Driven
                </h3>

                <p className="mt-1.5 max-w-[200px] text-xs leading-[1.5] text-white/90 sm:text-sm">
                    We combine engineering expertise with intelligent
                    technology to create real-world results.
                </p>

            </div>


            {/* SMALL RESULT IMAGE */}

            <div className="absolute left-1/2 top-[52%] w-[130px] -translate-x-1/2 -translate-y-1/2 sm:w-[145px]">

                <img
                    src="/images/why/result-driven.png"
                    alt="Result driven"
                    className="w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />

            </div>


            {/* SUCCESS RATE */}

            <div className="relative z-10">

                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80 sm:text-xs">
                    Success Rate
                </p>

                <div
                    className="mt-1 tracking-[-0.05em]"
                    style={{
                        fontFamily: '"Bricolage Grotesque", sans-serif',
                        fontSize: 'clamp(32px, 3.5vw, 42px)',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        lineHeight: '1.0',
                        color: '#FFFFFF',
                    }}
                >
                    99<span className="text-[20px] text-white/80 sm:text-[24px]">%</span>
                </div>

            </div>

        </motion.div>
    );
}


/* =========================================
   IMAGE CARD
========================================= */

function ImageCard() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                margin: "-50px",
            }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative h-[270px] overflow-hidden rounded-[16px] bg-[#EAF4FF] sm:h-[290px]"
        >

            <img
                src="/images/why/result-driven.png"
                alt="Techliar engineering"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0274F5]/20 to-transparent" />

        </motion.div>
    );
}