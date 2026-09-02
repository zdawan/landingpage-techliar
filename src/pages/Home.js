import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";
import CoreExpertise from "../components/CoreExpertise";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
    return (
        <main className="bg-white">

            {/* ================= HERO ================= */}

            <section className="relative h-screen min-h-[700px] overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/hero.png')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 z-10 h-44 bg-gradient-to-b from-transparent via-white/60 to-white" />


                {/* Navbar */}
                <Navbar />


                {/* ================= HERO CONTENT ================= */}

                <div className="relative z-20 flex h-full items-center justify-center px-6 pt-16 text-center">

                    <div className="max-w-[1000px]">

                        {/* Eyebrow */}
                        <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-white/85">
                            ENGINEERING • AUTOMATION • INNOVATION
                        </p>


                        {/* Heading */}
                        <h1 className="text-[clamp(45px,5.5vw,76px)] font-medium leading-[1.02] tracking-[-0.04em] text-white">

                            Engineering Innovation
                            <br />

                            for{" "}

                            <span className="font-light italic text-white">
                                Real-World
                            </span>{" "}

                            Challenges

                        </h1>
                        {/* CTA */}
                        <a
                            href="/contact"
                            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 py-2 pl-6 pr-2 text-sm font-regular text-white shadow-lg backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/60"
                        >

                            <span className="text-white">
                                Discuss your project
                            </span>

                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0274F5] text-white">
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                            </span>

                        </a>

                    </div>

                </div>


                {/* ================= SCROLL ================= */}

                <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 text-[8px] tracking-[0.16em] text-white/70">

                    <span className="h-px w-7 bg-white" />

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                </div>

            </section>

            {/* ================= INTRO SECTION ================= */}

            <section className="relative overflow-hidden bg-white">

                {/* Intro content */}
                <div className="mx-auto flex min-h-[420px] items-center justify-center px-6 py-28 md:min-h-[520px] md:py-36">

                    <p className="max-w-[1040px] text-center text-[32px] font-medium leading-[1.15] tracking-[-0.035em] text-[#111111] sm:text-[42px] md:text-[54px]">

                        Building the future

                        {/* IMAGE PILL 1 */}
                        <span className="mx-2 inline-flex h-[38px] w-[90px] translate-y-[4px] overflow-hidden rounded-full bg-gradient-to-r from-[#0274F5] via-[#6FA9F5] to-[#E8F2FF] align-middle sm:h-[48px] sm:w-[110px] md:h-[58px] md:w-[130px]">

                            <img
                                src="/images/hero.png"
                                alt=""
                                className="h-full w-full object-cover"
                            />

                        </span>

                        through

                        <br className="hidden sm:inline" />

                        {" "}engineering excellence, innovation, and

                        <br className="hidden sm:inline" />

                        {" "}intelligent

                        {/* IMAGE PILL 2 */}
                        <span className="mx-2 inline-flex h-[38px] w-[90px] translate-y-[4px] overflow-hidden rounded-full bg-gradient-to-r from-[#0274F5] via-[#6FA9F5] to-[#E8F2FF] align-middle sm:h-[48px] sm:w-[110px] md:h-[58px] md:w-[130px]">

                            <img
                                src="/images/hero.png"
                                alt=""
                                className="h-full w-full object-cover"
                            />

                        </span>

                        design.

                    </p>

                </div>

            </section>

            {/* ================= WHY US / SHOWCASE ================= */}

            <section className="overflow-hidden bg-white py-24 md:py-32">

                {/* TEXT CONTENT */}
                <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 items-start md:grid-cols-[1fr_1.2fr] md:gap-16">

                    {/* LEFT */}
                    <div>

                        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">
                            <span className="text-[#0274F5]">◇</span>
                            <span>Why Us?</span>
                        </div>

                        <h2 className="max-w-[540px] text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">
                            Engineering Ideas.
                            <br />
                            Delivering Impact.
                        </h2>

                    </div>


                    {/* RIGHT */}
                    <div className="max-w-[720px] md:pt-14">

                        <p className="text-lg leading-[1.65] text-[#45494D] sm:text-xl md:text-[22px]">
                            Welcome to Techliar, your engineering and technology partner,
                            dedicated to transforming complex challenges into practical
                            solutions. With experience across engineering, automation,
                            embedded systems and product development, we combine technical
                            expertise with intelligent thinking to build solutions that
                            perform in the real world.
                        </p>

                    </div>

                </div>


                {/* ================= INFINITE IMAGE SLIDER ================= */}

                <div className="relative mt-14 w-full overflow-hidden">

                    <div className="techliar-marquee cursor-pointer">

                        {/* FIRST SET */}
                        <div className="techliar-marquee-track">

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>


                            {/* DUPLICATE SET FOR INFINITE LOOP */}

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                            <div className="techliar-image-card">
                                <img
                                    src="/images/hero.png"
                                    alt="Techliar engineering"
                                />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <CoreExpertise />

            <IndustriesSection />

            <WhyChoose />

        </main>
    );
}