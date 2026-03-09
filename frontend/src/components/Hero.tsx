import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Zap, Leaf } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: Sparkles, label: 'Skin', color: 'from-purple-500 to-pink-500' },
    { icon: Heart, label: 'Hair', color: 'from-pink-500 to-rose-500' },
    { icon: Zap, label: 'Laser', color: 'from-purple-600 to-purple-400' },
    { icon: Leaf, label: 'Ayurveda', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                ✨ Advanced Dermatology Care
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Your Journey to
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Radiant Skin
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Experience world-class dermatological treatments at Evo Care Clinic. 
              Expert care for your skin, hair, and overall wellness with Dr. Jeel Sejpal.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6"
              >
                Book Your Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
              >
                Explore Services
              </Button>
            </div>

            {/* Key Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-2`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images (1).jpg"
                alt="Evo Care Clinic"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
