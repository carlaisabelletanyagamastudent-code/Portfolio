import SectionCard from '../components/SectionCard';
import SectionHeader from '../components/SectionHeader';

function AboutPage() {
  return (
    <SectionCard>
      <SectionHeader
        badge="About"
        description="As an online chat specialist, I support customers through fast and focused conversations. I combine empathy with structured problem solving to deliver reliable service across live chat, email, and community channels."
        title="Professional Summary"
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Work Approach</h2>
          <p className="mt-2 leading-7 text-slate-600">
            I keep conversations concise, professional, and aligned with brand
            standards while making sure customers feel heard.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Strengths</h2>
          <p className="mt-2 leading-7 text-slate-600">
            My strongest areas are conflict handling, quick documentation, and
            creating repeatable workflows that improve support consistency.
          </p>
        </article>
      </div>
    </SectionCard>
  );
}

export default AboutPage;
