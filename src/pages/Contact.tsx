import { SEO } from '@/components/SEO/SEO';

const contactLinks = [
  {
    label: "Email",
    value: "nikhilsinha198@gmail.com",
    href: "mailto:nikhilsinha198@gmail.com",
    description: "Best way to reach me",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/sinhaniik",
    href: "https://github.com/sinhaniik",
    description: "Code, projects, and lab work",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sinhaniik",
    href: "https://linkedin.com/in/sinhaniik",
    description: "Professional profile",
    external: true,
  },
  {
    label: "X (Twitter)",
    value: "@sinhaniik",
    href: "https://x.com/sinhaniik",
    description: "Thoughts and learning in public",
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="w-full">
      <SEO title="Contact" description="Get in touch for DevOps and Full-Stack development opportunities." />

      {/* Section 1 — Hero */}
      <section className="w-full pt-20 pb-12 px-6 md:px-16 lg:px-32 max-w-3xl mx-auto flex flex-col justify-center">
        <span className="text-[12px] uppercase tracking-wide text-[--color-text-muted] font-medium block mb-2">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-[--color-primary] mb-6">
          Let's talk.
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-base text-[--color-text-muted] leading-relaxed">
            I'm open to DevOps roles, freelance projects, and interesting conversations.
          </p>
          <p className="text-base text-[--color-text-muted] leading-relaxed">
            Best way to reach me is email — I usually respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Section 2 — Contact Links */}
      <section className="w-full pb-20 pt-8 px-6 md:px-16 lg:px-32 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group block bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl p-6 transition-all duration-150 hover:-translate-y-1 hover:border-[--color-primary] relative"
            >
              <div className="text-[12px] font-medium uppercase tracking-wide text-[--color-text-muted] mb-4">
                {link.label}
              </div>
              <div className="text-base font-semibold text-[--color-primary] group-hover:underline mb-1">
                {link.value}
              </div>
              <div className="text-[13px] text-[--color-text-muted]">
                {link.description}
              </div>

              {link.external && (
                <div className="absolute bottom-6 right-6 text-[--color-text-muted]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* Section 3 — Resume CTA */}
      <section className="w-full bg-[--color-surface] py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-medium text-[--color-text]">
              Want the full picture?
            </h2>
            <p className="text-[14px] text-[--color-text-muted]">
              Download my resume — updated March 2026.
            </p>
          </div>

          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 justify-center items-center px-6 py-3 bg-[--color-primary] text-[--color-surface] dark:text-[--color-background] rounded-lg font-medium transition duration-150 ease-in-out hover:bg-[--color-secondary] whitespace-nowrap"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}
