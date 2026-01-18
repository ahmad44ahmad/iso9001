import React from 'react';
import { ClipboardCheck, Building2, Calendar, Hash, Save } from 'lucide-react';

const ContractorEvaluationScreen: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
           <div className="p-3 bg-indigo-50 rounded-xl">
              <ClipboardCheck className="w-8 h-8 text-indigo-600" />
           </div>
           <div>
              <h2 className="text-2xl font-bold text-slate-800">تقييم أداء المقاول / المورد</h2>
              <p className="text-slate-500">نموذج التقييم الدوري للخدمات المتعاقد عليها</p>
           </div>
        </div>

        <form className="space-y-6">
           {/* Basic Info */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    اسم المقاول / الشركة
                 </label>
                 <input type="text" className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="أدخل اسم الشركة..." />
              </div>
              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">نوع الخدمة / المشروع</label>
                 <select className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                    <option>صيانة وتشغيل</option>
                    <option>نظافة</option>
                    <option>تغذية</option>
                    <option>توريد مستلزمات طبية</option>
                    <option>أخرى</option>
                 </select>
              </div>
              
              {/* Requested Fields */}
              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                    <Hash className="w-4 h-4" />
                    رقم المورد (Supplier ID)
                 </label>
                 <input 
                    type="text" 
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none font-mono text-slate-600" 
                    placeholder="SUP-XXXX-XXXX"
                 />
              </div>
              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    تاريخ التقييم (Evaluation Date)
                 </label>
                 <input 
                    type="date" 
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                 />
              </div>
           </div>

           {/* Evaluation Matrix */}
           <div className="mt-8">
              <h3 className="font-bold text-slate-800 mb-4">معايير التقييم</h3>
              <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                 <EvaluationRow label="جودة العمل / الخدمة المقدمة" />
                 <EvaluationRow label="الالتزام بالجدول الزمني" />
                 <EvaluationRow label="توفير العمالة والمعدات المطلوبة" />
                 <EvaluationRow label="الامتثال لاشتراطات السلامة والصحة المهنية" />
                 <EvaluationRow label="سرعة الاستجابة للملاحظات والشكاوى" />
              </div>
           </div>

           {/* Notes */}
           <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">ملاحظات إضافية</label>
              <textarea className="w-full p-3 border border-slate-200 rounded-xl h-32 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="أذكر أي ملاحظات هامة أو تفاصيل للعقوبات المطبقة (إن وجدت)..."></textarea>
           </div>

           <div className="pt-6 flex justify-end gap-4">
              <button type="button" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">إلغاء</button>
              <button type="button" className="px-8 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 flex items-center gap-2 transition-all">
                 <Save className="w-5 h-5" />
                 حفظ التقييم
              </button>
           </div>
        </form>
      </div>
    </div>
  );
};

const EvaluationRow = ({ label }: { label: string }) => (
   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
      <span className="font-medium text-slate-700">{label}</span>
      <div className="flex gap-4">
         {[1, 2, 3, 4, 5].map((score) => (
            <label key={score} className="flex flex-col items-center cursor-pointer group">
               <input type="radio" name={label} className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
               <span className="text-xs text-slate-400 mt-1 group-hover:text-indigo-500">{score}</span>
            </label>
         ))}
      </div>
   </div>
);

export default ContractorEvaluationScreen;