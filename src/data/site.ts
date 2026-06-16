import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Code2,
  Compass,
  FileCheck2,
  Gauge,
  GitBranch,
  Handshake,
  Layers3,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const siteConfig = {
  name: "Nikolay Nanov Consulting",
  founder: "Nikolay Nanov",
  legalName: "Nikolay Nanov Consulting",
  location: "Sofia, Bulgaria",
  region: "Bulgaria and EU",
  email: "hello@nikolaynanov.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nikolaynanov.com",
  description:
    "Bulgaria-based software consulting for companies that need reliable web applications, business automation, internal tools, and practical technical leadership.",
  keywords: [
    "software consultant Bulgaria",
    "web application development",
    "business automation",
    "technical consulting",
    "internal tools",
    "B2B software development",
  ],
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "B2B", label: "software, automation, and internal systems" },
  { value: "EU", label: "remote-first delivery from Bulgaria" },
  { value: "Lean", label: "senior execution without agency overhead" },
];

export const services = [
  {
    slug: "web-application-development",
    title: "Web Application Development",
    eyebrow: "Custom web apps",
    icon: Code2,
    summary:
      "Design and build fast, maintainable web applications for business workflows, customer portals, dashboards, and operational tools.",
    audience:
      "Companies that have outgrown spreadsheets, off-the-shelf tools, or fragile legacy workflows.",
    outcomes: [
      "A production-ready Next.js application with clear architecture",
      "Responsive interfaces that work for real users on real devices",
      "Clean handover documentation and room for future backend features",
    ],
    deliverables: [
      "Discovery and technical scope",
      "Product flow and data model planning",
      "Frontend and backend implementation",
      "Deployment, analytics, and launch support",
    ],
    proof:
      "Best when you need a focused build partner who can move from problem framing to production code.",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    eyebrow: "Reduce manual work",
    icon: Bot,
    summary:
      "Turn repetitive operational steps into reliable automations across forms, email, documents, CRMs, internal tools, and reporting.",
    audience:
      "Teams spending too much time copying data, reconciling files, sending manual updates, or managing work through scattered tools.",
    outcomes: [
      "Fewer manual handoffs and cleaner operational visibility",
      "Automated notifications, reports, and structured data flows",
      "Safer processes with audit-friendly steps and clear ownership",
    ],
    deliverables: [
      "Workflow audit",
      "Automation map",
      "Integrations and scripts",
      "Monitoring, fallback paths, and documentation",
    ],
    proof:
      "Useful when the business problem is clear but the current process is too slow or too error-prone.",
  },
  {
    slug: "technical-consulting",
    title: "Technical Consulting",
    eyebrow: "Senior technical judgment",
    icon: Compass,
    summary:
      "Get practical help with architecture, technology choices, delivery planning, vendor evaluation, and product risk reduction.",
    audience:
      "Founders, managers, and teams who need a technical partner before committing budget to a build.",
    outcomes: [
      "Clear technical direction before implementation starts",
      "Tradeoff-aware decisions on stack, hosting, data, and delivery",
      "Reduced risk from vague scope, weak architecture, or rushed vendors",
    ],
    deliverables: [
      "Technical discovery sessions",
      "Architecture notes",
      "Implementation roadmap",
      "Vendor or codebase review",
    ],
    proof:
      "A strong fit when you need clarity before hiring a team, choosing a platform, or rebuilding a system.",
  },
  {
    slug: "internal-tools-dashboards",
    title: "Internal Tools & Dashboards",
    eyebrow: "Operational clarity",
    icon: BarChart3,
    summary:
      "Build private tools that help teams inspect work, manage data, approve requests, and understand what is happening across the business.",
    audience:
      "Operations, sales, logistics, finance, support, and management teams that need better visibility and control.",
    outcomes: [
      "Role-aware dashboards and task flows",
      "Cleaner reporting from scattered data sources",
      "Less dependency on manual spreadsheet maintenance",
    ],
    deliverables: [
      "Role and permission planning",
      "Dashboard design",
      "Data connection and transformation",
      "Admin workflows and deployment",
    ],
    proof:
      "Ideal when the business runs on information but the information is difficult to trust or act on.",
  },
  {
    slug: "mvp-prototype-development",
    title: "MVP & Prototype Development",
    eyebrow: "Validate before scaling",
    icon: Rocket,
    summary:
      "Prototype business ideas, internal tools, or digital services quickly enough to learn, while keeping the codebase clean enough to continue.",
    audience:
      "Companies testing a workflow, validating a new service, or proving an internal tool before a larger investment.",
    outcomes: [
      "A focused first version with the right scope",
      "Technical choices that do not trap the product later",
      "A clear path from prototype to production",
    ],
    deliverables: [
      "MVP scope definition",
      "Clickable or coded prototype",
      "Production-readiness recommendations",
      "Launch and iteration plan",
    ],
    proof:
      "Useful when you need momentum, but still want a foundation that respects future growth.",
  },
];

export const processSteps = [
  {
    title: "Discovery",
    icon: MessageSquare,
    text: "Clarify the business goal, users, workflows, constraints, and the real reason the work matters.",
  },
  {
    title: "Scope",
    icon: FileCheck2,
    text: "Turn the problem into a practical plan with deliverables, assumptions, risks, and a clean first milestone.",
  },
  {
    title: "Build",
    icon: Wrench,
    text: "Design and implement in focused cycles with regular checkpoints, working demos, and clear technical notes.",
  },
  {
    title: "Launch",
    icon: Gauge,
    text: "Deploy, measure, polish performance, and make sure the handover is understandable after the first release.",
  },
  {
    title: "Improve",
    icon: GitBranch,
    text: "Use real feedback to decide what to automate, expand, simplify, or leave alone.",
  },
];

export const workItems = [
  {
    title: "Internal Operations Portal",
    industry: "Logistics",
    result: "Replaced scattered spreadsheets with a single role-aware workflow.",
    details:
      "Designed a practical dashboard for daily operations, status tracking, and exception handling.",
    tags: ["Internal tools", "Dashboards", "Workflow design"],
  },
  {
    title: "Sales Reporting Dashboard",
    industry: "B2B Services",
    result: "Made pipeline and revenue data easier to review without manual report assembly.",
    details:
      "Connected data sources into a simple reporting surface with executive-friendly summaries.",
    tags: ["Reporting", "Data visibility", "Automation"],
  },
  {
    title: "Automation Readiness Sprint",
    industry: "Professional Services",
    result: "Identified high-value manual tasks and prioritized the first automation roadmap.",
    details:
      "Mapped the current process, removed unnecessary steps, and defined implementation-ready automation tickets.",
    tags: ["Consulting", "Process mapping", "Roadmap"],
  },
];

export const insights = [
  {
    title: "When should a business build custom software?",
    href: "/insights/when-to-build-custom-software",
    description:
      "A practical decision framework for choosing custom software over SaaS tools and spreadsheets.",
    category: "Strategy",
    readTime: "5 min read",
  },
  {
    title: "Business automation first steps",
    href: "/insights/business-automation-first-steps",
    description:
      "How to identify automation candidates without creating a fragile pile of scripts.",
    category: "Automation",
    readTime: "4 min read",
  },
  {
    title: "What to prepare before hiring a technical consultant",
    href: "/insights/hiring-a-technical-consultant",
    description:
      "The inputs that make consulting sessions sharper, faster, and more useful.",
    category: "Consulting",
    readTime: "4 min read",
  },
];

export const principles = [
  {
    title: "Business-first engineering",
    icon: BriefcaseBusiness,
    text: "Technology choices should serve the business model, team habits, budget, and maintenance reality.",
  },
  {
    title: "Simple systems that can grow",
    icon: Layers3,
    text: "Start lean, but avoid shortcuts that make future backend features, data, or integrations painful.",
  },
  {
    title: "Clear communication",
    icon: Handshake,
    text: "Clients should understand what is being built, why it matters, and what tradeoffs are being made.",
  },
  {
    title: "Operational reliability",
    icon: ShieldCheck,
    text: "The final result should be stable, observable, documented, and calm to operate.",
  },
];

export const capabilityAreas = [
  { label: "Frontend", value: "Next.js, React, TypeScript, responsive UI" },
  { label: "Backend", value: "Server Actions, route handlers, APIs, databases" },
  { label: "Automation", value: "Email, documents, reporting, workflow integrations" },
  { label: "Data", value: "Dashboards, operational reporting, internal visibility" },
  { label: "Delivery", value: "Scoping, architecture, deployment, handover" },
  { label: "Growth", value: "SEO foundations, analytics, content systems" },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  areaServed: ["Bulgaria", "European Union", "Remote"],
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Software Consultant",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sofia",
    addressCountry: "BG",
  },
  description: siteConfig.description,
  knowsAbout: siteConfig.keywords,
};

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
