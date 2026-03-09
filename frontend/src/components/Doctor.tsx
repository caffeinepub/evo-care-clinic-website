import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Stethoscope, Phone, Mail } from 'lucide-react';

export function Doctor() {
  const specializations = [
    'Dermatology',
    'Hair Restoration',
    'Laser Therapy',
    'Ayurvedic Treatments',
    'Skin Rejuvenation',
    'Acne Management',
  ];

  const credentials = [
    { icon: GraduationCap, text: 'MBBS, MD (Dermatology)' },
    { icon: Award, text: '10+ Years Experience' },
    { icon: Stethoscope, text: 'Specialized in Advanced Skin Care' },
  ];

  return (
    <section id="doctor" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Our Expert</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Meet Dr. Jeel Sejpal
          </h2>
          <p className="text-xl text-gray-600">
            Leading dermatologist with expertise in advanced skin, hair, and laser treatments.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden border-0 shadow-2xl">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Doctor Image */}
            <div className="md:col-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400" />
              <div className="relative h-full min-h-[400px] flex items-center justify-center p-8">
                <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center">
                    <span className="text-6xl font-bold text-purple-600">JS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <CardContent className="md:col-span-3 p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Jeel Sejpal</h3>
                  <p className="text-xl text-purple-600 font-semibold">Consultant Dermatologist</p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Dr. Jeel Sejpal is a highly qualified dermatologist specializing in advanced skin and hair 
                  treatments. With over a decade of experience, Dr. Sejpal has helped thousands of patients 
                  achieve their skin and hair goals through personalized, evidence-based treatments.
                </p>

                {/* Credentials */}
                <div className="space-y-3">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <credential.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{credential.text}</span>
                    </div>
                  ))}
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {specializations.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <a href="tel:8320576423" className="hover:text-purple-600 font-medium">
                      83205 76423
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Available for consultations</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
