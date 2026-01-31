import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import collectionsData from '@/config/collections.json';

const Collections = () => {
  const { categories } = collectionsData;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter products based on selected category
  const displayCategories = activeCategory 
    ? categories.filter(cat => cat.id === activeCategory)
    : categories;

  const totalProducts = categories.reduce((acc, cat) => acc + cat.products.length, 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections of adorable, comfortable clothing 
            for every little adventurer in your life.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {totalProducts} products across {categories.length} collections
          </p>
        </div>
      </section>
      
      {/* Category Filter Tabs */}
      <section className="py-8 bg-card border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === null
                  ? 'bg-gradient-primary text-primary-foreground shadow-colored'
                  : 'bg-muted text-muted-foreground hover:bg-accent'
              }`}
            >
              All Collections
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-primary text-primary-foreground shadow-colored'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                }`}
              >
                <span>{category.icon}</span>
                {category.name.replace(' Collection', '')}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collections */}
      {displayCategories.map((category, catIndex) => (
        <section 
          key={category.id}
          className={`py-16 ${catIndex % 2 === 1 ? 'bg-muted/50' : 'bg-background'}`}
        >
          <div className="container">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Empty State */}
      {displayCategories.length === 0 && (
        <section className="py-24 text-center">
          <span className="text-6xl mb-4 block">🔍</span>
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground mb-6">
            Try selecting a different category.
          </p>
          <button 
            onClick={() => setActiveCategory(null)}
            className="btn-primary"
          >
            View All Collections
          </button>
        </section>
      )}
    </main>
  );
};

export default Collections;
