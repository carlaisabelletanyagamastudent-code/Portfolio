function SectionHeader({ badge, title, description }) {
  return (
    <header>
      {badge ? (
        <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
          {badge}
        </p>
      ) : null}
      <h1 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-3xl leading-7 text-slate-500">{description}</p>
      ) : null}
    </header>
  );
}

export default SectionHeader;
