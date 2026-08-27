"use client";

import { useEffect, useState } from "react";
import { Diamond } from "lucide-react";

const expertiseItems = [
    {
        title: "Product Development",
        description:
            "Connect your AI with the tools you already use every day to keep data aligned and workflows seamlessly.",
        image: "/images/hero.png",
    },
    {
        title: "Automation Solutions",
        description:
            "Design intelligent automation systems that simplify processes, improve efficiency and create reliable workflows.",
        image: "/images/hero.png",
    },
    {
        title: "Vehicle Engineering",
        description:
            "Develop practical vehicle engineering solutions combining mechanical, electrical and intelligent systems.",
        image: "/images/hero.png",
    },
    {
        title: "Mechanical Engineering",
        description:
            "Engineer precise mechanical systems, components and assemblies designed for real-world performance.",
        image: "/images/hero.png",
    },
    {
        title: "Prototyping & Testing",
        description:
            "Turn engineering concepts into working prototypes and validate them through practical testing.",
        image: "/images/hero.png",
    },
];

export default function CoreExpertise() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => {
                return (current + 1) % expertiseItems.length;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, [activeIndex]);

    return (
        <section className="bg-white px-6 py-24 md:px-10 lg:py-32">

            <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

                {/* ================= LEFT ================= */}

                <div className="flex flex-col justify-between">

                    <div>
                        {/* LABEL */}

                        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">

                            <Diamond
                                size={14}
                                strokeWidth={1.5}
                                className="text-[#0274F5]"
                            />

                            <span>
                                Core Expertise
                            </span>

                        </div>


                        {/* HEADING */}

                        <h2 className="max-w-[540px] text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">

                            End-to-End Engineering
                            <br />

                            Capabilities

                        </h2>
                    </div>


                    {/* ================= EXPERTISE LIST ================= */}

                    <div className="mt-10 max-w-[560px]">

                        {expertiseItems.map((item, index) => {

                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={item.title}
                                    className="border-b border-[#E2E4E8]"
                                >

                                    <button
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        className="w-full text-left cursor-pointer focus:outline-none"
                                    >

                                        <div
                                            className={`
                                                overflow-hidden transition-all duration-500
                                                ${isActive
                                                    ? "pb-4 pt-2"
                                                    : "py-3 md:py-4"
                                                }
                      `}
                                        >

                                            {/* TITLE */}

                                            <div
                                                className={`
                          text-xl md:text-2xl font-medium tracking-[-0.02em]
                          transition-colors duration-500
                          ${isActive
                                                        ? "text-[#111111]"
                                                        : "text-[#BDBDBD]"
                                                    }
                        `}
                                            >
                                                {item.title}
                                            </div>


                                            {/* DESCRIPTION */}

                                            <div
                                                className={`
                          grid transition-[grid-template-rows,opacity]
                          duration-500
                          ${isActive
                                                        ? "grid-rows-[1fr] opacity-100"
                                                        : "grid-rows-[0fr] opacity-0"
                                                    }
                        `}
                                            >

                                                <div className="overflow-hidden">

                                                    <p className="max-w-[480px] pt-3 text-base md:text-lg leading-[1.6] text-[#4E5155]">
                                                        {item.description}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </button>

                                </div>
                            );
                        })}

                    </div>

                </div>


                {/* ================= RIGHT IMAGE ================= */}

                <div className="relative flex h-full w-full min-h-[440px] items-stretch justify-center lg:justify-end">

                    <div className="relative h-full min-h-[440px] w-full overflow-hidden rounded-2xl bg-[#F1F7FD] shadow-xl">

                        {/* IMAGE */}

                        {expertiseItems.map((item, index) => (

                            <img
                                key={item.title}
                                src={item.image}
                                alt={item.title}
                                className={`
                  absolute inset-0 h-full w-full object-cover
                  transition-all duration-700
                  ${index === activeIndex
                                        ? "scale-100 opacity-100"
                                        : "scale-[1.03] opacity-0"
                                    }
                `}
                            />

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}