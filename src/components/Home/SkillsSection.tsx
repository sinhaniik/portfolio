import { skillGroups } from '../../data/skills';

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
      <h2 className="text-3xl font-medium text-text mb-10">What I Work With</h2>

      <div className="space-y-8">
        {skillGroups.map((group, index) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 text-text rounded-full text-sm font-medium transition duration-150 ease-in-out ${
                    index === 0
                      ? 'bg-muted hover:bg-secondary hover:text-surface'
                      : 'bg-surface hover:bg-primary hover:text-surface'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
