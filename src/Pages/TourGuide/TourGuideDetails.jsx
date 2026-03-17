import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import teamMembers from "../../Data/Team.json"
import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner'
import { fadeInUp, fadeInRight, scaleIn, containerVariants } from '../../Animations/variants'

const TourGuideDetails = () => {
    const { id } = useParams();
    const member = teamMembers.find(m => m.id === parseInt(id));

    if (!member) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-secondary">Guide not found</h2>
                <Link to="/tourguide" className="text-yellow mt-4 inline-block hover:underline">Back to Guides</Link>
            </div>
        );
    }

    const breadcrumbs = [
        { label: "Home", url: "/" },
        { label: "Tour Guide", url: "/tourguide" },
        { label: member.name, url: `/tourguide/${member.id}` },
    ];

    const infoItems = [
        { label: "Age", value: member.Age, icon: "mdi:account-clock" },
        { label: "Experience", value: member.Experiences, icon: "mdi:briefcase-check" },
        { label: "Location", value: member.Location, icon: "mdi:map-marker" },
        { label: "Education", value: member.Education, icon: "mdi:school" },
        { label: "Email", value: member.Email, icon: "mdi:email" },
        { label: "Phone", value: member.Contact, icon: "mdi:phone" },
    ];

    return (
        <div className="bg-white">
            <CommonBanner
                title="Guide Profile"
                bgImage={sectionbanner}
                breadcrumbs={breadcrumbs}
            />

            <section className="py-20 px-[5%] lg:px-[10%]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Image Sidebar - Sticky on Desktop */}
                        <motion.div 
                            className="lg:col-span-4 lg:sticky lg:top-32 self-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInRight}
                        >
                            <div className="relative group">
                                <div className="rounded-[40px] overflow-hidden border-8 border-[#f0fefe] shadow-2xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full aspect-4/5 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Social Floating Bar */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white p-4 rounded-2xl shadow-xl border border-secondary/5">
                                    <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-yellow transition-colors duration-300">
                                        <Icon icon="mdi:facebook" width="20" />
                                    </Link>
                                    <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-yellow transition-colors duration-300">
                                        <Icon icon="mdi:twitter" width="20" />
                                    </Link>
                                    <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-yellow transition-colors duration-300">
                                        <Icon icon="mdi:instagram" width="20" />
                                    </Link>
                                    <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-yellow transition-colors duration-300">
                                        <Icon icon="mdi:linkedin" width="20" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Area */}
                        <motion.div
                            className="lg:col-span-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">{member.name}</h1>
                                <span className="text-yellow font-semibold uppercase tracking-widest text-sm bg-yellow/5 px-4 py-1.5 rounded-full inline-block">
                                    Professional {member.jobtitle}
                                </span>
                            </div>

                            <p className="text-lg text-secondary/70 leading-relaxed mb-10 italic">
                                "{member.expertise}"
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {infoItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={scaleIn}
                                        className="flex items-center gap-4 p-5 bg-[#f0fefe] rounded-2xl border border-secondary/5 group hover:border-yellow/30 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-yellow shadow-sm group-hover:bg-yellow group-hover:text-white transition-colors duration-300 shrink-0">
                                            <Icon icon={item.icon} width="24" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-secondary/40 font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                                            <p className="text-secondary font-semibold">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="space-y-12">
                                {/* Skills Section */}
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-secondary flex items-center gap-2">
                                        <span className="w-8 h-1 bg-yellow inline-block rounded-full" /> Skills & Expertise
                                    </h2>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {member.skills.map((skill, i) => (
                                            <span key={i} className="px-5 py-2 bg-secondary/5 rounded-full text-secondary/60 text-sm font-medium hover:bg-secondary hover:text-white transition-colors cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Certifications Section */}
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-secondary flex items-center gap-2">
                                        <span className="w-8 h-1 bg-yellow inline-block rounded-full" /> Professional Certifications
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {member.certifications.map((cert, i) => (
                                            <div key={i} className="flex gap-4 p-4 border border-secondary/5 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all">
                                                <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center text-yellow shrink-0">
                                                    <Icon icon={cert.icon} width="20" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-secondary text-sm">{cert.title}</h4>
                                                    <p className="text-xs text-secondary/60 leading-tight mt-1">{cert.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TourGuideDetails
