import { Heart, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Homely Vibe',
      description: 'Experience the warmth of Bengali hospitality in every visit',
    },
    {
      icon: Users,
      title: 'Family Owned',
      description: 'Authentic recipes passed down through generations',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Fresh ingredients and traditional cooking methods',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 bengali-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of flavors, tradition, and heartfelt hospitality
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
                Where Tradition Meets Taste
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nestled in the heart of Gouribari, Kolkata, Petuk brings you the authentic
                  flavors of Bengal alongside beloved North Indian and Chinese cuisines. Our
                  journey began with a simple passion: to serve delicious, home-style food
                  that brings people together.
                </p>
                <p>
                  Every dish at Petuk is crafted with care, using time-honored recipes and
                  the freshest ingredients. From our signature Kosha Mangsho to our aromatic
                  Biryani, we celebrate the rich culinary heritage of Kolkata while embracing
                  diverse flavors.
                </p>
                <p>
                  Our cozy ambiance and friendly service create a welcoming space where
                  families and friends gather to share memorable meals. At Petuk, you're not
                  just a customer—you're part of our extended family.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6 animate-scale-in">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card-elegant p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="text-center animate-fade-in">
            <blockquote className="font-heading text-2xl md:text-3xl text-primary italic max-w-3xl mx-auto">
              "Great food is all the sweeter when shared with great people"
            </blockquote>
            <p className="text-muted-foreground mt-4">— Petuk Kolkata Family</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
