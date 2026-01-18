import React from 'react';
import { AlertTriangle, ShieldAlert, ArrowLeft } from 'lucide-react';
import { HIGH_PRIORITY_GAPS, MEDIUM_PRIORITY_GAPS } from '../constants';
import { GapItem } from '../types';

const GapAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
          <span className="w-2 h-6 bg-red-500 rounded-full ml-3"></span>
          الفجوات ذات الأولوية القصوى (عاجل)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HIGH_PRIORITY_GAPS.map((gap, idx) => (
            <GapCard key={idx} gap={gap} color="red" />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
          <span className="w-2 h-6 bg-amber-500 rounded-full ml-3"></span>
          الفجوات متوسطة الأولوية (المرحلة الثانية)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MEDIUM_PRIORITY_GAPS.map((gap, idx) => (
            <GapCard key={idx} gap={gap} color="amber" />
          ))}
        </div>
      </div>
    </div>
  );
};

interface GapCardProps {
  gap: GapItem;
  color: 'red' | 'amber';
}

const GapCard: React.FC<GapCardProps> = ({ gap, color }) => {
  const isRed = color === 'red';
  return (
    <div className={`p-4 rounded-xl border ${isRed ? 'border-red-100 bg-red-50/30' : 'border-amber-100 bg-amber-50/30'} flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300`}>
      <div>
        <div className="flex justify-between items-start mb-2">
          <div className={`p-1.5 rounded-lg ${isRed ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
            {isRed ? <ShieldAlert className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
          </div>
          <span className="text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded border border-slate-100">
            البند {gap.clause}
          </span>
        </div>
        <h3 className="font-bold text-slate-800 text-lg mb-2">{gap.title}</h3>
        <p className="text-slate-600 text-sm mb-4">{gap.action}</p>
      </div>
      
      <div className={`mt-2 pt-3 border-t ${isRed ? 'border-red-100' : 'border-amber-100'} flex items-center text-xs font-semibold ${isRed ? 'text-red-700' : 'text-amber-700'}`}>
         <span>المطلوب: إجراء فوري</span>
         <ArrowLeft className="w-3 h-3 mr-auto" />
      </div>
    </div>
  );
};

export default GapAnalysis;