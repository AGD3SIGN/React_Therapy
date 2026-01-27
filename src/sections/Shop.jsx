import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, ShoppingCart, Star } from "lucide-react";
import { productsData } from "@/data/products";

export default function Shop({ onSelectProduct, onShowAll }) {
    return (
        <section id="shop" className="py-16 sm:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-heading text-card-foreground mb-3 sm:mb-4 px-4 sm:px-0">
                        Wellness Shop
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                        Carefully curated tools and resources to support your mental
                        health journey at home.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                    {productsData.map((product, index) => (
                        <Card
                            key={index}
                            className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group h-full flex flex-col"
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

                                <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed flex-grow">
                                    {product.description}
                                </p>

                                <div className="flex items-center gap-1 mb-3 flex-wrap">
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
                                    <span className="text-xs text-muted-foreground ml-1 whitespace-nowrap">
                                        {product.rating} ({product.reviews})
                                    </span>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-medium text-accent">
                                            {product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-xs text-muted-foreground line-through">
                                                {product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-3 mt-auto">
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        className="flex-1 bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground group/view min-h-[44px] touch-manipulation"
                                        onClick={() => onSelectProduct(product)}
                                    >
                                        <Eye className="w-4 h-4 mr-2" />
                                        View
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 group/btn min-h-[44px] touch-manipulation"
                                    >
                                        <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                                        Add
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
                    <p className="text-muted-foreground mb-4 sm:mb-6">
                        All products are carefully selected to complement your therapy
                        journey and support your mental wellness.
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent min-h-[48px] touch-manipulation"
                        onClick={onShowAll}
                    >
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    );
}
