import { Diamond } from "lucide-react";

const reasons = [
    {
        icon: "/images/why/team.svg",
        title: "Experienced Team",
        description: "We leverage the latest technology to stay updated",
    },
    {
        icon: "/images/why/quality.svg",
        title: "Quality and Reliability",
        description: "We leverage the latest technology to stay updated",
    },
    {
        icon: "/images/why/support.svg",
        title: "End-to-End Support",
        description: "We leverage the latest technology to stay updated",
    },
    {
        icon: "/images/why/innovation.svg",
        title: "Innovation First",
        description: "We leverage the latest technology to stay updated",
    },
];

export default function WhyChoose() {
    return (
        <section className="bg-white px-6 py-24 md:px-10 lg:py-32">

            <div className="mx-auto max-w-[1280px]">

                {/* ================= HEADER ================= */}

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
                        Why Choose Techliar
                    </h2>

                </div>


                {/* ================= CONTENT ================= */}

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2.28fr_0.72fr]">

                    {/* LEFT 2x2 STAGGERED CARDS GRID */}

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

                        {/* ROW 1 - CARD 1 (SMALL - 1 SPAN) */}

                        <div className="sm:col-span-1">
                            <ReasonCard reason={reasons[0]} />
                        </div>


                        {/* ROW 1 - CARD 2 (LENGTHY - 2 SPANS) */}

                        <div className="sm:col-span-2">
                            <ReasonCard reason={reasons[1]} />
                        </div>


                        {/* ROW 2 - CARD 3 (LENGTHY - 2 SPANS) */}

                        <div className="sm:col-span-2">
                            <ReasonCard reason={reasons[2]} />
                        </div>


                        {/* ROW 2 - CARD 4 (SMALL - 1 SPAN) */}

                        <div className="sm:col-span-1">
                            <ReasonCard reason={reasons[3]} />
                        </div>

                    </div>


                    {/* RIGHT RESULT DRIVEN CARD */}

                    <div className="relative flex h-full min-h-[480px] sm:min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl border border-[#E5E7EB] bg-gradient-to-b from-[#0274F5] via-[#2588F3] to-[#DCEEFF] p-7 sm:p-8 text-white">

                        <div className="relative z-10">

                            <h3 className="text-[26px] sm:text-[32px] font-normal leading-[1.1] tracking-[-0.02em]">
                                Result Driven
                            </h3>

                            <p className="mt-3 max-w-[240px] text-base font-normal leading-[1.5] text-white/90">
                                We leverage the latest technology to stay updated
                            </p>

                        </div>


                        {/* RESULT IMAGE */}

                        <div className="my-4 flex justify-center">

                            <img
                                src="/images/why/result-driven.png"
                                alt="Result driven"
                                className="w-[240px] sm:w-[275px] object-contain"
                            />

                        </div>


                        {/* SUCCESS RATE */}

                        <div className="relative z-10 text-center">

                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0274F5]">
                                Success Rate
                            </p>

                            <div className="mt-1 text-[56px] sm:text-[68px] font-bold leading-none tracking-[-0.05em] text-[#0274F5]">

                                99
                                <span className="text-[#A7D0FF]">
                                    %
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}


/* ================= REASON CARD ================= */

function ReasonCard({ reason }) {

    return (
        <div className="flex h-[260px] sm:h-[280px] w-full flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-7">

            {/* ICON */}

            <div className="flex items-start">

                <img
                    src={reason.icon}
                    alt={reason.title}
                    className="h-[68px] w-[68px] sm:h-[76px] sm:w-[76px] object-contain"
                />

            </div>


            {/* TEXT */}

            <div>

                <h3 className="text-xl sm:text-[22px] md:text-2xl font-medium tracking-[-0.025em] text-[#111111]">
                    {reason.title}
                </h3>

                <p className="mt-2 max-w-[280px] text-sm sm:text-base font-normal leading-[1.5] text-[#8E9398]">
                    {reason.description}
                </p>

            </div>

        </div>
    );
}