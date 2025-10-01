import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ananya Chatterjee',
      review: 'The Kosha Mangsho here is absolutely divine! Reminds me of my grandmother\'s cooking. The authentic Bengali flavors are unmatched.',
      rating: 5,
      location: 'Kolkata',
    },
    {
      name: 'Rajesh Kumar',
      review: 'Best biryani in the neighborhood! The staff is warm and welcoming. Petuk feels like a home away from home.',
      rating: 5,
      location: 'Gouribari',
    },
    {
      name: 'Priya Sharma',
      review: 'Their fish fry is crispy perfection! Great ambiance and reasonable prices. Definitely recommend for family dinners.',
      rating: 5,
      location: 'North Kolkata',
    },
    {
      name: 'Amit Das',
      review: 'Fantastic momos and excellent service. The variety on the menu ensures there\'s something for everyone in the family.',
      rating: 5,
      location: 'Kolkata',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background bengali-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-elegant hover-lift border-none animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-secondary text-secondary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Had a great experience? Share your review!
            </p>
            <a
              href="https://www.google.com/search?q=petuk+kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Leave a Google Review
              <Star className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
