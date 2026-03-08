import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
    HiOutlineCheckCircle,
    HiOutlineArrowRight,
    HiOutlineUserGroup,
    HiOutlineLightBulb,
    HiOutlineShieldCheck,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import CTASection from "@/components/ui/CTASection";
import { toolkitDetails } from "@/data/toolkitDetails";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = toolkitDetails[slug];

    if (!data) return {};

    return {
        title: `${data.title} | Web Developer in Udaipur`,
        description: data.heroDescription,
        keywords: data.keywords,
    };
}

export default async function ToolkitDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const data = toolkitDetails[slug];

    if (!data) {
        notFound();
    }

    const cardColors = ["#10b981", "#6366f1", "#f43f5e", "#f59e0b", "#a855f7", "#0ea5e9"];

    return (
        <PageTransition>
            <article className="pt-32 pb-24 relative">
                {/* Hero Header */}
                <header className="py-20 bg-surface-100/30 border-b border-surface-300 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/5 border border-teal-500/10 text-teal-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                            Technical Vertical
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-site-text mb-8 tracking-tighter leading-[0.9] text-balance">
                            {data.heroHeadline}
                        </h1>
                        <p className="text-site-text-muted text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium text-balance">
                            {data.heroDescription}
                        </p>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-20">

                        {/* LEFT COLUMN: Main Content */}
                        <div className="xl:col-span-2 space-y-16">
                            {/* Introduction */}
                            <section className="prose prose-lg prose-invert max-w-none text-balance">
                                {data.mainContent.map((paragraph, idx) => (
                                    <p key={idx} className="leading-relaxed font-medium mb-6 text-lg text-site-text-muted">{paragraph}</p>
                                ))}
                            </section>

                            {/* Features/Capabilities Section */}
                            <section>
                                <SectionHeading
                                    title="Strategic Capabilities"
                                    subtitle="Expert engineering focused on delivering specific technological advantages for your project."
                                    align="left"
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                    {data.features.map((feature, idx) => {
                                        const color = cardColors[idx % cardColors.length];
                                        return (
                                            <Card key={idx} className="p-8 border shadow-2xl bg-surface-100/50 transition-all hover:bg-surface-100" accentColor={color} style={{ borderColor: `${color}40`, boxShadow: `0 20px 40px -15px ${color}15` }}>
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center border" style={{ backgroundColor: `${color}1a`, color: color, borderColor: `${color}33` }}>
                                                        <HiOutlineCheckCircle className="w-7 h-7" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-site-text text-xl mb-3">{feature.title}</h3>
                                                        <p className="text-site-text-muted text-base leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </section>

                            {/* Working Process */}
                            <section>
                                <SectionHeading
                                    title="Deployment Roadmap"
                                    subtitle="A structured technical workflow from architectural design to final production launch."
                                    align="left"
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                                    {data.process.map((step, idx) => {
                                        const color = cardColors[(idx + 2) % cardColors.length];
                                        return (
                                            <Card key={idx} className="p-8 border shadow-2xl bg-surface-100/50 transition-all hover:bg-surface-100 relative overflow-hidden" accentColor={color} style={{ borderColor: `${color}40`, boxShadow: `0 20px 40px -15px ${color}15` }}>
                                                <div className="absolute top-4 right-4 text-5xl font-black opacity-10" style={{ color: color }}>{step.step}</div>
                                                <div className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border mb-6" style={{ backgroundColor: `${color}1a`, color: color, borderColor: `${color}33` }}>Step {step.step}</div>
                                                <h3 className="text-xl font-bold mb-3 text-site-text">{step.title}</h3>
                                                <p className="text-site-text-muted text-base leading-relaxed">{step.description}</p>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN: Sidebar */}
                        <aside className="xl:col-span-1 space-y-8">
                            {/* Contact Card */}
                            <Card className="p-8 border shadow-2xl bg-surface-100/50" accentColor="#14b8a6" style={{ borderColor: `#14b8a640`, boxShadow: `0 20px 40px -15px #14b8a615` }}>
                                <h3 className="text-2xl font-black text-site-text tracking-tight mb-6">Let's Engineer Your Vision</h3>
                                <p className="text-site-text-muted mb-8 font-medium">Ready to implement this technical stack for your project in Udaipur?</p>
                                <div className="flex flex-col gap-4">
                                    <Button href="/contact" className="w-full justify-center py-4 text-lg">Initialize Project</Button>
                                    <Button href="/toolkit" variant="outline" className="w-full justify-center py-4 border-surface-400/50">Back to Toolkit</Button>
                                </div>
                            </Card>

                            {/* Key Insights */}
                            <Card className="p-8 border shadow-2xl bg-surface-100/50" accentColor="#a855f7" style={{ borderColor: `#a855f740`, boxShadow: `0 20px 40px -15px #a855f715` }}>
                                <h3 className="text-xl font-black text-site-text mb-6">Common Questions</h3>
                                <div className="space-y-8">
                                    {data.faqs.map((faq, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <h4 className="font-bold text-site-text text-sm flex items-center gap-2">
                                                <HiOutlineLightBulb className="text-teal-400 shrink-0" />
                                                {faq.question}
                                            </h4>
                                            <p className="text-xs text-site-text-muted leading-relaxed font-medium pl-6 border-l border-teal-500/20">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-teal-500 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <HiOutlineShieldCheck className="w-12 h-12 mb-6 opacity-80" />
                                <h3 className="text-xl font-black mb-4 leading-tight">100% Secure & Optimized Implementation</h3>
                                <p className="text-sm opacity-90 font-medium mb-8">Every line of code is audited for security and performance benchmarks.</p>
                                <Button href="/experience" variant="secondary" className="w-full !bg-white !text-indigo-600 !border-none font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-lg hover:shadow-white/20">View Credentials</Button>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
            <CTASection />
        </PageTransition>
    );
}
