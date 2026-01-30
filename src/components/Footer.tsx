import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-xl font-semibold mb-4">
              ADEMOLA OLAREWAJU & CO.
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A leading law firm providing exceptional legal services with integrity, 
              dedication, and over a decade of experience in commercial and corporate law.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Expertise", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Practice Areas</h4>
            <ul className="space-y-3">
              {[
                "Commercial Litigation",
                "Banking & Finance",
                "Oil & Gas Law",
                "Intellectual Property",
                "Corporate Law",
              ].map((area) => (
                <li key={area}>
                  <Link
                    to="/expertise"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Suite 41, Ikorodu Crescent,<br />
                  Dolphin Estate, Ikoyi-Lagos
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>+234 803 568 1642</p>
                  <p>+234 705 770 7335</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:ademolayemi29@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  ademolayemi29@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {currentYear} ADEMOLA OLAREWAJU & CO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
