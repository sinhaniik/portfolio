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
    status: "past",
    company: "OneZippy.ai",
    role: "DevOps Engineer",
    period: "Feb 2024 – Apr 2026",
    location: "Bengaluru, Karnataka",
    description: [
      "Owned vulnerability remediation for 15 containerized services: rebuilt and redeployed ~40 patched images per 14-day cycle against client scan reports of up to ~450 findings; client confirmed all container high/critical VA points closed.",
      "Deployed releases across 28 servers (5 prod, 3 UAT, 20 dev) using a private Docker registry, SSH and Docker Compose; completed the full 5-server production rollout in one working day (~8 hrs) per cycle and sent completion confirmation to client stakeholders.",
      "Ran Trivy image scans before each deployment to verify fixes ahead of the client's re-scan.",
      "Operated Linux/RHEL servers on AWS EC2 and OCI Compute: configured Docker, Nginx (reverse proxy, SSL, load balancing) and runtime dependencies on client-provided instances; troubleshot via logs, resource usage, networking and port checks.",
      "Wrote cron-scheduled Bash/Python scripts for server health checks and container redeploys on slow or unresponsive servers; extended the approach to dev/UAT database containers.",
      "Contributed to recovery of an OCI Compute instance that crashed after UAT and production workloads together exhausted RAM, CPU and disk: service restored in ~1 hour; supported moving UAT and production onto dedicated servers to remove resource contention.",
      "Executed client-directed removal of the MongoDB database service from a production server and migrated its non-PII calculation data to an internal server, coordinating with the CTO.",
      "Built a 6-stage GitHub Actions CI/CD pipeline from scratch for a prospective client's Node.js/React project (code, build, test, security scan, deploy, monitor), with ~2–3 min end-to-end runs; also edited existing workflows.",
      "Delivered within client data-residency and access-control requirements on client-controlled, region-specific infrastructure.",
      "Served as technical point of contact for a client project: joined client meetings, demoed progress, captured requirements and turned them into engineering tasks for the team, while building across frontend, backend and infrastructure.",
      "Containerized an enterprise application with Docker and managed releases across multiple apps on production RHEL servers.",
      "Built Python RPA automation with custom commands to work around API gaps; set up restart and maintenance protocols to cut downtime.",
      "Built React/Next.js/Node features for internal workflow tools; refactored legacy modules; documented deployment workflows.",
    ],
  },
  {
    type: "education",
    status: "past",
    company: "Jain University",
    role: "Master's in Computer Application (MCA)",
    period: "2021 – 2024",
    location: "Bengaluru, Karnataka",
    description: [],
  },
  {
    type: "education",
    status: "past",
    company: "Punjab Technical University",
    role: "Bachelor's in Computer Application (BCA)",
    period: "2018 – 2021",
    location: "Kapurthala, Punjab",
    description: [],
  },
  {
    type: "education",
    status: "past",
    company: "Certification",
    role: "Postman API Fundamentals Student Expert",
    period: "",
    location: "",
    description: [],
  },
];
