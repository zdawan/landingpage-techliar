"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Diamond, ArrowUpRight, Car, Sprout, Shield } from "lucide-react";

const projects = [
    {
        id: "01",
        slug: "3-wheeler-vehicle",
        title: "3-Wheeler Vehicle",
        description: "Building innovative solutions for next-generation mobility.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&auto=format&fit=crop&q=80",
        icon: Car,
    },
    {
        id: "02",
        slug: "coconut-harvester",
        title: "Coconut Harvester",
        description: "Building innovative solutions for smarter agriculture.",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&auto=format&fit=crop&q=80",
        icon: Sprout,
    },
    {
        id: "03",
        slug: "defense-vehicle",
        title: "Defense Vehicle",
        description: "Building innovative solutions for advanced mobility.",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1600&auto=format&fit=crop&q=80",
        icon: Shield,
    },
];

export default function RecentProjects() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % projects.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    const activeProject = projects[activeIndex];

    return (
        <section className="bg-white px-6 py-24 md:px-10 lg:py-32">

            <div className="mx-auto max-w-[1280px]">

                {/* ================= HEADER ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        margin: "-80px",
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mb-12 flex flex-col items-center text-center"
                >

                    {/* EYEBROW */}

                    <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">

                        <Diamond
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#0274F5]"
                        />

                        <span>
                            Results
                        </span>

                    </div>


                    {/* HEADING */}

                    <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">
                        Our Recent Projects
                    </h2>

                </motion.div>


                {/* ================= PROJECT TABS ================= */}

                <div className="mb-10 flex justify-center w-full px-2 sm:px-0">

                    <div className="w-full max-w-[380px] sm:max-w-none sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-1.5 rounded-[28px] sm:rounded-full bg-[#F3F2EE] p-2 border border-black/5 shadow-inner">

                        {projects.map((project, index) => {

                            const isActive = index === activeIndex;
                            const Icon = project.icon;

                            return (
                                <button
                                    key={project.id}
                                    type="button"
                                    onClick={() => handleTabClick(index)}
                                    className={`
                                        relative flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full
                                        px-6 py-3.5 text-sm font-medium
                                        transition-colors duration-300
                                        ${isActive
                                            ? "text-[#111111]"
                                            : "text-[#666B70] hover:text-[#111111]"
                                        }
                                    `}
                                >

                                    {/* ACTIVE PILL BACKGROUND */}

                                    {isActive && (
                                        <motion.div
                                            layoutId="activeProjectTab"
                                            className="absolute inset-0 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}


                                    {/* ICON & TITLE ONLY */}

                                    <span className="relative z-10 flex items-center gap-2.5">

                                        <Icon
                                            className={`
                                                h-4.5 w-4.5 transition-colors
                                                ${isActive
                                                    ? "text-[#0274F5]"
                                                    : "text-[#8E9398]"
                                                }
                                            `}
                                        />

                                        <span className="whitespace-nowrap font-medium text-sm sm:text-base">
                                            {project.title}
                                        </span>

                                    </span>

                                </button>
                            );
                        })}

                    </div>

                </div>


                {/* ================= PROJECT IMAGE ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
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
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative h-[380px] overflow-hidden rounded-[20px] bg-[#EAF1F7] sm:h-[460px] md:h-[540px]"
                >

                    <AnimatePresence mode="wait">

                        <motion.img
                            key={activeProject.id}
                            src={activeProject.image}
                            alt={activeProject.title}
                            initial={{
                                opacity: 0,
                                scale: 1.04,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.02,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                    </AnimatePresence>


                    {/* IMAGE OVERLAY */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />


                    {/* PROJECT INFO */}

                    <motion.div
                        key={`info-${activeProject.id}`}
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.15,
                        }}
                        className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8"
                    >

                        <div>

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                                Project {activeProject.id}
                            </span>

                            <h3 className="mt-1 text-[28px] font-medium tracking-[-0.035em] text-white sm:text-[34px] md:text-[40px]">
                                {activeProject.title}
                            </h3>

                        </div>


                        {/* PROJECT ARROW */}

                        <Link
                            href={`/projects/${activeProject.slug}`}
                            className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#111111] transition-all duration-300 hover:scale-110 hover:bg-[#0274F5] hover:text-white"
                            aria-label={`View ${activeProject.title}`}
                        >
                            <ArrowUpRight
                                size={20}
                                strokeWidth={2}
                                className="transition-transform duration-300 group-hover:rotate-[-8deg]"
                            />
                        </Link>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}