
import React, { useState } from 'react';
import { Search, Filter, Edit2, Check, Save, X, Plus, Package, Truck, ArrowUpRight } from 'lucide-react';

interface ReceivingItem {
  id: number;
  itemName: string;
  category: string;
  supplier: string;
  quantity: number;
  unit: string;
  quality: 'ممتاز' | 'جيد' | 'مقبول' | 'مرفوض';
  status: 'قيد الفحص' | 'تم الاستلام' | 'مرفوض';
  date: string;
}

const DailyReceivingScreen: React.FC = () => {
  const [items, setItems] = useState<ReceivingItem[]>([
    { id: 1, itemName: 'أرز بسمتي 10كج', category: 'أغذية', supplier: 'شركة الأغذية الوطنية', quantity: 50, unit: 'كيس', quality: 'ممتاز', status: 'تم الاستلام', date: '2025-11-20' },
    { id: 2, itemName: 'معقم يدين 500مل', category: 'مستلزمات طبية', supplier: 'الشركة الطبية المتطورة', quantity: 100, unit: 'عبوة', quality: 'جيد', status: 'قيد الفحص', date: '2025-11-20' },
    { id: 3, itemName: 'لحم ضأن طازج', category: 'أغذية', supplier: 'مؤسسة اللحوم الذهبية', quantity: 30, unit: 'كج', quality: 'ممتاز', status: 'تم الاستلام', date: '2025-11-20' },
    { id: 4, itemName: 'أقنعة وجه طبية', category: 'مستلزمات طبية', supplier: 'الشركة الطبية المتطورة', quantity: 500, unit: 'علبة', quality: 'مقبول', status: 'تم الاستلام', date: '2025-11-19' },
    { id: 5, itemName: 'منظفات أرضيات', category: 'نظافة', supplier: 'عالم النظافة', quantity: 20, unit: 'جالون', quality: 'ممتاز', status: 'تم الاستلام', date: '2025-11-19' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<{quantity: number, quality: string}>({ quantity: 0, quality: '' });

  const handleEdit = (item: ReceivingItem) => {
    setEditingId(item.id);
    setEditValues({ quantity: item.quantity, quality: item.quality });
  };

  const handleSave = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: editValues.quantity, quality: editValues.quality as any } : item
    ));
    setEditingId(null);
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.itemName.includes(searchQuery) || item.supplier.includes(searchQuery);
    const matchesFilter = filterCategory === 'all' || item.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-10">
      <div className="glass-card rounded-[2.5rem] p-10 border-white/80">
        <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center gap-6 mb-10">
           <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-600 rounded-xl text-white">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">سجل الاستلام والحوكمة</h3>
              </div>
              <p className="text-slate-500 text-sm font-medium">توثيق وإدارة الواردات اليومية لضمان مطابقة معايير الجودة</p>
           </div>
           
           <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-72">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="ابحث عن صنف، مورد..." 
                  className="w-full pr-12 pl-4 py-3 bg-white/50 border border-slate-200 rounded-[1.2rem] focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-[1.2rem] font-black text-sm flex items-center gap-2 shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
                <Plus className="w-5 h-5" />
                إضافة استلام
              </button>
           </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-slate-50/80 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                <th className="py-6 px-6">بيانات الصنف</th>
                <th className="py-6 px-6">المورد</th>
                <th className="py-6 px-6 text-center">الكمية</th>
                <th className="py-6 px-6 text-center">تقييم الجودة</th>
                <th className="py-6 px-6">الحالة</th>
                <th className="py-6 px-6 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-indigo-50/30 transition-all group">
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:shadow-md transition-all">
                        <Package className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-black text-slate-800 text-sm">{item.itemName}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-bold text-slate-600">{item.supplier}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-center">
                    {editingId === item.id ? (
                      <div className="flex items-center justify-center gap-2">
                        <input 
                          type="number" 
                          value={editValues.quantity}
                          onChange={(e) => setEditValues({...editValues, quantity: parseInt(e.target.value)})}
                          className="w-20 p-2 border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-500 text-center font-black"
                        />
                      </div>
                    ) : (
                      <span className="text-sm font-black text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl">{item.quantity} {item.unit}</span>
                    )}
                  </td>
                  <td className="py-6 px-6 text-center">
                    {editingId === item.id ? (
                      <select 
                        value={editValues.quality}
                        onChange={(e) => setEditValues({...editValues, quality: e.target.value})}
                        className="p-2 border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-500 text-sm font-bold"
                      >
                        <option value="ممتاز">ممتاز</option>
                        <option value="جيد">جيد</option>
                        <option value="مقبول">مقبول</option>
                        <option value="مرفوض">مرفوض</option>
                      </select>
                    ) : (
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-[10px] font-black tracking-widest ${
                        item.quality === 'ممتاز' ? 'bg-emerald-50 text-emerald-600' :
                        item.quality === 'جيد' ? 'bg-blue-50 text-blue-600' :
                        item.quality === 'مقبول' ? 'bg-amber-50 text-amber-600' :
                        'bg-red-50 text-red-600'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          item.quality === 'ممتاز' ? 'bg-emerald-500' :
                          item.quality === 'جيد' ? 'bg-blue-500' :
                          item.quality === 'مقبول' ? 'bg-amber-500' : 'bg-red-500'
                        }`}></div>
                        {item.quality}
                      </div>
                    )}
                  </td>
                  <td className="py-6 px-6">
                     <span className={`inline-flex items-center gap-2 text-xs font-black ${
                        item.status === 'تم الاستلام' ? 'text-emerald-600' :
                        item.status === 'قيد الفحص' ? 'text-amber-600' : 'text-red-600'
                     }`}>
                        {item.status === 'تم الاستلام' && <Check className="w-4 h-4" />}
                        {item.status}
                     </span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    {editingId === item.id ? (
                      <div className="flex gap-2 justify-center">
                        <button onClick={() => handleSave(item.id)} className="p-2 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-100 hover:scale-105 transition-transform"><Save className="w-5 h-5" /></button>
                        <button onClick={() => setEditingId(null)} className="p-2 bg-slate-100 text-slate-500 rounded-xl hover:scale-105 transition-transform"><X className="w-5 h-5" /></button>
                      </div>
                    ) : (
                      <button onClick={() => handleEdit(item)} className="p-2 text-slate-400 hover:bg-indigo-600 hover:text-white rounded-xl transition-all active:scale-90">
                        <Edit2 className="w-5 h-5" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ReceivingStatCard title="إجمالي الاستلامات (اليوم)" value="12" icon={<Package />} color="indigo" />
        <ReceivingStatCard title="قيد الفحص الفني" value="03" icon={<Search />} color="amber" />
        <ReceivingStatCard title="معدل الامتثال للمواصفة" value="98.5%" icon={<Check />} color="emerald" />
      </div>
    </div>
  );
};

const ReceivingStatCard = ({ title, value, icon, color }: any) => (
  <div className="glass-card p-8 rounded-[2rem] flex items-center justify-between group hover:-translate-y-2 transition-all duration-500">
    <div>
      <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">{title}</p>
      <h4 className="text-4xl font-black text-slate-800">{value}</h4>
    </div>
    <div className={`p-5 rounded-3xl bg-${color}-500 text-white shadow-2xl shadow-${color}-200 group-hover:scale-110 transition-transform`}>
      {React.cloneElement(icon, { className: "w-8 h-8" })}
    </div>
  </div>
);

export default DailyReceivingScreen;
