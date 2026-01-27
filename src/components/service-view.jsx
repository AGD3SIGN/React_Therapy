import { motion } from "framer-motion";
import { X, ArrowRight, Calendar, Check, Wallet, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { Card, CardContent } from "@/components/ui/card";

export default function ServiceView({ service, onClose }) {
    useScrollLock(!!service);
    if (!service) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-card w-full max-w-5xl rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh]"
            >
                {/* Header Section */}
                <div className="relative bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 p-8 sm:p-10 border-b border-accent/10">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 hover:bg-white/50"
                        onClick={onClose}
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </Button>

                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-accent/20 shrink-0">
                            <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-accent font-medium text-sm">
                                <Shield className="w-4 h-4" />
                                <span>Professional Therapy</span>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                                {service.title}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-xl">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
                        {/* Left Column: Details & Approach */}
                        <div className="lg:col-span-2 p-8 sm:p-10 space-y-10">
                            <div className="space-y-4">
                                <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                                    <Star className="w-5 h-5 text-accent" />
                                    Our Approach
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Our {service.title.toLowerCase()} is designed to provide a safe, structured space for you to explore challenges and develop effective coping strategies. We work together to set goals and track progress at a pace that feels right for you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="font-heading text-xl font-bold text-foreground">What You Can Expect</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <Card key={index} className="bg-muted/30 border-none shadow-none hover:bg-accent/5 transition-colors">
                                            <CardContent className="p-4 flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm text-accent">
                                                    <Check className="w-4 h-4" />
                                                </div>
                                                <span className="font-medium text-foreground/90 mt-1">{feature}</span>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Logistics & Pricing */}
                        <div className="lg:col-span-1 bg-muted/10 p-8 sm:p-10 space-y-4 h-full">
                            <div className="space-y-4">
                                <h3 className="font-heading text-xl font-bold text-foreground">Session Details</h3>

                                <div className="space-y-4">
                                    <div className="bg-background rounded-xl p-5 border border-border/50 shadow-sm flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                            <Wallet className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-1">Pricing</p>
                                            <p className="font-heading font-bold text-lg text-foreground">{service.price}</p>
                                        </div>
                                    </div>

                                    <div className="bg-background rounded-xl p-5 border border-border/50 shadow-sm flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-1">Duration</p>
                                            <p className="font-heading font-bold text-lg text-foreground">50 minute sessions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border/50">
                                <p className="text-sm text-muted-foreground text-center mb-6">
                                    Ready to start your journey? Book a session today.
                                </p>
                                <Button
                                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                                    onClick={() => {
                                        onClose();
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    Book Session
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <div className="mt-4 text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
