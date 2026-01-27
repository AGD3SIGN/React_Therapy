export default function Footer() {
    return (
        <footer className="py-8 sm:py-12 bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="font-heading text-lg font-bold text-card-foreground">
                            Safe Space Therapy
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                            Your journey to healing starts here.
                        </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Safe Space Therapy. All rights
                        reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
