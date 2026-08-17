import type { ToolkitItem } from "@/components/common/Technologies";
import {
  AiIcon,
  AlertIcon,
  AnimationIcon,
  CodeIcon,
  CodeReviewIcon,
  ComponentsIcon,
  DatabaseIcon,
  HeadsetIcon,
  ImageOptimizedIcon,
  LightBulbIcon,
  ReduxIcon,
  OutlineViewIcon,
  ResponsiveIcon,
  SeoOptimizationIcon,
  ShieldUserIcon,
  ShoppingCartIcon,
  SpeedIcon,
} from "@/icons";
import type { IconProps } from "@/icons/types";
import type { ComponentType } from "react";

export interface ServiceKeyFeature {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface ServiceData {
  id: number;
  category: string;
  proofProjectId?: number;
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  whatsIncluded: string[];
  process: string[];
  keyFeatures: ServiceKeyFeature[];
  outcomes: string[];
  toolkit?: ToolkitItem[];
}

export const allServices: ServiceData[] = [
  {
    id: 1,
    category: "Development",
    proofProjectId: 101,
    icon: CodeIcon,
    title: "Web Application Development",
    description:
      "Build dynamic and responsive web applications with React.js, Next.js, and modern UI frameworks, ensuring scalability and maintainability.",
    whatsIncluded: [
      "A custom React.js / Next.js application built around your actual product requirements, not a generic template.",
      "A clean component architecture designed to stay easy to extend as the product grows.",
      "API integration and a data-fetching layer wired up to your backend or third-party services.",
      "Cross-browser, cross-device testing before handover.",
    ],
    process: [
      "Kick off with a short discovery conversation to scope pages, features, and integrations.",
      "Translate requirements into a component and state-management plan before writing code.",
      "Build in reviewable increments, sharing progress early instead of a single end-of-project reveal.",
      "Test across devices and browsers and fix edge cases before final delivery.",
    ],
    keyFeatures: [
      {
        icon: ComponentsIcon,
        title: "Reusable Component Architecture",
        description:
          "Components built to be composed and reused, keeping the codebase maintainable as it grows.",
      },
      {
        icon: SpeedIcon,
        title: "Performance-Minded Builds",
        description:
          "Code-splitting, lazy loading, and sensible defaults so the app stays fast as features are added.",
      },
      {
        icon: ResponsiveIcon,
        title: "Fully Responsive UI",
        description:
          "Every screen tested across breakpoints, from mobile to large desktop.",
      },
      {
        icon: DatabaseIcon,
        title: "Backend & API Ready",
        description:
          "Clean integration points for REST/GraphQL APIs or a backend team to plug into.",
      },
    ],
    outcomes: [
      "A production-ready web app aligned with your actual product goals, not a generic starter.",
      "A codebase that's easy to hand off to another developer or team.",
      "A foundation — structure, performance, responsiveness — that supports future feature growth.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/rRdcbGrX/Next-js.webp",
        url: "https://nextjs.org/",
        alt: "Next.js",
      },
      {
        src: "https://i.ibb.co/PD2LvB8/Typescript.webp",
        url: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        url: "https://tailwindcss.com/",
        alt: "Tailwind CSS",
      },
    ],
  },
  {
    id: 2,
    category: "Performance & SEO",
    proofProjectId: 101,
    icon: SeoOptimizationIcon,
    title: "SEO Optimization",
    description:
      "Enhance your website’s visibility on search engines with on-page SEO, performance improvements, and best practices to drive organic traffic.",
    whatsIncluded: [
      "On-page SEO audit and fixes: meta tags, headings, semantic markup, and structured data.",
      "Core Web Vitals and page-speed improvements that directly affect search ranking.",
      "Clean, crawlable routing and sitemap/robots.txt setup.",
      "Per-page metadata (title, description, canonical) instead of one generic tag for the whole site.",
    ],
    process: [
      "Audit the current site for SEO gaps: metadata, structure, performance, and indexability.",
      "Prioritize fixes by expected impact — quick wins first, deeper structural work after.",
      "Implement fixes directly in the codebase rather than bolt-on plugins.",
      "Verify improvements with Lighthouse and real search-console data where available.",
    ],
    keyFeatures: [
      {
        icon: SeoOptimizationIcon,
        title: "On-Page SEO Fixes",
        description:
          "Meta tags, headings, and semantic markup brought up to search-engine best practice.",
      },
      {
        icon: SpeedIcon,
        title: "Core Web Vitals Focus",
        description:
          "Performance improvements aimed squarely at the metrics search engines reward.",
      },
      {
        icon: CodeIcon,
        title: "Structured Data",
        description:
          "JSON-LD and schema markup that help search engines understand your content.",
      },
    ],
    outcomes: [
      "Improved visibility and ranking potential on search engines.",
      "Faster pages that satisfy both users and search-engine performance signals.",
      "A site structure that's easy for search engines to crawl and index correctly.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/rRdcbGrX/Next-js.webp",
        url: "https://nextjs.org/",
        alt: "Next.js",
      },
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
    ],
  },
  {
    id: 3,
    category: "Design & UX",
    proofProjectId: 4,
    icon: OutlineViewIcon,
    title: "UI/UX Implementation",
    description:
      "Transform Figma and Adobe XD designs into pixel-perfect, fully responsive interfaces for seamless user experiences.",
    whatsIncluded: [
      "Pixel-perfect implementation of your Figma or Adobe XD designs.",
      "Consistent spacing, typography, and interaction states across every screen.",
      "Accessible markup and keyboard/focus behavior built in from the start.",
    ],
    process: [
      "Review the design file for edge cases — empty states, long text, error states — before building.",
      "Build screen by screen, checking against the design at each breakpoint.",
      "Polish interaction details — hover, focus, transitions — that separate 'implemented' from 'right'.",
    ],
    keyFeatures: [
      {
        icon: OutlineViewIcon,
        title: "Pixel-Perfect Builds",
        description:
          "Interfaces that match your design file, not an approximation of it.",
      },
      {
        icon: ResponsiveIcon,
        title: "Every Breakpoint Covered",
        description: "Designs implemented consistently from mobile to desktop.",
      },
      {
        icon: ShieldUserIcon,
        title: "Accessible by Default",
        description:
          "Semantic markup and focus states considered from the first build, not bolted on later.",
      },
    ],
    outcomes: [
      "A live interface that faithfully represents the approved design.",
      "Fewer visual QA round-trips because details were handled the first time.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        url: "https://tailwindcss.com/",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/6cM3CLs/framer-motion.webp",
        url: "https://motion.dev/",
        alt: "Framer Motion",
      },
    ],
  },
  {
    id: 4,
    category: "Design & UX",
    proofProjectId: 205,
    icon: ResponsiveIcon,
    title: "Cross-Platform Responsive Design",
    description:
      "Ensure flawless experiences across desktops, tablets, and mobile devices with fully responsive and adaptive designs.",
    whatsIncluded: [
      "Layouts tested and refined across mobile, tablet, and desktop breakpoints.",
      "Touch-friendly interactions alongside mouse and keyboard support.",
      "Consistent visual hierarchy regardless of screen size.",
    ],
    process: [
      "Design mobile-first, then progressively enhance for larger screens.",
      "Test on real device sizes, not just browser dev-tools presets.",
      "Fix edge cases: long text, small screens, and unusual aspect ratios.",
    ],
    keyFeatures: [
      {
        icon: ResponsiveIcon,
        title: "True Cross-Device Testing",
        description:
          "Verified on real breakpoints, not just a couple of presets.",
      },
      {
        icon: OutlineViewIcon,
        title: "Consistent Visual Hierarchy",
        description:
          "The interface reads clearly whether it's a phone or a wide desktop screen.",
      },
    ],
    outcomes: [
      "One codebase that looks intentional on every device, not a 'works okay' compromise.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        url: "https://tailwindcss.com/",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
    ],
  },
  {
    id: 5,
    category: "Performance & SEO",
    proofProjectId: 101,
    icon: SpeedIcon,
    title: "Performance Optimization",
    description:
      "Optimize web applications for faster load times, improved performance, and a seamless user experience.",
    whatsIncluded: [
      "Bundle analysis and code-splitting to cut down what ships to the browser.",
      "Image and asset optimization: lazy loading, proper sizing, and modern formats.",
      "Reduction of unnecessary re-renders and heavy client-side work.",
    ],
    process: [
      "Profile the app to find the actual bottlenecks instead of guessing.",
      "Fix the highest-impact issues first — usually bundle size and render performance.",
      "Re-measure after each change to confirm real improvement, not just perceived speed.",
    ],
    keyFeatures: [
      {
        icon: SpeedIcon,
        title: "Bundle & Code-Splitting",
        description:
          "Ship less JavaScript up front and load the rest on demand.",
      },
      {
        icon: ImageOptimizedIcon,
        title: "Asset Optimization",
        description: "Images and static assets sized and loaded efficiently.",
      },
      {
        icon: ComponentsIcon,
        title: "Fewer Unnecessary Re-renders",
        description:
          "Component and state structure reviewed to cut wasted render cycles.",
      },
    ],
    outcomes: [
      "Faster load times and a smoother, more responsive interface.",
      "Measurable improvements on tools like Lighthouse, not just a subjective feel.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
  },
  {
    id: 6,
    category: "Development",
    icon: AiIcon,
    title: "AI Integration",
    description:
      "Add smart AI features like chatbots, recommendations, and automation to your web apps using OpenAI, TensorFlow, or custom ML models.",
    whatsIncluded: [
      "AI features scoped to a real user need — chat, recommendations, or automation — not AI for its own sake.",
      "Integration with providers like OpenAI or a custom model, wired into your existing app.",
      "Sensible loading, error, and fallback states around AI responses.",
    ],
    process: [
      "Clarify the actual problem the AI feature should solve before picking a model or provider.",
      "Prototype the integration against real data early to validate the approach.",
      "Harden it with proper error handling, rate-limit awareness, and fallback UX.",
    ],
    keyFeatures: [
      {
        icon: AiIcon,
        title: "Purpose-Built AI Features",
        description:
          "Chatbots, recommendations, or automation scoped to an actual user need.",
      },
      {
        icon: DatabaseIcon,
        title: "Provider Integration",
        description:
          "Wired into OpenAI, TensorFlow, or a custom model your team already trusts.",
      },
      {
        icon: AlertIcon,
        title: "Graceful Fallbacks",
        description:
          "Sensible loading, error, and fallback states when the AI response isn't available.",
      },
    ],
    outcomes: [
      "AI functionality that feels like a natural part of the product, not a bolted-on gimmick.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/rRdcbGrX/Next-js.webp",
        url: "https://nextjs.org/",
        alt: "Next.js",
      },
    ],
  },
  {
    id: 7,
    category: "Development",
    proofProjectId: 1,
    icon: DatabaseIcon,
    title: "Backend Integration & API Handling",
    description:
      "Integrate robust backend services and RESTful APIs for smooth data flow and functionality in your applications.",
    whatsIncluded: [
      "A clean data-fetching layer connecting your frontend to REST or GraphQL APIs.",
      "Consistent loading, error, and empty states for every data-driven screen.",
      "Auth-aware requests — tokens, refresh flows — handled centrally instead of per-component.",
    ],
    process: [
      "Map out the API surface the frontend actually needs before writing fetch logic.",
      "Centralize data-fetching and caching so components stay simple.",
      "Handle auth, retries, and error states consistently across the app.",
    ],
    keyFeatures: [
      {
        icon: DatabaseIcon,
        title: "Centralized Data Layer",
        description:
          "One consistent way to fetch, cache, and handle API data across the app.",
      },
      {
        icon: ShieldUserIcon,
        title: "Auth-Aware Requests",
        description:
          "Token handling and refresh flows managed centrally, not duplicated per screen.",
      },
      {
        icon: AlertIcon,
        title: "Consistent Error Handling",
        description:
          "Predictable loading, empty, and error states wherever data is fetched.",
      },
    ],
    outcomes: [
      "A frontend that talks to your backend reliably, with far less per-page boilerplate.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
      },
    ],
  },
  {
    id: 8,
    category: "Consulting & Support",
    icon: HeadsetIcon,
    title: "Fast & Reliable Support",
    description:
      "Provide quick response times, continuous assistance, and dedicated support to keep your project running smoothly.",
    whatsIncluded: [
      "Quick turnaround on bug reports and small change requests after launch.",
      "Clear communication on status and timelines, not silence between updates.",
      "Ongoing availability for questions as your product evolves.",
    ],
    process: [
      "Set clear expectations on response times and scope upfront.",
      "Triage issues by impact so critical problems get fixed first.",
      "Keep you updated at each step, not just at the end.",
    ],
    keyFeatures: [
      {
        icon: HeadsetIcon,
        title: "Fast Response Times",
        description: "Bug reports and questions don't sit in a queue for days.",
      },
      {
        icon: AlertIcon,
        title: "Impact-Based Triage",
        description:
          "Critical issues get fixed first, with clear communication throughout.",
      },
    ],
    outcomes: [
      "A project that keeps running smoothly after launch, not one that's abandoned once it ships.",
    ],
  },
  {
    id: 9,
    category: "Development",
    proofProjectId: 203,
    icon: ComponentsIcon,
    title: "Custom Component Development",
    description:
      "Develop reusable, high-performance UI components tailored to your application’s needs with modern best practices.",
    whatsIncluded: [
      "Reusable UI components built to your design system's spacing, color, and typography rules.",
      "Components documented well enough for your team to reuse confidently.",
      "Sensible prop APIs that stay flexible without becoming overcomplicated.",
    ],
    process: [
      "Look for the real variation the component needs to support before designing its API.",
      "Build it to be composed with other components, not a one-off special case.",
      "Sanity-check it in at least two real usage contexts before calling it done.",
    ],
    keyFeatures: [
      {
        icon: ComponentsIcon,
        title: "Design-System Aligned",
        description:
          "Components that follow your existing spacing, color, and typography rules.",
      },
      {
        icon: CodeReviewIcon,
        title: "Thoughtful Prop APIs",
        description:
          "Flexible enough to reuse, simple enough not to fight with.",
      },
    ],
    outcomes: [
      "A growing library of components your team can reuse instead of rebuilding.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        url: "https://tailwindcss.com/",
        alt: "Tailwind CSS",
      },
    ],
  },

  {
    id: 10,
    category: "Development",
    proofProjectId: 202,
    icon: CodeReviewIcon,
    title: "Clean Code Architecture",
    description:
      "Deliver well-structured, maintainable, and scalable codebases following industry standards and clean code principles.",
    whatsIncluded: [
      "A review of the current codebase structure, naming, and separation of concerns.",
      "Refactoring toward modular, well-organized folders and components.",
      "Consistent patterns applied across the codebase, not just the files touched most recently.",
    ],
    process: [
      "Audit the current structure to find the biggest sources of friction.",
      "Refactor incrementally so the app keeps working at every step.",
      "Document the resulting patterns so the team can keep following them.",
    ],
    keyFeatures: [
      {
        icon: CodeReviewIcon,
        title: "Structured Refactors",
        description:
          "Incremental, safe refactors toward a cleaner, more modular codebase.",
      },
      {
        icon: ComponentsIcon,
        title: "Consistent Patterns",
        description:
          "The same conventions applied everywhere, not just in the newest files.",
      },
    ],
    outcomes: [
      "A codebase that's easier to onboard into, extend, and maintain.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/PD2LvB8/Typescript.webp",
        url: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
  },
  {
    id: 11,
    category: "Development",
    proofProjectId: 1,
    icon: ReduxIcon,
    title: "State Management Solutions",
    description:
      "Implement efficient state management using Redux, React Query, and Zustand to ensure smooth performance and scalability.",
    whatsIncluded: [
      "The right state tool for the job — Redux, React Query, or Zustand — not one tool forced everywhere.",
      "Clear separation between server state, UI state, and global app state.",
      "Predictable data flow that's easy to debug.",
    ],
    process: [
      "Map out what state actually needs to be global versus local or server-cached.",
      "Introduce the appropriate tool(s) without over-engineering a simple app.",
      "Set conventions so state stays predictable as the app grows.",
    ],
    keyFeatures: [
      {
        icon: ReduxIcon,
        title: "Right Tool for the State",
        description:
          "Redux, React Query, or Zustand chosen based on what the app actually needs.",
      },
      {
        icon: DatabaseIcon,
        title: "Server vs. UI State Separation",
        description:
          "Clear boundaries so data-fetching state doesn't get tangled with UI state.",
      },
    ],
    outcomes: [
      "State that's predictable to reason about and easy to debug as the app scales.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
      },
      {
        src: "https://i.ibb.co/3mK0SsjP/zustand.webp",
        url: "https://zustand-demo.pmnd.rs/",
        alt: "Zustand",
      },
    ],
  },
  {
    id: 12,
    category: "Consulting & Support",
    proofProjectId: 101,
    icon: LightBulbIcon,
    title: "Technical Consulting",
    description:
      "Get expert guidance on adopting modern frontend technologies and best practices for your projects.",
    whatsIncluded: [
      "An honest assessment of your current stack and where it's likely to cause pain.",
      "Practical recommendations scoped to your team's size and timeline, not generic best-practice lists.",
      "Guidance on adopting new tools only where they earn their added complexity.",
    ],
    process: [
      "Understand your product, team, and constraints before recommending anything.",
      "Prioritize recommendations by actual impact versus effort.",
      "Stay available to answer follow-up questions as you implement changes.",
    ],
    keyFeatures: [
      {
        icon: LightBulbIcon,
        title: "Practical Recommendations",
        description:
          "Guidance scoped to your team and timeline, not generic best-practice lists.",
      },
      {
        icon: CodeReviewIcon,
        title: "Stack & Architecture Review",
        description:
          "An honest look at what's working and what's likely to cause pain later.",
      },
    ],
    outcomes: ["Clearer technical direction and fewer costly missteps."],
  },
  {
    id: 13,
    category: "Design & UX",
    proofProjectId: 100,
    icon: ShieldUserIcon,
    title: "User Experience Enhancements",
    description:
      "Focus on intuitive, user-centered design to ensure smooth interactions and high user satisfaction across all platforms.",
    whatsIncluded: [
      "A review of key user flows to find friction points and confusing interactions.",
      "Targeted UX improvements — clearer feedback, better empty/error states, smoother transitions.",
      "Small interaction-design fixes that add up to a noticeably better feel.",
    ],
    process: [
      "Walk through the product's key flows the way a real user would.",
      "Flag friction points and prioritize the ones with the most impact.",
      "Implement fixes and validate the flow feels smoother end-to-end.",
    ],
    keyFeatures: [
      {
        icon: ShieldUserIcon,
        title: "Friction-Point Reviews",
        description:
          "Key flows walked through like a real user to spot confusing moments.",
      },
      {
        icon: AnimationIcon,
        title: "Smoother Interactions",
        description:
          "Transitions and feedback states tuned so the product feels more responsive.",
      },
    ],
    outcomes: [
      "A product that feels noticeably smoother and more intuitive to use.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/6cM3CLs/framer-motion.webp",
        url: "https://motion.dev/",
        alt: "Framer Motion",
      },
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
    ],
  },
  {
    id: 14,
    category: "Development",
    proofProjectId: 202,
    icon: ShoppingCartIcon,
    title: "E-commerce Development",
    description:
      "Develop feature-rich e-commerce platforms with seamless product browsing, cart management, and secure checkout processes.",
    whatsIncluded: [
      "A full storefront: product browsing, filtering, cart, and checkout.",
      "Order management flows for both customers and admins.",
      "Secure, well-tested checkout and payment integration points.",
    ],
    process: [
      "Map the shopping flow end-to-end before building any single page.",
      "Build cart and checkout state carefully — this is where bugs cost the most.",
      "Test edge cases: empty cart, failed payments, and out-of-stock items.",
    ],
    keyFeatures: [
      {
        icon: ShoppingCartIcon,
        title: "Full Shopping Flow",
        description:
          "Browsing, filtering, cart, and checkout built as one coherent journey.",
      },
      {
        icon: DatabaseIcon,
        title: "Order & Inventory Aware",
        description:
          "Product and order data modeled to support real store operations.",
      },
      {
        icon: ShieldUserIcon,
        title: "Secure Checkout",
        description: "Payment and checkout flows built and tested with care.",
      },
    ],
    outcomes: [
      "A storefront customers can actually complete a purchase on without friction.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        url: "https://tailwindcss.com/",
        alt: "Tailwind CSS",
      },
    ],
  },
];
