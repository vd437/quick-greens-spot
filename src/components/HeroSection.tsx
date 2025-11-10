import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cairo font-extrabold text-foreground leading-tight">
              وجباتك الصحية
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                توصل لباب بيتك
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              استمتع بأطعمة طازجة ومتوازنة، تم إعدادها خصيصاً لصحتك ونشاطك اليومي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-transform text-lg px-8 py-6 rounded-xl font-cairo font-bold"
              >
                جرب الآن مجاناً
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8 py-6 rounded-xl font-cairo font-bold"
              >
                شاهد القائمة
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-end pt-8">
              <div className="text-center">
                <div className="text-3xl font-cairo font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cairo font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">وجبة صحية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cairo font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">تقييم العملاء</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="وجبة صحية طازجة" 
              className="relative rounded-3xl shadow-glow w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
