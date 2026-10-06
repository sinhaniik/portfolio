import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO/SEO';
import Terminal from '@/components/Terminal/Terminal';
import { timelineItems } from "@/data/timeline";

const learningItems = [
  { topic: "Kubernetes", status: "in-progress" },
  { topic: "Terraform", status: "in-progress" },
];

const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      <SEO title="About" description="I keep production servers patched and deployments boring." />

      {/* Section 1 — Intro / Who I Am */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column — text */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <span className="text-[12px] uppercase tracking-wide text-text-muted font-medium block mb-2">
                About me
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold text-primary">
                I'm Nikhil Sinha
              </h1>
            </div>

            <div className="flex flex-col gap-4 text-base leading-relaxed text-text">
              <p>
                I keep production servers patched and deployments boring.
              </p>
              <p>
                Started as a MERN developer, so I see both sides of a deploy.
              </p>
              <p>
                At OneZippy.ai the job was infrastructure on client-provided servers: Linux/RHEL, Docker, Nginx, Trivy, and a 14-day patch cycle. Feb 2024 – Apr 2026.
              </p>
              <p>
                I am learning Kubernetes and Terraform in public, in self-directed labs.
              </p>
              <p>
                Open to DevOps, SRE and Cloud Engineer roles. India remote or relocation abroad.
              </p>
            </div>
          </div>

          {/* Right column — terminal */}
          <div className="lg:col-span-3 w-full">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Section 2 — The Transition Story */}
      <section className="w-full bg-surface py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[32px] font-medium text-primary mb-12 text-center">
            From MERN to DevOps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-background rounded-xl p-6 border border-border flex flex-col gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <circle cx="16" cy="16" r="15" stroke="var(--color-primary)" strokeWidth="1" />
              </svg>
              <h3 className="text-xl font-medium text-primary">What I build</h3>
              <p className="text-base text-text-muted leading-relaxed">
                React, Next.js, and Node features for internal workflow tools. Refactored legacy modules and documented deployment workflows.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-background rounded-xl p-6 border border-border flex flex-col gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <circle cx="16" cy="16" r="15" stroke="var(--color-primary)" strokeWidth="1" />
              </svg>
              <h3 className="text-xl font-medium text-primary">What I operate</h3>
              <p className="text-base text-text-muted leading-relaxed">
                Docker releases and patch cycles on client-provided Linux/RHEL servers. Trivy scans before each deploy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-background rounded-xl p-6 border border-border flex flex-col gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <circle cx="16" cy="16" r="15" stroke="var(--color-primary)" strokeWidth="1" />
              </svg>
              <h3 className="text-xl font-medium text-primary">What I'm learning</h3>
              <p className="text-base text-text-muted leading-relaxed">
                Kubernetes and Terraform, in public labs. Not part of the paid work.
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
          <h2 className="text-[32px] font-medium text-primary mb-2">
            Experience &amp; Education
          </h2>
          <p className="text-base text-text-muted">
            The path so far.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Vertical Line spanning entire timeline container */}
          <div className="absolute left-[15px] md:left-1/2 md:-ml-[0.5px] top-[24px] bottom-12 w-[1px] bg-border z-0"></div>

          <div className="flex flex-col w-full">
            {timelineItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative w-full pb-12 sm:pb-16 last:pb-0">
                  {/* Desktop Row Wrapper for centering */}
                  <div className={`flex items-start w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                    {/* Desktop Empty Half */}
                    <div className="hidden md:block md:w-1/2"></div>

                    {/* Dot Container */}
                    <div className="absolute top-[24px] -translate-y-1/2 left-[10px] md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                      {item.status === 'current' && (
                        <div className="absolute w-[20px] h-[20px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                          <div className="w-full h-full rounded-full bg-primary animate-custom-ping"></div>
                        </div>
                      )}
                      <div className={`w-[10px] h-[10px] rounded-full ${item.type === 'work' ? 'bg-primary' : 'bg-background border-[2px] border-primary'} relative z-10`}></div>
                    </div>

                    {/* Card Container */}
                    <div className={`w-full pl-[45px] md:pl-0 md:w-1/2 flex items-start ${isLeft ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10'} relative`}>

                      {/* Horizontal Line connector */}
                      <div className={`absolute top-[24px] bg-border h-[1px] z-0 left-[20px] w-[25px] md:w-[40px] ${isLeft ? 'md:right-0 md:left-auto' : 'md:left-0 md:right-auto'}`}></div>

                      {/* Card itself */}
                      <div className="bg-surface border-[0.5px] border-border rounded-xl p-5 w-full md:max-w-[280px] relative z-10 transition-all duration-150 ease-in-out hover:-translate-y-[3px] hover:border-primary">
                        <div className="font-medium text-text">{item.role}</div>
                        <div className="font-semibold text-primary mb-1">{item.company}</div>
                        {(item.period || item.location) && (
                          <div className="text-[13px] text-text-muted tracking-wide mb-3">
                            {item.period}
                            {item.period && item.location ? <span className="mx-1">&middot;</span> : null}
                            {item.location}
                          </div>
                        )}
                        <div className="flex flex-col gap-1 mt-1">
                          {item.description.map((desc, i) => (
                            <div key={i} className="text-[13px] text-text-muted leading-[1.6] flex items-start gap-1.5">
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

      {/* Section 3 — Learning */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <h2 className="text-[32px] font-medium text-primary mb-2">
          Learning (self-directed labs)
        </h2>
        <p className="text-base text-text-muted mb-12">
          Kubernetes and Terraform. Public labs, separate from the job.
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
                      ? 'bg-primary'
                      : isInProgress
                        ? 'bg-amber-500'
                        : 'border border-muted bg-transparent'
                      }`}
                  ></span>
                </span>

                {/* Topic Text */}
                <span
                  className={`text-base font-medium ${isUpcoming
                    ? 'opacity-50 text-text'
                    : 'text-text'
                    }`}
                >
                  {item.topic}
                </span>

                {/* Optional Pill */}

              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-32 max-w-[50rem] mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-[32px] font-medium text-primary">
          Open to DevOps, SRE and Cloud Engineer roles.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex justify-center items-center px-6 py-3 bg-primary text-surface rounded-lg font-medium transition duration-150 ease-in-out hover:bg-secondary"
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium transition duration-150 ease-in-out hover:bg-primary hover:text-surface"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
