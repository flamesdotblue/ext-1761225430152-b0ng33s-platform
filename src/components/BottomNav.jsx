import { Home, CalendarDays, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="px-5 pb-6">
      <div className="w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-3 flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
        <NavItem active icon={Home} label="Home" />
        <NavItem icon={CalendarDays} label="Bookings" />
        <NavItem icon={User} label="Profile" />
      </div>
    </nav>
  );
}

function NavItem({ icon: Icon, label, active = false }) {
  return (
    <button className={`flex flex-col items-center justify-center gap-1 px-3 py-1 rounded-xl transition-colors ${active ? 'text-white' : 'text-white/70 hover:text-white'}`}>
      <Icon size={20} />
      <span className="text-[11px] leading-none">{label}</span>
    </button>
  );
}
