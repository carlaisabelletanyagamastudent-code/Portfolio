import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile-photo.svg';

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(59,130,246,0.30)] transition hover:-translate-y-0.5 hover:bg-blue-600';

const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-500';

function HomePage() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_45px_rgba(15,39,95,0.08)] sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(circle_at_15%_50%,rgba(59,130,246,0.08),transparent_36%),radial-gradient(circle_at_85%_50%,rgba(59,130,246,0.06),transparent_34%)]" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-md border border-slate-300 bg-white px-3 py-1 text-3xl leading-none text-slate-700">
            Hello !
          </p>

          <h1 className="mt-7 text-5xl font-bold leading-tight text-slate-700 sm:text-6xl">
            I&apos;m{' '}
            <span className="text-blue-500 underline decoration-blue-500 decoration-2 underline-offset-8">
              Carla Isabelle Tanyag,
            </span>
            <br />
            Online Chat Specialist
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-400">
            Innovative support specialist focused on clear communication, fast
            problem solving, and meaningful customer experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link className={primaryButtonClass} to="/projects">
              Hire Me
            </Link>
            <Link className={secondaryButtonClass} to="/reviews/new">
              Leave Review
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-x-8 bottom-12 top-20 rounded-[46%] bg-blue-500/90" />
          <div className="absolute -left-3 top-28 h-3 w-3 rotate-12 rounded-sm bg-blue-500" />
          <div className="absolute right-4 top-16 rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(59,130,246,0.30)]">
            Support Expert
          </div>
          <div className="absolute bottom-3 right-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(59,130,246,0.30)]">
            UI/UX Mindset
          </div>

          <img
            src={profilePhoto}
            alt="Professional portrait of Carla Isabelle Tanyag"
            className="relative z-10 mx-auto w-full max-w-[420px] drop-shadow-[0_24px_38px_rgba(15,39,95,0.22)]"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
