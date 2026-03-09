import { Award, Users, Clock, Shield } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Care',
      description: 'Led by Dr. Jeel Sejpal with years of specialized experience',
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Personalized treatment plans tailored to your unique needs',
    },
    {
      icon: Clock,
      title: 'Modern Facility',
      description: 'State-of-the-art equipment and advanced treatment methods',
    },
    {
      icon: Shield,
      title: 'Safe & Effective',
      description: 'FDA-approved treatments with proven results',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Welcome to Evo Care Clinic
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Evo Care Clinic, we combine advanced dermatological expertise with compassionate care 
            to help you achieve your skin and hair goals. Our clinic specializes in cutting-edge 
            treatments for skin, hair, laser therapy, and Ayurvedic solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-purple-100 text-lg leading-relaxed mb-6">
                To provide world-class dermatological care that enhances not just your appearance, 
                but your confidence and quality of life. We believe everyone deserves to feel 
                comfortable in their own skin.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-300" />
                  <span>Comprehensive skin and hair treatments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-300" />
                  <span>Advanced laser therapy solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-300" />
                  <span>Holistic Ayurvedic approaches</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/images (6).jpg"
                alt="Skin Rejuvenation Treatment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
