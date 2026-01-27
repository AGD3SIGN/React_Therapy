import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { resourcesData } from "@/data/resources";

export default function Resources({ onSelectResource, onShowAll }) {
    return (
        <section id="blog" className="py-16 sm:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-heading text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
                        Mental Wellness Resources
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                        Explore our collection of articles, tips, and insights to support
                        your mental health journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                    {resourcesData.map((post, index) => (
                        <Card
                            key={index}
                            className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group h-full flex flex-col"
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

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <BookOpen className="w-3 h-3 flex-shrink-0" />
                                        <span>{post.readTime}</span>
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground h-auto font-medium group/btn min-h-[40px] touch-manipulation px-4"
                                        onClick={() => onSelectResource(post)}
                                    >
                                        Read More
                                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent min-h-[48px] touch-manipulation"
                        onClick={onShowAll}
                    >
                        View All Articles
                    </Button>
                </div>
            </div>
        </section>
    );
}
