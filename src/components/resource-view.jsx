import { motion } from "framer-motion";
import { X, ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourceView({ resource, onClose }) {
    if (!resource) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background overflow-y-auto"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 sticky top-0 bg-background/80 backdrop-blur-md p-4 -mx-4 z-10">
                    <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all" onClick={onClose}>
                        <ArrowLeft className="w-5 h-5" />
                        Back to Resources
                    </Button>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full" onClick={onClose}>
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <article className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                            {resource.category}
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {resource.date}
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {resource.readTime}
                        </span>
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
                        {resource.title}
                    </h1>

                    <div className="aspect-video w-full rounded-3xl overflow-hidden mb-10 shadow-xl">
                        <img
                            src={resource.image || "/placeholder.svg"}
                            alt={resource.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-muted-foreground text-xl leading-relaxed mb-10 border-l-4 border-accent pl-6 italic">
                        {resource.excerpt}
                    </div>

                    {/* Mock Content */}
                    <div className="space-y-6 text-foreground/80 leading-loose">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Understanding the Core Concepts</h2>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 my-6">
                            <li>Recognize the signs of stress early</li>
                            <li>Practice daily mindfulness exercises</li>
                            <li>Establish clear boundaries with others</li>
                            <li>Prioritize sleep and nutrition</li>
                        </ul>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                        </p>
                    </div>
                </article>
            </div>
        </motion.div>
    );
}
