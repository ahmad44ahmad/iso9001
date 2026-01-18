
import React, { useState } from 'react';
import { PHASES } from '../constants';
// Added Clock to the imports from lucide-react
import { Calendar, CheckCircle2, Circle, ChevronDown, Rocket, Target, ShieldCheck, Award, Clock } from 'lucide-react';

const PhaseTimeline: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const getPhaseIcon = (id: number) => {
    switch(id) {
      case 1: return <Target className="w-5 h-5" />;
      case 2: return <Rocket className="w-5 h-5" />;
      case 3: return <ShieldCheck className="w-5 h-5" />;
      case 5: return <Award className="w-5 h-5" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

  return (
    <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden border-white/80">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500"></div>
      
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-black text-slate-800 flex items-center tracking-tight">
              الخارطة الزمنية الذكية
          </h2>
          <p className="text-slate-400 text-sm font-bold mt-1 uppercase tracking-widest">تتبع مراحل التنفيذ الفني لمتطلبات الآيزو</p>
        </div>
        <div className="bg-indigo-600 text-white px-6 py-2 rounded-2xl shadow-xl shadow-indigo-200 text-sm font-black flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            28 أسبوع عمل
        </div>
      </div>
      
      <div className="relative pr-8">
        {/* Modern Vertical Line */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-100 via-blue-100 to-transparent rounded-full"></div>

        <div className="space-y-8">
          {PHASES.map((phase, idx) => (
            <div key={phase.id} className="relative">
              {/* Dot / Icon on line */}
              <div className={`absolute -right-[1.15rem] top-6 z-20 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 border-2 ${
                phase.status === 'completed' ? 'bg-emerald-500 border-emerald-200 text-white' : 
                phase.status === 'current' ? 'bg-indigo-600 border-indigo-200 text-white animate-pulse' : 
                'bg-white border-slate-200 text-slate-300'
              }`}>
                {getPhaseIcon(phase.id)}
              </div>

              {/* Card Container */}
              <div 
                className={`transition-all duration-500 rounded-[2rem] border overflow-hidden cursor-pointer group ${
                  expandedPhase === phase.id 
                    ? 'bg-white shadow-2xl shadow-indigo-100/50 border-indigo-100 ring-4 ring-indigo-50/50' 
                    : 'bg-white/40 border-white/50 hover:bg-white hover:shadow-xl'
                }`}
                onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
              >
                <div className="p-8">
                    <div className="flex justify-between items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                                <span className={`text-[10px] font-black px-3 py-1 rounded-lg tracking-widest uppercase ${
                                  phase.status === 'current' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                                }`}>المرحلة {phase.id}</span>
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                                    <Clock className="w-3.5 h-3.5" />
                                    {phase.duration}
                                </div>
                            </div>
                            <h3 className={`text-xl font-black transition-colors ${expandedPhase === phase.id ? 'text-indigo-600' : 'text-slate-800'}`}>
                              {phase.title}
                            </h3>
                        </div>
                        <div className={`p-2 rounded-xl transition-transform duration-500 ${expandedPhase === phase.id ? 'rotate-180 bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
                           <ChevronDown className="w-6 h-6" />
                        </div>
                    </div>
                    
                    <div className={`grid transition-all duration-500 ease-in-out ${expandedPhase === phase.id ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden space-y-6">
                            <p className="text-slate-600 text-lg leading-relaxed border-t border-slate-50 pt-6 font-medium italic">
                                "{phase.description}"
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {phase.tasks.map((task, tidx) => (
                                    <div key={tidx} className="flex items-center gap-4 bg-slate-50/80 p-4 rounded-2xl border border-white hover:border-indigo-100 transition-colors group/item">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-indigo-500 shadow-sm border border-slate-100 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                                          {tidx + 1}
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">{task}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-indigo-50/50 p-6 rounded-[1.5rem] border border-indigo-100/50">
                               <div className="flex items-center justify-between mb-3">
                                  <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">معدل الجاهزية المستهدف</span>
                                  <span className="text-xl font-black text-indigo-600">{phase.readiness}%</span>
                               </div>
                               <div className="w-full bg-indigo-100/50 h-3 rounded-full overflow-hidden p-1 shadow-inner">
                                   <div 
                                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-indigo-200" 
                                      style={{ width: expandedPhase === phase.id ? `${phase.readiness}%` : '0%' }}
                                   ></div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhaseTimeline;
