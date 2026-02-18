function SectionCard({ children, className = '' }) {
  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-7 shadow-[0_20px_45px_rgba(15,39,95,0.08)] sm:px-8 sm:py-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_0_0,rgba(59,130,246,0.07),transparent_32%),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.05),transparent_30%)]" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

export default SectionCard;
