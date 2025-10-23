import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <div className="w-full" style={{ height: 260 }}>
      <div className="relative w-full h-full">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#121629]/10 via-[#121629]/30 to-[#121629]" />
      </div>
    </div>
  );
}
