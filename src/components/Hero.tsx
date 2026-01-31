import { Link } from 'react-router-dom';
import siteContent from '@/config/siteContent.json';
import heroImage from '@/assets/hero-kids.jpg';
import pngLogo from "../assets/logo.png";

const Hero = () => {
  const { hero, brandName } = siteContent;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-60">🧸</div>
      <div className="absolute top-40 right-20 text-5xl animate-float opacity-60" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="absolute bottom-32 left-20 text-4xl animate-float opacity-60" style={{ animationDelay: '2s' }}>🎈</div>
      <div className="absolute bottom-20 right-32 text-6xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}>🌈</div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft mb-8 animate-fade-in">
            {/* <span className="text-2xl">{siteContent.logo.icon}</span> */}
            <img src={pngLogo} alt="Logo" className="h-10 w-10"/>
            <span className="font-heading font-semibold text-foreground">{brandName}</span>
          </div>

          {/* Tagline */}
          <p
            className="font-heading text-xl md:text-2xl text-foreground/80 mb-6 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            {hero.tagline}
          </p>

          {/* Main heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            {hero.heading}
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {hero.subheading}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Link to="/collections" className="btn-primary text-lg">
              {hero.primaryButtonText}
              <span className="ml-1">→</span>
            </Link>
            <Link to="/offers" className="btn-outline text-lg">
              {hero.secondaryButtonText}
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {siteContent.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-medium text-sm">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
