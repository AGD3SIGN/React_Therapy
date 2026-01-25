import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Heart,
  Shield,
  Users,
  Clock,
  User,
  MessageCircle,
  Video,
  Calendar,
  Award,
  Brain,
  BookOpen,
  ArrowRight,
  ShoppingCart,
  Star,
  Quote,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { RotatingText } from "@/components/rotating-text";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-background">
          {/* Animated gradient blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-100/40 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-amber-100/30 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-rose-50/50 rounded-full blur-[80px] animate-pulse delay-700" />

          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-balance mb-6 sm:mb-8 text-foreground text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              A Space Created for <br />
              You to Be
              <RotatingText
                words={["Respected", "Understood", "Supported"]}
                className="inline-block"
              />
            </h1>
            <p className="text-pretty text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0 text-lg sm:text-xl">
              Professional therapy services in a welcoming, trustworthy
              environment where you can feel comfortable to open up and speak
              freely. Your journey to wellness starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium h-12 px-8 text-base touch-manipulation"
              >
                Book a Session
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent h-12 px-8 text-base touch-manipulation"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-card-foreground mb-3 sm:mb-4 px-4 sm:px-0">
              Why Choose Safe Space Therapy?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              We provide a supportive environment where healing and growth can
              flourish naturally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description:
                  "Empathetic support tailored to your unique needs and journey.",
              },
              {
                icon: Shield,
                title: "Safe Environment",
                description:
                  "A confidential, judgment-free space where you can be yourself.",
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description:
                  "Licensed professionals with years of experience in mental health.",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description:
                  "Convenient appointment times that work with your busy life.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-border hover:border-accent transition-colors duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-foreground mb-4 sm:mb-6">
                Meet Dr. Sarah Johnson
              </h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Welcome to a space where your voice matters. I'm Dr. Sarah
                  Johnson, a licensed clinical psychologist with over 10 years
                  of experience helping individuals navigate life's challenges
                  with compassion and understanding.
                </p>
                <p className="leading-relaxed">
                  My approach centers on creating a warm, non-judgmental
                  environment where you can explore your thoughts and feelings
                  freely. I believe that every person has the inherent strength
                  to heal and grow, and my role is to guide and support you on
                  that journey.
                </p>
                <p className="leading-relaxed">
                  Whether you're dealing with anxiety, depression, relationship
                  issues, or simply seeking personal growth, I'm here to walk
                  alongside you with empathy, respect, and professional
                  expertise.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Licensed Clinical Psychologist</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Brain className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Cognitive Behavioral Therapy</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="aspect-square bg-gradient-to-br from-card to-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/professional-therapist-portrait--warm-and-welcomin.jpg"
                    alt="Dr. Sarah Johnson - Licensed Therapist"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-card-foreground mb-3 sm:mb-4 px-4 sm:px-0">
              Therapy Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Comprehensive mental health support tailored to your unique needs
              and circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: User,
                title: "Individual Therapy",
                description:
                  "One-on-one sessions focused on your personal growth, healing, and mental wellness.",
                features: [
                  "Anxiety & Depression",
                  "Trauma Recovery",
                  "Life Transitions",
                  "Self-Esteem",
                ],
                price: "Starting at $150/session",
              },
              {
                icon: Users,
                title: "Couples Therapy",
                description:
                  "Strengthen your relationship through improved communication and understanding.",
                features: [
                  "Communication Skills",
                  "Conflict Resolution",
                  "Intimacy Issues",
                  "Pre-marital Counseling",
                ],
                price: "Starting at $200/session",
              },
              {
                icon: Video,
                title: "Virtual Sessions",
                description:
                  "Convenient online therapy sessions from the comfort of your own space.",
                features: [
                  "Secure Video Platform",
                  "Flexible Scheduling",
                  "Same Quality Care",
                  "Privacy Protected",
                ],
                price: "Same rates as in-person",
              },
              {
                icon: MessageCircle,
                title: "Group Therapy",
                description:
                  "Connect with others facing similar challenges in a supportive group setting.",
                features: [
                  "Anxiety Support Groups",
                  "Depression Recovery",
                  "Social Skills",
                  "Peer Support",
                ],
                price: "Starting at $75/session",
              },
              {
                icon: Calendar,
                title: "Intensive Sessions",
                description:
                  "Extended therapy sessions for deeper work and breakthrough moments.",
                features: [
                  "2-Hour Sessions",
                  "EMDR Therapy",
                  "Deep Trauma Work",
                  "Accelerated Healing",
                ],
                price: "Starting at $300/session",
              },
              {
                icon: Brain,
                title: "Specialized Programs",
                description:
                  "Targeted treatment programs for specific mental health conditions.",
                features: [
                  "CBT Programs",
                  "Mindfulness Training",
                  "Stress Management",
                  "Coping Strategies",
                ],
                price: "Custom pricing",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group h-full"
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-4 mt-auto">
                    <p className="text-sm font-medium text-accent mb-3">
                      {service.price}
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 min-h-[44px] touch-manipulation"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
            <p className="text-muted-foreground mb-4 sm:mb-6">
              Not sure which service is right for you? Let's discuss your needs
              in a free consultation.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 min-h-[48px] touch-manipulation"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
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
            {[
              {
                category: "Anxiety Management",
                title: "5 Breathing Techniques to Calm Your Mind",
                excerpt:
                  "Learn simple yet effective breathing exercises that can help reduce anxiety and bring immediate relief during stressful moments.",
                readTime: "4 min read",
                date: "Dec 15, 2024",
                image: "/peaceful-breathing-meditation.jpg",
              },
              {
                category: "Self-Care",
                title: "Building a Daily Mindfulness Practice",
                excerpt:
                  "Discover how to incorporate mindfulness into your everyday routine with practical tips and gentle guidance for beginners.",
                readTime: "6 min read",
                date: "Dec 12, 2024",
                image: "/peaceful-mindfulness-meditation.png",
              },
              {
                category: "Relationships",
                title: "Healthy Communication in Relationships",
                excerpt:
                  "Essential strategies for expressing your needs, listening actively, and building stronger connections with your loved ones.",
                readTime: "8 min read",
                date: "Dec 10, 2024",
                image: "/couple-talking-communication.jpg",
              },
              {
                category: "Depression Support",
                title: "Understanding Seasonal Affective Disorder",
                excerpt:
                  "Learn about the symptoms, causes, and effective treatments for seasonal depression to help you navigate the darker months.",
                readTime: "7 min read",
                date: "Dec 8, 2024",
                image: "/winter-light-therapy-wellness.jpg",
              },
              {
                category: "Stress Management",
                title: "Creating Boundaries for Better Mental Health",
                excerpt:
                  "Practical advice on setting healthy boundaries in work, relationships, and daily life to protect your emotional well-being.",
                readTime: "5 min read",
                date: "Dec 5, 2024",
                image: "/peaceful-workspace-boundaries.jpg",
              },
              {
                category: "Personal Growth",
                title: "The Power of Self-Compassion",
                excerpt:
                  "Explore how treating yourself with kindness and understanding can transform your relationship with yourself and others.",
                readTime: "6 min read",
                date: "Dec 3, 2024",
                image: "/self-care-reflection-journal.jpg",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group overflow-hidden h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
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
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-accent-foreground hover:bg-accent p-0 h-auto font-medium group/btn min-h-[44px] touch-manipulation"
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
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Shop Section */}
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
            {[
              {
                name: "Mindfulness Journal",
                description:
                  "A beautifully designed journal with guided prompts for daily reflection and mindfulness practice.",
                price: "$24.99",
                originalPrice: "$29.99",
                rating: 4.8,
                reviews: 127,
                image: "/elegant-mindfulness-journal-with-gold-accents.jpg",
                badge: "Bestseller",
              },
              {
                name: "Anxiety Relief Workbook",
                description:
                  "Evidence-based worksheets and exercises to help manage anxiety and develop coping strategies.",
                price: "$19.99",
                originalPrice: null,
                rating: 4.9,
                reviews: 89,
                image: "/professional-anxiety-workbook-therapy-resource.jpg",
                badge: null,
              },
              {
                name: "Gratitude Practice Cards",
                description:
                  "52 beautifully illustrated cards with gratitude prompts to cultivate positivity and appreciation.",
                price: "$16.99",
                originalPrice: "$21.99",
                rating: 4.7,
                reviews: 203,
                image: "/elegant-gratitude-cards-with-gold-details.jpg",
                badge: "New",
              },
              {
                name: "Meditation Cushion Set",
                description:
                  "Premium meditation cushion with matching bolster for comfortable mindfulness practice.",
                price: "$89.99",
                originalPrice: null,
                rating: 4.6,
                reviews: 45,
                image: "/elegant-meditation-cushion-set-neutral-colors.jpg",
                badge: null,
              },
              {
                name: "Self-Care Planner",
                description:
                  "Monthly planner designed to help you prioritize self-care and track your wellness goals.",
                price: "$32.99",
                originalPrice: null,
                rating: 4.8,
                reviews: 156,
                image: "/elegant-self-care-planner-with-gold-accents.jpg",
                badge: "Popular",
              },
              {
                name: "Stress Relief Tea Blend",
                description:
                  "Organic herbal tea blend with chamomile, lavender, and lemon balm for relaxation.",
                price: "$14.99",
                originalPrice: null,
                rating: 4.5,
                reviews: 78,
                image: "/elegant-tea-packaging-stress-relief-blend.jpg",
                badge: null,
              },
              {
                name: "CBT Thought Record Sheets",
                description:
                  "Professional-grade thought record worksheets for cognitive behavioral therapy practice.",
                price: "$12.99",
                originalPrice: null,
                rating: 4.9,
                reviews: 234,
                image: "/professional-cbt-worksheets-therapy-tools.jpg",
                badge: "Therapist Approved",
              },
              {
                name: "Mindful Breathing Guide",
                description:
                  "Comprehensive guide with breathing techniques and audio recordings for stress relief.",
                price: "$22.99",
                originalPrice: "$27.99",
                rating: 4.7,
                reviews: 112,
                image: "/elegant-breathing-guide-book-with-audio.jpg",
                badge: null,
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group overflow-hidden h-full"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>
                <CardContent className="p-3 sm:p-4 flex flex-col h-full">
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

                  <Button
                    size="sm"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group/btn min-h-[44px] touch-manipulation"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
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
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Real stories from people who have found healing and growth in our
              safe space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote:
                  "Dr. Johnson created such a warm and safe environment for me to explore my feelings. Her compassionate approach helped me work through my anxiety in ways I never thought possible.",
                name: "Sarah M.",
                role: "Individual Therapy Client",
                rating: 5,
              },
              {
                quote:
                  "The couples therapy sessions transformed our relationship. We learned to communicate better and understand each other's perspectives. We're stronger than ever now.",
                name: "Michael & Lisa R.",
                role: "Couples Therapy Clients",
                rating: 5,
              },
              {
                quote:
                  "I was skeptical about virtual sessions, but they worked perfectly for my busy schedule. Dr. Johnson's expertise shines through even over video calls.",
                name: "David K.",
                role: "Virtual Session Client",
                rating: 5,
              },
              {
                quote:
                  "The group therapy sessions helped me realize I wasn't alone in my struggles. The supportive environment and Dr. Johnson's guidance made all the difference.",
                name: "Jennifer L.",
                role: "Group Therapy Client",
                rating: 5,
              },
              {
                quote:
                  "After years of struggling with depression, I finally found the right therapist. Dr. Johnson's approach is both professional and deeply caring.",
                name: "Robert T.",
                role: "Individual Therapy Client",
                rating: 5,
              },
              {
                quote:
                  "The intensive sessions were exactly what I needed for my trauma recovery. Dr. Johnson's expertise in EMDR therapy has been life-changing.",
                name: "Amanda S.",
                role: "Intensive Session Client",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent transition-all duration-300 relative h-full"
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center">
                      <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>

                    <div className="border-t border-border pt-4 mt-auto">
                      <p className="font-heading text-foreground font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-card-foreground mb-3 sm:mb-4 px-4 sm:px-0">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Ready to take the first step? Reach out today to schedule your
              consultation or ask any questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-heading text-card-foreground mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-card-foreground">Phone</p>
                      <p className="text-muted-foreground break-all">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground break-all">
                        hello@safespacetherapy.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-card-foreground">
                        Location
                      </p>
                      <p className="text-muted-foreground">
                        123 Healing Way, Suite 101<br />
                        Wellness City, WC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-card-foreground mb-4 sm:mb-6">
                  Office Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Crisis Support Card */}
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
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

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us a bit about what you're looking for..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 min-h-[44px] touch-manipulation"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Safe Space Therapy. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
