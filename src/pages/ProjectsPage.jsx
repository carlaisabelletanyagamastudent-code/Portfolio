import SectionCard from '../components/SectionCard';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';

function ProjectsPage() {
  return (
    <SectionCard>
      <SectionHeader
        badge="Projects"
        description="Sample portfolio projects with brief descriptions and technologies used."
        title="Selected Work"
      />

      <div className="mt-6 grid gap-4">
        {projects.map((project, index) => (
          <article
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-[0_10px_22px_rgba(33,65,160,0.10)]"
            key={project.id}
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">{project.title}</h2>
              <span className="text-2xl font-bold text-blue-900/25">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>

            <p className="mt-2 leading-7 text-slate-600">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#2141a0]"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

export default ProjectsPage;
