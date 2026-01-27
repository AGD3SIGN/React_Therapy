import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data/services";

export default function Services({ onSelectService }) {
    return (
        <section id="services" className="py-16 sm:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-heading text-card-foreground mb-3 sm:mb-4 px-4 sm:px-0">
                        Therapy Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                        Comprehensive mental health support tailored to your unique needs
                        and circumstances.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                    {servicesData.map((service, index) => (
                        <Card
                            key={index}
                            className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group h-full"
                        >
                            <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                    <service.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="font-heading text-card-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-4">
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="text-sm text-muted-foreground flex items-center gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-t border-border pt-4 mt-auto">
                                    <p className="text-sm font-medium text-accent mb-3">
                                        {service.price}
                                    </p>
                                    <Button
                                        size="sm"
                                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 min-h-[44px] touch-manipulation"
                                        onClick={() => onSelectService(service)}
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
                    <p className="text-muted-foreground mb-4 sm:mb-6">
                        Not sure which service is right for you? Let's discuss your needs in
                        a free consultation.
                    </p>
                    <Button
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 min-h-[48px] touch-manipulation"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Schedule Free Consultation
                    </Button>
                </div>
            </div>
        </section>
    );
}
