import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/assets/images (5).jpg', alt: 'PRP Hair Restoration Treatment' },
    { src: '/assets/images (4).jpg', alt: 'Acne Care Treatment' },
    { src: '/assets/images (2).jpg', alt: 'Skin Brightening Treatment' },
    { src: '/assets/images.jpg', alt: 'Glutathione IV Drip Therapy' },
    { src: '/assets/images (6).jpg', alt: 'Skin Rejuvenation Treatment' },
    { src: '/assets/download.jpg', alt: 'Clinic Services Overview' },
    { src: '/assets/images (3).jpg', alt: 'Advanced PRP Treatment' },
    { src: '/assets/images (1).jpg', alt: 'Evo Care Clinic Branding' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Treatments & Facilities
          </h2>
          <p className="text-xl text-gray-600">
            Explore our range of advanced dermatological treatments and state-of-the-art facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
