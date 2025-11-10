import { Button } from "@/components/ui/button";
import { Apple, Play, Smartphone } from "lucide-react";
import deliveryImage from "@/assets/delivery-happy.jpg";

const DownloadSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1 animate-scale-in">
            <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={deliveryImage} 
              alt="سعداء بخدمة التوصيل" 
              className="relative rounded-3xl shadow-glow w-full h-auto"
            />
          </div>
          <div className="text-center lg:text-right space-y-6 order-1 lg:order-2 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-4">
              <Smartphone className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-cairo font-bold text-foreground leading-tight">
              حمّل التطبيق الآن
              <span className="block bg-gradient-secondary bg-clip-text text-transparent mt-2">
                وابدأ رحلتك الصحية
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              متوفر الآن على App Store و Google Play. حمّل التطبيق واحصل على خصم 20% على أول طلب!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-6">
              <Button 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 gap-3 text-lg px-8 py-6 rounded-xl font-cairo font-bold shadow-lg"
              >
                <Apple className="w-6 h-6" />
                App Store
              </Button>
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-3 text-lg px-8 py-6 rounded-xl font-cairo font-bold shadow-lg"
              >
                <Play className="w-6 h-6" />
                Google Play
              </Button>
            </div>
            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-cairo font-bold text-primary">مجاناً</div>
                  <div className="text-sm text-muted-foreground">التحميل</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-cairo font-bold text-secondary">20%</div>
                  <div className="text-sm text-muted-foreground">خصم أول طلب</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-cairo font-bold text-accent">سريع</div>
                  <div className="text-sm text-muted-foreground">التوصيل</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
