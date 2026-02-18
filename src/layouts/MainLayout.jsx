import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f6fb] font-sans text-slate-800">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_8%,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(59,130,246,0.08),transparent_25%)]" />

      <Navigation />

      <main className="mx-auto w-[min(1160px,94vw)] pb-12 pt-4 md:pt-6">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
