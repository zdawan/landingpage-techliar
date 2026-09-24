"use client";

import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

export default function ProjectGallery({ images = [], title = "Project Highlights" }) {
    if (!images || images.length === 0) return null;

    return (
        <section className="bg-white px-6 py-20 md:px-10 lg:py-28">
            <div className="mx-auto max-w-[1280px]">
                {/* SECTION HEADER MATCHING ENGINEERING PROCESS STYLE */}
                <div className="mb-14 flex flex-col items-center text-center">
                    <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">
                        <Diamond
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#0274F5]"
                        />
                        <span>Project Gallery</span>
                    </div>

                    <h2 className="max-w-[680px] text-[38px] sm:text-[46px] md:text-[52px] font-medium leading-[1.08] tracking-[-0.03em] text-[#111111]">
                        Visual & Engineering Highlights
                    </h2>
                </div>

                {/* GRID GALLERY LAYOUT */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((imgSrc, index) => {
                        const isFeatured = index === 0 && images.length >= 3;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                    ease: [0.25, 1, 0.3, 1],
                                }}
                                className={`group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F4F8FC] shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#0274F5]/30 ${
                                    isFeatured
                                        ? "sm:col-span-2 aspect-[16/9]"
                                        : "aspect-[4/3]"
                                }`}
                            >
                                <img
                                    src={imgSrc}
                                    alt={`${title} highlight ${index + 1}`}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] group-hover:scale-105"
                                />

                                {/* HOVER OVERLAY GRADIENT */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-white/90 bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/20">
                                        View {index + 1} • {title}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
