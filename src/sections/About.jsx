import { Button } from "@/components/ui/button";
import { Award, Brain, Heart } from "lucide-react";

export default function About({ onShowDetails }) {
    return (
        <section id="about" className="py-16 sm:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="font-heading text-foreground mb-4 sm:mb-6">
                            Meet Dr. Sarah Johnson
                        </h2>
                        <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                            <p className="leading-relaxed">
                                Welcome to a space where your voice matters. I'm Dr. Sarah
                                Johnson, a licensed clinical psychologist with over 10 years
                                of experience helping individuals navigate life's challenges
                                with compassion and understanding.
                            </p>
                            <p className="leading-relaxed">
                                My approach centers on creating a warm, non-judgmental
                                environment where you can explore your thoughts and feelings
                                freely. I believe that every person has the inherent strength
                                to heal and grow, and my role is to guide and support you on
                                that journey.
                            </p>
                            <p className="leading-relaxed">
                                Whether you're dealing with anxiety, depression, relationship
                                issues, or simply seeking personal growth, I'm here to walk
                                alongside you with empathy, respect, and professional
                                expertise.
                            </p>
                        </div>
                        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Award className="w-4 h-4 text-accent flex-shrink-0" />
                                <span>Licensed Clinical Psychologist</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Brain className="w-4 h-4 text-accent flex-shrink-0" />
                                <span>Cognitive Behavioral Therapy</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button
                                variant="outline"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-accent text-accent-foreground hover:bg-accent/90 min-h-[48px] touch-manipulation"
                                onClick={onShowDetails}
                            >
                                More about the doc
                            </Button>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative max-w-md mx-auto lg:max-w-none">
                            <div className="aspect-square bg-gradient-to-br from-card to-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
                                <img
                                    src="professional-therapist-portrait--warm-and-welcomin.jpg"
                                    alt="Dr. Sarah Johnson - Licensed Therapist"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-full flex items-center justify-center">
                                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
