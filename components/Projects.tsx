import { getProjects } from "@/lib/github";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="py-20" id="projects">
      <div className="mb-10 border-b border-border pb-4 w-fit pr-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-accent">Projects</span>
        </h2>
      </div>

      {projects.length === 0 ? (
        <div className="p-8 text-center border-2 border-dashed border-border rounded-xl">
          <p className="text-gray-400">Loading projects or no repositories found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((repo, idx) => (
            <ProjectCard key={repo.id} repo={repo} index={idx} />
          ))}
        </div>
      )}
    </section>
  );
}
