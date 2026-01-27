import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Shield, Users } from "lucide-react";

export default function Features() {
    return (
        <section className="py-12 sm:py-16 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="font-heading text-card-foreground mb-3 sm:mb-4 px-4 sm:px-0">
                        Why Choose Safe Space Therapy?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                        We provide a supportive environment where healing and growth can
                        flourish naturally.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {[
                        {
                            icon: Heart,
                            title: "Compassionate Care",
                            description:
                                "Empathetic support tailored to your unique needs and journey.",
                        },
                        {
                            icon: Shield,
                            title: "Safe Environment",
                            description:
                                "A confidential, judgment-free space where you can be yourself.",
                        },
                        {
                            icon: Users,
                            title: "Expert Guidance",
                            description:
                                "Licensed professionals with years of experience in mental health.",
                        },
                        {
                            icon: Clock,
                            title: "Flexible Scheduling",
                            description:
                                "Convenient appointment times that work with your busy life.",
                        },
                    ].map((feature, index) => (
                        <Card
                            key={index}
                            className="text-center border-border hover:border-accent transition-colors duration-300"
                        >
                            <CardContent className="p-4 sm:p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="font-heading text-card-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
