import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/rotating-text";
import heroImage from "@/assets/hero-image.jpg";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[100vh] w-full flex items-center overflow-hidden pt-20"
        >
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="font-heading text-balance mb-6 sm:mb-8 text-foreground text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                            A Space Created for <br />
                            You to Be{" "}
                            <RotatingText
                                words={["Respected", "Understood", "Supported"]}
                                className="inline-block text-left"
                            />
                        </h1>
                        <p className="text-pretty text-muted-foreground mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl">
                            Professional therapy services in a welcoming, trustworthy
                            environment where you can feel comfortable to open up and speak
                            freely. Your journey to wellness starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium h-12 px-8 text-base touch-manipulation"
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Book a Session
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent h-12 px-8 text-base touch-manipulation"
                                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Learn More
                            </Button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-border flex items-center justify-center lg:justify-start gap-8 sm:gap-12">
                            <div>
                                <p className="font-heading text-3xl font-bold text-foreground">10+</p>
                                <p className="text-sm text-muted-foreground">Years Experience</p>
                            </div>
                            <div>
                                <p className="font-heading text-3xl font-bold text-foreground">500+</p>
                                <p className="text-sm text-muted-foreground">Clients Helped</p>
                            </div>
                            <div>
                                <p className="font-heading text-3xl font-bold text-foreground">5.0</p>
                                <p className="text-sm text-muted-foreground">Star Rating</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:h-full flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
                            <img
                                src={heroImage}
                                alt="Therapy session environment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
