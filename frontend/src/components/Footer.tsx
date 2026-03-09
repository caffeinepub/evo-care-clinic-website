import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from 'react-icons/si';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Doctor', id: 'doctor' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'PRP Hair Restoration',
    'Acne Care',
    'Skin Brightening',
    'Glutathione IV Drip',
    'Skin Rejuvenation',
  ];

  const socialLinks = [
    { icon: SiFacebook, label: 'Facebook', href: '#' },
    { icon: SiInstagram, label: 'Instagram', href: '#' },
    { icon: SiX, label: 'X (Twitter)', href: '#' },
    { icon: SiLinkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">EC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Evo Care Clinic</h3>
                <p className="text-xs text-purple-200">Advanced Dermatology</p>
              </div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed mb-4">
              Your trusted partner for comprehensive skin, hair, laser, and Ayurvedic treatments. 
              Experience world-class care with Dr. Jeel Sejpal.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-purple-200 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                <p className="text-purple-200 text-sm">
                  204, Rk empire, Near Maudi Circle,<br />
                  150ft Ring Road, Mavdi,<br />
                  Rajkot, Gujarat
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-300 flex-shrink-0" />
                <a href="tel:8320576423" className="text-purple-200 hover:text-white text-sm">
                  83205 76423
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-300 flex-shrink-0" />
                <span className="text-purple-200 text-sm">info@evocareclinic.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-200 text-sm text-center md:text-left">
              © 2025 Evo Care Clinic. All rights reserved.
            </p>
            <p className="text-purple-200 text-sm flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-pink-400" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-white hover:text-purple-300 font-semibold"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
