import { motion } from "framer-motion";
import { X, ArrowLeft, Calendar, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollLock } from "@/hooks/use-scroll-lock";

export default function AllResourcesView({ resources, onSelect, onClose }) {
    useScrollLock(true);

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
                        All Articles ({resources.length})
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
                        Wellness Resources
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Explore our complete collection of articles, guides, and insights for your mental health journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {resources.map((post, index) => (
                        <Card
                            key={index}
                            className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group flex flex-col h-full cursor-pointer"
                            onClick={() => onSelect(post)}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={post.image || "placeholder.svg"}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-3 flex-wrap">
                                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full whitespace-nowrap">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {post.date}
                                    </span>
                                </div>

                                <h3 className="font-heading text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <BookOpen className="w-3 h-3 flex-shrink-0" />
                                        <span>{post.readTime}</span>
                                    </span>
                                    <span className="text-sm font-medium text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Read
                                        <ArrowLeft className="w-3 h-3 rotate-180" />
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
