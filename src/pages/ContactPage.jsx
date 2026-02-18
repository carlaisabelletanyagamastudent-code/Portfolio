import SectionCard from '../components/SectionCard';
import SectionHeader from '../components/SectionHeader';

function ContactPage() {
  return (
    <SectionCard>
      <SectionHeader
        badge="Contact"
        description="Static contact details for routing purposes. No data is stored on this page."
        title="Get in Touch"
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Phone</p>
          <p className="mt-1 font-medium text-slate-900">+63 912 345 6789</p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Email</p>
          <p className="mt-1 font-medium text-slate-900">
            carlaisabelletanyagamastudent@gmail.com
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Vercel
          </p>
          <a
            className="mt-1 block font-medium text-slate-900 hover:text-blue-600"
            href="https://vercel.com"
            rel="noreferrer"
            target="_blank"
          >
            https://vercel.com
          </a>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">GitHub</p>
          <a
            className="mt-1 block font-medium text-slate-900 hover:text-blue-600"
            href="https://github.com/carlaisabelletanyagamastudent-code"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/carlaisabelletanyagamastudent-code
          </a>
        </article>
      </div>
    </SectionCard>
  );
}

export default ContactPage;
