import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="text-center md:text-right">
            <h3 className="text-3xl font-cairo font-extrabold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              صحتي
            </h3>
            <p className="text-background/80 leading-relaxed">
              رفيقك في رحلة الصحة والعافية. نوصل لك الطعام الصحي بكل حب واهتمام.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-cairo font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">من نحن</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">القائمة</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">الأسعار</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">المدونة</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-cairo font-bold text-lg mb-4">الدعم</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-cairo font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-background/80">info@sehaty.com</span>
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-background/80" dir="ltr">+966 50 123 4567</span>
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex gap-4 justify-center md:justify-end pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 font-cairo">
            © 2024 صحتي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
