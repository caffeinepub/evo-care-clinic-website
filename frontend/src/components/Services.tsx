import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Droplet, Zap, Heart, Sun } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Heart,
      title: 'PRP Hair Restoration',
      description: 'Harness the power of platelets and growth factors to stimulate hair growth naturally. No side effects, clinically proven results.',
      image: '/assets/images (5).jpg',
      benefits: ['Natural hair regrowth', 'No side effects', 'Clinically proven'],
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'Acne Care',
      description: 'Comprehensive acne treatment including dual light tanning, acne masks, uneven skin tone correction, and personalized solutions.',
      image: '/assets/images (4).jpg',
      benefits: ['Clear skin', 'Reduced scarring', 'Long-term results'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sun,
      title: 'Skin Brightening & Glow',
      description: 'Advanced skin brightening treatments with personalized care routines for radiant, even-toned skin.',
      image: '/assets/images (2).jpg',
      benefits: ['Radiant complexion', 'Even skin tone', 'Natural glow'],
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Droplet,
      title: 'Glutathione IV Drip',
      description: 'Experience skin lightening, brightening, reduced pigmentation, anti-aging properties, and immunity boost.',
      image: '/assets/images.jpg',
      benefits: ['Skin lightening', 'Anti-aging', 'Immunity boost'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Zap,
      title: 'Skin Rejuvenation',
      description: 'Look better, feel better with healthy skin through advanced rejuvenation and glow therapy.',
      image: '/assets/images (6).jpg',
      benefits: ['Youthful appearance', 'Improved texture', 'Healthy glow'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Comprehensive Dermatology Solutions
          </h2>
          <p className="text-xl text-gray-600">
            From advanced hair restoration to skin rejuvenation, we offer a complete range of 
            treatments tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Special Offer: 30% Off!</h3>
          <p className="text-xl mb-6 text-purple-100">
            Say goodbye to hair fall with advanced PRP Treatment and GFC Treatment
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-purple-600 hover:bg-purple-50"
          >
            Claim Your Discount
          </Button>
        </div>
      </div>
    </section>
  );
}
