import { Bell, Search, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <div className="pt-5 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10 ring-2 ring-white/15 overflow-hidden flex items-center justify-center">
            <span className="text-sm font-semibold">AK</span>
          </div>
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-widest text-white/60">Location</div>
            <div className="flex items-center gap-1 text-sm font-medium">
              <MapPin size={14} className="text-[#ed7621]" />
              <span>Shams, Rabat Street, Abu Dhabi</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors flex items-center justify-center shadow-sm">
            <Bell className="text-white" size={20} />
          </button>
          <button className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors flex items-center justify-center shadow-sm">
            <Search className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
