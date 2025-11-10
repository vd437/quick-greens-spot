import { Truck, Clock, Salad, Heart, Utensils, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "نوصل طلبك في أقل من 30 دقيقة",
    color: "text-primary"
  },
  {
    icon: Salad,
    title: "وجبات متوازنة",
    description: "وجبات مُعدة من مكونات طبيعية 100%",
    color: "text-secondary"
  },
  {
    icon: Heart,
    title: "صحية ولذيذة",
    description: "نجمع بين الطعم الرائع والقيمة الغذائية",
    color: "text-accent"
  },
  {
    icon: Utensils,
    title: "خطط شخصية",
    description: "خطط وجبات مُخصصة حسب احتياجاتك",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "متاح 24/7",
    description: "خدمتنا متوفرة على مدار الساعة",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "آمن وموثوق",
    description: "نضمن جودة وسلامة كل وجبة",
    color: "text-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold text-foreground mb-4">
            لماذا <span className="bg-gradient-primary bg-clip-text text-transparent">صحتي</span>؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم لك أفضل تجربة لتوصيل الطعام الصحي مع مميزات لا مثيل لها
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-background mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-cairo font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
