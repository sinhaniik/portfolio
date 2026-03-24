export type TimelineType = "work" | "education";
export type TimelineStatus = "current" | "past";

export interface TimelineItem {
  type: TimelineType;
  status: TimelineStatus;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    type: "work",
    status: "current",
    company: "ClaimZippy",
    role: "SDE 1",
    period: "June 2025 — Present",
    location: "Bengaluru, Karnataka",
    description: [
      "Acting as secondary technical owner for the ILRI project — managing end-to-end BAU operations and client deliverables.",
      "Handling infrastructure support including application deployments on Linux servers and identifying system vulnerabilities.",
      "Engaging directly with clients to gather requirements and translate them into technical specifications.",
    ],
  },
  {
    type: "work",
    status: "past",
    company: "ClaimZippy",
    role: "Associate Software Engineer",
    period: "Sep 2024 — June 2025",
    location: "Bengaluru, Karnataka",
    description: [
      "Built and shipped full-stack features for UW Care — an internal product successfully demonstrated to the client.",
      "Contributed to Provider Suite with focus on frontend using React.js and Next.js.",
      "Refactored frontend and backend codebase for better performance and long-term maintainability.",
    ],
  },
  {
    type: "work",
    status: "past",
    company: "ClaimZippy",
    role: "SDE Intern",
    period: "Feb 2024 — Sep 2024",
    location: "Bengaluru, Karnataka",
    description: [
      "Containerised HMIS using Docker and deployed it to a production Linux server running RHEL.",
      "Built RPA automation solutions in Python for Auto Adjudication workflows.",
      "Designed and developed end-to-end frontend solutions for payout settlement and outstanding analysis pages.",
    ],
  },
  {
    type: "education",
    status: "past",
    company: "Jain University",
    role: "Master's in Computer Applications (MCA)",
    period: "July 2021 — Sep 2023",
    location: "Bengaluru, Karnataka",
    description: [
      "Studied advanced computer science concepts including data structures, algorithms, database management systems, and software engineering principles.",
    ],
  },
  {
    type: "education",
    status: "past",
    company: "PTU — Punjab Technical University",
    role: "Bachelor in Computer Applications (BCA)",
    period: "Sep 2018 — Aug 2021",
    location: "Kapurthala, Punjab",
    description: [
      "Studied core computer science fundamentals — data structures, algorithms, databases, and software engineering principles.",
    ],
  },
];
