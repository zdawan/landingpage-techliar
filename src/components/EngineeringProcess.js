"use client";

import { useState } from "react";
import { Diamond, Compass, Target, PenTool, Cpu, Rocket } from "lucide-react";

const processSteps = [
    {
        number: "01",
        title: "Discover",
        description:
            "Deep discovery into your market position, funnel economics, team structure, and strategic constraints. We find the real bottleneck, not just the surface symptoms.",
        Icon: Compass,
    },
    {
        number: "02",
        title: "Define",
        description:
            "We define the engineering requirements, technical direction, priorities, and constraints needed to move the project forward.",
        Icon: Target,
    },
    {
        number: "03",
        title: "Design",
        description:
            "Our team develops practical designs and engineering solutions focused on performance, reliability, and real-world application.",
        Icon: PenTool,
    },
    {
        number: "04",
        title: "Develop",
        description:
            "We turn concepts into functional systems through engineering, prototyping, integration, and iterative development.",
        Icon: Cpu,
    },
    {
        number: "05",
        title: "Deliver",
        description:
            "Solutions are tested, refined, and prepared for reliable deployment with a focus on measurable results and long-term performance.",
        Icon: Rocket,
    },
];

export default function EngineeringProcess() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white px-6 py-24 md:px-10 lg:py-32">

            <div className="mx-auto max-w-[1280px]">

                {/* HEADER */}

                <div className="mb-14 flex flex-col items-center text-center">

                    <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">

                        <Diamond
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#0274F5]"
                        />

                        <span>
                            Engineering Process
                        </span>

                    </div>

                    <h2 className="max-w-[640px] text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">
                        A Proven Process. Reliable Result
                    </h2>

                </div>


                {/* MOBILE & TABLET (<1024px) VERTICAL CARDS */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">

                    {processSteps.map((step) => {

                        const StepIcon = step.Icon;

                        return (
                            <div
                                key={step.number}
                                className="flex flex-col justify-between min-h-[220px] rounded-2xl border border-[#E5E7EB] bg-[#F4F8FC] p-6 transition-all duration-300"
                            >

                                <div>

                                    {/* ICON & NUMBER */}

                                    <div className="mb-5 flex items-center justify-between">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0274F5]/10">

                                            <StepIcon className="h-6 w-6 text-[#0274F5]" strokeWidth={1.8} />

                                        </div>

                                        <span className="text-3xl font-bold text-[#0274F5]">
                                            {step.number}
                                        </span>

                                    </div>


                                    {/* TITLE */}

                                    <h3 className="text-xl font-medium text-[#111111]">
                                        {step.title}
                                    </h3>


                                    {/* DESCRIPTION */}

                                    <p className="mt-2 text-sm font-normal leading-[1.55] text-[#6B7075]">
                                        {step.description}
                                    </p>

                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* DESKTOP INTERACTIVE ACCORDION (1024px+) */}

                <div className="hidden w-full gap-3 overflow-hidden lg:flex md:gap-4">

                    {processSteps.map((step, index) => {

                        const isActive = index === activeIndex;
                        const StepIcon = step.Icon;

                        return (
                            <button
                                key={step.number}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`group relative flex h-[350px] sm:h-[380px] md:h-[400px] min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl text-left transition-all duration-700 ease-out ${isActive
                                    ? "flex-[3.5]"
                                    : "flex-[1]"
                                    }`}
                                style={{
                                    background: isActive
                                        ? "linear-gradient(160deg, #0274F5 0%, #8BBBF1 100%)"
                                        : "#F4F8FC",
                                }}
                            >

                                {/* ACTIVE CONTENT */}

                                <div className="flex h-full w-full flex-col justify-between p-5 sm:p-7">

                                    {isActive ? (
                                        <div>

                                            {/* ICON */}

                                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/20">

                                                <StepIcon className="h-6 w-6 text-white" strokeWidth={1.8} />

                                            </div>


                                            {/* TITLE */}

                                            <h3 className="text-xl sm:text-2xl md:text-[26px] font-medium tracking-[-0.02em] text-white">
                                                {step.title}
                                            </h3>


                                            {/* DESCRIPTION */}

                                            <p className="mt-3 max-w-[340px] text-sm sm:text-base font-normal leading-[1.6] text-white/95">
                                                {step.description}
                                            </p>

                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center pt-2 sm:justify-start">

                                            <span className="text-sm font-semibold uppercase tracking-wider text-[#0274F5]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {step.title}
                                            </span>

                                        </div>
                                    )}


                                    {/* STEP NUMBER */}

                                    <span
                                        className={`mt-auto block font-semibold leading-none tracking-[-0.04em] transition-all duration-500 ${isActive
                                            ? "text-[42px] sm:text-[54px] md:text-[64px] text-white"
                                            : "text-[36px] sm:text-[46px] md:text-[54px] text-[#0274F5]"
                                            }`}
                                    >
                                        {step.number}
                                    </span>

                                </div>

                            </button>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}