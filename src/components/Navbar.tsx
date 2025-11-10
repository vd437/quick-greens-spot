import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-cairo">
              تواصل معنا
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-cairo">
              الأسعار
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-cairo">
              القائمة
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-cairo">
              من نحن
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-cairo font-extrabold bg-gradient-primary bg-clip-text text-transparent">
              صحتي
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="font-cairo">
              تسجيل الدخول
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground font-cairo font-bold shadow-glow">
              ابدأ الآن
            </Button>
          </div>
          
          <Button className="lg:hidden bg-gradient-primary text-primary-foreground font-cairo text-sm px-4">
            ابدأ
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
