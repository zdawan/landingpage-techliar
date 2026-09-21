"use client";

import { motion } from "framer-motion";
import { Diamond, Phone, Mail, MapPin, ExternalLink, Clock } from "lucide-react";

export default function Contactdetails() {
    const address = "No. 16, Site no 13, 2nd St, Jothi Nagar, Masakali Palayam, Coimbatore, Tamil Nadu 641015";
    const mapQuery = "No. 16, Site no 13, 2nd St, Jothi Nagar, Masakali Palayam, Coimbatore, Tamil Nadu 641015";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

    const contacts = [
        {
            name: "Parthiban Gnanasambandam",
            role: "(Head- Business Development)",
            phone: "+91-7838319290",
            email: "Parthiban.Gnanasambandam@techlair.com",
        },
        {
            name: "Deepankumar Jeganathan",
            role: "(Head- Operations)",
            phone: "+91-9110061650",
            email: "Deepankumar.J@techlair.com",
        },
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-10 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-[1280px]">

                {/* ================= STANDARD SECTION HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-14 flex flex-col items-center text-center"
                >
                    {/* EYEBROW */}
                    <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7075]">
                        <Diamond
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#0274F5]"
                        />
                        <span>Contact Us</span>
                    </div>

                    {/* SECTION TITLE */}
                    <h2 className="max-w-[700px] text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[50px] md:text-[56px]">
                        Get In Touch With Us
                    </h2>
                </motion.div>

                {/* ================= MAIN CONTENT GRID ================= */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">

                    {/* LEFT CONTACT DETAILS CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col justify-between rounded-[28px] border border-[#EBEBEB] bg-[#FAF9F5] p-8 sm:p-12 shadow-[0_12px_45px_rgba(0,0,0,0.03)] lg:col-span-5"
                    >
                        <div>
                            <h3 className="text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-[34px]">
                                Contact Us
                            </h3>
                            <p className="mt-3 text-base text-[#45494D] sm:text-lg leading-[1.6]">
                                Feel free to contact and we assure you the best!
                            </p>

                            <div className="mt-8 space-y-8">
                                {contacts.map((contact, index) => (
                                    <div key={index} className="space-y-3">
                                        <div>
                                            <h4 className="text-lg font-medium text-[#111111] sm:text-xl">
                                                {contact.name}
                                            </h4>
                                            <p className="mt-1 text-xs font-semibold tracking-[0.1em] text-[#0274F5] uppercase">
                                                {contact.role}
                                            </p>
                                        </div>

                                        <div className="mt-3 flex flex-col gap-2.5 text-base text-[#45494D] sm:text-lg">
                                            <a
                                                href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                                                className="group flex items-center gap-3.5 transition-colors hover:text-[#0274F5]"
                                            >
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0274F5] border border-[#E5E5E5] transition-all group-hover:bg-[#0274F5] group-hover:border-[#0274F5] group-hover:text-white shadow-sm">
                                                    <Phone className="h-4 w-4" />
                                                </span>
                                                <span className="font-regular">{contact.phone}</span>
                                            </a>

                                            <a
                                                href={`mailto:${contact.email}`}
                                                className="group flex items-center gap-3.5 transition-colors hover:text-[#0274F5]"
                                            >
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0274F5] border border-[#E5E5E5] transition-all group-hover:bg-[#0274F5] group-hover:border-[#0274F5] group-hover:text-white shadow-sm">
                                                    <Mail className="h-4 w-4" />
                                                </span>
                                                <span className="font-regular break-all text-sm sm:text-base">{contact.email}</span>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT MAP EMBED CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="relative min-h-[420px] sm:min-h-[500px] overflow-hidden rounded-[28px] border border-[#EBEBEB] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.03)] lg:col-span-7"
                    >
                        {/* FLOATING OPEN IN MAPS BADGE */}
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-5 left-5 z-20 flex items-center gap-2 rounded-full border border-black/10 bg-white/95 px-4 py-2.5 text-xs font-semibold tracking-wider text-[#111111] uppercase shadow-md backdrop-blur-md transition-all hover:bg-white hover:shadow-lg"
                        >
                            <span>Open in Maps</span>
                            <ExternalLink className="h-3.5 w-3.5 text-[#0274F5]" />
                        </a>

                        {/* GOOGLE MAP IFRAME */}
                        <iframe
                            title="Office Location Map"
                            src={mapEmbedUrl}
                            className="h-full w-full min-h-[420px] sm:min-h-[500px] border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
