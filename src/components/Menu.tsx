import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Menu = () => {
  const menuCategories = [
    {
      title: '🥟 Starters',
      items: [
        { name: 'Chicken Lollypop (6 pcs)', price: '₹200', code: '202' },
        { name: 'Chicken Drumstick (6 pcs)', price: '₹210', code: '203' },
        { name: 'Chicken Crispy', price: '₹190', code: '204' },
        { name: 'Dragon Chicken (6 pcs)', price: '₹200', code: '205' },
        { name: 'Diamond Fish Fry (1 pc)', price: '₹120', code: '206' },
        { name: 'Fish Fry (1 pc)', price: '₹120', code: '212' },
        { name: 'Fish Finger (4 pcs)', price: '₹140', code: '214' },
        { name: 'Fish Butter Fry (1 pc)', price: '₹80', code: '216' },
      ],
    },
    {
      title: '🍲 Soups',
      items: [
        { name: 'Veg Soup', price: '₹100', code: '194' },
        { name: 'Veg Manchow Soup', price: '₹120', code: '195' },
        { name: 'Veg Hot & Sour Soup', price: '₹120', code: '196' },
        { name: 'Cream of Tomato Soup', price: '₹120', code: '197' },
        { name: 'Chicken Sweet Corn Soup', price: '₹140', code: '198' },
        { name: 'Chicken Manchow Soup', price: '₹140', code: '199' },
        { name: 'Chicken Hot & Sour Soup', price: '₹140', code: '200' },
        { name: 'Chicken Clear Soup', price: '₹130', code: '201' },
      ],
    },
    {
      title: '🍜 Noodles',
      items: [
        { name: 'Veg. Noodles (Hakka / Gravy)', price: '₹90 / ₹110', code: '244/245' },
        { name: 'Egg Noodles (Hakka / Gravy)', price: '₹110 / ₹130', code: '246/247' },
        { name: 'Chicken Noodles (Hakka / Gravy)', price: '₹130 / ₹150', code: '248/249' },
        { name: 'Egg Chicken Noodles (Hakka / Gravy)', price: '₹150 / ₹170', code: '250/251' },
        { name: 'Prawn Noodles (Hakka / Gravy)', price: '₹160 / ₹180', code: '252/253' },
        { name: 'Egg Prawn Noodles (Hakka / Gravy)', price: '₹170 / ₹190', code: '254/255' },
        { name: 'Mix Noodles (Hakka / Gravy)', price: '₹190 / ₹210', code: '256/257' },
        { name: 'Veg Schezwan Noodles', price: '₹130', code: '258' },
        { name: 'Egg Schezwan Noodles', price: '₹150', code: '259' },
        { name: 'Chicken Schezwan Noodles', price: '₹160', code: '260' },
        { name: 'Schezwan Mix Noodles', price: '₹200', code: '262' },
        { name: 'Petuk Special Noodles', price: '₹220', code: '261' },
      ],
    },
    {
      title: '🫓 Mughlai Paratha',
      items: [
        { name: 'Mughlai Paratha', price: '₹110', code: '231' },
        { name: 'Special Mughlai Paratha', price: '₹125', code: '232' },
        { name: 'Lachha Paratha', price: '₹25', code: '328' },
      ],
    },
    {
      title: '🍚 Rice',
      items: [
        { name: 'Veg Rice', price: '₹140', code: '232' },
        { name: 'Egg Rice', price: '₹180', code: '233' },
        { name: 'Chicken Rice', price: '₹200', code: '234' },
        { name: 'Egg Chicken Rice', price: '₹210', code: '235' },
        { name: 'Prawn Rice', price: '₹210', code: '236' },
        { name: 'Egg Prawn Rice', price: '₹220', code: '237' },
        { name: 'Mix Rice', price: '₹210', code: '238' },
        { name: 'Garlic Rice', price: '₹150', code: '239' },
        { name: 'Schezwan Veg Rice', price: '₹150', code: '240' },
        { name: 'Schezwan Egg Rice', price: '₹200', code: '241' },
        { name: 'Schezwan Chicken Rice', price: '₹220', code: '242' },
        { name: 'Schezwan Egg Chicken Rice', price: '₹230', code: '243' },
        { name: 'Schezwan Mix Rice', price: '₹250', code: '244' },
        { name: 'Petuk Special Rice', price: '₹260', code: '242' },
      ],
    },
    {
      title: '🥟 Momos',
      items: [
        { name: 'Steam Chicken Momo (5 pcs)', price: '₹80', code: '217' },
        { name: 'Fried Chicken Momo (5 pcs)', price: '₹100', code: '218' },
        { name: 'Pan Fried Chicken Momo (5 pcs)', price: '₹120', code: '219' },
      ],
    },
    {
      title: '🍢 Tandoori',
      items: [
        { name: 'Tandoori Chicken (Full)', price: '₹395', code: '263' },
        { name: 'Tandoori Chicken (Half)', price: '₹220', code: '264' },
        { name: 'Tandoori Chicken (Single)', price: '₹120', code: '265' },
        { name: 'Tengri Kebab (Leg 2 pcs)', price: '₹200', code: '266' },
        { name: 'Reshmi Kebab (6 pcs)', price: '₹250', code: '267' },
        { name: 'Chicken Tikka (6 pcs)', price: '₹250', code: '268' },
        { name: 'Hariyali Kebab (6 pcs)', price: '₹250', code: '269' },
      ],
    },
    {
      title: '🫓 Tandoori Breads',
      items: [
        { name: 'Tandoori Roti', price: '₹20', code: '329' },
        { name: 'Butter Tandoori Roti', price: '₹35', code: '333' },
        { name: 'Butter Naan', price: '₹35', code: '330' },
        { name: 'Naan', price: '₹35', code: '331' },
        { name: 'Garlic Naan', price: '₹35', code: '332' },
        { name: 'Romali Roti', price: '₹20', code: '334' },
      ],
    },
    {
      title: '🥘 Lunch Combos (12 PM – 3 PM)',
      items: [
        { name: 'Veg Rice / Veg Noodles + Chilli Chicken (3 pcs)', price: '₹100' },
        { name: 'Veg Rice / Veg Noodles + Veg Manchurian / Paneer Manchurian (3 pcs)', price: '₹80' },
        { name: 'Chicken Biryani + Salad', price: '₹100' },
        { name: 'Jeera Rice / Pulau + Chicken Kasha (2 pcs)', price: '₹100' },
        { name: 'Tandoori Roti (2 pcs) + Dal Makhani', price: '₹80' },
        { name: 'Tandoori Roti (2 pcs) + Chicken Kasha (2 pcs)', price: '₹100' },
        { name: 'Lachha Paratha (2 pcs) + Chilli Chicken (4 pcs)', price: '₹100' },
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

            {/* Action Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift animate-glow"
                asChild
              >
                <a href="https://www.zomato.com/kolkata/petuk-kolkata-hatibagan/order" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Order on Zomato
                </a>
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
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0 hover:bg-muted/30 transition-colors rounded-lg px-2 py-2 animate-slide-in"
                        style={{ animationDelay: `${itemIndex * 0.05}s` }}
                      >
                        <div className="flex-1">
                          <div className="flex items-start gap-2">
                            <h4 className="font-semibold text-foreground">
                              {item.name}
                            </h4>
                            {item.code && (
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                #{item.code}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="font-bold text-primary flex-shrink-0 whitespace-nowrap">
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
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center animate-pulse-slow">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              🌟 Try Our Signature Specials! 🌟
            </h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Petuk Special Noodles • Petuk Special Rice • Tandoori Chicken • Mughlai Paratha
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift animate-bounce-subtle"
              asChild
            >
              <a href="https://www.zomato.com/kolkata/petuk-kolkata-hatibagan/order" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Order Now on Zomato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
