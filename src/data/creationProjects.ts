import {
  AdminControlIcon,
  AiIcon,
  AnimationIcon,
  CodeReviewIcon,
  ComponentsIcon,
  DarkModeIcon,
  DoubleArrowIcon,
  LanguageIcon,
  NotificationIcon,
  OutlineViewIcon,
  ResponsiveIcon,
  SeoOptimizationIcon,
  SpeedIcon,
  StickerIcon,
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
      "The official website of Création, a digital marketing and branding agency based in Riyadh. Built from scratch with a strong focus on SEO, performance, bilingual experience (Arabic & English), and a modern dark/light UI that reflects the agency's premium identity.",
    category: "creation",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    languages: ["Arabic", "English"],
    imgUrl: "https://i.ibb.co/0jtydkPd/Creation.webp",
    keyObjectives: [
      "Rebuild the company's online presence from the ground up with a fresh, modern visual identity.",
      "Achieve top-tier SEO performance and page load speed using Next.js App Router with server-side rendering to enhance search engine visibility and ranking.",
      "Deliver a fully bilingual experience (Arabic & English) with automatic RTL/LTR layout switching driven by Next.js middleware.",
      "Implement a polished dark/light mode system that respects user preference and aligns with the brand's visual language.",
      "Showcase all six core services — Branding, Digital Marketing, Social Media, Digital Campaigns, Web Design, and Production — through dedicated detail pages.",
      "Present the agency's portfolio of 17+ projects with a filterable grid and individual project detail pages.",
    ],
    challengesSolved: [
      "Designed a scalable i18n architecture using Next.js dynamic `[locale]` routing and a custom middleware-based locale negotiation system — without relying on any external i18n library.",
      "Built a type-safe dictionary system with fully typed translation keys (`dictionaries/types.ts`) to prevent runtime errors across Arabic and English content.",
      "Handled complex RTL/LTR layout shifts cleanly using Tailwind CSS directional utilities, ensuring pixel-perfect layouts in both languages.",
      "Managed dark/light theming globally with `next-themes` while preserving SSR hydration consistency to avoid flash-of-incorrect-theme (FOIT).",
      "Structured a large multi-page codebase into clean separation of concerns: `app/`, `components/pages/`, `components/common/`, `components/ui/`, `components/layout/`, `dictionaries/`, `hooks/`, `constants/`, and `lib/`.",
      "Integrated a working contact form using `react-hook-form`, `zod` schema validation, `react-select` for country selection, and `emailjs-com` for serverless email delivery — all styled to match the dark/light theme.",
      "Implemented smooth, performant animations across sections (hero banner, architecture section, project cards, service details) using Framer Motion without impacting Core Web Vitals.",
    ],
    responsibilities: [
      "Architected and built the entire website from scratch including all pages: Home, About, Services, Service Details (×6), Projects, Project Details (×17), Contact, Career, and FAQ.",
      "Designed and implemented the full i18n system using Next.js middleware for locale detection, `[locale]` dynamic routing, and a typed JSON dictionary approach for AR/EN content.",
      "Built all reusable UI components: `Header`, `MainTitle`, `AppButton`, `Logo`, `CreationLogo`, `CountUp`, `TextWithMotion`, `BaseSlider`, `LetsTalkLink`, and `Accordion`.",
      "Developed all layout components: responsive `Navbar` with desktop links, mobile drawer menu, language switcher, and theme toggle; and a multi-column `Footer` with project menus, trusted partner badges (Clutch, Sortlist), and copyright.",
      "Created all page-specific component sections: Hero Banner with animated images, Architecture cultural section, About stats with count-up animation, Case Study section with service-linked project cards, Portfolio slider, Testimonial slider, and Blogs preview.",
      "Built the Services section with six core service cards and dedicated service detail pages, each containing a deep-dive layout with features list, imagery carousel, and a CTA block.",
      "Implemented the Projects page with tab-based filtering (All / Branding / Website / Production / App) and 17 project cards with hover cursor tooltip effect.",
      "Developed individual Project Detail pages with a structured layout: main image, about section, full-width photo, results counters, image gallery (single & two-grid), and previous/next project navigation.",
      "Integrated `Swiper` for all sliders (Portfolio, Testimonials, Service images) with a reusable `BaseSlider` abstraction.",
      "Connected the contact form end-to-end with field-level validation via `zod`, async country list fetching, and email delivery via `emailjs-com`.",
    ],
    keyOutcomes: [
      "Delivered a fully production-ready, bilingual website that accurately reflects Création's premium brand identity.",
      "Achieved clean Lighthouse scores through Next.js SSR/SSG, optimized `next/image` usage, and minimal client-side JS.",
      "Built a maintainable and scalable codebase with strict TypeScript types across all components, data files, and translation dictionaries.",
      "Created a seamless language-switching experience — Arabic visitors land on RTL Arabic by default, English visitors on LTR English — with no layout breakage.",
      "Established a robust component library that can be reused across future pages or sister projects inside the agency.",
      "Delivered a complete service showcase covering all six business verticals with deep-linking from the home case-study section directly to service detail pages.",
      "Produced a filterable portfolio that surfaces 17+ real client projects across Branding, Web, Production, and App categories.",
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
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
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
    ],
  },
];
