import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/reviews/new', label: 'Reviews' },
  { to: '/reviews', label: 'Comments' },
  { to: '/contact', label: 'Contact' },
];

const linkBaseClass =
  'rounded-full px-3 py-1.5 text-sm font-semibold text-slate-400 transition hover:text-slate-700';

function Navigation() {
  return (
    <header className="sticky top-0 z-30 bg-transparent py-4 backdrop-blur-sm">
      <div className="mx-auto flex w-[min(1160px,94vw)] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(15,39,95,0.08)] md:px-6">
        <NavLink className="inline-flex items-center gap-2" to="/">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold text-white">
            RD
          </span>
        </NavLink>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-center gap-1 md:gap-2"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) => {
                const activeClass =
                  link.to === '/contact'
                    ? 'bg-blue-500 text-white hover:text-white'
                    : 'bg-blue-50 text-blue-500';

                const inactiveClass =
                  link.to === '/contact'
                    ? 'border border-blue-200 text-blue-500 hover:bg-blue-50'
                    : 'text-slate-400 hover:text-slate-700';

                return `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`;
              }}
              end={link.end}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
