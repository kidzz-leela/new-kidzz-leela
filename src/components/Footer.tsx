import { Link } from 'react-router-dom';
import siteContent from '@/config/siteContent.json';
import pngLogo from "../assets/logo.png";

const Footer = () => {

  const InstagramIcon = ({ className = "" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
      <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  );

  const WhatsAppIcon = ({ className = "" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.1 6.48 2.1 11.94c0 1.93.5 3.74 1.43 5.33L2 22l4.87-1.52a9.86 9.86 0 005.17 1.45h.01c5.46 0 9.94-4.48 9.94-9.94C22 6.53 17.5 2 12.04 2zm0 18.38a8.4 8.4 0 01-4.29-1.18l-.31-.18-2.89.9.93-2.82-.2-.33a8.36 8.36 0 01-1.29-4.43c0-4.63 3.77-8.4 8.4-8.4a8.4 8.4 0 018.4 8.4c0 4.63-3.77 8.4-8.4 8.4zm4.61-6.29c-.25-.13-1.49-.73-1.72-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );

  const { brandName, logo, footer, newsletter, navigation } = siteContent;

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-secondary py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              {newsletter.heading}
            </h3>
            <p className="text-foreground/70 mb-6">
              {newsletter.subheading}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="flex-1 px-5 py-3 rounded-full bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {newsletter.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                {/* <span className="text-3xl">{logo.icon}</span> */}
                <img src={pngLogo} alt="Logo" className="h-10 w-10" />
                <span className="font-heading font-bold text-xl">{brandName}</span>
              </Link>
              <p className="text-primary-foreground/70 mb-4 max-w-sm">
                {footer.tagline}
              </p>
              <div className="flex gap-4">
                {footer.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-110 transition-transform"
                    aria-label={social.platform}
                  >
                    {social.platform === "Instagram" && (
                      <InstagramIcon className="w-6 h-6 text-pink-600 hover:text-pink-700" />
                    )}

                    {social.platform === "WhatsApp" && (
                      <WhatsAppIcon className="w-6 h-6 text-green-500 hover:text-green-600" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    📧 {footer.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footer.contact.phone}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    📞 {footer.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      footer.contact.address,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors flex items-start gap-2"
                  >
                    <span>📍</span>
                    <span className="leading-snug">
                      {footer.contact.address}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
            {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
