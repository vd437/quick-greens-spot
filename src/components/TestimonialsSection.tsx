import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمد",
    role: "رياضي محترف",
    content: "التطبيق غير حياتي تماماً! الوجبات لذيذة ومتوازنة، والتوصيل دائماً في الوقت المحدد.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "سارة علي",
    role: "أم عاملة",
    content: "أفضل حل لحياتي المزدحمة. وجبات صحية لكل العائلة بدون عناء التحضير.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "خالد السعيد",
    role: "مهندس برمجيات",
    content: "الخطة الشخصية ساعدتني أخسر 10 كيلو في شهرين! شكراً صحتي 🙏",
    rating: 5,
    avatar: "👨‍💻"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold text-foreground mb-4">
            آراء <span className="bg-gradient-secondary bg-clip-text text-transparent">عملائنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف تجارب العملاء الذين غيروا حياتهم مع صحتي
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div className="text-right">
                  <div className="font-cairo font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
