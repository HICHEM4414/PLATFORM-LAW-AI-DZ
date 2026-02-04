import React, { useState } from 'react';
import {
  Scale,
  Zap,
  FileSearch,
  FileSignature,
  BookOpen,
  Library,
  MessageSquare,
  ChevronLeft,
  ShieldCheck,
  Upload,
  Search,
  Download,
  FileText,
  User,
  Gavel
} from 'lucide-react';

type SectionId = 'home' | 'consult' | 'analyze' | 'contracts' | 'research' | 'sources' | 'chat';

interface ServiceCardProps {
  id: SectionId;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick: (id: SectionId) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, color, onClick }) => (
  <div 
    onClick={() => onClick(id)}
    className="group cursor-pointer bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
  >
    <div className={`w-16 h-16 ${color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">{title}</h3>
    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{description}</p>
    <span className="text-amber-600 font-bold text-sm">اكتشف الآن →</span>
  </div>
);

export default function LegalPlatform() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const services = [
    { 
      id: 'consult' as SectionId, 
      title: 'إستشارة قانونية سريعة', 
      description: 'حلول فورية لمشاكلك القانونية مدعومة بنصوص القانون الجزائري.', 
      icon: <Zap size={32} />, 
      color: 'bg-amber-500' 
    },
    { 
      id: 'analyze' as SectionId, 
      title: 'تحليل الوثائق والصور', 
      description: 'تقنية مسح ذكية للكشف عن الثغرات في العقود والوثائق الرسمية.', 
      icon: <FileSearch size={32} />, 
      color: 'bg-blue-600' 
    },
    { 
      id: 'contracts' as SectionId, 
      title: 'صياغة العقود العرفية', 
      description: 'توليد عقود احترافية (بيع، كراء، تنازل) مطابقة للتشريع الوطني.', 
      icon: <FileSignature size={32} />, 
      color: 'bg-emerald-600' 
    },
    { 
      id: 'research' as SectionId, 
      title: 'إعداد البحوث العلمية', 
      description: 'مساعد أكاديمي لطلبة الحقوق والباحثين في إعداد المذكرات.', 
      icon: <BookOpen size={32} />, 
      color: 'bg-purple-600' 
    },
    { 
      id: 'sources' as SectionId, 
      title: 'قائمة المصادر', 
      description: 'الوصول السريع للجرائد الرسمية والاجتهادات القضائية الجزائرية.', 
      icon: <Library size={32} />, 
      color: 'bg-slate-700' 
    },
    { 
      id: 'chat' as SectionId, 
      title: 'دردشة قانونية', 
      description: 'غرف دردشة آمنة للتواصل المباشر مع أساتذة القانون والمحامين.', 
      icon: <MessageSquare size={32} />, 
      color: 'bg-rose-600' 
    },
  ];

  const renderActiveSection = () => {
    const current = services.find(s => s.id === activeSection);
    
    return (
      <div className="min-h-screen bg-slate-50 p-4 md:p-10 flex flex-col items-center" dir="rtl">
        <div className="max-w-4xl w-full">
          <button 
            onClick={() => setActiveSection('home')}
            className="text-slate-500 font-bold mb-8 flex items-center gap-2 hover:text-amber-600 transition"
          >
            <ChevronLeft className="rotate-180" /> العودة للوحة التحكم
          </button>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className={`p-8 ${current?.color} text-white flex justify-between items-center`}>
              <div>
                <h2 className="text-3xl font-black mb-2">{current?.title}</h2>
                <p className="opacity-90">{current?.description}</p>
              </div>
              <div className="hidden md:block opacity-20 transform scale-150">
                {current?.icon}
              </div>
            </div>

            <div className="p-8">
              {activeSection === 'consult' && (
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3">
                    <Gavel className="text-amber-600 shrink-0" />
                    <p className="text-sm text-amber-800 font-medium">اطرح سؤالك القانوني وسيقوم المحامي الذكي بتحليل النصوص القانونية ذات الصلة فوراً.</p>
                  </div>
                  <textarea 
                    className="w-full h-48 p-5 border-2 border-slate-100 rounded-2xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition" 
                    placeholder="مثلاً: ما هي إجراءات فسخ عقد كراء تجاري في القانون الجزائري؟" 
                  />
                  <button className="w-full bg-amber-500 text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-amber-500/30 hover:bg-amber-600 transition flex items-center justify-center gap-3">
                    <Search size={24} /> بدء الاستشارة الفورية
                  </button>
                </div>
              )}

              {activeSection === 'analyze' && (
                <div className="flex flex-col items-center justify-center py-12 border-4 border-dashed border-slate-100 rounded-3xl bg-slate-50/50">
                  <div className="bg-blue-600 text-white p-6 rounded-full mb-6 shadow-xl shadow-blue-600/20">
                    <Upload size={40} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">ارفع وثيقتك هنا</h4>
                  <p className="text-slate-500 mb-8 max-w-sm text-center">يدعم صور العقود (JPG, PNG) أو ملفات PDF. سيتم فحص الثغرات القانونية آلياً.</p>
                  <label className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold cursor-pointer hover:bg-blue-700 transition shadow-lg">
                    اختيار الملفات
                    <input type="file" className="hidden" />
                  </label>
                </div>
              )}

              {activeSection === 'contracts' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <User size={18} /> بيانات الطرف الأول
                    </h4>
                    <input className="w-full p-4 bg-slate-50 border-none rounded-xl" placeholder="الاسم الكامل" />
                    <input className="w-full p-4 bg-slate-50 border-none rounded-xl" placeholder="العنوان الوطني" />
                    <input className="w-full p-4 bg-slate-50 border-none rounded-xl" placeholder="رقم بطاقة التعريف" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <FileText size={18} /> نوع العقد والموضوع
                    </h4>
                    <select className="w-full p-4 bg-slate-50 border-none rounded-xl appearance-none">
                      <option>عقد بيع مركبة</option>
                      <option>عقد كراء سكني</option>
                      <option>تعهد والتزام</option>
                      <option>عقد تنازل</option>
                    </select>
                    <textarea className="w-full h-28 p-4 bg-slate-50 border-none rounded-xl" placeholder="شروط إضافية (اختياري)..." />
                    <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2">
                      <Download size={20} /> تحميل نسخة PDF جاهزة
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'research' && (
                <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-slate-800">مساعد الباحث القانوني</h4>
                    <p className="text-slate-500">أدخل عنوان مذكرتك لنقترح عليك الخطة والمراجع</p>
                  </div>
                  <input className="w-full p-5 border-2 border-slate-100 rounded-2xl focus:border-purple-600 outline-none" placeholder="عنوان المذكرة (مثال: جريمة التزوير في القانون الجزائري)" />
                  <div className="grid grid-cols-3 gap-3">
                    {['خطة بحث', 'قائمة مراجع', 'مقدمة مقترحة'].map(tab => (
                      <button key={tab} className="p-3 border border-slate-200 rounded-xl hover:bg-purple-50 hover:border-purple-500 transition font-medium">
                        {tab}
                      </button>
                    ))}
                  </div>
                  <button className="w-full bg-purple-600 text-white py-4 rounded-2xl font-black shadow-lg">إنشاء المسودة الأكاديمية</button>
                </div>
              )}

              {['sources', 'chat'].includes(activeSection) && (
                <div className="py-20 text-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <Scale className="text-slate-300" size={40} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800">قيد التحديث</h4>
                    <p className="text-slate-400">يتم حالياً مزامنة البيانات مع الجريدة الرسمية الجزائرية 2026</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (activeSection !== 'home') return renderActiveSection();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="relative overflow-hidden bg-slate-900 py-28 px-8">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-amber-400 px-6 py-2 rounded-full text-sm font-bold mb-10 border border-white/10 backdrop-blur-sm">
            <ShieldCheck size={18} /> التكنولوجيا القانونية الأولى في الجزائر
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            حقُّك محفوظ <br /> بذكاء <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-[16px]">رقمي</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            منصة متكاملة للمحامين، الطلبة، والمواطنين لتبسيط الإجراءات القانونية الجزائرية.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              {...service}
              onClick={setActiveSection}
            />
          ))}
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 py-16 text-center">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 opacity-50 grayscale">
              <Scale size={32} />
              <span className="text-2xl font-black">الميزان DZ</span>
            </div>
            <p className="text-slate-400 font-bold">تم التطوير لرفع كفاءة العمل القانوني في الجزائر 🇩🇿 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
