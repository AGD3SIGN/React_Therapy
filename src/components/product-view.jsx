import { motion } from "framer-motion";
import { X, ArrowLeft, ShoppingCart, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductView({ product, onClose }) {
    if (!product) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background overflow-y-auto"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 sticky top-0 bg-background/80 backdrop-blur-md p-4 -mx-4 z-10">
                    <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all" onClick={onClose}>
                        <ArrowLeft className="w-5 h-5" />
                        Back to Shop
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={onClose}>
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Image */}
                    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-muted/20">
                        <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        {product.badge && (
                            <div className="absolute top-6 left-6 bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                                {product.badge}
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center text-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-current" : "text-muted-foreground"}`} />
                                    ))}
                                </div>
                                <span className="text-muted-foreground text-lg">
                                    {product.rating} ({product.reviews} reviews)
                                </span>
                            </div>
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-3xl font-bold text-foreground">{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-muted-foreground line-through decoration-destructive/50">{product.originalPrice}</span>
                                )}
                            </div>
                        </div>

                        <div className="prose dark:prose-invert text-lg text-muted-foreground leading-relaxed">
                            <p>{product.description}</p>
                            <p>
                                Experience premium quality and thoughtful design. This product is crafted to support your wellness journey, using sustainable materials and ethical production methods.
                            </p>
                        </div>

                        <div className="space-y-4 pt-6 border-t border-border">
                            <div className="flex gap-3 items-center text-foreground/80">
                                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                </div>
                                <span>In Stock & Ready to Ship</span>
                            </div>
                            <div className="flex gap-3 items-center text-foreground/80">
                                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                </div>
                                <span>30-Day Satisfaction Guarantee</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <Button size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-lg">
                                Add to Cart - {product.price}
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 w-14 p-0 border-accent/50 text-accent hover:bg-accent/10">
                                <ShoppingCart className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
