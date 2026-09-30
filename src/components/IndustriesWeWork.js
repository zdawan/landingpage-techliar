"use client";

import { useEffect, useState } from "react";

const industries = [
    "Automotive",
    "Agriculture",
    "Industrial Automation",
    "Aerospace & Defense",
    "Manufacturing",
    "Embedded Systems",
];

const ITEM_HEIGHT = 80;

export default function IndustriesWeWork() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % industries.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white px-6 py-24 md:px-10 lg:py-28">
            <div className="mx-auto max-w-[1280px]">

                {/* ================= HEADER ================= */}

                <div className="mb-12 flex flex-col items-center text-center">

                    <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">
                        <span className="text-[#0274F5]">◇</span>
                        <span>Our Excellence</span>
                    </div>

                    <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">
                        Industries We Work
                    </h2>
                </div>

                {/* ================= INDUSTRIES PANEL ================= */}

                <div className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden rounded-[22px] bg-[#F3F8FE] px-4 py-10 sm:min-h-[460px] sm:px-8 md:min-h-[520px] md:px-12 md:py-0">

                    <div className="relative flex w-full flex-col items-center justify-center gap-6 md:grid md:grid-cols-2 md:gap-0">

                        {/* TOP ON MOBILE / LEFT ON DESKTOP */}

                        <div className="relative z-20 flex w-full items-center justify-center md:justify-end md:pr-10 lg:pr-16">

                            <h3 className="flex h-[80px] items-center whitespace-nowrap text-center text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-semibold leading-none tracking-[-0.045em] text-[#111111] md:text-right">
                                We serve
                            </h3>

                        </div>

                        {/* BOTTOM ON MOBILE / RIGHT ON DESKTOP */}

                        <div className="relative flex h-[360px] sm:h-[380px] md:h-[400px] w-full items-center justify-center overflow-hidden md:justify-start md:pl-10 lg:pl-16">

                            {/* TOP FADE */}

                            <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-[110px] sm:h-[125px] bg-gradient-to-b from-[#F3F8FE] via-[#F3F8FE]/90 to-transparent" />

                            {/* BOTTOM FADE */}

                            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[110px] sm:h-[125px] bg-gradient-to-t from-[#F3F8FE] via-[#F3F8FE]/90 to-transparent" />

                            {/* CENTER ACTIVE INDICATOR */}

                            <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-10 h-[80px] -translate-y-1/2" />

                            {/* LIST */}

                            <div
                                className="absolute left-0 flex w-full flex-col items-center text-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:left-10 md:w-[calc(100%-40px)] md:items-start md:text-left lg:left-16 lg:w-[calc(100%-64px)]"
                                style={{
                                    transform: `translateY(calc(50% - ${(activeIndex + 0.5) * ITEM_HEIGHT}px))`,
                                }}
                            >
                                {industries.map((industry, index) => {

                                    const distance = Math.abs(index - activeIndex);

                                    return (
                                        <button
                                            key={industry}
                                            onClick={() => setActiveIndex(index)}
                                            className={`
                                                flex
                                                h-[80px]
                                                w-full
                                                items-center
                                                justify-center
                                                text-center
                                                text-[26px]
                                                sm:text-[30px]
                                                md:text-[38px]
                                                lg:text-[42px]
                                                font-medium
                                                leading-none
                                                tracking-[-0.035em]
                                                transition-all
                                                duration-500
                                                md:justify-start
                                                md:text-left
                                                ${index === activeIndex
                                                    ? "text-[#0274F5] font-semibold opacity-100 scale-100"
                                                    : distance === 1
                                                        ? "text-[#0274F5]/70 opacity-85 font-medium"
                                                        : "text-[#0274F5]/35 opacity-50 font-medium"
                                                }
                                            `}
                                        >
                                            {industry}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}