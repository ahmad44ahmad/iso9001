import React, { useState } from 'react';
import { Search, Users, FileText, MoreHorizontal } from 'lucide-react';

const BeneficiaryManagementScreen: React.FC = () => {
  // Filter State
  const [filters, setFilters] = useState({
    name: '',
    nationalId: '',
    department: '',
    category: '',
    status: ''
  });

  // Mock Data
  const beneficiaries = [
    { id: 101, name: 'عبدالله محمد الزهراني', nationalId: '1056482154', department: 'الرعاية الاجتماعية', category: 'إعاقة حركية', status: 'نشط', room: 'A-102' },
    { id: 102, name: 'سعد فهد الغامدي', nationalId: '1048952314', department: 'الرعاية الطبية', category: 'شلل رباعي', status: 'نشط', room: 'M-204' },
    { id: 103, name: 'نورة علي الشهري', nationalId: '1089562314', department: 'الرعاية النفسية', category: 'توحد', status: 'خروج مؤقت', room: '-' },
    { id: 104, name: 'فيصل عمر القحطاني', nationalId: '1023658974', department: 'التأهيل المهني', category: 'صعوبات تعلم', status: 'نشط', room: 'V-101' },
    { id: 105, name: 'محمد حسن العمري', nationalId: '1012548963', department: 'الرعاية الاجتماعية', category: 'متلازمة داون', status: 'محول', room: '-' },
  ];

  const filteredBeneficiaries = beneficiaries.filter(b => {
    return (
      b.name.includes(filters.name) &&
      b.nationalId.includes(filters.nationalId) &&
      (filters.department === '' || b.department === filters.department) &&
      (filters.category === '' || b.category === filters.category) &&
      (filters.status === '' || b.status === filters.status)
    );
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-6">
      {/* Advanced Search Panel */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
           <Search className="w-5 h-5 text-indigo-600" />
           بحث متقدم عن المستفيدين
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
           <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">اسم المستفيد</label>
              <input 
                type="text" 
                className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="الاسم..."
                value={filters.name}
                onChange={(e) => handleFilterChange('name', e.target.value)}
              />
           </div>
           <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">رقم الهوية</label>
              <input 
                type="text" 
                className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="السجل المدني..."
                value={filters.nationalId}
                onChange={(e) => handleFilterChange('nationalId', e.target.value)}
              />
           </div>
           <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">القسم</label>
              <select 
                className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={filters.department}
                onChange={(e) => handleFilterChange('department', e.target.value)}
              >
                 <option value="">الكل</option>
                 <option value="الرعاية الاجتماعية">الرعاية الاجتماعية</option>
                 <option value="الرعاية الطبية">الرعاية الطبية</option>
                 <option value="الرعاية النفسية">الرعاية النفسية</option>
                 <option value="التأهيل المهني">التأهيل المهني</option>
              </select>
           </div>
           <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">فئة المستفيد</label>
              <select 
                className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                 <option value="">الكل</option>
                 <option value="إعاقة حركية">إعاقة حركية</option>
                 <option value="شلل رباعي">شلل رباعي</option>
                 <option value="توحد">توحد</option>
                 <option value="متلازمة داون">متلازمة داون</option>
              </select>
           </div>
           <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">حالة المستفيد</label>
              <select 
                className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              >
                 <option value="">الكل</option>
                 <option value="نشط">نشط</option>
                 <option value="خروج مؤقت">خروج مؤقت</option>
                 <option value="محول">محول</option>
                 <option value="خروج نهائي">خروج نهائي</option>
              </select>
           </div>
        </div>
      </div>

      {/* Results List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
           <h3 className="font-bold text-slate-800 flex items-center gap-2">
             <Users className="w-5 h-5 text-slate-500" />
             قائمة المستفيدين ({filteredBeneficiaries.length})
           </h3>
           <button className="text-sm text-indigo-600 font-bold hover:underline">تصدير Excel</button>
        </div>
        <div className="divide-y divide-slate-100">
           {filteredBeneficiaries.length > 0 ? (
             filteredBeneficiaries.map(b => (
               <div key={b.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                        {b.name.charAt(0)}
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-800">{b.name}</h4>
                        <div className="flex gap-2 text-xs text-slate-500 mt-1">
                           <span>ID: {b.nationalId}</span>
                           <span>•</span>
                           <span>{b.category}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="hidden md:block text-center">
                        <p className="text-xs text-slate-400">القسم</p>
                        <p className="text-sm font-medium text-slate-700">{b.department}</p>
                     </div>
                     <div className="hidden md:block text-center">
                        <p className="text-xs text-slate-400">الغرفة</p>
                        <p className="text-sm font-medium text-slate-700">{b.room}</p>
                     </div>
                     <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                           b.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' :
                           b.status === 'خروج مؤقت' ? 'bg-amber-100 text-amber-700' :
                           'bg-slate-100 text-slate-600'
                        }`}>
                           {b.status}
                        </span>
                     </div>
                     <button className="p-2 text-slate-400 hover:text-indigo-600">
                        <FileText className="w-5 h-5" />
                     </button>
                  </div>
               </div>
             ))
           ) : (
             <div className="p-8 text-center text-slate-500">لا توجد نتائج تطابق معايير البحث</div>
           )}
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryManagementScreen;