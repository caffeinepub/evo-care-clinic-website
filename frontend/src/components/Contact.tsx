import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSubmitContactForm, useBookAppointment, useGetRegionalClinicInfo } from '../hooks/useQueries';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react';

export function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: '',
  });

  const [selectedContinent, setSelectedContinent] = useState('');

  const submitContactMutation = useSubmitContactForm();
  const bookAppointmentMutation = useBookAppointment();
  const { data: regionalInfo } = useGetRegionalClinicInfo(selectedContinent);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitContactMutation.mutateAsync(contactForm);
      toast.success('Message sent successfully! We will contact you soon.');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await bookAppointmentMutation.mutateAsync(appointmentForm);
      toast.success('Appointment request submitted! We will confirm shortly.');
      setAppointmentForm({ name: '', email: '', phone: '', service: '', preferredDate: '', message: '' });
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    }
  };

  const services = [
    'PRP Hair Restoration',
    'Acne Care',
    'Skin Brightening',
    'Glutathione IV Drip',
    'Skin Rejuvenation',
    'General Consultation',
  ];

  const continents = ['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Australia', 'Antarctica'];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Contact Us Today
          </h2>
          <p className="text-xl text-gray-600">
            Ready to start your journey to healthier skin? Reach out to us for consultations and appointments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                204, Rk empire, Near Maudi Circle,<br />
                150ft Ring Road, Mavdi,<br />
                Rajkot, Gujarat
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:8320576423" className="text-purple-600 hover:text-purple-700 font-semibold text-lg">
                83205 76423
              </a>
              <p className="text-gray-600 mt-1">Available for appointments</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600">
                Mon - Sat: 10:00 AM - 8:00 PM<br />
                Sunday: By Appointment
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Forms */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="contact">Contact Form</TabsTrigger>
                  <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
                </TabsList>

                <TabsContent value="contact">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone">Phone Number *</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={submitContactMutation.isPending}
                    >
                      {submitContactMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="appointment">
                  <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="appt-name">Name *</Label>
                      <Input
                        id="appt-name"
                        required
                        value={appointmentForm.name}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="appt-email">Email *</Label>
                      <Input
                        id="appt-email"
                        type="email"
                        required
                        value={appointmentForm.email}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="appt-phone">Phone Number *</Label>
                      <Input
                        id="appt-phone"
                        type="tel"
                        required
                        value={appointmentForm.phone}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="appt-service">Service *</Label>
                      <Select
                        required
                        value={appointmentForm.service}
                        onValueChange={(value) => setAppointmentForm({ ...appointmentForm, service: value })}
                      >
                        <SelectTrigger id="appt-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="appt-date">Preferred Date *</Label>
                      <Input
                        id="appt-date"
                        type="date"
                        required
                        value={appointmentForm.preferredDate}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, preferredDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="appt-message">Additional Notes</Label>
                      <Textarea
                        id="appt-message"
                        value={appointmentForm.message}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, message: e.target.value })}
                        placeholder="Any specific concerns or questions..."
                        rows={3}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={bookAppointmentMutation.isPending}
                    >
                      {bookAppointmentMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        'Book Appointment'
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Location Selector */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Find Us Globally</CardTitle>
                <CardDescription>Select your continent to view regional clinic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="continent">Select Continent</Label>
                  <Select value={selectedContinent} onValueChange={setSelectedContinent}>
                    <SelectTrigger id="continent">
                      <SelectValue placeholder="Choose your continent" />
                    </SelectTrigger>
                    <SelectContent>
                      {continents.map((continent) => (
                        <SelectItem key={continent} value={continent}>
                          {continent}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedContinent && (
                  <div className="p-4 bg-purple-50 rounded-lg">
                    {regionalInfo ? (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Clinics in {regionalInfo.continent}</h4>
                        <div className="space-y-2">
                          {regionalInfo.clinics.map((clinic, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{clinic}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-purple-200">
                          <p className="text-sm text-gray-600">{regionalInfo.contactInfo}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <MapPin className="w-12 h-12 text-purple-300 mx-auto mb-3" />
                        <p className="text-gray-600">
                          We're expanding to {selectedContinent}! Contact us for more information about our services in your region.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Main Clinic Location</p>
                  <p className="text-sm text-gray-500 mt-2">Rajkot, Gujarat, India</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
