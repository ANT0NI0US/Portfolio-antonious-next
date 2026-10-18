import {
  AdminControlIcon,
  AiIcon,
  AnimationIcon,
  CodeReviewIcon,
  ComponentsIcon,
  DarkModeIcon,
  DashboardIcon,
  DoubleArrowIcon,
  FormIcon,
  ImageIcon,
  LanguageIcon,
  NotificationIcon,
  OutlineViewIcon,
  ResponsiveIcon,
  SearchIcon,
  SeoOptimizationIcon,
  ShieldUserIcon,
  SpeedIcon,
  StickerIcon,
  WorkFlowIcon,
} from "@/icons";
import type { ProjectData } from "@/data/projects";

export const creationProjects: ProjectData[] = [
  {
    id: 100,
    title: "Darf (Invitation Management System)",
    description:
      "Darf allows users to create and share personalized online invitations in just a few clicks. It's fast, convenient, and helps save time and effort.",
    category: "creation",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    languages: ["Arabic", "English"],
    imgUrl: "https://i.ibb.co/Zp9CrcTM/Darf.webp",
    keyObjectives: [
      "Build a fully functional and user-friendly system to manage invitation creation and distribution.",
      "Simplify a complex workflow by transforming it into a clean, reusable, and scalable React-based solution.",
      "Integrate bilingual support (Arabic and English) through i18n to serve a diverse user base.",
      "Provide consistent UI/UX elements across the application with a polished look and feel aligned with the brand.",
    ],
    challengesSolved: [
      "Handled a poorly structured and unorganized codebase, which lacked modularity and maintainability.",
      "Tackled the steep learning curve of Fabric.js, which was used extensively in the project despite limited documentation and resources.",
      "Replaced an inconsistent toast system with react-hot-toast to align with the app’s design aesthetics and color scheme.",
      "Faced difficulty in finding relevant solutions through conventional documentation, leading to intensive use of AI tools (ChatGPT, Cursor, DeepSeek) for technical discovery.",
      "Resolved performance bottlenecks by minimizing unnecessary component re-renders and reducing the number of components in the DOM tree.",
    ],
    responsibilities: [
      "Refactored the existing architecture by creating reusable components and converting bloated structures into clean, modular code.",
      "Reduced excessive component count (~700–800) significantly by restructuring logic and separating concerns efficiently.",
      "Wrote clear and consistent code comments to improve readability and maintainability for future developers.",
      "Integrated i18n for seamless bilingual support throughout the application.",
      "Unified the structure of section headers to deliver a cohesive layout experience.",
      "Applied custom logic for Fabric.js canvas manipulation to handle dynamic user inputs for invitation designs.",
      "Managed design constraints and user permissions (admin vs. regular users) using conditional logic within the editor.",
      "Conducted thorough cross-browser and cross-device testing to ensure responsive design compatibility.",
    ],
    keyOutcomes: [
      "Achieved a 40% reduction in user effort by streamlining the invitation creation process and automating repetitive tasks.",
      "Significantly improved code readability and scalability, paving the way for future features and enhancements.",
      "Delivered a visually consistent and polished user interface, increasing user satisfaction and engagement.",
      "Enhanced internal collaboration by writing maintainable code with extensive inline documentation.",
      "Successfully implemented an advanced editor powered by Fabric.js, despite limited external support or tutorials.",
      "Demonstrated high self-sufficiency and proactive research capabilities through intensive use of AI-assisted development tools.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        url: "https://www.w3schools.com/html/",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        url: "https://www.w3schools.com/css/",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        url: "https://www.w3schools.com/js/",
        alt: "Javascript",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        url: "https://tailwindcss.com/",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/phvgSzx/react-router-dom.webp",
        url: "https://reactrouter.com/",
        alt: "react-router-dom",
      },
      {
        src: "https://i.ibb.co/wCDsh5n/react-hook-form.webp",
        url: "https://react-hook-form.com/",
        alt: "react-hook-form",
      },
      {
        src: "https://i.ibb.co/HfnF8CFt/i18n.webp",
        url: "https://react.i18next.com/",
        alt: "react-i18next",
      },
      {
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
      {
        icon: StickerIcon,
        title: "Customizable Canvas with Fabric.js",
        description:
          "Allowed users to edit stickers, logos, and text directly on a live preview canvas.",
      },
      {
        icon: ComponentsIcon,
        title: "Reusable Components Architecture",
        description:
          "Boosted scalability and maintainability across the project.",
      },
      {
        icon: LanguageIcon,
        title: "Bilingual Support (Arabic & English)",
        description:
          "Full localization using i18n with RTL/LTR layout switching.",
      },
      {
        icon: NotificationIcon,
        title: "Theme-Aware Toast Notifications",
        description:
          "Used react-hot-toast to reflect brand colors and maintain consistent styling.",
      },
      {
        icon: CodeReviewIcon,
        title: "Inline Comments & Clean Code",
        description: "Enhanced developer clarity and future maintainability.",
      },
      {
        icon: AdminControlIcon,
        title: "Admin-Specific Canvas Controls",
        description:
          "Ensured restricted functionalities only accessible to admin users.",
      },
      {
        icon: SpeedIcon,
        title: "Optimized Performance",
        description:
          "Reduced unnecessary renders and heavy state updates by isolating logic efficiently.",
      },
      {
        icon: AiIcon,
        title: "AI-Powered Research Approach",
        description:
          "Resolved complex implementation gaps using ChatGPT, Cursor, and DeepSeek.",
      },
    ],
  },
  {
    id: 101,
    title: "Création (Corporate Website Revamp)",
    description:
      "The official website of Création, a digital marketing and branding agency based in Riyadh. Built from scratch with a strong focus on SEO, performance, bilingual experience (Arabic & English), and a modern dark/light UI that reflects the agency's premium identity. All content is CMS-driven through a headless Laravel API and managed from the Creation Dashboard. Vibe coding (AI-assisted development) was used only on the Laravel backend API — the frontend itself was not vibe coded.",
    category: "creation",
    url: "https://www.creation.sa",
    stack: ["Next", "TypeScript", "Tailwind CSS"],
    languages: ["Arabic", "English"],
    imgUrl: "https://i.ibb.co/0jtydkPd/Creation.webp",
    keyObjectives: [
      "Rebuild the company's online presence from the ground up with a fresh, modern visual identity.",
      "Achieve top-tier SEO performance and page load speed using Next.js App Router with static generation and ISR to enhance search engine visibility and ranking.",
      "Deliver a fully bilingual experience (Arabic & English) with automatic RTL/LTR layout switching driven by Next.js middleware.",
      "Implement a polished dark/light mode system that respects user preference and aligns with the brand's visual language.",
      "Let the team manage pages, solutions, projects, blogs, header, and footer without a code change by rendering everything from a headless CMS API.",
      "Present the agency's portfolio and solutions through statically generated list and detail pages with rich, structured layouts.",
    ],
    challengesSolved: [
      "Designed a scalable i18n architecture using Next.js dynamic `[locale]` routing and a custom middleware-based locale negotiation system — without relying on a full i18n framework, only lightweight locale-matching utilities.",
      "Built a type-safe dictionary system with fully typed translation keys (`dictionaries/types.ts`) to prevent runtime errors across Arabic and English content.",
      "Handled complex RTL/LTR layout shifts cleanly using Tailwind CSS directional utilities, ensuring pixel-perfect layouts in both languages.",
      "Managed dark/light theming globally with `next-themes` while preserving SSR hydration consistency to avoid flash-of-incorrect-theme (FOIT).",
      "Structured a large multi-page codebase into clean separation of concerns: `app/`, `components/pages/`, `components/common/`, `components/ui/`, `components/layout/`, `dictionaries/`, `hooks/`, `constants/`, and `lib/`.",
      "Integrated a working contact form using `react-hook-form`, `zod` schema validation, `react-select` for country selection, and `emailjs-com` for serverless email delivery — all styled to match the dark/light theme.",
      "Implemented smooth, performant animations across sections (banner, culture & identity, project cards, solution details) using Framer Motion without impacting Core Web Vitals.",
      "Built a CMS-driven rendering pipeline: a `SectionRenderer` maps 16 API-provided section types to typed React components, so editors can compose entire pages without developer help.",
      "Kept static builds resilient by wrapping every slug fetch used by `generateStaticParams` and `sitemap.ts` in a fallback, so a single failing API endpoint never breaks a deployment.",
    ],
    responsibilities: [
      "Architected and built the entire website from scratch: Home, CMS-driven dynamic pages (`/[locale]/[slug]`), Projects and Project Details, Solutions and Solution Details, and Blogs and Blog Details.",
      "Designed and implemented the full i18n system using Next.js middleware for locale detection, `[locale]` dynamic routing, and a typed JSON dictionary approach for AR/EN content.",
      "Built the data layer on top of a headless Laravel API: a typed `apiClient` fetch wrapper with locale forwarding via `Accept-Language`, ISR revalidation, and a single `endpoints.ts` source of truth for API paths.",
      "Built all reusable UI components: `Header`, `MainTitle`, `AppButton`, `ActionLink`, `Logo`, `CountUp`, `TextWithMotion`, `BaseSlider`, `Accordion`, `SmartMedia` (renders `next/image` or video based on CMS data), and `DynamicSvg`.",
      "Developed all layout components: responsive `Navbar` with desktop links, mobile drawer menu, language switcher, and theme toggle; and a multi-column `Footer` with project menus, trusted partners, and copyright — all driven by API content.",
      "Created all page-builder section components: banner, culture & identity, achievements with count-up animation, display info, media content, advanced overview, custom accordion, text list, featured works, reviews, news ticker, logos, CTA banner, blogs teaser, contact, and header sections.",
      "Built the Solutions section with dedicated solution detail pages, each containing a deep-dive layout with features, an image carousel, and a CTA block.",
      "Implemented the Projects page with a project grid and a hover cursor tooltip effect on cards.",
      "Developed individual Project Detail pages with a structured layout: main image, about section, full-width photo, results counters, image gallery (single & two-grid), and previous/next project navigation.",
      "Integrated `Swiper` for all sliders (clients, featured works, solution image carousels) with a reusable `BaseSlider` abstraction.",
      "Implemented technical SEO: per-page `generateMetadata` fed by API SEO data, canonical and hreflang alternates, `sitemap.ts`, `robots.ts`, and Google Analytics.",
      "Connected the contact form end-to-end with field-level validation via `zod`, async country list fetching, and email delivery via `emailjs-com`.",
    ],
    keyOutcomes: [
      "Delivered a fully production-ready, bilingual website that accurately reflects Création's premium brand identity.",
      "Achieved clean Lighthouse scores through Next.js SSR/SSG, optimized `next/image` usage, and minimal client-side JS.",
      "Built a maintainable and scalable codebase with strict TypeScript types across all components, data files, and translation dictionaries.",
      "Created a seamless language-switching experience — Arabic visitors land on RTL Arabic by default, English visitors on LTR English — with no layout breakage.",
      "Established a robust component library that can be reused across future pages or sister projects inside the agency.",
      "Turned the site into a fully CMS-driven product: content edits made in the Creation Dashboard go live through ISR without a redeploy.",
      "Produced a CMS-driven portfolio and solutions showcase that stays in sync with the API while remaining statically generated for speed and SEO.",
      "Improved user engagement through better UX, faster navigation, and theme flexibility.",
      "Delivered a modern, clean, and professional UI aligned with company branding.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/rRdcbGrX/Next-js.webp",
        url: "https://nextjs.org/",
        alt: "Next.js",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        url: "https://www.w3schools.com/html/",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        url: "https://www.w3schools.com/css/",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/PD2LvB8/Typescript.webp",
        url: "https://www.w3schools.com/typescript/",
        alt: "TypeScript",
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
      {
        src: "https://i.ibb.co/wCDsh5n/react-hook-form.webp",
        url: "https://react-hook-form.com/",
        alt: "react-hook-form",
      },
    ],
    keyFeatures: [
      {
        icon: AiIcon,
        title: "Vibe Coding on the Backend Only",
        description:
          "The frontend was built from scratch without vibe coding. Only the Laravel API it consumes was developed through vibe coding (AI-assisted development).",
      },
      {
        icon: SeoOptimizationIcon,
        title: "SEO-Optimized Architecture",
        description:
          "Implemented dynamic metadata, structured data, and optimized routing to improve search engine rankings.",
      },
      {
        icon: SpeedIcon,
        title: "High Performance Optimization",
        description:
          "Utilized Next.js features like image optimization, lazy loading, and code splitting for faster load times.",
      },
      {
        icon: LanguageIcon,
        title: "Bilingual i18n — Arabic & English",
        description:
          "Locale-based routing via Next.js middleware with fully typed JSON dictionaries. Arabic defaults to RTL, English to LTR — no library needed.",
      },
      {
        icon: DarkModeIcon,
        title: "Dark / Light Mode",
        description:
          "Global theme switching via next-themes with SSR-safe hydration, persisted user preference, and brand-aligned color tokens.",
      },
      {
        icon: AnimationIcon,
        title: "Animated UI with Framer Motion",
        description:
          "Scroll-triggered and entrance animations across the hero banner, architecture section, service cards, and project previews.",
      },
      {
        icon: ResponsiveIcon,
        title: "Responsive Design",
        description:
          "Fully optimized for all screen sizes with a mobile-first approach.",
      },
      {
        icon: OutlineViewIcon,
        title: "Modern UI/UX",
        description:
          "Clean and engaging interface aligned with the company’s branding and vision.",
      },
      {
        icon: DoubleArrowIcon,
        title: "Project-to-Project Navigation",
        description:
          "Each project detail page includes Previous / Next navigation so clients can browse the full portfolio without returning to the grid.",
      },
      {
        icon: WorkFlowIcon,
        title: "Headless CMS Architecture",
        description:
          "Pages, projects, solutions, blogs, header, and footer are fetched from a Laravel API and rendered through typed section components. Edits go live via ISR without a redeploy.",
      },
    ],
  },
  {
    id: 102,
    title: "Creation Dashboard (CMS Admin Panel)",
    description:
      "The internal admin dashboard that manages the content of the Création website, built from scratch. A bilingual (Arabic & English), RTL-aware React app for managing blogs, projects, solutions, clients, header, footer, site settings, per-page SEO, and a section-based page builder — all through a typed, validated REST API integration. Vibe coding (AI-assisted development) was used only on the Laravel backend API — the dashboard itself was not vibe coded.",
    category: "creation",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    languages: ["Arabic", "English"],
    imgUrl: "https://i.ibb.co/qM7trv7k/Creation-Dashboard.webp",
    keyObjectives: [
      "Give the Création team a single, secure admin panel to manage all content on the corporate website without touching code.",
      "Support fully bilingual content — every content model stores Arabic and English versions — with an RTL Arabic interface and an LTR English interface.",
      "Provide a flexible, section-based page builder so new website pages can be composed from reusable, typed sections.",
      "Keep SEO (title, description, image, keywords) editable per blog, project, solution, and page from within the same workflow.",
      "Build a scalable feature-based architecture that a team can extend with new modules without touching existing ones.",
    ],
    challengesSolved: [
      "Modeled a page builder with 16 section types as a Zod discriminated union, giving each section its own schema, default values, and form UI — and worked around TypeScript's type-complexity ceiling on the combined schema with narrow, documented type assertions while Zod still validates the real data at runtime.",
      "Enforced bilingual data integrity with reusable Zod helpers (`englishField`, `arabicField`, and optional variants) that validate both length and character set, so Arabic content can never land in an English field or the other way around.",
      "Handled file uploads with an upload-first flow: attachments are uploaded, and the field value is swapped for the returned URL before the rest of the form data is submitted.",
      "Kept the admin session secure and predictable with route guards (`RequireAuth` / `RequireGuest`), a Bearer-token Axios interceptor, and automatic logout plus redirect whenever the API answers 401.",
      "Kept navigation fast across a large surface area by lazy-loading every route with `React.lazy` and `Suspense`.",
      "Built list pages with server-side pagination, keyword search, and sorting synchronized to URL query params, plus a pagination guard for out-of-range pages, loading spinners, and dedicated empty states.",
      "Made SEO fields optional on linked records: title, description, and image fall back to the parent record's own content when left blank.",
    ],
    responsibilities: [
      "Architected the application with a feature-based structure — `auth`, `statistics`, `blogs`, `projects`, `solutions`, `pagesBuilder`, `clients`, `header`, `footer`, and `settings` — each with its own `api/`, `hooks/`, `components/`, `pages/`, and types.",
      "Built a shared design-system layer (`shared/ui`) of form primitives, modals, confirm dialogs, file upload, select fields, spinners, and empty-state components reused across every feature.",
      "Implemented the full API layer: a configured Axios instance with request/response interceptors, centralized endpoints and query keys, and TanStack Query hooks that invalidate the cache after mutations and show toast feedback.",
      "Built typed, validated forms with React Hook Form and Zod for content, settings, profile, and authentication flows.",
      "Developed the page builder: 16 typed section editors, sections that can be reordered up and down, collapsible accordions per section, and confirmation before deletion.",
      "Integrated bilingual i18n (English and Arabic) with `react-i18next`, automatic language detection, and full RTL support.",
      "Created the dashboard home with live overview cards (projects, solutions, blogs, clients, pages, social links) and a recent-activity feed.",
      "Implemented dark/light theming and a responsive sidebar with a desktop toggle and a mobile drawer.",
      "Set up ESLint, Prettier (with Tailwind class sorting), and a GitHub Actions workflow that deploys to production on every push to `main`.",
      "Documented the architecture, page builder, SEO, i18n, and deployment in a project README.",
    ],
    keyOutcomes: [
      "Delivered a production admin panel that lets the Création team manage the entire website in both Arabic and English.",
      "Turned the corporate website into a fully CMS-driven product: blogs, projects, solutions, clients, header, footer, and page layouts are all editable from one place.",
      "Established a consistent, scalable feature-based codebase of 500+ TypeScript files with strict typing and a reusable UI kit.",
      "Created a reusable validation layer (Zod helpers) that guarantees clean bilingual data before it ever reaches the API.",
      "Completed the frontend side of the headless stack together with the corporate website: a Next.js site and this React admin, both consuming the Laravel API (which was developed through vibe coding).",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        url: "https://www.w3schools.com/html/",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        url: "https://www.w3schools.com/css/",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/PD2LvB8/Typescript.webp",
        url: "https://www.w3schools.com/typescript/",
        alt: "TypeScript",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        url: "https://tailwindcss.com/",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/phvgSzx/react-router-dom.webp",
        url: "https://reactrouter.com/",
        alt: "react-router-dom",
      },
      {
        src: "https://i.ibb.co/wCDsh5n/react-hook-form.webp",
        url: "https://react-hook-form.com/",
        alt: "react-hook-form",
      },
      {
        src: "https://i.ibb.co/HfnF8CFt/i18n.webp",
        url: "https://react.i18next.com/",
        alt: "react-i18next",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
      {
        icon: AiIcon,
        title: "Vibe Coding on the Backend Only",
        description:
          "The dashboard was built from scratch without vibe coding. Only the Laravel API it talks to was developed through vibe coding (AI-assisted development).",
      },
      {
        icon: DashboardIcon,
        title: "Live Overview Dashboard",
        description:
          "Overview cards for projects, solutions, blogs, clients, pages, and social links, plus a recent-activity feed.",
      },
      {
        icon: WorkFlowIcon,
        title: "Section-Based Page Builder",
        description:
          "Compose website pages from 16 typed sections — banners, accordions, media blocks, achievements, reviews, CTAs, and more — reorder them, and edit each with its own validated form.",
      },
      {
        icon: LanguageIcon,
        title: "Bilingual, RTL-Aware UI",
        description:
          "English and Arabic interface with automatic language detection and full RTL support; every content model stores Arabic and English versions.",
      },
      {
        icon: SeoOptimizationIcon,
        title: "Built-In SEO Management",
        description:
          "A reusable SEO form for blogs, projects, solutions, and pages, with fallback to the parent record when fields are left blank.",
      },
      {
        icon: FormIcon,
        title: "Validated Forms",
        description:
          "React Hook Form and Zod schemas with language-aware rules (English-only, Arabic-only, optional fields) and translated error messages.",
      },
      {
        icon: SearchIcon,
        title: "Search, Sort & Pagination",
        description:
          "Server-side pagination, keyword search, and sorting synced to the URL for every content list, with clear empty states.",
      },
      {
        icon: ImageIcon,
        title: "Media Uploads",
        description:
          "Image and video uploads with type validation, live previews, and an upload-first flow that swaps files for URLs before submission.",
      },
      {
        icon: ShieldUserIcon,
        title: "Secure Admin Access",
        description:
          "Route guards, Bearer-token authentication, and automatic logout when the session expires — with dark/light theming and a responsive sidebar.",
      },
    ],
  },
];
