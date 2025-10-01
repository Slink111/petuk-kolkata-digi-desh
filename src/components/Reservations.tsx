import { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Reservations = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Reservation Request Received!',
        description: "We'll confirm your booking shortly via phone. Thank you!",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="reservations" className="py-20 md:py-32 bg-background bengali-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Table
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reserve your spot for an unforgettable dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="09830132779"
                    defaultValue="09830132779"
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-foreground">
                      Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-foreground">
                      Time *
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests" className="text-foreground">
                    Number of Guests *
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    required
                    placeholder="2"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="requests" className="text-foreground">
                    Special Requests
                  </Label>
                  <Textarea
                    id="requests"
                    name="requests"
                    placeholder="Any dietary restrictions or special occasions?"
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-lift"
                >
                  {isSubmitting ? 'Submitting...' : 'Reserve Table'}
                </Button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Opening Hours
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Wednesday - Tuesday: 1:00 PM - 11:00 PM</p>
                      <p className="text-xs italic">* Thursday hours might differ</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Quick Reservations
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      For immediate bookings or inquiries, call us directly
                    </p>
                    <Button variant="outline" size="sm" asChild className="hover-lift">
                      <a href="tel:09830132779">Call 09830132779</a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Large Groups
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Planning a celebration? Contact us for group bookings and special arrangements
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elegant p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Order Online
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Prefer dining at home? Order via delivery partners
                    </p>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Order on Swiggy/Zomato
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
