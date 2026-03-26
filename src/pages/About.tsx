import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO/SEO';
import Terminal from '@/components/Terminal/Terminal';
import { timelineItems } from "@/data/timeline";

const learningItems = [
  { topic: "Linux & Shell scripting", status: "in-progress" },
  { topic: "SSH & key-based auth", status: "done" },
  { topic: "File permissions & users", status: "done" },
  { topic: "Networking fundamentals", status: "upcoming" },
  { topic: "Docker & containers", status: "upcoming" },
  { topic: "CI/CD pipelines", status: "upcoming" },
  { topic: "AWS core services", status: "upcoming" },
  { topic: "Kubernetes basics", status: "upcoming" },
  { topic: "Terraform / IaC", status: "upcoming" },
];

const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      <SEO title="About" description="My journey from Software Development to DevOps." />

      {/* Section 1 — Intro / Who I Am */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — text */}
          <div className="flex flex-col gap-6">
          <div>
            <span className="text-[12px] uppercase tracking-wide text-[--color-text-muted] font-medium block mb-2">
              About me
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-[--color-primary]">
              I'm Nikhil
            </h1>
          </div>

          <div className="flex flex-col gap-4 text-base leading-relaxed text-[--color-text]">
            <p>
              I'm a Software Engineer at ClaimZippy in Bengaluru, where I work across the full stack — React, TypeScript, Node.js, and Python on the application side, and Docker, Linux, and RHEL on the infrastructure side. I've shipped production features, containerised hospital management systems, managed deployment pipelines, and handled client-facing technical operations.
            </p>
            <p>
              Most SDE resumes stop at the application layer. Mine doesn't. I've deployed containerised applications to production Linux servers, managed RHEL infrastructure, written Bash and Python automation for real workflows, and maintained systems that clients depend on daily. That cross-layer experience is what I'm doubling down on.
            </p>
            <p>
              I'm targeting Software Engineering and DevOps roles abroad — in the USA, Canada, Australia, New Zealand, and Europe — where I can work on systems that demand both engineering depth and operational ownership.
            </p>
          </div>
        </div>

          {/* Right column — terminal */}
          <div className="w-full">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Section 2 — The Transition Story */}
      <section className="w-full bg-[--color-surface] py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[32px] font-medium text-[--color-primary] mb-12 text-center">
            The Dev &rarr; DevOps Shift
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[--color-background] rounded-xl p-6 border border-[--color-border] flex flex-col gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <circle cx="16" cy="16" r="15" stroke="var(--color-primary)" strokeWidth="1" />
              </svg>
              <h3 className="text-xl font-medium text-[--color-primary]">What I build</h3>
              <p className="text-base text-[--color-text-muted] leading-relaxed">
                Full-stack applications with React, TypeScript, Node.js, and MongoDB. I've shipped production features, refactored codebases for performance, and built client-facing products end to end.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[--color-background] rounded-xl p-6 border border-[--color-border] flex flex-col gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <circle cx="16" cy="16" r="15" stroke="var(--color-primary)" strokeWidth="1" />
              </svg>
              <h3 className="text-xl font-medium text-[--color-primary]">What I operate</h3>
              <p className="text-base text-[--color-text-muted] leading-relaxed">
                Production Docker deployments on RHEL servers, Bash automation, Python RPA workflows, and Linux infrastructure support. Not in a sandbox — in systems clients use every day.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[--color-background] rounded-xl p-6 border border-[--color-border] flex flex-col gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <circle cx="16" cy="16" r="15" stroke="var(--color-primary)" strokeWidth="1" />
              </svg>
              <h3 className="text-xl font-medium text-[--color-primary]">What I'm building next</h3>
              <p className="text-base text-[--color-text-muted] leading-relaxed">
                CI/CD pipelines, Kubernetes, Terraform, and cloud infrastructure on AWS. Adding systematic depth to what I've already done hands-on in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2.5 — Experience & Education */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <style>{`
          @keyframes customPing {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.4; }
          }
          .animate-custom-ping {
            animation: customPing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>

        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[32px] font-medium text-[--color-primary] mb-2">
            Experience &amp; Education
          </h2>
          <p className="text-base text-[--color-text-muted]">
            The path so far.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Vertical Line spanning entire timeline container */}
          <div className="absolute left-[15px] md:left-1/2 md:-ml-[0.5px] top-[24px] bottom-12 w-[1px] bg-[--color-border] z-0"></div>

          <div className="flex flex-col w-full">
            {timelineItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const isContiguousClaimZippy = idx !== timelineItems.length - 1 && item.company === 'ClaimZippy' && timelineItems[idx + 1]?.company === 'ClaimZippy';

              return (
                <div key={idx} className="relative w-full pb-12 sm:pb-16 last:pb-0">
                  {/* Desktop Row Wrapper for centering */}
                  <div className={`flex items-start w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                    {/* Desktop Empty Half */}
                    <div className="hidden md:block md:w-1/2"></div>

                    {/* Colored overlay segment for consecutive ClaimZippy entries */}
                    {isContiguousClaimZippy && (
                      <div className="absolute top-[24px] bottom-[-24px] sm:bottom-[-32px] w-[1px] left-[15px] md:left-1/2 md:-ml-[0.5px] z-0 bg-[--color-primary] opacity-40"></div>
                    )}

                    {/* Dot Container */}
                    <div className="absolute top-[24px] -translate-y-1/2 left-[10px] md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                      {item.status === 'current' && (
                        <div className="absolute w-[20px] h-[20px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                          <div className="w-full h-full rounded-full bg-[--color-primary] animate-custom-ping"></div>
                        </div>
                      )}
                      <div className={`w-[10px] h-[10px] rounded-full ${item.type === 'work' ? 'bg-[--color-primary]' : 'bg-[--color-background] border-[2px] border-[--color-primary]'} relative z-10`}></div>
                    </div>

                    {/* Promoted Pill */}
                    {isContiguousClaimZippy && (
                      <div className="absolute bottom-[24px] sm:bottom-[32px] translate-y-1/2 left-[15px] md:left-1/2 -translate-x-1/2 z-10 px-2.5 py-0.5 bg-[--color-surface] text-[--color-primary] border border-[--color-border] rounded-full text-[11px] font-medium leading-none flex items-center justify-center">
                        Promoted
                      </div>
                    )}

                    {/* Card Container */}
                    <div className={`w-full pl-[45px] md:pl-0 md:w-1/2 flex items-start ${isLeft ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10'} relative`}>

                      {/* Horizontal Line connector */}
                      <div className={`absolute top-[24px] bg-[--color-border] h-[1px] z-0 left-[20px] w-[25px] md:w-[40px] ${isLeft ? 'md:right-0 md:left-auto' : 'md:left-0 md:right-auto'}`}></div>

                      {/* Card itself */}
                      <div className="bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl p-5 w-full md:max-w-[280px] relative z-10 transition-all duration-150 ease-in-out hover:-translate-y-[3px] hover:border-[--color-primary]">
                        <div className="font-medium text-[--color-text]">{item.role}</div>
                        <div className="font-semibold text-[--color-primary] mb-1">{item.company}</div>
                        <div className="text-[13px] text-[--color-text-muted] tracking-wide mb-3">
                          {item.period} <span className="mx-1">&middot;</span> {item.location}
                        </div>
                        <div className="flex flex-col gap-1 mt-1">
                          {item.description.map((desc, i) => (
                            <div key={i} className="text-[13px] text-[--color-text-muted] leading-[1.6] flex items-start gap-1.5">
                              <span className="shrink-0 leading-[1.6]">&mdash;</span>
                              <span>{desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 — Currently Learning */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <h2 className="text-[32px] font-medium text-[--color-primary] mb-2">
          Currently Building
        </h2>
        <p className="text-base text-[--color-text-muted] mb-12">
          Hands-on projects and structured learning — building the gaps between what I've done in production and full infrastructure ownership.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {learningItems.map((item, index) => {
            const isDone = item.status === 'done';
            const isInProgress = item.status === 'in-progress';
            const isUpcoming = item.status === 'upcoming';

            return (
              <div key={index} className="flex items-center gap-3">
                {/* Status Dot */}
                <span className="relative flex h-3 w-3 shrink-0">
                  {isInProgress && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 ${isDone
                      ? 'bg-[--color-primary]'
                      : isInProgress
                        ? 'bg-amber-500'
                        : 'border border-[--color-muted] bg-transparent'
                      }`}
                  ></span>
                </span>

                {/* Topic Text */}
                <span
                  className={`text-base font-medium ${isUpcoming
                    ? 'opacity-50 text-[--color-text]'
                    : 'text-[--color-text]'
                    }`}
                >
                  {item.topic}
                </span>

                {/* Optional Pill */}
                {isInProgress && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                    Current
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-32 max-w-[50rem] mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-[32px] font-medium text-[--color-primary]">
          Looking for someone who ships and operates?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex justify-center items-center px-6 py-3 bg-[--color-primary] text-[--color-surface] rounded-lg font-medium transition duration-150 ease-in-out hover:bg-[--color-secondary]"
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-6 py-3 border-2 border-[--color-primary] text-[--color-primary] rounded-lg font-medium transition duration-150 ease-in-out hover:bg-[--color-primary] hover:text-[--color-surface]"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
