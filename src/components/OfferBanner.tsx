/**
 * OfferBanner Component
 * 
 * Displays promotional offer banners with confetti on click!
 * Content comes from config/offers.json
 * 
 * To update offers:
 * - Edit offers.json
 * - Set active: true/false to show/hide offers
 * - Change discount percentages, codes, descriptions
 */

import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import offersData from '@/config/offers.json';

interface OfferBannerProps {
  variant?: 'full' | 'compact';
}

const OfferBanner = ({ variant = 'compact' }: OfferBannerProps) => {
  const { bannerOffer } = offersData;

  /**
   * Trigger confetti celebration!
   */
  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { x: 0.5, y: 0.6 },
      colors: ['#F472B6', '#FBBF24', '#34D399', '#A78BFA', '#FB923C'],
      startVelocity: 35,
      gravity: 0.8,
    });
  }, []);
  
  // Don't render if banner offer is inactive
  if (!bannerOffer.active) return null;

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-primary text-primary-foreground py-3">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <span className="font-heading font-semibold text-lg">
              {bannerOffer.title}
            </span>
            <span className="text-primary-foreground/90">
              {bannerOffer.description}
            </span>
            <span className="bg-primary-foreground/20 px-3 py-1 rounded-full text-sm font-bold">
              Code: {bannerOffer.code}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section 
      onClick={triggerConfetti}
      className="py-16 bg-gradient-primary relative overflow-hidden cursor-pointer"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-primary-foreground/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-primary-foreground/10 translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="text-center text-primary-foreground">
          <span className="inline-block text-4xl mb-4 animate-bounce-gentle">🎉</span>
          <p className="text-sm mb-2 opacity-80">Click for a surprise! ✨</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {bannerOffer.title}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            {bannerOffer.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
              <span className="text-sm opacity-80">Use code:</span>
              <span className="ml-2 font-bold text-lg">{bannerOffer.code}</span>
            </div>
            <Link 
              to="/offers" 
              className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View All Offers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
