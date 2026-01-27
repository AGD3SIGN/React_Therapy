import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ShoppingCart, Star, Filter, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollLock } from "@/hooks/use-scroll-lock";

export default function AllProductsView({ products, onSelect, onClose }) {
    useScrollLock(true);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background overflow-y-auto"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                <div className="flex items-center justify-between mb-8 sticky top-0 bg-background/80 backdrop-blur-md p-4 -mx-4 z-10 border-b border-border/50">
                    <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all" onClick={onClose}>
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Button>
                    <div className="text-sm font-medium text-muted-foreground hidden sm:block">
                        Shop ({products.length} Items)
                    </div>
                </div>

                <div className="mb-8">
                    <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
                        Wellness Shop
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                        Curated tools for your mental health journey.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full ${activeCategory === category
                                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                                        : "border-border hover:bg-accent/10 hover:text-accent"
                                    }`}
                            >
                                {activeCategory === category && <Check className="w-3 h-3 mr-1" />}
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pb-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card
                                    className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group h-full flex flex-col cursor-pointer"
                                    onClick={() => onSelect(product)}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={product.image || "placeholder.svg"}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {product.badge && (
                                            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                                                {product.badge}
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="p-3 sm:p-4 flex flex-col flex-1 pb-6">
                                        <h3 className="font-heading text-card-foreground mb-2 group-hover:text-accent transition-colors leading-tight">
                                            {product.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-3">
                                            {product.category}
                                        </p>

                                        <div className="flex items-center gap-1 mb-3 flex-wrap mt-auto">
                                            {/* Rating stars could go here */}
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 ${i < Math.floor(product.rating)
                                                            ? "fill-accent text-accent"
                                                            : "text-muted-foreground"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-accent">
                                                {product.price}
                                            </span>
                                            <Button size="sm" variant="secondary" className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground h-8">
                                                View
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
