export interface Phase {
  id: number;
  title: string;
  duration: string;
  weeks: string;
  description: string;
  tasks: string[];
  readiness: number;
  status: 'completed' | 'current' | 'upcoming';
}

export interface ReadinessData {
  clause: string;
  percentage: number;
  color: string;
  details: string;
}

export interface GapItem {
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  clause: string;
  action: string;
}

export interface KeyStat {
  label: string;
  value: string | number;
  icon: any;
  color: string;
  subtext?: string;
}