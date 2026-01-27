import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Blog", href: "#blog" },
        { name: "Shop", href: "#shop" },
        { name: "Resources", href: "#resources" },
        { name: "Contact", href: "#contact" },
    ];

    const container = {
        hidden: { opacity: 0, x: "100%" },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                type: "spring",
                damping: 25,
                stiffness: 200
            }
        },
        exit: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen
                ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground" />
                        </div>
                        <span className="font-heading text-lg sm:text-xl font-bold text-foreground">
                            Safe Space
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            size="sm"
                            className="bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[9999] md:hidden bg-white dark:bg-zinc-950 flex flex-col pt-4 sm:pt-6 h-[100dvh]"
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {/* Header */}
                        <div className="px-4 sm:px-6 mb-8 flex items-center justify-between">
                            <span className="font-heading text-xl font-bold text-foreground">
                                Safe Space Therapy
                            </span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 -mr-2 text-foreground focus:outline-none"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="px-4 sm:px-6 space-y-2 flex-grow overflow-y-auto">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    variants={item}
                                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 flex items-center justify-between group ${link.name === "Home"
                                        ? "bg-accent/10 text-accent font-semibold"
                                        : "text-foreground hover:bg-accent/10 hover:text-accent"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <span className={`h-0.5 bg-accent rounded-full transition-all duration-300 ${link.name === "Home" ? "w-6" : "w-0 group-hover:w-6"}`} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Footer */}
                        <motion.div variants={item} className="p-6 mt-auto border-t border-border">
                            <Button
                                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-lg font-medium mb-6"
                                onClick={() => setIsOpen(false)}
                            >
                                Book a Session
                            </Button>

                            <div className="text-center space-y-1">
                                <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">
                                    Contact
                                </p>
                                <p className="text-foreground font-medium">
                                    (555) 123-4567
                                </p>
                                <a href="mailto:hello@safespacetherapy.com" className="text-muted-foreground text-sm block">
                                    hello@safespacetherapy.com
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
