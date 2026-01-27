import { motion } from "framer-motion";
import { X, ArrowLeft, Award, GraduationCap, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollLock } from "@/hooks/use-scroll-lock";

export default function AboutView({ onClose }) {
    useScrollLock(true);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm overflow-y-auto"
        >
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-card border border-border rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 z-10"
                        onClick={onClose}
                    >
                        <X className="w-5 h-5" />
                    </Button>

                    <div className="grid grid-cols-1 md:grid-cols-5 min-h-[600px]">
                        {/* Sidebar / Image */}
                        <div className="md:col-span-2 bg-accent/10 relative">
                            <img
                                src="professional-therapist-portrait--warm-and-welcomin.jpg"
                                alt="Dr. Sarah Johnson"
                                className="w-full h-full object-cover absolute inset-0 opacity-50 md:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent md:hidden" />
                            <div className="absolute bottom-0 left-0 p-6 md:hidden">
                                <h2 className="font-heading text-2xl font-bold text-accent-foreground">Dr. Sarah Johnson</h2>
                                <p className="text-accent-foreground/80">Licensed Clinical Psychologist</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-3 p-6 sm:p-10 space-y-8 bg-card">
                            <div className="hidden md:block">
                                <h2 className="font-heading text-3xl font-bold text-foreground mb-1">Dr. Sarah Johnson</h2>
                                <p className="text-accent font-medium">Licensed Clinical Psychologist, PhD</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Heart className="w-5 h-5 text-accent" />
                                        <h3 className="font-heading text-lg font-bold">My Philosophy</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        I believe that therapy is a collaborative journey. It's not about "fixing" you, but rather uncovering the strengths and resilience you already possess. My approach is rooted in empathy, respect, and the belief that everyone deserves to feel heard and understood.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <GraduationCap className="w-5 h-5 text-accent" />
                                        <h3 className="font-heading text-lg font-bold">Education & Training</h3>
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                            <span>PhD in Clinical Psychology, Stanford University</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                            <span>Post-doctoral Fellowship, UCSF Medical Center</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                            <span>Certified Cognitive Behavioral Therapist</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Award className="w-5 h-5 text-accent" />
                                        <h3 className="font-heading text-lg font-bold">Specializations</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Anxiety & Panic", "Depression", "Trauma Recovery", "Relationship Issues", "Stress Management", "Self-Esteem"].map((spec) => (
                                            <span key={spec} className="px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={onClose}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
