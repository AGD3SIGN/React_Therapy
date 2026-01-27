import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/navigation";
import ResourceView from "@/components/resource-view";
import ProductView from "@/components/product-view";
import AboutView from "@/components/about-view";
import ServiceView from "@/components/service-view";
import AllResourcesView from "@/components/all-resources-view";
import AllProductsView from "@/components/all-products-view";

// Data
import { resourcesData } from "@/data/resources";
import { productsData } from "@/data/products";

// Sections
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Resources from "@/sections/Resources";
import Shop from "@/sections/Shop";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function HomePage() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showAllResources, setShowAllResources] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <AnimatePresence>
        {showAbout && <AboutView onClose={() => setShowAbout(false)} />}
        {showAllResources && (
          <AllResourcesView
            resources={resourcesData}
            onClose={() => setShowAllResources(false)}
            onSelect={(r) => {
              setSelectedResource(r);
              setShowAllResources(false);
            }}
          />
        )}
        {showAllProducts && (
          <AllProductsView
            products={productsData}
            onClose={() => setShowAllProducts(false)}
            onSelect={(p) => {
              setSelectedProduct(p);
              setShowAllProducts(false);
            }}
          />
        )}
        {selectedService && (
          <ServiceView service={selectedService} onClose={() => setSelectedService(null)} />
        )}
        {selectedResource && (
          <ResourceView resource={selectedResource} onClose={() => setSelectedResource(null)} />
        )}
        {selectedProduct && (
          <ProductView product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      <Hero />
      <Features />
      <About onShowDetails={() => setShowAbout(true)} />
      <Services onSelectService={setSelectedService} />
      <Resources
        onSelectResource={setSelectedResource}
        onShowAll={() => setShowAllResources(true)}
      />
      <Shop
        onSelectProduct={setSelectedProduct}
        onShowAll={() => setShowAllProducts(true)}
      />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
