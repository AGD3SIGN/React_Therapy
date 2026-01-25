import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const RotatingText = ({ words, className }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Slower interval for better readability

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span
            className={`inline-grid relative ml-2 text-accent vertical-bottom ${className}`}
        >
            {/* Invisible layout reservation - stacking all words ensures container takes max width */}
            {words.map((word, i) => (
                <span
                    key={i}
                    className="col-start-1 row-start-1 opacity-0 pointer-events-none invisible"
                    aria-hidden="true"
                >
                    {word}
                </span>
            ))}

            {/* Visible animated text */}
            <span className="col-start-1 row-start-1 flex items-center justify-start">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                        key={words[index]}
                        initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
                        transition={{
                            y: { type: "spring", stiffness: 100, damping: 20 },
                            opacity: { duration: 0.3 },
                            filter: { duration: 0.3 },
                        }}
                        className="whitespace-nowrap origin-center"
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </span>
        </span>
    );
};
