import { skills } from '../../data/skills';

// Group skills
const devSkills = skills.filter((s) => s.category === 'Dev');
const devopsSkills = skills.filter((s) => s.category === 'DevOps');
const toolsSkills = skills.filter((s) => s.category === 'Tools');

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
      <h2 className="text-3xl font-medium text-text mb-10">What I Work With</h2>

      <div className="space-y-8">
        {/* DevOps Skills */}
        <div>
          <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">DevOps</h3>
          <div className="flex flex-wrap gap-3">
            {devopsSkills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 bg-muted text-text rounded-full text-sm font-medium transition duration-150 ease-in-out hover:bg-secondary hover:text-surface"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Dev Skills */}
        <div>
          <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">Development</h3>
          <div className="flex flex-wrap gap-3">
            {devSkills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 bg-surface text-text rounded-full text-sm font-medium transition-all duration-150 ease-in-out hover:bg-primary hover:text-surface"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">Tools</h3>
          <div className="flex flex-wrap gap-3">
            {toolsSkills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 bg-surface text-text rounded-full text-sm font-medium transition-all duration-150 ease-in-out hover:bg-primary hover:text-surface"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
