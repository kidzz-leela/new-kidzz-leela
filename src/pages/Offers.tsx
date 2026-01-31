import { useCallback } from 'react';
import confetti from 'canvas-confetti';
import offersData from '@/config/offers.json';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Offers = () => {
  const { offers, bannerOffer } = offersData;
  
  // Filter to show only active offers
  const activeOffers = offers.filter(offer => offer.active && !offer.comingSoon);
  const inactiveOffers = offers.filter(offer => !offer.active && offer.comingSoon);

  /**
   * Trigger confetti animation from the clicked card
   * Creates a burst of colorful confetti for a delightful experience!
   */
  const triggerConfetti = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // First burst - colorful confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x, y },
      colors: ['#F472B6', '#FBBF24', '#34D399', '#A78BFA', '#FB923C'],
      startVelocity: 30,
      gravity: 0.8,
      ticks: 100,
    });

    // Second burst - slightly delayed for extra magic
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 100,
        origin: { x, y },
        colors: ['#F472B6', '#FBBF24', '#34D399'],
        startVelocity: 20,
        gravity: 1,
        scalar: 0.8,
      });
    }, 150);
  }, []);

  // Get gradient class based on offer color
  const getGradientClass = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-gradient-primary';
      case 'secondary': return 'bg-gradient-secondary';
      case 'teal': return 'bg-gradient-teal';
      case 'lavender': return 'bg-gradient-lavender';
      case 'orange': return 'bg-gradient-orange';
      default: return 'bg-gradient-primary';
    }
  };

  const getTextClass = (color: string) => {
    if (color === 'secondary') return 'text-foreground';
    return 'text-primary-foreground';
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container text-center">
          <span className="text-5xl mb-4 block animate-bounce-gentle">🎉</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Special Offers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing deals and save big on adorable outfits for your
            little ones!
          </p>
        </div>
      </section>

      {/* Featured Banner Offer */}
      {bannerOffer.active && (
        <section className="py-8 bg-gradient-primary">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground text-center md:text-left">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-1">
                  🌟 Featured Deal: {bannerOffer.title}
                </h2>
                {bannerOffer.description && (
                  <p className="text-primary-foreground/90">
                    {bannerOffer.description}
                  </p>
                )}
              </div>
              {bannerOffer.code && (
                <div className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                  <span className="text-sm opacity-80">Use code:</span>
                  <span className="ml-2 font-bold text-xl">
                    {bannerOffer.code}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Active Offers Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center gap-2">
            <span>✨</span>
            Active Offers ({activeOffers.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeOffers.map((offer, index) => (
              <article
                key={offer.id}
                onClick={triggerConfetti}
                className={`relative rounded-3xl overflow-hidden animate-fade-in cursor-pointer transform transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${getGradientClass(offer.color)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {offer.limitedTime && (
                  <span className="absolute top-6 right-3 z-10 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-600 text-white">
                    Limited Time
                  </span>
                )}

                <div
                  className={`p-6 h-full flex flex-col ${getTextClass(offer.color)}`}
                >
                  {offer.badge && (
                    <div className="mb-4">
                      <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm">
                        {offer.badge}
                      </span>
                    </div>
                  )}

                  {offer.discountPercentage != null &&
                    offer.discountPercentage >= 0 && (
                      <div className="text-5xl md:text-6xl font-heading font-bold mb-2">
                        {offer.discountPercentage}%
                        <span className="text-2xl ml-1">OFF</span>
                      </div>
                    )}

                  {offer.title && (
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {offer.title}
                    </h3>
                  )}

                  {offer.description && (
                    <p
                      className={`mb-6 flex-1 ${offer.color === "secondary" ? "text-foreground/70" : "opacity-90"}`}
                    >
                      {offer.description}
                    </p>
                  )}

                  <div className="space-y-3">
                    {offer.code && (
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center justify-between">
                        <span className="text-sm opacity-80">Code:</span>
                        <span className="font-bold text-lg font-mono">
                          {offer.code}
                        </span>
                      </div>
                    )}
                    {offer.validUntil && (
                      <p
                        className={`text-sm ${offer.color === "secondary" ? "text-foreground/60" : "opacity-70"}`}
                      >
                        Valid until{" "}
                        {new Date(offer.validUntil).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </p>
                    )}
                    {offer.tcApply && (
                      <div className={`flex items-center gap-1 text-xs ${offer.color === "secondary" ? "text-foreground/50" : "opacity-60"}`}>
                        <p>T&C Apply</p>
                        {offer.tcInfo && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-3 h-3 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent side="right" className="max-w-xs">
                                {offer.tcInfo}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inactive Offers (Coming Soon) */}
      {inactiveOffers.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center gap-2">
              <span>⏰</span>
              Coming Soon ({inactiveOffers.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inactiveOffers.map((offer, index) => (
                <article
                  key={offer.id}
                  className="relative card-playful p-6 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {offer.limitedTime && (
                    <span className="absolute top-6 right-3 z-10 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-600 text-white">
                      Limited Time
                    </span>
                  )}

                  {offer.badge && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground">
                        {offer.badge}
                      </span>
                    </div>
                  )}

                  {offer.discountPercentage != null &&
                    offer.discountPercentage >= 0 && (
                      <div className="text-4xl font-heading font-bold text-muted-foreground mb-2">
                        {offer.discountPercentage}% OFF
                      </div>
                    )}

                  {offer.title && (
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {offer.title}
                    </h3>
                  )}

                  {offer.description && (
                    <p className="text-sm text-muted-foreground">
                      {offer.description}
                    </p>
                  )}
                  {offer.tcApply && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground/60 mt-4">
                      <p>T&C Apply</p>
                      {offer.tcInfo && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="w-3 h-3 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent side="right" className="max-w-xs">
                              {offer.tcInfo}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Ready to Save Big?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Explore our collections and apply these amazing deals at checkout!
          </p>
          <Link to="/collections" className="btn-primary text-lg">
            Shop Collections
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Offers;
