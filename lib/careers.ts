/**
 * Open roles on /careers. To close a role, delete it here; to add one, copy an entry.
 * Keep the `title` in sync with the "Role" options in the Tally careers form.
 */
export type Role = {
  id: string;
  title: string;
  team: string;
  type: string;
  summary: string;
  doing: string[];
  bring: string[];
  bonus: string[];
};

export const ROLES: Role[] = [
  {
    id: "automation-engineer",
    title: "Automation Engineer",
    team: "Automation & integration",
    type: "Full-time",
    summary:
      "Take the copy-paste, chasing and re-keying off our clients’ teams. You’ll map how a business really runs, then build the workflows that make it run on its own.",
    doing: [
      "Build and maintain client workflows in n8n, Make and Zapier",
      "Connect CRMs, WhatsApp, accounting and internal tools through their APIs and webhooks",
      "Turn messy processes into clean, documented automations before anything goes live",
      "Monitor what you ship and fix it before the client notices",
    ],
    bring: [
      "Hands-on experience building automations or integrations for real businesses",
      "Comfort with REST APIs, webhooks, JSON and basic JavaScript or Python",
      "The habit of asking how a process works before automating it",
      "Clear written communication with non-technical clients",
    ],
    bonus: ["Pipedrive, HubSpot or Zoho experience", "WhatsApp Business API or Wati"],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer, Agents",
    team: "Private AI agents",
    type: "Full-time",
    summary:
      "Build AI agents that answer, qualify, route and report inside our clients’ tools, grounded in their own data and hosted on their own infrastructure.",
    doing: [
      "Design and deploy AI agents for WhatsApp, CRM, support and internal operations",
      "Build retrieval (RAG) pipelines over client documents and handbooks",
      "Set clear hand-offs: what each agent does alone and what waits for a person",
      "Host and run models privately, with data kept in South Africa",
    ],
    bring: [
      "Experience shipping LLM features to production, not just prototypes",
      "Solid Python or TypeScript, and comfort with APIs and vector search",
      "Good judgement about where AI helps and where it shouldn’t act alone",
      "Care for privacy, logging and doing things properly",
    ],
    bonus: ["n8n or Flowise", "Self-hosting open models", "POPIA awareness"],
  },
  {
    id: "it-support-specialist",
    title: "IT Support Specialist",
    team: "Managed IT",
    type: "Full-time",
    summary:
      "Be the outsourced IT team our clients rely on. You’ll keep people set up, devices secure and vendors handled, so nothing breaks quietly.",
    doing: [
      "Run onboarding and offboarding: accounts, devices and access, ready on day one",
      "Manage Google Workspace and Microsoft 365 users, permissions and shared drives",
      "Keep device and licence inventories current for each client",
      "Coordinate ISPs and IT vendors, and resolve support requests quickly",
    ],
    bring: [
      "Experience supporting a small business or several clients at once",
      "Working knowledge of Google Workspace and Microsoft 365 administration",
      "A methodical approach: checklists, documentation and follow-through",
      "A calm, friendly manner with people who aren’t technical",
    ],
    bonus: ["Device management tools", "Networking basics", "A relevant certification"],
  },
];
