import { Phase, ReadinessData, GapItem } from './types';

export const READINESS_DATA: ReadinessData[] = [
  { clause: "4. سياق المنظمة", percentage: 95, color: "#10b981", details: "دليل النظام، حوكمة، تحليل سياق" },
  { clause: "5. القيادة", percentage: 90, color: "#10b981", details: "سياسة الجودة، الأدوار، الحوكمة" },
  { clause: "6. التخطيط", percentage: 75, color: "#f59e0b", details: "إدارة المخاطر، الأهداف، المؤشرات" },
  { clause: "7. الدعم", percentage: 85, color: "#10b981", details: "الموارد، الكفاءة، السلامة (5 نجوم)" },
  { clause: "8. التشغيل", percentage: 70, color: "#f59e0b", details: "73 عملية موثقة، ضبط التشغيل" },
  { clause: "9. تقييم الأداء", percentage: 70, color: "#f59e0b", details: "المؤشرات، التدقيق الداخلي" },
  { clause: "10. التحسين", percentage: 55, color: "#ef4444", details: "الإجراءات التصحيحية (CAPA)" },
];

export const PHASES: Phase[] = [
  {
    id: 1,
    title: "تأسيس البنية وإغلاق الفجوات",
    duration: "أسابيع 1-6",
    weeks: "1-6",
    description: "تشكيل الفريق، تحليل الفجوات المتقدم، وإغلاق الفجوات الحرجة (المخاطر، الوثائق).",
    tasks: ["تشكيل فريق القيادة", "تحليل الفجوات (Gap Analysis)", "إنشاء سجل المخاطر الموحد", "توحيد نظام الوثائق"],
    readiness: 80,
    status: 'current'
  },
  {
    id: 2,
    title: "التطبيق الكامل والتدريب",
    duration: "أسابيع 7-12",
    weeks: "7-12",
    description: "تدريب شامل لجميع المستويات وتفعيل العمليات المحدثة وتوليد السجلات.",
    tasks: ["تدريب الإدارة والموظفين", "تفعيل سجل المخاطر", "إطلاق لوحة المؤشرات", "أرشفة السجلات الإلزامية"],
    readiness: 90,
    status: 'upcoming'
  },
  {
    id: 3,
    title: "التدقيق الداخلي والمراجعة",
    duration: "أسابيع 13-16",
    weeks: "13-16",
    description: "تأهيل المدققين الداخليين وتنفيذ التدقيق الأول ومعالجة عدم المطابقات.",
    tasks: ["تدريب المدققين الداخليين", "تنفيذ التدقيق الداخلي", "معالجة عدم المطابقات (CAPA)"],
    readiness: 95,
    status: 'upcoming'
  },
  {
    id: 4,
    title: "المراجعة الإدارية والاستعداد",
    duration: "أسابيع 17-20",
    weeks: "17-20",
    description: "مراجعة الإدارة العليا للأداء واختيار جهة الاعتماد الخارجية.",
    tasks: ["عقد اجتماع المراجعة الإدارية", "اختيار جهة الاعتماد (SASO approved)", "تحديد موعد التدقيق"],
    readiness: 97,
    status: 'upcoming'
  },
  {
    id: 5,
    title: "التدقيق الخارجي والشهادة",
    duration: "أسابيع 21-28",
    weeks: "21-28",
    description: "تنفيذ مرحلتي التدقيق الخارجي والحصول على الشهادة.",
    tasks: ["تدقيق المرحلة الأولى (وثائق)", "تدقيق المرحلة الثانية (ميداني)", "استلام شهادة ISO 9001"],
    readiness: 100,
    status: 'upcoming'
  },
  {
    id: 6,
    title: "الصيانة والتحسين المستمر",
    duration: "مستمر",
    weeks: "29+",
    description: "الحفاظ على النظام والتحسين الدوري.",
    tasks: ["تدقيق مراقبة نصف سنوي", "اجتماعات لجنة الجودة الشهرية"],
    readiness: 100,
    status: 'upcoming'
  }
];

export const HIGH_PRIORITY_GAPS: GapItem[] = [
  { title: "سجل المخاطر والفرص الموحد", priority: "High", clause: "6.1", action: "إنشاء قاعدة بيانات شاملة للمخاطر وتقييمها." },
  { title: "إجراء التدقيق الداخلي", priority: "High", clause: "9.2", action: "توثيق إجراء مفصل للتخطيط والتنفيذ والمتابعة." },
  { title: "نظام الإجراءات التصحيحية (CAPA)", priority: "High", clause: "10.2", action: "إنشاء نموذج وإجراء لمعالجة عدم المطابقة." },
  { title: "إجراء ضبط الوثائق", priority: "High", clause: "7.5", action: "توحيد آلية الإنشاء والمراجعة والأرشفة." },
];

export const MEDIUM_PRIORITY_GAPS: GapItem[] = [
  { title: "تحليل SWOT محدث", priority: "Medium", clause: "4.1", action: "تحديث التحليل لعام 2025." },
  { title: "إدارة الشكاوى", priority: "Medium", clause: "8.2", action: "تحديث نظام التعامل مع شكاوى المستفيدين." },
  { title: "قياس رضا المستفيدين", priority: "Medium", clause: "9.1", action: "تفعيل سجلات استطلاعات الرأي والتحليل." },
];