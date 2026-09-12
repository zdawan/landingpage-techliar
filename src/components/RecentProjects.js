"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Diamond, ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: "01",
        title: "3-Wheeler Vehicle",
        description: "Building innovative solutions for next-generation mobility.",
        image: "/images/projects/3-wheeler.jpg",
    },
    {
        id: "02",
        title: "Coconut Harvester",
        description: "Building innovative solutions for smarter agriculture.",
        image: "/images/projects/coconut-harvester.jpg",
    },
    {
        id: "03",
        title: "Defense Vehicle",
        description: "Building innovative solutions for advanced mobility.",
        image: "/images/projects/defense-vehicle.jpg",
    },
];

export default function RecentProjects() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % projects.length);
        }, 3000);

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
                    className="mb-14 flex flex-col items-center text-center"
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

                <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">

                    {projects.map((project, index) => {

                        const isActive = index === activeIndex;

                        return (
                            <button
                                key={project.id}
                                type="button"
                                onClick={() => handleTabClick(index)}
                                className={`
                                    group relative flex h-[72px] cursor-pointer
                                    items-center overflow-hidden rounded-[14px]
                                    px-3.5 sm:h-[76px] sm:px-4 text-left
                                    transition-all duration-500
                                    ${isActive
                                        ? "bg-[#0274F5] text-white shadow-md"
                                        : "bg-[#F3F4F6] text-[#55595D] hover:bg-[#E5E7EB]"
                                    }
                                `}
                            >

                                {/* PROJECT ICON BOX */}

                                <div
                                    className={`
                                        flex h-[46px] w-[46px] shrink-0
                                        items-center justify-center
                                        rounded-[10px]
                                        transition-all duration-500
                                        ${isActive
                                            ? "bg-white"
                                            : "bg-white"
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            text-xs font-bold sm:text-sm
                                            ${isActive
                                                ? "text-[#0274F5]"
                                                : "text-[#8E9398]"
                                            }
                                        `}
                                    >
                                        {project.id}
                                    </span>
                                </div>


                                {/* TEXT */}

                                <div className="ml-3.5 min-w-0">

                                    <h3
                                        className={`
                                            truncate text-sm font-semibold
                                            sm:text-base
                                            ${isActive
                                                ? "text-white"
                                                : "text-[#111111]"
                                            }
                                        `}
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        className={`
                                            mt-0.5 truncate text-xs
                                            sm:text-sm
                                            ${isActive
                                                ? "text-white/85"
                                                : "text-[#8E9398]"
                                            }
                                        `}
                                    >
                                        {project.description}
                                    </p>

                                </div>


                                {/* ACTIVE PROGRESS */}

                                {isActive && (
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{
                                            duration: 3,
                                            ease: "linear",
                                        }}
                                        className="absolute bottom-0 left-0 h-[3px] bg-white"
                                    />
                                )}

                            </button>
                        );
                    })}

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

                        <a
                            href="/projects"
                            className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#111111] transition-all duration-300 hover:scale-110 hover:bg-[#0274F5] hover:text-white"
                            aria-label={`View ${activeProject.title}`}
                        >
                            <ArrowUpRight
                                size={20}
                                strokeWidth={2}
                                className="transition-transform duration-300 group-hover:rotate-[-8deg]"
                            />
                        </a>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}