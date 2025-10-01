import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Menu = () => {
  const menuCategories = [
    {
      title: 'Bengali Specials',
      items: [
        { name: 'Kosha Mangsho', desc: 'Slow-cooked mutton in rich spices', price: '₹350' },
        { name: 'Fish Fry', desc: 'Crispy Bengali-style fish fry', price: '₹280' },
        { name: 'Chingri Malai Curry', desc: 'Prawns in coconut gravy', price: '₹420' },
        { name: 'Shukto', desc: 'Mixed vegetable in Bengali style', price: '₹180' },
      ],
    },
    {
      title: 'North Indian',
      items: [
        { name: 'Chicken Biryani', desc: 'Aromatic basmati rice with tender chicken', price: '₹320' },
        { name: 'Butter Chicken', desc: 'Creamy tomato-based curry', price: '₹340' },
        { name: 'Dal Makhani', desc: 'Rich black lentils in butter', price: '₹220' },
        { name: 'Paneer Tikka', desc: 'Grilled cottage cheese cubes', price: '₹260' },
      ],
    },
    {
      title: 'Chinese',
      items: [
        { name: 'Chicken Momos', desc: 'Steamed dumplings with sauce', price: '₹180' },
        { name: 'Chilli Chicken', desc: 'Spicy Indo-Chinese favorite', price: '₹280' },
        { name: 'Hakka Noodles', desc: 'Stir-fried noodles with vegetables', price: '₹200' },
        { name: 'Manchurian', desc: 'Crispy veg balls in tangy sauce', price: '₹220' },
      ],
    },
    {
      title: 'Snacks & Desserts',
      items: [
        { name: 'Samosa', desc: 'Crispy potato-filled pastry', price: '₹60' },
        { name: 'Rosogolla', desc: 'Classic Bengali sweet', price: '₹80' },
        { name: 'Mishti Doi', desc: 'Sweet yogurt dessert', price: '₹90' },
        { name: 'Gulab Jamun', desc: 'Warm milk-solid balls in syrup', price: '₹100' },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-background bengali-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our carefully curated selection of authentic dishes
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="hover-lift"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Menu PDF
              </Button>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Order on Swiggy/Zomato
              </Button>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {menuCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="card-elegant animate-fade-in-up border-none"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader className="bg-muted/50 border-b border-border">
                  <CardTitle className="font-heading text-2xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <span className="font-bold text-primary flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Signature Dishes Banner */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center animate-fade-in">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Don't Miss Our Signature Dishes!
            </h3>
            <p className="text-muted-foreground mb-4">
              Kosha Mangsho • Fish Fry • Chicken Biryani • Momos • Rosogolla
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift"
              asChild
            >
              <a href="#reservations">Reserve Your Table</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
