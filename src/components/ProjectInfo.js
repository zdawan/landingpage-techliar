"use client";

import { motion } from "framer-motion";

export default function ProjectInfo({ content }) {
    if (!content) return null;

    return (
        <section className="relative z-10 bg-white pb-16 md:pb-24 px-2 sm:px-4 md:px-6">
            <div className="mx-auto w-[85%] sm:w-[88%] md:w-[92%] min-[1200px]:w-[95%] max-w-[1500px] -mt-24 sm:-mt-32 md:-mt-40">
                <div className="relative overflow-hidden rounded-[20px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 0.85,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{
                            boxShadow: "inset 0px 0px 111.9px 19px #DEEDFF",
                        }}
                        className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-[#087CF5] via-[#0274F5] to-[#0059C6] px-6 pt-28 pb-12 text-white border border-white/30 sm:px-10 sm:pt-36 sm:pb-16 md:px-14 md:pt-40 md:pb-20 lg:px-20"
                    >
                        {/* ATMOSPHERIC BLUE & WHITE LIGHTING ACCENTS */}
                        <div className="pointer-events-none absolute -left-[10%] -top-[30%] h-[80%] w-[80%] rounded-full bg-white/20 blur-[110px]" />
                        <div className="pointer-events-none absolute -bottom-[30%] -right-[10%] h-[80%] w-[80%] rounded-full bg-[#00398A]/50 blur-[110px]" />
                        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[60%] rounded-full bg-[#0274F5]/30 blur-[90px]" />

                        <div className="relative z-10 py-6 sm:py-10 md:py-12">
                            {/* TOP CENTER HEADER */}
                            <div className="text-center">
                                <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-semibold text-white tracking-[-0.03em] leading-tight">
                                    {content.title}
                                </h2>
                            </div>

                            {/* MAIN PROJECT DESCRIPTION */}
                            <div className="mx-auto mt-8 sm:mt-10 max-w-[1080px]">
                                {/* SMALL "T" DECORATIVE ELEMENT */}
                                <div className="mb-2.5 flex h-6 w-6 items-center justify-center rounded-[5px] bg-white/20 border border-white/30 text-xs font-bold text-white shadow-sm">
                                    T
                                </div>

                                {/* DESCRIPTION BORDER OUTLINE */}
                                <div className="rounded-xl border border-white/25 bg-white/5 p-5 sm:p-7 md:p-8 backdrop-blur-[2px]">
                                    <p className="text-[20px] sm:text-[26px] md:text-[32px] font-normal leading-[1.35] tracking-[-0.02em] text-white">
                                        {content.description}
                                    </p>
                                </div>
                            </div>

                            {/* DIVIDER */}
                            <div className="my-8 h-px w-full bg-white/35 md:my-10" />

                            {/* BOTTOM CONTENT (2 COLUMNS) */}
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
                                <p className="max-w-[500px] text-sm sm:text-base md:text-[16px] lg:text-[17px] font-normal leading-[1.65] text-white/85">
                                    {content.leftText}
                                </p>

                                <p className="max-w-[500px] text-sm sm:text-base md:text-[16px] lg:text-[17px] font-normal leading-[1.65] text-white/85 md:ml-auto">
                                    {content.rightText}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}