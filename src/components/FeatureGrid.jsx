import { Calendar, Users, Trophy, Map } from 'lucide-react';

const features = [
  {
    title: 'Book a Court',
    desc: 'Reserve premium courts instantly',
    icon: Calendar,
    bg: 'from-[#ed7621] to-[#cf3527]'
  },
  {
    title: 'Join a Match',
    desc: 'Find games that fit your level',
    icon: Users,
    bg: 'from-[#cf3527] to-[#ed7621]'
  },
  {
    title: 'Events & Leagues',
    desc: 'Compete and climb the ladder',
    icon: Trophy,
    bg: 'from-[#ed7621] to-[#cf3527]'
  },
  {
    title: 'Nearby Clubs',
    desc: 'Explore venues around you',
    icon: Map,
    bg: 'from-[#cf3527] to-[#ed7621]'
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((f, idx) => (
        <FeatureCard key={idx} {...f} />
      ))}
    </div>
  );
}

function FeatureCard({ title, desc, icon: Icon, bg }) {
  return (
    <button className="group relative rounded-2xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] bg-white/5 backdrop-blur-sm border border-white/10 p-0 text-left">
      <div className={`h-24 w-full bg-gradient-to-br ${bg} opacity-90`} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold leading-tight">{title}</h3>
            <p className="text-xs text-white/70 mt-1">{desc}</p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shadow-inner">
            <Icon size={20} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/5" />
    </button>
  );
}
