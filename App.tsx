
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ListTodo, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Truck, 
  ClipboardCheck, 
  UserCheck,
  Menu,
  ChevronLeft,
  Bell,
  Search
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import ReadinessChart from './components/ReadinessChart';
import PhaseTimeline from './components/PhaseTimeline';
import GapAnalysis from './components/GapAnalysis';
import ImmediateActions from './components/ImmediateActions';
import PerformanceFeedbackScreen from './components/PerformanceFeedbackScreen';
import DailyReceivingScreen from './components/DailyReceivingScreen';
import BeneficiaryManagementScreen from './components/BeneficiaryManagementScreen';
import ContractorEvaluationScreen from './components/ContractorEvaluationScreen';

type ViewState = 'overview' | 'roadmap' | 'gaps' | 'performance' | 'receiving' | 'beneficiaries' | 'contractors';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewState>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return (
          <div className="animate-fade-in space-y-10">
            <HeroSection />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReadinessChart />
                <div className="glass-card rounded-[2rem] p-8 border-emerald-100/50 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
                   <div className="flex items-start gap-6">
                      <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-xl shadow-emerald-200">
                         <ShieldCheck className="w-10 h-10" />
                      </div>
                      <div>
                         <h3 className="text-2xl font-black text-emerald-900 mb-3 tracking-tight">محفز النجاح: السلامة الإسعافية (5 نجوم)</h3>
                         <p className="text-emerald-800/80 text-lg leading-relaxed font-medium">
                             يعد هذا الإنجاز الركيزة الأساسية للوصول السريع للشهادة، حيث يغطي تلقائياً متطلبات بيئة العمل ويوفر أكثر من شهرين من العمل التشغيلي.
                         </p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <ImmediateActions />
              </div>
            </div>
          </div>
        );
      case 'roadmap':
        return (
          <div className="animate-fade-in grid grid-cols-1 lg:grid-cols-3 gap-10">
             <div className="lg:col-span-2">
                <PhaseTimeline />
             </div>
             <div className="lg:col-span-1 space-y-8">
                <ImmediateActions />
                <div className="glass-card p-8 rounded-[2rem] border-indigo-100/50">
                    <h3 className="font-black text-xl text-slate-800 mb-6 flex items-center gap-3">
                      <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
                      الموارد اللوجستية
                    </h3>
                    <div className="space-y-4">
                        <ResourceItem label="مدير المشروع" value="متفرغ جزئي" color="bg-blue-500" />
                        <ResourceItem label="منسق الجودة" value="متفرغ كامل" color="bg-emerald-500" />
                        <ResourceItem label="استشاري خارجي" value="اختياري" color="bg-amber-500" />
                        <ResourceItem label="الميزانية التقديرية" value="105-170 ألف ريال" color="bg-indigo-500" />
                    </div>
                </div>
             </div>
          </div>
        );
      case 'gaps':
        return (
           <div className="animate-fade-in grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                 <GapAnalysis />
              </div>
              <div className="lg:col-span-1">
                 <ReadinessChart />
              </div>
           </div>
        );
      case 'performance': return <div className="animate-fade-in"><PerformanceFeedbackScreen /></div>;
      case 'receiving': return <div className="animate-fade-in"><DailyReceivingScreen /></div>;
      case 'beneficiaries': return <div className="animate-fade-in"><BeneficiaryManagementScreen /></div>;
      case 'contractors': return <div className="animate-fade-in"><ContractorEvaluationScreen /></div>;
      default: return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-row-reverse" dir="rtl">
      {/* Sidebar - Artistic Style */}
      <aside 
        className={`sidebar-glass h-screen sticky top-0 transition-all duration-500 ${isSidebarOpen ? 'w-80' : 'w-24'} flex flex-col z-50 text-white`}
      >
        <div className="h-24 flex items-center justify-between px-6 border-b border-white/10">
          {isSidebarOpen ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm tracking-tight">ISO 9001 PRO</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">مركز التأهيل الشامل</span>
              </div>
            </div>
          ) : (
            <ShieldCheck className="w-8 h-8 text-indigo-400 mx-auto" />
          )}
        </div>

        <nav className="p-4 space-y-6 flex-1 overflow-y-auto mt-4">
          <div>
            {isSidebarOpen && <p className="px-4 text-[10px] font-black text-slate-500 mb-4 tracking-widest uppercase">الخطة الاستراتيجية</p>}
            <NavButton 
              active={activeView === 'overview'} 
              onClick={() => setActiveView('overview')}
              icon={<LayoutDashboard className="w-5 h-5" />}
              label="لوحة التحكم"
              isOpen={isSidebarOpen}
            />
            <NavButton 
              active={activeView === 'roadmap'} 
              onClick={() => setActiveView('roadmap')}
              icon={<ListTodo className="w-5 h-5" />}
              label="خارطة الطريق"
              isOpen={isSidebarOpen}
            />
            <NavButton 
              active={activeView === 'gaps'} 
              onClick={() => setActiveView('gaps')}
              icon={<BarChart3 className="w-5 h-5" />}
              label="تحليل الفجوات"
              isOpen={isSidebarOpen}
            />
          </div>

          <div>
            {isSidebarOpen && <p className="px-4 text-[10px] font-black text-slate-500 mb-4 tracking-widest uppercase">النظام التشغيلي</p>}
            <NavButton 
              active={activeView === 'performance'} 
              onClick={() => setActiveView('performance')}
              icon={<UserCheck className="w-5 h-5" />}
              label="ملاحظات الأداء"
              isOpen={isSidebarOpen}
            />
            <NavButton 
              active={activeView === 'receiving'} 
              onClick={() => setActiveView('receiving')}
              icon={<Truck className="w-5 h-5" />}
              label="الاستلام اليومي"
              isOpen={isSidebarOpen}
            />
            <NavButton 
              active={activeView === 'beneficiaries'} 
              onClick={() => setActiveView('beneficiaries')}
              icon={<Users className="w-5 h-5" />}
              label="إدارة المستفيدين"
              isOpen={isSidebarOpen}
            />
            <NavButton 
              active={activeView === 'contractors'} 
              onClick={() => setActiveView('contractors')}
              icon={<ClipboardCheck className="w-5 h-5" />}
              label="تقييم الموردين"
              isOpen={isSidebarOpen}
            />
          </div>
        </nav>
        
        <div className="p-6 border-t border-white/10 bg-black/20">
           <div className={`flex items-center gap-4 ${!isSidebarOpen && 'justify-center'}`}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-black shadow-inner border border-white/10">
                ADM
              </div>
              {isSidebarOpen && (
                <div className="overflow-hidden">
                   <p className="text-sm font-bold truncate">مدير النظام</p>
                   <p className="text-[10px] text-slate-400 truncate">Al-Baha Rehab Center</p>
                </div>
              )}
           </div>
        </div>

        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -left-3 top-24 w-6 h-12 bg-indigo-600 rounded-r-lg flex items-center justify-center hover:bg-indigo-500 transition-colors shadow-lg"
        >
          <ChevronLeft className={`w-4 h-4 text-white transition-transform duration-500 ${!isSidebarOpen ? 'rotate-180' : ''}`} />
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen relative">
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-10 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-100 rounded-xl lg:hidden" onClick={() => setIsSidebarOpen(true)}>
                 <Menu className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                  {activeView === 'overview' && 'نظرة عامة على الجاهزية'}
                  {activeView === 'roadmap' && 'الخطة الزمنية للتنفيذ'}
                  {activeView === 'gaps' && 'تقرير تحليل الفجوات'}
                  {activeView === 'performance' && 'إدارة أداء الكوادر'}
                  {activeView === 'receiving' && 'حوكمة عمليات الاستلام'}
                  {activeView === 'beneficiaries' && 'قاعدة بيانات المستفيدين'}
                  {activeView === 'contractors' && 'تقييم كفاءة الموردين'}
                </h2>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">نظام إدارة الجودة الذكي</p>
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center bg-slate-100 px-4 py-2 rounded-2xl border border-slate-200">
                <Search className="w-4 h-4 text-slate-400 ml-2" />
                <input type="text" placeholder="بحث سريع..." className="bg-transparent border-none outline-none text-sm w-40 font-medium" />
              </div>
              <div className="relative cursor-pointer hover:scale-110 transition-transform">
                <Bell className="w-6 h-6 text-slate-400" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] text-white font-bold">3</span>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="text-left">
                <p className="text-xs font-bold text-indigo-600">{new Date().toLocaleDateString('ar-SA', { weekday: 'long' })}</p>
                <p className="text-[10px] text-slate-400 font-medium">{new Date().toLocaleDateString('ar-SA', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
           </div>
        </header>

        <div className="p-10 max-w-[1600px] mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

const NavButton = ({ active, onClick, icon, label, isOpen }: any) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 w-full mb-2 group relative overflow-hidden ${
      active 
        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold shadow-lg shadow-indigo-500/30' 
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
    } ${!isOpen && 'justify-center px-0'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    {isOpen && <span className="text-sm tracking-wide">{label}</span>}
    {active && isOpen && <div className="absolute left-0 w-1.5 h-6 bg-white rounded-r-full"></div>}
  </button>
);

const ResourceItem = ({ label, value, color }: any) => (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white hover:bg-white transition-all group">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${color}`}></div>
          <span className="text-slate-500 text-sm font-bold">{label}</span>
        </div>
        <span className="font-black text-slate-800 text-sm">{value}</span>
    </div>
);

export default App;
