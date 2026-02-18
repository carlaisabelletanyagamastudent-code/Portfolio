import SectionCard from '../components/SectionCard';
import SectionHeader from '../components/SectionHeader';
import { skills } from '../data/skills';

function SkillsPage() {
  return (
    <SectionCard>
      <SectionHeader
        badge="Skills"
        description="Technical skills and tools I use to build clean interfaces and maintain reliable support systems."
        title="Skills and Tools"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_10px_22px_rgba(33,65,160,0.12)]"
            key={skill.name}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex min-w-9 justify-center rounded-lg bg-blue-100 px-2 py-1 text-xs font-bold text-[#2141a0]">
                {skill.symbol}
              </span>
              <div>
                <h2 className="text-base font-semibold text-slate-900">{skill.name}</h2>
                <p className="text-sm font-semibold text-[#2141a0]">{skill.category}</p>
              </div>
            </div>
            <p className="leading-7 text-slate-600">{skill.description}</p>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

export default SkillsPage;
