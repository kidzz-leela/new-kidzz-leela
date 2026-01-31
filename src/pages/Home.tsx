import Hero from '@/components/Hero';
import OfferBanner from '@/components/OfferBanner';
import ProductCard from '@/components/ProductCard';
import siteContent from '@/config/siteContent.json';
import collectionsData from '@/config/collections.json';
import { Link } from 'react-router-dom';

const Home = () => {
  const { features, testimonials } = siteContent;
  const { categories } = collectionsData;

  // Get featured categories
  const featuredCategories = categories.filter(cat => cat.featured);  

  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Offer Banner */}
      <OfferBanner variant="compact" />
      
      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-background hover:shadow-soft transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl md:text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Collections */}
      {featuredCategories.map((category, catIndex) => (
        <section 
          key={category.id} 
          className={`py-16 ${catIndex % 2 === 0 ? 'bg-background' : 'bg-muted/50'}`}
        >
          <div className="container">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-4xl mb-4 block">{category.icon}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                {category.name}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {category.description}
              </p>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.slice(0, 4).map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center mt-10">
              <Link to="/collections" className="btn-outline">
                View All {category.name}
              </Link>
            </div>
          </div>
        </section>
      ))}
      
      {/* Full Offer Banner */}
      <OfferBanner variant="full" />
      
      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">💬</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Happy Parents, Happy Kids
            </h2>
            <p className="text-muted-foreground">
              See what our KIDZZ LEELA family has to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-playful p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-secondary">⭐</span>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground mb-4">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.childAge}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
