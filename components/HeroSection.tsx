
import React from 'react';
import { Award, Clock, TrendingUp, CheckCircle2, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden mb-10 group">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>

      <div className="glass-card rounded-[2.5rem] p-10 relative z-10 border border-white/50">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">ISO 9001:2015</span>
              <div className="h-px w-12 bg-indigo-200"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 drop-shadow-sm leading-tight">
               خارطة الطريق <br/> 
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">نحو التميز المؤسسي</span>
            </h1>
            <div className="flex flex-col gap-1">
              <p className="text-slate-600 text-2xl font-bold flex items-center gap-2">
                مركز التأهيل الشامل بالباحة
              </p>
              <div className="mt-4 inline-flex items-center gap-3 bg-white/40 backdrop-blur-md px-5 py-2 rounded-2xl border border-white shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-slate-500 text-sm font-bold">
                  إعداد : <span className="text-indigo-600">أحمد عبدالله الشهري</span> & <span className="text-indigo-600">سعيد بن علي الغامدي</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-8 rounded-[2rem] shadow-2xl shadow-indigo-200 relative overflow-hidden group/target">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover/target:scale-110 transition-transform"></div>
              <Award className="w-10 h-10 mb-4 text-indigo-100" />
              <p className="text-indigo-100/80 text-sm font-medium mb-1">تاريخ الاستحقاق المستهدف</p>
              <h3 className="text-3xl font-black">14 يونيو 2026</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="مؤشر الجاهزية" 
            value="77%" 
            icon={<TrendingUp className="w-6 h-6" />} 
            gradient="from-emerald-500 to-teal-600"
            subtext="مستوى متقدم"
          />
          <StatCard 
            title="الجدول الزمني" 
            value="28 أسبوع" 
            icon={<Clock className="w-6 h-6" />} 
            gradient="from-blue-500 to-indigo-600"
            subtext="مسار تنفيذي سريع"
          />
          <StatCard 
            title="العمليات التشغيلية" 
            value="73" 
            icon={<CheckCircle2 className="w-6 h-6" />} 
            gradient="from-violet-500 to-purple-600"
            subtext="عملية معتمدة"
          />
          <StatCard 
            title="تقييم السلامة" 
            value="5 نجوم" 
            icon={<Star className="w-6 h-6" />} 
            gradient="from-amber-400 to-orange-500"
            subtext="السلامة الإسعافية"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, gradient, subtext }: any) => (
  <div className="glass-card p-6 rounded-3xl group hover:-translate-y-2 transition-all duration-500 cursor-default border-white/80 overflow-hidden relative">
    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${gradient}`}></div>
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-current/20`}>
        {icon}
      </div>
      <div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl font-black text-slate-800 tracking-tight">{value}</h3>
      </div>
    </div>
    <p className="text-slate-500 text-xs font-medium bg-slate-100/50 px-3 py-1 rounded-full inline-block">{subtext}</p>
  </div>
);

export default HeroSection;
