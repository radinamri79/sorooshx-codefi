export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface StackItem {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  year: string;
  category: string;
  title: string;
  headline: string;
  projectUrl: string;
  mainBg: string;
  imageBg: string;
  darkText: boolean;
  image?: string;
  overview: string;
  problem: string;
  solution: string;
  meta: ProjectMeta[];
  metrics: ProjectMetric[];
  stack: StackItem[];
  galleryColors: string[];
}

export const allProjects: Project[] = [
  {
    slug: "sorooshx",
    year: "2022",
    category: "Web3 & SocialFi",
    title: "sorooshx",
    headline:
      "Engineering a High-Performance SocialFi Ecosystem for 100K+ Users.",
    projectUrl: "#",
    mainBg: "#FF6200",
    imageBg: "#F05400",
    darkText: true,
    image: "/iMockup - iPhone 15 Pro Max.png",
    overview:
      "SorooshX is a premier Smart SocialFi Exchange designed to bridge the gap between master traders and the global community. It is a platform where education, real-time signals, and decentralized trading converge. CODEFI has been the core development partner for over 5 years, evolving the platform from a visionary concept into a scaling powerhouse that processes $100M+ in weekly trading volume.",
    problem:
      "Building a platform that combines the high-speed requirements of a crypto exchange with the social engagement of a content platform, all while maintaining absolute security for 100K users.",
    solution:
      "We provided a Full-Stack Engineering & Marketing lifecycle. This included designing a secure multi-chain wallet infrastructure, a high-concurrency trading engine, and a social layer where master traders can monetize their expertise. We managed the transition from MVP to a massive scale, ensuring the architecture remained resilient under high volatility.",
    meta: [
      { label: "industry", value: "SocialFi / Web3 / Fintech" },
      { label: "role", value: "Lead Engineering & Strategy Partner" },
      { label: "Timeline", value: "5+ Years (Long-term Partnership)" },
      {
        label: "service",
        value:
          "product design / full-stack development / support / product management",
      },
    ],
    metrics: [
      { value: "100K", label: "Registered Active Users" },
      { value: "$100M", label: "Weekly Trading Volume" },
      { value: "5years", label: "Full-Cycle Development" },
      { value: "$0", label: "Security Breaches\n(Maintained Integrity)" },
    ],
    stack: [
      {
        title: "Mobile",
        description:
          "Hybrid-Native Architecture using React Native with custom Native Modules (Swift/Kotlin) for maximum performance.",
      },
      {
        title: "Web",
        description:
          "Next.js for a lightning-fast, SEO-optimized front-end.",
      },
      {
        title: "Back-end",
        description:
          "A high-performance microservices architecture powered by Rust (for trading logic), Django (for robust API management), and Serverless infrastructures for elastic scaling.",
      },
      {
        title: "Web3 Integration",
        description:
          "Secure Smart Contracts and DApp layers for rewards and on-chain growth.",
      },
    ],
    galleryColors: ["#FF6200", "#00FF77", "#2563EB", "#FFDEAD"],
  },
  {
    slug: "doyo",
    year: "2025",
    category: "AI Agent",
    title: "doyo",
    headline:
      "Building an Intelligent AI Agent for Personalized Financial Insights.",
    projectUrl: "#",
    mainBg: "#FFDD00",
    imageBg: "#FFC300",
    darkText: true,
    image: "/Doyo.png",
    overview:
      "Doyo is an AI-powered financial assistant that delivers personalized market insights, portfolio analysis, and trading signals through natural language interaction. CODEFI designed and built the entire platform from concept to market-ready product in record time.",
    problem:
      "Creating an AI agent that can process real-time market data, understand user portfolios, and deliver actionable financial advice through a conversational interface — while maintaining regulatory compliance.",
    solution:
      "We architected a modular AI pipeline combining LLM orchestration with real-time data feeds, custom fine-tuned models for financial sentiment analysis, and a secure user-data layer. The system processes thousands of concurrent queries while maintaining sub-second response times.",
    meta: [
      { label: "industry", value: "AI / Fintech / SaaS" },
      { label: "role", value: "Full-Stack Development Partner" },
      { label: "Timeline", value: "8 Months (Rapid Delivery)" },
      {
        label: "service",
        value: "product design / AI engineering / full-stack development",
      },
    ],
    metrics: [
      { value: "50K", label: "Beta Users" },
      { value: "95%", label: "Query Accuracy" },
      { value: "<1s", label: "Response Time" },
      { value: "24/7", label: "Market Coverage" },
    ],
    stack: [
      {
        title: "AI/ML",
        description:
          "Custom LLM orchestration with RAG pipelines, fine-tuned models for financial sentiment analysis.",
      },
      {
        title: "Web",
        description:
          "React with real-time streaming UI for conversational AI interactions.",
      },
      {
        title: "Back-end",
        description:
          "Python microservices with FastAPI, real-time market data ingestion, and caching layers.",
      },
      {
        title: "Infrastructure",
        description:
          "Kubernetes-based deployment with auto-scaling for handling traffic spikes during market events.",
      },
    ],
    galleryColors: ["#FFDD00", "#FF6200", "#1F00FF", "#FF003B"],
  },
  {
    slug: "bitvpn",
    year: "2020",
    category: "Decentralized VPN",
    title: "bitvpn",
    headline:
      "Architecting a Decentralized VPN Network for Privacy-First Internet Access.",
    projectUrl: "#",
    mainBg: "#1F00FF",
    imageBg: "#FFFFFF",
    darkText: false,
    overview:
      "BitVPN is a decentralized virtual private network that leverages blockchain technology to provide censorship-resistant, anonymous internet access. CODEFI built the core infrastructure from protocol design to consumer-facing applications.",
    problem:
      "Traditional VPNs rely on centralized servers that can be compromised, censored, or monitored. Building a truly decentralized network that maintains performance while ensuring anonymity required novel protocol design.",
    solution:
      "We developed a peer-to-peer relay network with blockchain-based node incentivization, encrypted traffic routing through a multi-hop architecture, and native applications across all major platforms with one-tap connection simplicity.",
    meta: [
      { label: "industry", value: "Privacy / Web3 / Security" },
      { label: "role", value: "Lead Engineering Partner" },
      { label: "Timeline", value: "2+ Years" },
      {
        label: "service",
        value: "protocol design / full-stack development / mobile apps",
      },
    ],
    metrics: [
      { value: "200K", label: "Downloads" },
      { value: "50+", label: "Server Locations" },
      { value: "0", label: "Data Logs Kept" },
      { value: "99.9%", label: "Uptime Guarantee" },
    ],
    stack: [
      {
        title: "Mobile",
        description:
          "Native iOS (Swift) and Android (Kotlin) apps with custom VPN tunnel implementations.",
      },
      {
        title: "Protocol",
        description:
          "Custom WireGuard-based protocol with multi-hop relay routing for enhanced privacy.",
      },
      {
        title: "Back-end",
        description:
          "Go-based relay infrastructure with distributed node coordination and health monitoring.",
      },
      {
        title: "Blockchain",
        description:
          "Smart contract-based node incentivization and bandwidth marketplace on Ethereum L2.",
      },
    ],
    galleryColors: ["#1F00FF", "#FF6200", "#FFDD00", "#FF003B"],
  },
  {
    slug: "coco-ai",
    year: "2026",
    category: "Smart Financial AI",
    title: "coco ai",
    headline:
      "Designing an AI-Driven Platform for Automated Portfolio Management.",
    projectUrl: "#",
    mainBg: "#FF003B",
    imageBg: "#FFFFFF",
    darkText: false,
    overview:
      "Coco AI is an intelligent portfolio management platform that uses machine learning to automate investment strategies, risk assessment, and rebalancing. CODEFI is building the platform from the ground up with a focus on institutional-grade reliability.",
    problem:
      "Automated portfolio management systems often lack transparency and adaptability. Building a platform that provides institutional-level risk management while remaining accessible to retail investors required innovative AI/UX design.",
    solution:
      "We designed a transparent AI engine that explains its investment decisions, combined with a real-time risk monitoring dashboard and customizable strategy builder. The platform adapts to market regime changes and user risk profiles dynamically.",
    meta: [
      { label: "industry", value: "AI / Fintech / Investment" },
      { label: "role", value: "Technical Co-founder & Engineering Partner" },
      { label: "Timeline", value: "Ongoing (2026 Launch)" },
      {
        label: "service",
        value:
          "product strategy / AI engineering / full-stack development / DevOps",
      },
    ],
    metrics: [
      { value: "Beta", label: "Current Phase" },
      { value: "15%+", label: "Target Annual Return" },
      { value: "ML", label: "Risk Models" },
      { value: "Multi", label: "Asset Classes" },
    ],
    stack: [
      {
        title: "AI/ML",
        description:
          "Reinforcement learning for strategy optimization, NLP for market sentiment, and explainable AI for transparency.",
      },
      {
        title: "Web",
        description:
          "Next.js dashboard with real-time portfolio visualization and interactive strategy builder.",
      },
      {
        title: "Back-end",
        description:
          "Python-based quantitative engine with Rust-powered execution layer for low-latency trading.",
      },
      {
        title: "Data",
        description:
          "Real-time market data pipelines, historical backtesting infrastructure, and ML feature stores.",
      },
    ],
    galleryColors: ["#FF003B", "#FF6200", "#FFDD00", "#1F00FF"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return allProjects.map((p) => p.slug);
}

export function getOtherProjects(slug: string): Project[] {
  return allProjects.filter((p) => p.slug !== slug);
}
