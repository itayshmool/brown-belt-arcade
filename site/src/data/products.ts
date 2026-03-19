export type Category = "CLI Tool" | "Web App" | "Desktop App" | "IDE Extension" | "AI Skill";

export interface Owner {
  name: string;
  github: string;
  avatar: string;
}

export interface Product {
  slug: string;
  name: string;
  owners: Owner[];
  description: string;
  category: Category;
  platform: string;
  repo: string;
  repoPublic: boolean;
  url: string | null;
  techStack: string[];
  whatItIs: string;
  problem: string;
  features: string[];
  howToUse: string;
}

const owner = (name: string, github: string): Owner => ({
  name,
  github,
  avatar: `https://github.com/${github}.png`,
});

const OWNERS = {
  saar: owner("Saar Shechter", "saarshe"),
  ron: owner("Ron Buchnic", "RonBuchnic"),
  yarden: owner("Yarden Ezra", "yardenez"),
  shay: owner("Shay Kovach", "shayko1"),
  dolev: owner("Dolev Akons", "dolevak"),
  netanel: owner("Netanel Goodman", "netanelgowix"),
  mila: owner("Mila Kogan", "milak18"),
  idan: owner("Idan Rachmanov", "idanrac"),
  roi: owner("Roi Ashkenazi", "roia7"),
  israel: owner("Israel Zablianov", "IsraelZablianovWix"),
  roy: owner("Roy Shlain", "royshlain1"),
} as const;

export const products: Product[] = [
  {
    slug: "claude-code-statusline",
    name: "claude-code-statusline",
    owners: [OWNERS.saar],
    description: "Customizable terminal status line for Claude Code with real-time session info.",
    category: "CLI Tool",
    platform: "Terminal",
    repo: "saarshe/claude-code-statusline",
    repoPublic: true,
    url: null,
    techStack: ["Go", "TOML", "Homebrew"],
    whatItIs:
      "A customizable terminal status line for Claude Code that displays real-time session information directly in your terminal. It renders a persistent bar showing context window usage, model info, token counts, cost tracking, and git status.",
    problem:
      "When working with Claude Code in the terminal, developers lack visibility into their current session state \u2014 how much of the context window is used, what model they\u2019re on, how much the session is costing, and what git branch they\u2019re working on. This tool provides at-a-glance awareness without leaving the coding flow.",
    features: [
      "Context window usage bar with visual fill indicator",
      "Model name display (Sonnet, Opus, etc.)",
      "Token usage tracking (input/output/cache)",
      "Cost tracking per session",
      "Git branch and status display",
      "8 built-in themes (minimal, powerline, nerd, emoji, pastel, contrast, hacker, ocean)",
      "Interactive setup wizard",
      "Auto-start on terminal launch via shell RC integration",
    ],
    howToUse: `brew tap saarshe/claude-code-statusline
brew install claude-code-statusline
claude-code-statusline setup`,
  },
  {
    slug: "wix-skills",
    name: "@wix/skills",
    owners: [OWNERS.saar, OWNERS.ron, OWNERS.yarden],
    description: "CLI for discovering and installing AI skills into Cursor and Claude Code.",
    category: "CLI Tool",
    platform: "Terminal",
    repo: "wix-private/premium-ai-cli",
    repoPublic: false,
    url: null,
    techStack: ["Node.js", "npm", "CLI"],
    whatItIs:
      "A CLI tool for discovering and installing AI skills (prompts/rules/tools) into Cursor and Claude Code editors. It aggregates skills from multiple sources (Premium, Superpowers, Octocode, Vercel, Daymade) into a single searchable catalog.",
    problem:
      "AI skills for code editors are scattered across multiple repositories and teams. Developers waste time finding, downloading, and manually configuring skills. This CLI provides a unified marketplace-like experience \u2014 search, preview, and install skills with a single command.",
    features: [
      "Multi-target installation (Cursor rules, Claude Code commands)",
      "Multiple skill sources: Premium AI Incubator, Superpowers, Octocode, Vercel, Daymade",
      "AI-powered semantic search",
      "Fuzzy search for skill names",
      "Interactive TUI with real-time filtering",
      "Auto-updates via npm",
      "Slash command support for Claude Code",
    ],
    howToUse: `npx @wix/skills`,
  },
  {
    slug: "ps-ux-review",
    name: "ps-ux-review",
    owners: [OWNERS.roy],
    description: "AI skill that orchestrates multi-dimensional UX reviews with actionable findings.",
    category: "AI Skill",
    platform: "Cursor / Claude Code",
    repo: "wix-private/premium-ai-incubator",
    repoPublic: false,
    url: null,
    techStack: ["AI Skill (Markdown prompt)", "Figma MCP integration"],
    whatItIs:
      "An AI skill that acts as a UX Review Orchestrator for growth and monetization product teams. It takes screenshots, Figma designs, or code as input and produces a structured UX review report covering UI/visual hierarchy, content/microcopy, accessibility, edge cases, and monetization effectiveness.",
    problem:
      "UX reviews are time-consuming and often lack structured coverage across all dimensions (visual, content, accessibility, edge cases, monetization). This skill automates a comprehensive multi-dimensional review, producing prioritized action items tied to specific KPIs.",
    features: [
      "Accepts multiple input types: screenshots, Figma links (via MCP), code",
      "5-step orchestrated review process",
      "5 evaluation dimensions: UX/UI, Content, Accessibility, Edge Cases, Monetization",
      "Severity-based prioritization (Critical / Important / Nice-to-have)",
      "Primary + defensive KPI tracking",
      "Figma integration via MCP tools",
      "Iterative deep-dive capability",
    ],
    howToUse: `npx @wix/skills
# Search for "ps-ux-review" and install`,
  },
  {
    slug: "abtestor",
    name: "ABtestor",
    owners: [OWNERS.dolev],
    description: "A/B Test Management Platform with live KPI data and knowledge base.",
    category: "Web App",
    platform: "bo.wix.com",
    repo: "wix-private/premium-abtestor",
    repoPublic: false,
    url: "https://bo.wix.com/abtestor/",
    techStack: ["React 18", "React Query", "Tailwind CSS", "Radix UI", "Wix Serverless", "Trino", "CloudStore"],
    whatItIs:
      "A full-featured A/B Test Management Platform built as a Wix Backoffice application. It provides test management, live KPI data visualization, a knowledge base for past experiments, and role-based access control.",
    problem:
      "Managing A/B tests across a large organization is fragmented \u2014 experiments are tracked in spreadsheets, KPI data lives in separate analytics tools, and there\u2019s no centralized knowledge base of what was tested and learned. ABtestor consolidates everything in one place.",
    features: [
      "Test management with full lifecycle tracking",
      "Live KPI data via Trino (real-time experiment metrics)",
      "Knowledge base for documenting experiment learnings",
      "Role-based access control (RBAC)",
      "Search and filtering across experiments",
      "CloudStore for persistent data storage",
    ],
    howToUse: `Navigate to https://bo.wix.com/abtestor/
Log in with Wix SSO credentials`,
  },
  {
    slug: "zik",
    name: "Zik",
    owners: [OWNERS.netanel],
    description: "Billing error monitoring dashboard with AI-powered anomaly analysis.",
    category: "Web App",
    platform: "bo.wix.com",
    repo: "wix-private/premium-pulse",
    repoPublic: false,
    url: "https://bo.wix.com/premium-pulse",
    techStack: ["React", "Wix Serverless", "Trino", "AI Analysis"],
    whatItIs:
      'A Premium Billing Error Monitoring Dashboard (internally "Metric Monitor") with AI-powered anomaly analysis. It monitors 12+ BI events related to billing, checkout, domains, and Google Workspace.',
    problem:
      "Billing errors in a premium/subscription platform can go unnoticed until they cause significant revenue loss or customer churn. Manual monitoring of 12+ event streams is impractical. Zik automates anomaly detection and uses AI to explain what\u2019s happening.",
    features: [
      "Monitors 12+ BI events: checkout errors, domain issues, Google Workspace failures",
      "AI-powered anomaly analysis (explains error patterns in natural language)",
      "Trino-based anomaly detection engine",
      "Real-time dashboard",
      "Historical trend analysis",
      "Configurable alert thresholds",
    ],
    howToUse: `Navigate to https://bo.wix.com/premium-pulse
Log in with Wix SSO credentials`,
  },
  {
    slug: "premium-qa-status",
    name: "Premium QA Status",
    owners: [OWNERS.mila],
    description: "Weekly QA status dashboard covering Premium team\u2019s test coverage across all domains.",
    category: "Web App",
    platform: "wix-bo.com",
    repo: "wix-private/Premium-QA-Sled",
    repoPublic: false,
    url: "https://wix-bo.com/_api/premium-qa-status/",
    techStack: ["React", "Yoshi", "Static + Docker", "JSON data", "Claude Code profiles"],
    whatItIs:
      "A QA Weekly Dashboard for the Premium team, deployed to wix-bo.com. It displays weekly QA status reports covering test coverage across 14 Premium domains (Plans, Domains, Google Workspace, Billing, Carts, Emails, etc.).",
    problem:
      "QA teams need a centralized, accessible dashboard to track weekly testing progress. Without it, status is communicated through scattered Slack messages and manual reports. This provides a persistent, auto-deployed view of QA health.",
    features: [
      "Weekly QA status reports organized by product domain",
      "Auto-deployed to wix-bo.com via Falcon CI",
      "SSO-protected access for all Wix employees",
      "JSON-based data updates (easy to automate)",
      "14 product domain categories",
      "Claude Code integration with 34 hooks for QA automation",
    ],
    howToUse: `Navigate to https://wix-bo.com/_api/premium-qa-status/
Log in with Wix SSO`,
  },
  {
    slug: "soxyai",
    name: "SoxyAI",
    owners: [OWNERS.idan],
    description: "SOX-compliance data export tool that automates audit trails, checksums, and reports.",
    category: "Desktop App",
    platform: "macOS / Windows",
    repo: "wix-private/finance-soxyai",
    repoPublic: false,
    url: null,
    techStack: ["Python 3.10+", "Java (Trino CLI)", "PyWebView", "Google APIs"],
    whatItIs:
      "A SOX-compliance data export tool for Trino that automates query execution, audit trail generation, IPE reports, SHA-256 checksum creation, and screenshot documentation. Has both a Desktop GUI and CLI.",
    problem:
      "SOX compliance requires meticulous documentation of every data query \u2014 who ran it, when, what the results were, and proof of data integrity. Manually creating audit trails, checksums, and screenshots is extremely time-consuming and error-prone. SoxyAI automates the entire workflow.",
    features: [
      "Automated Trino query execution with full audit trails",
      "IPE (Information Produced by Entity) report generation",
      "SHA-256 checksum calculation for data integrity",
      "Automated screenshot capture",
      "Desktop GUI via PyWebView",
      "CLI for headless/automated execution",
      "Google Calendar, Drive, and Gmail integrations",
    ],
    howToUse: `pip install -r requirements.txt
python main.py --gui`,
  },
  {
    slug: "unisearch",
    name: "UniSearch",
    owners: [OWNERS.roi],
    description: "Federated search across GitHub, Slack, and Jira from a single search bar.",
    category: "Web App",
    platform: "bo.wix.com",
    repo: "wix-private/unisearch",
    repoPublic: false,
    url: "https://bo.wix.com/unisearch",
    techStack: ["Node.js v18", "Yarn Berry", "Wix Serverless", "OAuth", "Wix Prompt Hub"],
    whatItIs:
      "A federated search engine that simultaneously searches across GitHub, Slack, and Jira from a single search bar. Provides smart correlation between results and optional AI-powered reranking.",
    problem:
      "Developers and PMs constantly context-switch between GitHub, Slack, and Jira to find information. A bug might have a Jira ticket, a Slack discussion, and a GitHub PR \u2014 finding all three requires searching three separate tools. UniSearch unifies this into one query.",
    features: [
      "Parallel search across GitHub, Slack, and Jira",
      "Smart result correlation (links related items across platforms)",
      "AI-powered reranking (via Wix Prompt Hub)",
      "OAuth integration for each platform",
      "Dark and light theme support",
      "Real-time search results",
    ],
    howToUse: `Navigate to https://bo.wix.com/unisearch
Connect your GitHub, Slack, and Jira accounts via OAuth`,
  },
  {
    slug: "devdock",
    name: "devdock",
    owners: [OWNERS.shay],
    description: "Local project command center for macOS with embedded Claude terminal sessions.",
    category: "Desktop App",
    platform: "macOS",
    repo: "shayko1/devdock",
    repoPublic: true,
    url: null,
    techStack: ["Electron 33", "React 19", "TypeScript 5.7", "Vite 6", "xterm.js", "node-pty"],
    whatItIs:
      "A local project command center for macOS \u2014 a desktop application that serves as a launchpad for all development projects with embedded Claude terminal sessions, git worktree support, and pipeline automation.",
    problem:
      "Developers juggle multiple projects, each with different setups, terminals, and workflows. Switching between projects means opening new terminals, navigating to directories, remembering run commands, and losing context. devdock provides a single hub with integrated AI assistance.",
    features: [
      "Project launchpad with quick access to all local projects",
      "Embedded Claude terminal sessions with xterm.js",
      "Git worktree support for parallel branch work",
      "Browser bridge CLI",
      "Agent management (multiple AI agents per project)",
      "Pipeline automation (multi-step workflows)",
      "Full test coverage with Vitest + Playwright",
    ],
    howToUse: `git clone https://github.com/shayko1/devdock
cd devdock && npm install && npm run dev`,
  },
  {
    slug: "ironscale",
    name: "IronScale",
    owners: [OWNERS.israel],
    description: "VS Code/Cursor extension for Scala+Java development in Wix\u2019s Bazel monorepo.",
    category: "IDE Extension",
    platform: "VS Code / Cursor",
    repo: "wix-private/vscode-scala-extension",
    repoPublic: false,
    url: null,
    techStack: ["TypeScript 5.9", "VS Code Extension API", "Metals", "Red Hat Java", "Bazel", "BSP"],
    whatItIs:
      "A VS Code/Cursor extension for Scala + Java development in Wix\u2019s Bazel monorepo. Bundles 6 extensions (Metals, Red Hat Java, Bazel Java, Java Debugger, vscode-bazel, vscode-proto3) into an integrated development experience.",
    problem:
      "Developing Scala and Java in Wix\u2019s Bazel monorepo requires multiple VS Code extensions that don\u2019t work well together out of the box. Configuring Metals, Java LSP, Bazel build, protobuf navigation, and debugging individually is painful. IronScale provides single-click setup.",
    features: [
      "Extension Pack: bundles 6 extensions",
      "Cross-language navigation: Scala \u2194 Proto \u2194 BUILD files",
      "Integrated test runner with Test Explorer and CodeLens",
      "JVM debugger with JDWP attach and auto-detection",
      "Nile/Ninja service generation wizards (13 templates)",
      "VMR operations (pull/lock commands)",
      "Onboarding wizard for first-time setup",
      "Dual language server: Metals (Scala) + Red Hat Java (Java)",
    ],
    howToUse: `Install IronScale from VS Code / Cursor marketplace
Open a Bazel/Scala workspace
The onboarding wizard guides initial setup`,
  },
  {
    slug: "moltbook",
    name: "Moltbook",
    owners: [OWNERS.israel],
    description: "Social Network for AI Agents \u2014 agents post, comment, upvote, and debate.",
    category: "Web App",
    platform: "bo.wix.com + npm",
    repo: "wix-private/premium-moltbook",
    repoPublic: false,
    url: "https://bo.wix.com/premium-moltbook/feed",
    techStack: ["React", "Yoshi", "shadcn/ui", "Wix Serverless", "CloudStore", "npm packages"],
    whatItIs:
      'A "Social Network for AI Agents" \u2014 a platform where AI agents can post, comment, upvote, and debate. Provides 5 integration methods: heartbeat loop, MCP server, TypeScript SDK, CLI, and HTTP API.',
    problem:
      "AI agents working in isolation lack a way to share knowledge, findings, and status updates with other agents and humans. Moltbook creates a shared social space where agents can post discoveries, ask questions, debate solutions, and build reputation.",
    features: [
      "5 integration methods: heartbeat loop, MCP server (15 tools), TypeScript SDK, CLI, HTTP API",
      "Social interactions: posts, comments, upvotes, debates",
      "Karma system for agent reputation",
      "Rate limiting to prevent spam",
      "Default communities for topic organization",
      "React + shadcn/ui frontend for human observation",
    ],
    howToUse: `npx @moltbook/mcp     # MCP server for Claude/Cursor
npm install -g @moltbook/cli
moltbook post "Hello from my agent!"`,
  },
  {
    slug: "sentry-health",
    name: "Sentry Health",
    owners: [OWNERS.shay],
    description: "Comprehensive Sentry health dashboard with KPIs, trends, replays, and alerts.",
    category: "Web App",
    platform: "wix-bo.com",
    repo: "wix-private/sentry-health",
    repoPublic: false,
    url: "https://wix-bo.com/sentry-health",
    techStack: ["React", "Vite", "Wix Serverless", "Sentry API"],
    whatItIs:
      "A Sentry Health Dashboard deployed as a Wix Backoffice application. Connects to Sentry\u2019s API and provides a comprehensive health overview \u2014 unresolved issues, event trends, user impact, crash-free rates, releases, alerts, and session replays.",
    problem:
      "Sentry\u2019s native UI requires navigating multiple pages to get a holistic view of project health. Teams need a single-pane-of-glass dashboard showing all KPIs, trends, and replays in one view \u2014 integrated into the Wix backoffice where teams already work.",
    features: [
      "KPI Cards: Unresolved Issues, Total Events, Users Affected, New Issues, Crash-Free Sessions",
      "Trend charts, Pie charts (Browsers, OS, Devices)",
      "Releases Timeline",
      "Issue table with assignee tracking",
      "Session Replays viewer",
      "Filtering: Period, Environment, Level, Tags",
      "Project Picker for switching between Sentry projects",
      "Auto-refresh with live indicator",
    ],
    howToUse: `Navigate to https://wix-bo.com/sentry-health
Log in with Wix SSO
Select a Sentry project from the picker`,
  },
];
