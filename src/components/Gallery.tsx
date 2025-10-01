import { useState } from 'react';
import { X } from 'lucide-react';
import galleryHero from '@/assets/gallery-hero.jpg';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Placeholder images - in production, replace with actual restaurant photos
  const galleryImages = [
    { src: galleryHero, alt: 'Delicious Bengali thali', category: 'food' },
    { src: galleryHero, alt: 'Fresh fish fry platter', category: 'food' },
    { src: galleryHero, alt: 'Aromatic chicken biryani', category: 'food' },
    { src: galleryHero, alt: 'Cozy restaurant interior', category: 'interior' },
    { src: galleryHero, alt: 'Steaming momos basket', category: 'food' },
    { src: galleryHero, alt: 'Sweet rosogolla dessert', category: 'food' },
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage('');
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/30 bengali-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A visual feast of our delicious dishes and warm ambiance
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground">
              Visit us to experience these dishes in person!
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-accent/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-secondary transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
