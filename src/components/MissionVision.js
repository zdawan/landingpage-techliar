"use client";

import { Diamond } from "lucide-react";
import { motion } from "framer-motion";

const missionVision = [
    {
        title: "Our Mission",
        description:
            "To build innovative engineering and technology solutions that transform complex challenges into practical, reliable and scalable outcomes.",
        image: "/images/mission.jpg",
    },
    {
        title: "Our Vision",
        description:
            "To shape a smarter future through engineering, automation and intelligent technologies that create meaningful impact across industries.",
        image: "/images/vision.jpg",
    },
];

export default function MissionVision() {
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
                    className="mb-12 flex flex-col items-center text-center"
                >

                    {/* EYEBROW */}

                    <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">

                        <Diamond
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#0274F5]"
                        />

                        <span>
                            Our Scope
                        </span>

                    </div>


                    {/* HEADING */}

                    <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">
                        Collaboration That Drives Change
                    </h2>

                </motion.div>


                {/* ================= CARDS ================= */}

                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">

                    {missionVision.map((item, index) => (

                        <motion.div
                            key={item.title}
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                margin: "-60px",
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group relative h-[360px] overflow-hidden rounded-[14px] bg-[#F4F4F4] sm:h-[390px] md:h-[420px]"
                        >

                            {/* BACKGROUND IMAGE */}

                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                                style={{
                                    backgroundImage: `url('${item.image}')`,
                                }}
                            />


                            {/* LIGHT OVERLAY */}

                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/25 transition-all duration-500 group-hover:from-white/95 group-hover:via-white/80" />


                            {/* CONTENT */}

                            <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-8 md:p-10">

                                <h3 className="text-[25px] font-medium tracking-[-0.035em] text-[#111111] sm:text-[28px] md:text-[30px]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 max-w-[480px] text-sm leading-[1.6] text-[#777C81] sm:text-[15px]">
                                    {item.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}