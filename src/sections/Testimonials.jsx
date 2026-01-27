import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-heading text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
                        What Our Clients Say
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                        Real stories from individuals who have found healing and growth with
                        us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        {
                            text: "Dr. Johnson creates such a safe environment. I've never felt so heard and understood before.",
                            author: "Emily R.",
                            role: "Anxiety Therapy",
                        },
                        {
                            text: "The tools I've learned here have completely changed how I handle stress. Highly recommended.",
                            author: "Michael T.",
                            role: "Stress Management",
                        },
                        {
                            text: "Couples therapy saved our relationship. We communicate so much better now.",
                            author: "Sarah & David",
                            role: "Couples Counseling",
                        },
                    ].map((testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-accent/5 border-none shadow-sm h-full"
                        >
                            <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                                <Quote className="w-8 h-8 text-accent/20 mb-4" />
                                <p className="text-foreground/80 italic mb-6 leading-relaxed flex-grow">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                                        <span className="font-heading font-bold text-accent text-sm">
                                            {testimonial.author[0]}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-heading font-semibold text-foreground text-sm">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                    <div className="ml-auto flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-3 h-3 text-accent fill-accent"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
