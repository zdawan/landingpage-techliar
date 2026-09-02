import Link from "next/link";
import { ArrowUpRight, Diamond } from "lucide-react";

const industries = [
    {
        number: "01",
        title: "Defense",
        description:
            "Deep discovery into your market position, funnel",
        icon: "/images/industries/defense.svg",
    },
    {
        number: "02",
        title: "Agriculture",
        description:
            "Deep discovery into your market position, funnel",
        icon: "/images/industries/agri.svg",
    },
    {
        number: "03",
        title: "Automotive",
        description:
            "Deep discovery into your market position, funnel",
        icon: "/images/industries/automotive.svg",
    },
    {
        number: "04",
        title: "Manufacturing",
        description:
            "Deep discovery into your market position, funnel",
        icon: "/images/industries/manuf.svg",
    },
];

export default function IndustriesSection() {
    return (
        <section className="bg-white px-6 py-24 md:px-10 lg:py-28">

            <div className="mx-auto max-w-[1280px]">

                {/* HEADER */}

                <div className="mb-12 flex flex-col items-center text-center">

                    <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">

                        <Diamond
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#0274F5]"
                        />

                        <span>
                            Industries We Serve
                        </span>

                    </div>

                    <h2 className="max-w-[640px] text-[36px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[44px] md:text-[50px]">
                        Expertise Across Key Industries
                    </h2>

                </div>

                {/* INDUSTRY CARDS */}

                <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {industries.map((industry) => (

                        <Link
                            href={`/industries/${industry.title
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            key={industry.number}
                            className="group relative flex h-[380px] sm:h-[400px] w-full flex-col overflow-hidden rounded-2xl border border-[#DEDEDE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9D8FB] hover:shadow-[0_15px_40px_rgba(2,116,245,0.08)]"
                        >

                            {/* ICON */}

                            <div className="flex h-[180px] sm:h-[200px] items-center justify-center [perspective:800px]">

                                <img
                                    src={industry.icon}
                                    alt={`${industry.title} industry`}
                                    className="h-[130px] w-[130px] sm:h-[145px] sm:w-[145px] object-contain transition-all duration-500 ease-out group-hover:[transform:rotateY(25deg)_scale(1.05)]"
                                />

                            </div>


                            {/* NUMBER */}

                            <span className="mt-auto text-base font-medium tracking-[-0.02em] text-[#0274F5]">
                                {industry.number}
                            </span>


                            <h3 className="mt-2 text-xl sm:text-[22px] font-medium leading-[1.15] tracking-[-0.025em] text-[#111111]">
                                {industry.title}
                            </h3>

                            <p className="mt-2 text-sm sm:text-[16px] font-normal leading-[1.45] text-[#565A5E]">
                                {industry.description}
                            </p>


                            {/* HOVER ARROW */}

                            <span className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0274F5] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={2}
                                />

                            </span>

                        </Link>

                    ))}

                </div>
            </div>

        </section>
    );
}