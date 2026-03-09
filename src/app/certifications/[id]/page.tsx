"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    HiOutlineTrophy,
    HiOutlineCheckBadge,
    HiOutlineIdentification,
    HiOutlineCalendar,
    HiOutlineArrowLeft,
    HiOutlineShieldCheck,
    HiOutlineDocumentText,
    HiOutlineShare,
    HiOutlineArrowDownTray,
    HiOutlineEye
} from "react-icons/hi2";
import { certifications, siteConfig } from "@/data/site";
import PageTransition from "@/components/ui/PageTransition";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CertificationDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [imageError, setImageError] = useState(false);

    // Extract ID and find certification
    const id = params.id as string;
    const certIndex = parseInt(id.replace("cert-", "")) - 1;
    const cert = certifications[certIndex];

    if (!cert) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Certification Not Found</h1>
                <Button onClick={() => router.push("/certifications")}>Back to Certifications</Button>
            </div>
        );
    }

    const isPdf = cert.image.toLowerCase().endsWith('.pdf');
    const accentColor = ["#10b981", "#6366f1", "#f43f5e", "#f59e0b", "#a855f7", "#0ea5e9"][certIndex % 6];

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Navigation */}
                    <button
                        onClick={() => router.push("/certifications")}
                        className="group flex items-center gap-2 text-site-text-muted hover:text-teal-400 transition-colors mb-12"
                    >
                        <HiOutlineArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold text-sm uppercase tracking-widest">Back to Gallery</span>
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Certificate Preview */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-100/50 border border-surface-300 shadow-2xl group">
                                {isPdf || imageError ? (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                        <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
                                            {isPdf ? (
                                                <HiOutlineDocumentText className="w-12 h-12" />
                                            ) : (
                                                <HiOutlineTrophy className="w-12 h-12" />
                                            )}
                                        </div>
                                        <h3 className="text-xl font-black mb-2" style={{ color: accentColor }}>
                                            {isPdf ? "PDF Document" : "Preview Unavailable"}
                                        </h3>
                                        <p className="text-sm text-site-text-muted max-w-xs mb-8">
                                            {isPdf
                                                ? "This certification is provided as a PDF document. You can view or download the original file using the links provided."
                                                : "We couldn't load the visual preview for this certification. Please check the authenticity using the credential ID."}
                                        </p>
                                        <div className="flex flex-wrap gap-4 justify-center">
                                            <Button href={cert.image} external variant="primary" size="sm">
                                                <HiOutlineArrowDownTray className="w-4 h-4 mr-2" />
                                                Download {isPdf ? "PDF" : "Certificate"}
                                            </Button>
                                            <Button href={cert.image} external variant="outline" size="sm">
                                                <HiOutlineEye className="w-4 h-4 mr-2" />
                                                View Raw
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain p-4 md:p-8"
                                            priority
                                            onError={() => setImageError(true)}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </>
                                )}
                            </div>

                            {/* Verification Banner */}
                            <div className="p-6 rounded-2xl bg-teal-500/5 border border-teal-500/20 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                                    <HiOutlineShieldCheck className="w-6 h-6 text-teal-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-site-text tracking-tight uppercase">Verified Credential</h4>
                                    <p className="text-xs text-site-text-muted">This certificate has been issued by {cert.platform} and is a valid professional credential.</p>
                                </div>
                            </div>
                        </div>

                        {/* Certificate Info */}
                        <div className="lg:col-span-5 flex flex-col pt-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-200/50 border border-surface-300 w-fit mb-6">
                                <HiOutlineCheckBadge className="w-4 h-4" style={{ color: accentColor }} />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none text-site-text-muted">
                                    {cert.platform}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight">
                                {cert.title}
                            </h1>

                            <div className="space-y-6 mb-10">
                                <p className="text-site-text-muted leading-relaxed font-medium">
                                    {cert.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-surface-100/50 border border-surface-300">
                                        <div className="flex items-center gap-2 mb-1 text-site-text-muted opacity-60">
                                            <HiOutlineCalendar className="w-3.5 h-3.5" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Date Issued</span>
                                        </div>
                                        <div className="text-sm font-black">{cert.year}</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-surface-100/50 border border-surface-300">
                                        <div className="flex items-center gap-2 mb-1 text-site-text-muted opacity-60">
                                            <HiOutlineIdentification className="w-3.5 h-3.5" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Credential ID</span>
                                        </div>
                                        <div className="text-sm font-mono font-bold tracking-tighter truncate">{cert.credentialId}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto space-y-4 pt-10 border-t border-surface-300/50">
                                <Button
                                    href={isPdf ? cert.image : "#"}
                                    external={isPdf}
                                    className="w-full py-4 rounded-2xl"
                                >
                                    {isPdf ? "Open Original Document" : "Verify Authenticity"}
                                </Button>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: cert.title,
                                                    text: `Check out my certification: ${cert.title} from ${cert.platform}`,
                                                    url: window.location.href
                                                });
                                            }
                                        }}
                                        className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-surface-200/50 border border-surface-300 hover:bg-surface-200 transition-colors text-xs font-bold uppercase tracking-wider"
                                    >
                                        <HiOutlineShare className="w-4 h-4" />
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About the platform */}
                    <div className="mt-24 p-10 rounded-[2.5rem] bg-navy-950/40 border border-navy-900 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] pointer-events-none" />
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl font-black mb-4">About {cert.platform}</h2>
                                <p className="text-site-text-muted leading-relaxed font-medium text-sm">
                                    This certification was earned through rigorous training and evaluation on the {cert.platform} platform.
                                    It validates specialized skills and commitment to industry standards in {cert.title.split(' ')[0]} and related fields.
                                </p>
                            </div>
                            <div className="flex justify-start md:justify-end gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-black gradient-text mb-1">100%</div>
                                    <div className="text-[10px] uppercase font-black tracking-widest text-site-text-muted">Verified</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black gradient-text mb-1">2024</div>
                                    <div className="text-[10px] uppercase font-black tracking-widest text-site-text-muted">Standards</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
