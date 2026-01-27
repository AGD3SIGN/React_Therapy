import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-20 bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-heading text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
                        Get in Touch
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                        Take the first step towards a healthier you. Reach out today for a
                        consultation or to ask any questions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-6 sm:space-y-8 flex flex-col h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <Card className="border-border bg-card hover:border-accent transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                                        <Phone className="w-5 h-5 text-accent" />
                                    </div>
                                    <h3 className="font-heading font-semibold mb-1">Phone</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Mon-Fri from 9am to 6pm
                                    </p>
                                    <a
                                        href="tel:+15550000000"
                                        className="text-accent font-medium hover:underline mt-2 inline-block"
                                    >
                                        (555) 000-0000
                                    </a>
                                </CardContent>
                            </Card>

                            <Card className="border-border bg-card hover:border-accent transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                                    <p className="text-muted-foreground text-sm">
                                        We'll respond within 24 hours
                                    </p>
                                    <a
                                        href="mailto:hello@safespace.com"
                                        className="text-accent font-medium hover:underline mt-2 inline-block"
                                    >
                                        hello@safespace.com
                                    </a>
                                </CardContent>
                            </Card>

                            <div className="sm:col-span-2">
                                <Card className="border-border bg-card hover:border-accent transition-colors">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-semibold mb-1">
                                                Office Location
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-2">
                                                123 Wellness Blvd, Suite 400
                                                <br />
                                                Anytown, ST 12345
                                            </p>
                                            <div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded w-fit">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                                                <span>Open today until 6:00 PM</span>
                                            </div>
                                            <div className="mt-2 text-xs text-muted-foreground">
                                                <span>Closed</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Crisis Support Card */}
                            <div className="sm:col-span-2 rounded-xl border border-orange-200 bg-orange-50 p-6">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                        <Heart className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-heading font-semibold text-orange-900 mb-1">
                                            Crisis Support Available 24/7
                                        </h4>
                                        <p className="text-orange-800/80 text-sm">
                                            If you're in crisis, you're not alone. Immediate help is available.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                                    <div>
                                        <p className="text-2xl font-bold text-orange-600 mb-1">988</p>
                                        <p className="text-xs font-medium text-orange-900">Crisis Lifeline</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-orange-600 mb-1">HOME to 741741</p>
                                        <p className="text-xs font-medium text-orange-900">Crisis Text Line</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-orange-600 mb-1">911</p>
                                        <p className="text-xs font-medium text-orange-900">Emergency Services</p>
                                    </div>
                                </div>

                                <div className="text-center border-t border-orange-200/60 pt-4">
                                    <p className="text-xs text-orange-800/70">
                                        Additional support: NAMI (800) 950-6264 • SAMHSA (800) 662-4357
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        {/* Contact Form */}
                        <Card className="border-border/50 h-full bg-background shadow-xl">
                            <CardContent className="p-6 sm:p-8">
                                <form className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="first-name" className="text-foreground/80">First Name</Label>
                                                <Input
                                                    id="first-name"
                                                    placeholder="Jane"
                                                    className="bg-muted/30 border-border/50 focus-visible:ring-accent"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="last-name" className="text-foreground/80">Last Name</Label>
                                                <Input
                                                    id="last-name"
                                                    placeholder="Doe"
                                                    className="bg-muted/30 border-border/50 focus-visible:ring-accent"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-foreground/80">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="jane@example.com"
                                                    className="bg-muted/30 border-border/50 focus-visible:ring-accent"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-foreground/80">Phone</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="(555) 000-0000"
                                                    className="bg-muted/30 border-border/50 focus-visible:ring-accent"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="topic" className="text-foreground/80">Topic</Label>
                                            <select
                                                id="topic"
                                                className="flex h-10 w-full rounded-md border border-border/50 bg-muted/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value="">Select a topic...</option>
                                                <option value="consultation">Free Consultation</option>
                                                <option value="therapy">Therapy Session</option>
                                                <option value="billing">Billing & Insurance</option>
                                                <option value="other">Other Inquiry</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-foreground/80">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="How can we help you today?"
                                                className="min-h-[140px] bg-muted/30 border-border/50 focus-visible:ring-accent resize-none"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-medium touch-manipulation shadow-md hover:shadow-lg transition-all"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Map Embed - Full Width Bottom */}
                <Card className="border-border overflow-hidden w-full mt-12">
                    <div className="aspect-[21/9] w-full bg-muted/20">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11568.02645885231!2d-74.00898595!3d40.7107779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1677610488950!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        />
                    </div>
                </Card>
            </div>
        </section>
    );
}
