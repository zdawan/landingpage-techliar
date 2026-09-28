"use client";

import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import EngineeringProcess from "@/components/EngineeringProcess";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectGallery from "@/components/ProjectGallery";

const projectsData = [
    {
        id: "defense-vehicle",
        slug: "defense-vehicle",
        aliases: ["defense", "defense-tactical-mobility"],
        title: "Defense Vehicle",
        subtitle: "Autonomous Tactical Vehicle & Heavy Armored Chassis",
        category: "Tactical Mobility & Defense",
        image: "/images/projects/defense.jpg",
        statsLeft: {
            label: "Weight",
            value: "4 Ton",
        },
        statsRight: {
            label: "Location",
            value: "Aerodrome, Sulur",
        },
        projectInfo: {
            title: "Project Info",
            description:
                "The 4-Ton Defense Vehicle platform combines all-terrain ballistic protection, autonomous tactical waypoint navigation, and heavy-duty chassis engineering for extreme operational readiness.",
            leftText:
                "Designed to meet stringent MIL-STD-810G environmental standards, featuring custom drive axles, low-thermal cooling signatures, and CAN-bus telemetry integration.",
            rightText:
                "Successfully deployed at Aerodrome, Sulur for tactical mobility trials. The system supports full remote operation with real-time encrypted telemetry.",
            images: [
                "/images/projects/defense.jpg",
                "https://images.unsplash.com/photo-1579912437766-789000a6e386?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&auto=format&fit=crop&q=80",
            ],
        },
    },
    {
        id: "industrial-automation",
        slug: "industrial-automation",
        aliases: ["automation", "robotic-assembly-cell"],
        title: "Industrial Automation",
        subtitle: "High-Speed Robotic Assembly Cell & Quality Inspection",
        category: "Robotics & Control",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop&q=80",
        statsLeft: {
            label: "Uptime",
            value: "99.9%",
        },
        statsRight: {
            label: "Location",
            value: "Hosur, Tamil Nadu",
        },
        projectInfo: {
            eyebrow: "Engineering Process",
            title: "Project Info",
            description:
                "High-speed Industry 4.0 robotic assembly cell featuring integrated 3D computer vision inspection, 6-axis pick-and-place automation, and zero-defect sorting.",
            leftText:
                "Powered by Siemens S7-1500 PLCs and Cognex AI vision inspectors, delivering sub-millimeter surface defect detection at speeds exceeding 120 units per minute.",
            rightText:
                "Operating continuously with 99.9% verified uptime in Hosur manufacturing facilities, synchronized live via OPC-UA to cloud analytics dashboards.",
            images: [
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1200&auto=format&fit=crop&q=80",
            ],
        },
    },
    {
        id: "embedded-iot",
        slug: "embedded-iot",
        aliases: ["embedded", "embedded-systems-iot"],
        title: "Embedded Systems & IoT",
        subtitle: "Ultra Low-Latency Industrial Edge Controller",
        category: "Hardware & Firmware",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80",
        statsLeft: {
            label: "Latency",
            value: "< 5 ms",
        },
        statsRight: {
            label: "Location",
            value: "Bangalore, Karnataka",
        },
        projectInfo: {
            eyebrow: "Engineering Process",
            title: "Project Info",
            description:
                "Ultra low-latency industrial edge gateway platform powered by dual-core ARM Cortex-M7 microcontrollers running FreeRTOS with hardware-level cryptographic security.",
            leftText:
                "Delivers sub-5ms response latency across dual CAN-FD and RS485 industrial fieldbuses, enclosed in an IP67 ruggedized DIN-rail aluminum housing.",
            rightText:
                "Engineered in Bangalore for high-reliability telemetry monitoring in extreme ambient environments ranging from -40°C to +85°C with OTA firmware security.",
            images: [
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&auto=format&fit=crop&q=80",
            ],
        },
    },
    {
        id: "coconut-harvester",
        slug: "coconut-harvester",
        aliases: ["engineering", "product-rnd", "product-rnd-cae"],
        title: "Coconut Harvester",
        subtitle: "Robotic Tree-Climbing & Automated Harvester",
        category: "Agricultural Automation & Design",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&auto=format&fit=crop&q=80",
        statsLeft: {
            label: "Reach",
            value: "45 Feet",
        },
        statsRight: {
            label: "Location",
            value: "Pollachi, Tamil Nadu",
        },
        projectInfo: {
            eyebrow: "Engineering Process",
            title: "Project Info",
            description:
                "Autonomous agricultural tree-climber engineered to safely scale palm trees up to 45 feet, perform automated branch trimming, and harvest with wireless precision.",
            leftText:
                "Features a self-adjusting radial grip mechanism accommodating variable trunk contours, driven by high-torque electric motors with fail-safe descent braking.",
            rightText:
                "Field tested in Pollachi, Tamil Nadu, reducing harvesting hazards while boosting yield efficiency via live 2.4GHz wireless video telemetry.",
            images: [
                "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=1200&auto=format&fit=crop&q=80",
            ],
        },
    },
    {
        id: "3-wheeler-vehicle",
        slug: "3-wheeler-vehicle",
        aliases: ["healthcare", "healthcare-robotics", "3-wheeler"],
        title: "3-Wheeler Vehicle",
        subtitle: "Modular Electric Commercial Vehicle Platform",
        category: "Electric Mobility & Bio-Automation",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&auto=format&fit=crop&q=80",
        statsLeft: {
            label: "Payload",
            value: "800 kg",
        },
        statsRight: {
            label: "Location",
            value: "Coimbatore, Tamil Nadu",
        },
        projectInfo: {
            eyebrow: "Engineering Process",
            title: "Project Info",
            description:
                "Modular 800 kg payload electric commercial vehicle platform designed for high-efficiency urban logistics, regenerative braking, and fleet IoT management.",
            leftText:
                "Built on a heavy-duty tubular steel chassis with a 7.2 kWh quick-swap LiFePO4 battery pack and 5.5 kW PMSM motor delivering 140 km range per charge.",
            rightText:
                "Deployed across Coimbatore for last-mile logistics, offering real-time battery health diagnostics, smart telemetry, and low operating overhead.",
            images: [
                "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&auto=format&fit=crop&q=80",
            ],
        },
    },
];

export default function ProjectDetail() {
    const params = useParams();
    const searchParams = useSearchParams();
    const urlSlug = params?.slug || searchParams?.get("project") || searchParams?.get("slug");

    const matchedProject = urlSlug
        ? projectsData.find(
            (p) =>
                p.slug === urlSlug ||
                p.id === urlSlug ||
                (p.aliases && p.aliases.includes(urlSlug))
        )
        : null;

    const selectedProject = matchedProject || projectsData[0];

    return (
        <main className="bg-white overflow-hidden min-h-screen flex flex-col justify-between">
            {/* ================= HERO SECTION (EXACTLY MATCHING SCREENSHOT) ================= */}
            <section className="relative z-20 h-screen min-h-[700px] w-full overflow-hidden bg-[#090B10]">
                {/* DYNAMIC BACKGROUND IMAGE WITH GRADIENT OVERLAYS */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedProject.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 z-10 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${selectedProject.image}')`,
                        }}
                    >
                        {/* Dark Vignette Overlay */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

                        {/* Top Gradient */}
                        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />

                        {/* Bottom Dark Gradient Fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#090B10] via-[#090B10]/80 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* NAVBAR OVERLAY */}
                <div className="relative z-50">
                    <Navbar />
                </div>

                {/* HERO CONTENT CONTAINER */}
                <div className="relative z-20 flex h-full w-full flex-col justify-between px-8 sm:px-14 md:px-20 pt-28 pb-16 mx-auto max-w-[1500px]">

                    {/* MIDDLE METADATA PLACEMENT (FLOATING LEFT & RIGHT EXACTLY AS SCREENSHOT) */}
                    <div className="flex items-center justify-between w-full my-auto">
                        {/* LEFT METADATA: LABEL & VALUE */}
                        <motion.div
                            key={`left-${selectedProject.id}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-12 sm:gap-24"
                        >
                            <span className="text-sm sm:text-base font-normal text-white/80">
                                {selectedProject.statsLeft.label}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-white">
                                {selectedProject.statsLeft.value}
                            </span>
                        </motion.div>

                        {/* RIGHT METADATA: LABEL & VALUE */}
                        <motion.div
                            key={`right-${selectedProject.id}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-12 sm:gap-24"
                        >
                            <span className="text-sm sm:text-base font-normal text-white/80">
                                {selectedProject.statsRight.label}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-white">
                                {selectedProject.statsRight.value}
                            </span>
                        </motion.div>
                    </div>

                    {/* BOTTOM BAR: LARGE TITLE (LEFT) & DISCUSS YOUR PROJECT CTA (RIGHT) */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between w-full">
                        {/* BOTTOM LEFT: LARGE PROJECT HEADING */}
                        <motion.div
                            key={`title-${selectedProject.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className="text-[48px] sm:text-[64px] md:text-[76px] font-semibold leading-[1.0] tracking-[-0.03em] text-white">
                                {selectedProject.title}
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3.5 rounded-full border border-white/40 bg-white/10 py-2 pl-6 pr-2 text-sm font-medium text-white shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/60"
                            >
                                <span className="text-white">Discuss your project</span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0274F5] text-white">
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ================= PROJECT INFO CARD (DIRECTLY BELOW HERO) ================= */}
            <ProjectInfo content={selectedProject.projectInfo} />

            {/* ================= PROJECT GALLERY (STANDALONE SECTION) ================= */}
            <ProjectGallery
                images={selectedProject.projectInfo?.images}
                title={selectedProject.title}
            />

            <EngineeringProcess />

            {/* ================= FOOTER AT BOTTOM ================= */}
            <FinalCTA />
        </main>
    );
}