import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { READINESS_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-lg rounded-lg text-right">
        <p className="font-bold text-slate-800 mb-1">{label}</p>
        <p className="text-emerald-600 font-bold text-lg mb-1">{payload[0].value}%</p>
        <p className="text-slate-500 text-sm">{data.details}</p>
      </div>
    );
  }
  return null;
};

const ReadinessChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
        <span className="w-2 h-6 bg-blue-600 rounded-full ml-3"></span>
        جاهزية بنود المواصفة
      </h2>
      <div className="h-[350px] w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={READINESS_DATA}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis 
              dataKey="clause" 
              type="category" 
              width={100} 
              tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
              orientation="right"
            />
            <Tooltip cursor={{fill: '#f1f5f9'}} content={<CustomTooltip />} />
            <Bar dataKey="percentage" radius={[4, 0, 0, 4]} barSize={24}>
              {READINESS_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-4 text-sm text-slate-500">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span>جاهزية عالية</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>يحتاج عمل</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>حرج</span>
         </div>
      </div>
    </div>
  );
};

export default ReadinessChart;