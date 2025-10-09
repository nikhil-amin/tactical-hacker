function ProjectCard({ name, description, tech, url }: { name: string; description: string; tech: string[]; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#161b22] rounded-lg p-5 mb-4 hover:border-[#00bfa6] border border-transparent transition"
    >
      <h4 className="text-lg font-bold text-[#00bfa6]">{name}</h4>
      <p className="text-gray-300 mb-2">{description}</p>
      <div className="text-xs text-gray-400">{tech.join(", ")}</div>
    </a>
  );
}

export default ProjectCard;