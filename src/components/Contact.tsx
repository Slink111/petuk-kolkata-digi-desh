import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you soon. Thank you for contacting us!",
    });
    (e.target as HTMLFormElement).reset();
  };

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
              <div className="card-elegant p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
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

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a
                        href="tel:09830132779"
                        className="text-primary hover:underline text-sm"
                      >
                        09830132779
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:contact@petukkolkata.com"
                        className="text-primary hover:underline text-sm"
                      >
                        contact@petukkolkata.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="card-elegant p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
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
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
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

            {/* Contact Form & Map */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Contact Form */}
              <div className="card-elegant p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      placeholder="Your message..."
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-lift"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Google Map */}
              <div className="card-elegant p-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3896387!2d88.35927!3d22.57257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjMiTiA4OMKwMjEnMzMuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
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
