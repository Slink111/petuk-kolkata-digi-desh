import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {

  const openingHours = [
    { day: 'Wednesday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Thursday', hours: '1:00 PM – 11:00 PM', note: '(Hours might differ)' },
    { day: 'Friday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Saturday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Sunday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Monday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Tuesday', hours: '1:00 PM – 11:00 PM' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 bengali-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find us in the heart of Gouribari, Kolkata
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info & Hours */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Contact Details */}
              <div className="card-elegant p-8 animate-slide-in-left">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 hover-lift-subtle">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center animate-pulse-slow">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        118, Raja Dinendra Street<br />
                        Gouri Bari Ln, Kolkata<br />
                        West Bengal 700004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 hover-lift-subtle">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center animate-pulse-slow" style={{ animationDelay: '0.2s' }}>
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a
                        href="tel:09830132779"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        09830132779
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="card-elegant p-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center animate-spin-slow">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0 hover:bg-muted/30 transition-colors rounded px-2 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <div className="text-right">
                        <span className="text-muted-foreground text-sm">{schedule.hours}</span>
                        {schedule.note && (
                          <p className="text-xs text-muted-foreground/70 italic">{schedule.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="space-y-8 animate-fade-in-up lg:animate-slide-in-right">
              <div className="card-elegant p-0 overflow-hidden h-full min-h-[600px] lg:min-h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0646749257804!2d88.35681007531944!3d22.580866879478654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02769c0c620a69%3A0xb3ed4df1ee3b1d7a!2sPetuk%20Kolkata!5e0!3m2!1sen!2sin!4v1709556789012"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '600px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Petuk Kolkata Location"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
