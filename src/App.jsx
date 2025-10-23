import Header from './components/Header';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#121629] text-white flex items-center justify-center p-4">
      <div className="relative w-[393px] h-[852px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-[#121629]">
        <div className="absolute inset-0">
          <HeroCover />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <Header />

          <div className="px-5 mt-4">
            <h1 className="text-[28px] leading-tight font-semibold tracking-tight">
              Game on. Book. Play. Win.
            </h1>
            <p className="text-white/70 text-sm mt-1">
              Discover courts, matches, and coaches near you.
            </p>
          </div>

          <div className="px-5 mt-6">
            <FeatureGrid />
          </div>

          <div className="mt-auto">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
