import React from 'react';
import { Calendar, User, Star, MessageSquare, Send } from 'lucide-react';

const PerformanceFeedbackScreen: React.FC = () => {
  // Mock History Data
  const history = [
    { id: 1, date: '2025-11-18', employee: 'محمد أحمد الغامدي', role: 'أخصائي علاج طبيعي', rating: 5, comments: 'أداء ممتاز في التعامل مع الحالات الحرجة هذا الأسبوع.', type: 'إشادة' },
    { id: 2, date: '2025-11-15', employee: 'سعيد علي الزهراني', role: 'فني صيانة', rating: 3, comments: 'تأخر في الاستجابة لطلب صيانة التكييف في الجناح ب.', type: 'ملاحظة تحسين' },
    { id: 3, date: '2025-11-10', employee: 'خالد عبدالله', role: 'ممرض', rating: 4, comments: 'التزام جيد ببروتوكولات مكافحة العدوى.', type: 'دورية' },
    { id: 4, date: '2025-11-05', employee: 'محمد أحمد الغامدي', role: 'أخصائي علاج طبيعي', rating: 5, comments: 'تم تكريمه من قبل إدارة المركز لجهوده.', type: 'إشادة' },
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-6">
      {/* New Feedback Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Send className="w-5 h-5 text-blue-600" />
          إرسال ملاحظة أداء جديدة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">الموظف</label>
            <input type="text" className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="بحث عن موظف..." />
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">نوع الملاحظة</label>
             <select className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>إشادة وتقدير</option>
                <option>ملاحظة تحسين</option>
                <option>تقييم دوري</option>
                <option>مخالفة</option>
             </select>
          </div>
          <div className="md:col-span-2">
             <label className="block text-sm font-medium text-slate-700 mb-1">تفاصيل الملاحظة</label>
             <textarea className="w-full p-2 border border-slate-200 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="اكتب التفاصيل هنا..."></textarea>
          </div>
          <div className="md:col-span-2 flex justify-end">
             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                حفظ الملاحظة
             </button>
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-indigo-600" />
          سجل الملاحظات السابق
        </h3>
        
        <div className="space-y-4">
          {history.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
               <div className="flex items-center justify-center md:flex-col md:w-32 gap-2 text-slate-500 border-b md:border-b-0 md:border-l border-slate-200 pl-4 pb-2 md:pb-0">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-bold">{item.date}</span>
               </div>
               <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-slate-400" />
                        <h4 className="font-bold text-slate-800">{item.employee}</h4>
                        <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">{item.role}</span>
                     </div>
                     <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        item.type === 'إشادة' ? 'bg-emerald-100 text-emerald-700' : 
                        item.type === 'ملاحظة تحسين' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                     }`}>
                        {item.type}
                     </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{item.comments}</p>
                  <div className="flex items-center gap-1">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
                     ))}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceFeedbackScreen;