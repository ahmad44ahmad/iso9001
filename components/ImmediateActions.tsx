import React from 'react';
import { CheckSquare, PlayCircle } from 'lucide-react';

const ImmediateActions: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <PlayCircle className="w-8 h-8 text-emerald-400" />
        <h2 className="text-xl font-bold">الخطوات الفورية (48 ساعة القادمة)</h2>
      </div>

      <div className="space-y-4">
        <ActionItem 
            time="خلال 48 ساعة" 
            title="اجتماع الإدارة العليا" 
            desc="الموافقة الرسمية، تعيين ممثل الإدارة، تخصيص الميزانية."
        />
        <ActionItem 
            time="خلال أسبوع" 
            title="تشكيل فريق القيادة" 
            desc="تعيين منسق الجودة وفريق المدققين الداخليين."
        />
        <ActionItem 
            time="خلال أسبوعين" 
            title="إطلاق المرحلة الأولى" 
            desc="اجتماع الانطلاق الرسمي وبدء التدريبات."
        />
      </div>
      
      <div className="mt-8 pt-6 border-t border-slate-700 text-center">
        <p className="text-slate-400 text-sm mb-1">التاريخ المستهدف للشهادة</p>
        <p className="text-2xl font-bold text-emerald-400">14 يونيو 2026</p>
      </div>
    </div>
  );
};

const ActionItem = ({ time, title, desc }: any) => (
    <div className="flex gap-4 items-start bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
        <div className="mt-1">
            <CheckSquare className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block mb-1">{time}</span>
            <h4 className="font-bold text-white mb-1">{title}</h4>
            <p className="text-sm text-slate-300">{desc}</p>
        </div>
    </div>
);

export default ImmediateActions;