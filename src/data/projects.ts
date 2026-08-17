import {
  AnimationIcon,
  ShoppingCartIcon,
  FormIcon,
  DatabaseIcon,
  DocumentIcon,
  ListIcon,
  UsersIcon,
  CalendarIcon,
  DashboardIcon,
  ProductIcon,
  SearchIcon,
  ResponsiveIcon,
  LocationIcon,
  TimeIcon,
  CheckIcon,
  AnalyticsIcon,
  TextEditorIcon,
  SpeedIcon,
  CloseIcon,
  DarkModeIcon,
  CodeIcon,
  CustomizeIcon,
  AlertIcon,
} from "@/icons";
import type { IconProps } from "@/icons/types";
import type { ComponentType } from "react";

export interface ProjectToolkitItem {
  src: string;
  url?: string;
  alt: string;
}

export interface ProjectKeyFeature {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface ProjectAccount {
  title: string;
  email: string;
  password: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  category: string;
  type?: string;
  stack?: string[];
  languages?: string[];
  imgUrl: string;
  url?: string;
  githubLink?: string;
  video?: string;
  documentation?: string;
  certificate?: string;
  accounts?: ProjectAccount[];
  keyObjectives?: string[];
  challengesSolved?: string[];
  responsibilities?: string[];
  keyOutcomes?: string[];
  toolkit?: ProjectToolkitItem[];
  keyFeatures?: ProjectKeyFeature[];
  imageColleges?: ProjectImage[];
}

export const personalProjects: ProjectData[] = [
  // REACT PROJECTS
  {
    id: 201,
    type: "React",
    video:
      "https://drive.google.com/file/d/1XKfzSKEvQWMN1oy2mxsOZXppuKHrVFe2/view?usp=sharing",
    documentation:
      "https://drive.google.com/file/d/1c7M50zK9NpQux9E7YgJXMUNvXMEgTPOn/view?usp=sharing",
    certificate:
      "https://i.ibb.co/ynrwLFs9/Graduation-Project-Certificate.webp",
    title: "LMS",
    description:
      "This is my graduation project, a Learning Management System tailored for the entire Ain Shams University. This website allows professors to upload lecture materials, conduct online quizzes for all students or a specific group, and manage the courses they teach. For students, the system provides access to course materials uploaded by professors, along with online quizzes and assignments with specific deadlines. Please note that, unfortunately, I don't have access to the source code as the university has retained it But I keep the demo, as well as its documentation.",
    category: "personal",
    stack: ["React.js", "JavaScript", "Material UI"],
    languages: ["English"],
    imgUrl: `https://i.ibb.co/SxC6C4D/LMS-Ain-shams.webp`,
    keyObjectives: [
      "Deliver a full Learning Management System for Ain Shams University covering lecture materials, online quizzes, and course management.",
      "Support two distinct user roles — professors and students — each with permissions matched to their needs.",
      "Let professors target quizzes at an entire class or a specific group, instead of only an all-or-nothing broadcast.",
      "Keep course materials and assignment deadlines organized and easy for students to find.",
    ],
    challengesSolved: [
      "Coordinated two very different user experiences — professor and student — inside a single codebase.",
      "Implemented quiz logic that could target either an entire cohort or a specific subgroup.",
      "Delivered a genuinely usable feature set within a graduation-project timeline, not just a demo.",
    ],
    responsibilities: [
      "Built the student-facing experience: browsing materials, taking quizzes, and tracking assignment deadlines.",
      "Built the professor-facing experience: uploading materials, creating quizzes, and managing courses and groups.",
      "Structured the app's routing and layout to support both roles cleanly.",
    ],
    keyOutcomes: [
      "Delivered a graduation project that served real course workflows for Ain Shams University.",
      "Practiced designing and building a multi-role application from the ground up.",
      "Earned a graduation project certificate for the completed system.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/D1CfTmc/material-ui.webp",
        alt: "material Ui",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyFeatures: [
      {
        icon: DocumentIcon,
        title: "Lecture Material Uploads",
        description:
          "Professors upload and organize materials per course for students to access anytime.",
      },
      {
        icon: ListIcon,
        title: "Targeted Online Quizzes",
        description:
          "Quizzes can go out to an entire class or a specific group, not just everyone at once.",
      },
      {
        icon: UsersIcon,
        title: "Role-Based Experience",
        description:
          "Separate, purpose-built views for professors and students.",
      },
      {
        icon: CalendarIcon,
        title: "Assignment Deadlines",
        description:
          "Students see clear deadlines for quizzes and assignments in one place.",
      },
    ],
  },
  {
    id: 202,
    type: "React",
    url: "https://storeify-website.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/STOREIFY",
    accounts: [
      {
        title: "user",
        email: "antoniousnasr3@gmail.com",
        password: "Totos@123",
      },
    ],
    title: "STOREIFY - User",
    description:
      "Our E-commerce platform delivers an engaging and seamless shopping experience with a beautifully designed home page featuring motion animations, a shop page showcasing all products with advanced filters for easy browsing, and a user-friendly order management system to view all past purchases. The `About Us` page provides a compelling overview of our mission, vision, and services, including fast shipping, secure payments, exceptional customer support, and hassle-free returns. Additionally, the contact page offers detailed information and an integrated email feature, enabling users to reach out directly for inquiries or feedback, ensuring a comprehensive and satisfying shopping journey.",
    category: "personal",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    languages: ["English"],
    imgUrl: "https://i.ibb.co/chwmP805/2-1-STOREIFY.webp",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/PD2LvB8/Typescript.webp",
        alt: "Typescript",
      },
      {
        src: "https://i.ibb.co/cdppNFx/Firebase.png",
        alt: "Firebase",
      },
      {
        src: "https://i.ibb.co/6cM3CLs/framer-motion.webp",
        alt: "framer-motion",
      },
      {
        src: "https://i.ibb.co/wCDsh5n/react-hook-form.webp",
        alt: "react-hook-form",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        alt: "vite",
      },
      {
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        alt: "Redux",
      },
    ],
    keyObjectives: [
      "Build a full-featured e-commerce storefront from scratch — home, shop, product details, cart, and order history — using React and TypeScript.",
      "Recreate a realistic multi-page shopping flow, including filtering, cart management, and order tracking, as a portfolio-grade case study.",
      "Practice production-style patterns: Redux for cart/order state, Firebase for data, and react-hook-form for validated forms.",
      "Ship a fully responsive, animated UI with Tailwind CSS and Framer Motion that feels close to a real commercial storefront.",
    ],
    challengesSolved: [
      "Modeled a realistic product catalog with advanced filters (category, price, search) without an existing backend to lean on.",
      "Kept cart and order state consistent across page reloads and multiple components using Redux.",
      "Balanced rich Framer Motion animation on the home page with keeping first paint and interaction fast.",
      "Rounded out the shop with a believable About Us and contact experience instead of stopping at the product grid.",
    ],
    responsibilities: [
      "Designed and built every page end-to-end: Home, Shop, Product Details, Cart, Order History, About Us, and Contact.",
      "Implemented global state management with Redux for cart contents and order history.",
      "Integrated Firebase for persisting product, cart, and order data.",
      "Built and validated the checkout and contact forms with react-hook-form.",
      "Handled all responsive styling and micro-interactions with Tailwind CSS and Framer Motion.",
    ],
    keyFeatures: [
      {
        icon: ShoppingCartIcon,
        title: "Full Shopping Flow",
        description:
          "Home, shop, product details, cart, and order history in one cohesive flow.",
      },
      {
        icon: AnimationIcon,
        title: "Motion-Led Home Page",
        description:
          "Framer Motion animations bring the landing experience to life without hurting performance.",
      },
      {
        icon: FormIcon,
        title: "Validated Forms",
        description:
          "Checkout and contact forms built with react-hook-form for reliable, user-friendly validation.",
      },
      {
        icon: DatabaseIcon,
        title: "Firebase-Backed Data",
        description:
          "Product, cart, and order data persisted through Firebase.",
      },
    ],
    keyOutcomes: [
      "Delivered a complete, believable e-commerce experience as a self-directed portfolio project.",
      "Strengthened hands-on skills with Redux, Firebase, and react-hook-form inside a real multi-page app.",
      "Produced a companion Admin Dashboard project (STOREIFY - Admin) that manages the same underlying data model.",
    ],
  },
  {
    id: 203,
    type: "React",
    category: "personal",
    title: "STOREIFY - Admin",
    imgUrl: "https://i.ibb.co/MkCp4fzz/STOREIFY-Admin-Dashboard.webp",
    url: "https://storeify-admin-dashboard.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/STOREIFY-Admin-Dashboard",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    languages: ["English"],
    description:
      "An E-commerce admin dashboard that allows admins to manage products, tracking orders, show all users , and monitor overall store performance. It provides powerful tools for editing product details, filtering data, and viewing real-time statistics.",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/PD2LvB8/Typescript.webp",
        alt: "Typescript",
      },
      {
        src: "https://i.ibb.co/cdppNFx/Firebase.png",
        alt: "Firebase",
      },
      {
        src: "https://i.ibb.co/6cM3CLs/framer-motion.webp",
        alt: "framer-motion",
      },
      {
        src: "https://i.ibb.co/wCDsh5n/react-hook-form.webp",
        alt: "react-hook-form",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        alt: "vite",
      },
      {
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        alt: "Redux",
      },
    ],
    keyObjectives: [
      "Give admins a single dashboard to manage products, orders, and users for the STOREIFY storefront.",
      "Surface real-time store statistics so admins can gauge performance at a glance.",
      "Keep product editing and data filtering fast enough for everyday admin use.",
      "Share the same underlying data model as the STOREIFY - User storefront for one consistent system.",
    ],
    challengesSolved: [
      "Designed data tables and filters that stay usable as the product and order lists grow.",
      "Kept dashboard statistics in sync with the same Redux/Firebase data used by the customer-facing app.",
      "Balanced an information-dense admin UI with the site's existing visual language.",
    ],
    responsibilities: [
      "Built product management screens: create, edit, and filter products.",
      "Built order tracking views so admins can follow order status end-to-end.",
      "Implemented a user list view for admins to review all registered users.",
      "Added real-time statistics widgets summarizing store performance.",
    ],
    keyFeatures: [
      {
        icon: DashboardIcon,
        title: "Real-Time Statistics",
        description:
          "At-a-glance widgets summarizing orders, products, and overall store performance.",
      },
      {
        icon: ProductIcon,
        title: "Product Management",
        description:
          "Create, edit, and filter products through a focused admin interface.",
      },
      {
        icon: ListIcon,
        title: "Order Tracking",
        description:
          "Follow orders from placement through fulfillment in one view.",
      },
      {
        icon: UsersIcon,
        title: "User Oversight",
        description:
          "Review all registered users from a single, searchable list.",
      },
    ],
    keyOutcomes: [
      "Delivered a companion admin dashboard that manages the same data model as the STOREIFY storefront.",
      "Practiced building data-dense, filterable admin UIs distinct from customer-facing design patterns.",
      "Rounded STOREIFY out into a two-sided system: storefront plus admin.",
    ],
  },
  {
    id: 204,
    type: "React",
    category: "personal",
    title: "TOTOS",
    imgUrl: "https://i.ibb.co/6RKF8h4M/TOTOS.webp",
    url: "https://totos-movies.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Totos",
    description:
      "Movie-related project. offering a wide array of trending, top-rated, upcoming, and popular movies. Users can explore an extensive collection of both movies and TV shows, with the ability to search by genre for a more tailored experience. Whether you're looking for the latest hits or planning ahead for upcoming releases, TOTOS provides everything you need in one intuitive and sleek platform. The powerful search functionality ensures users can easily find titles based on their preferences, making it simple to explore the world of entertainment.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    languages: ["English"],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        alt: "vite",
      },
    ],
    keyObjectives: [
      "Build a movie and TV discovery app covering trending, top-rated, upcoming, and popular titles.",
      "Let users search across both movies and TV shows by genre for a more tailored browsing experience.",
      "Keep browsing fast and visually polished across devices.",
    ],
    challengesSolved: [
      "Organized multiple content categories — trending, top-rated, upcoming, popular — into one coherent navigation.",
      "Implemented genre-based search that works consistently across both movies and TV shows.",
      "Kept the UI sleek and responsive while rendering large, image-heavy result grids.",
    ],
    responsibilities: [
      "Built the browsing experience for trending, top-rated, upcoming, and popular titles.",
      "Implemented genre-based search across movies and TV shows.",
      "Styled a sleek, intuitive interface with Tailwind CSS.",
    ],
    keyFeatures: [
      {
        icon: SearchIcon,
        title: "Genre-Based Search",
        description:
          "Find movies or TV shows quickly by searching within a specific genre.",
      },
      {
        icon: ListIcon,
        title: "Multiple Discovery Feeds",
        description:
          "Trending, top-rated, upcoming, and popular titles, each in a dedicated view.",
      },
      {
        icon: ResponsiveIcon,
        title: "Responsive, Media-Rich UI",
        description:
          "An image-heavy interface that stays fast and usable on any screen size.",
      },
    ],
    keyOutcomes: [
      "Delivered a polished, single-page movie and TV discovery experience.",
      "Practiced consuming and rendering a large external dataset efficiently in React.",
      "Strengthened UI skills for image-heavy, browse-first interfaces.",
    ],
  },
  {
    id: 205,
    type: "React",
    category: "personal",
    title: "EVOGYM",
    imgUrl: "https://i.ibb.co/vQ27c0R/EVOGYM.webp",
    url: "https://evo-gym-fitness-club.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/EvoGYM",
    stack: ["React", "Typescript", "Tailwind CSS"],
    languages: ["English"],
    description:
      "Gym-related project. offering a visual feast of high-quality animation and a design that adapts seamlessly to any device.designed with a user-friendly interface that ensures a delightful browsing experience.",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/PD2LvB8/Typescript.webp",
        alt: "Typescript",
      },
      {
        src: "https://i.ibb.co/6cM3CLs/framer-motion.webp",
        alt: "framer-motion",
      },
      {
        src: "https://i.ibb.co/wCDsh5n/react-hook-form.webp",
        alt: "react-hook-form",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        alt: "vite",
      },
    ],
    keyObjectives: [
      "Build a gym and fitness club marketing site with a strong visual identity.",
      "Use animation to create a visually rich landing experience without hurting usability.",
      "Ensure the design adapts seamlessly across desktop, tablet, and mobile.",
    ],
    challengesSolved: [
      "Balanced heavy animation with a smooth, responsive experience across devices.",
      "Kept the interface user-friendly despite a visually ambitious design.",
    ],
    responsibilities: [
      "Designed and built the full marketing site with React and Tailwind CSS.",
      "Implemented animations with Framer Motion and a react-hook-form–powered contact flow.",
      "Handled full responsive layout across breakpoints.",
    ],
    keyFeatures: [
      {
        icon: AnimationIcon,
        title: "High-Quality Animation",
        description:
          "Motion-led sections that give the site a premium, energetic feel.",
      },
      {
        icon: ResponsiveIcon,
        title: "Seamless Cross-Device Design",
        description: "A layout that adapts cleanly from mobile to desktop.",
      },
      {
        icon: FormIcon,
        title: "Guided User Interactions",
        description:
          "react-hook-form powers a friendly, validated contact experience.",
      },
    ],
    keyOutcomes: [
      "Delivered a visually striking gym website that balances animation with usability.",
      "Practiced pairing Framer Motion animation with a fully responsive Tailwind layout.",
    ],
  },
  {
    id: 206,
    type: "React",
    category: "personal",
    title: "TRAVEL THE WORLD",
    imgUrl: "https://i.ibb.co/zP5JQ00/traveltheworld.webp",
    url: "https://travel-the-world-eta.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/travel-the-world",
    accounts: [
      {
        title: "user",
        email: "antoniousnasr3@gmail.com",
        password: "totos",
      },
    ],
    description:
      "Travel the World helps you log every country and city you visit. Choose locations from a map or use your current location, then add personal notes for future reference. You can easily access Wikipedia information about any saved city. The app is divided into two main tabs: 'Cities,' where you track all the cities you've visited, and 'Countries,' where you view the countries you've been to, complete with their national flags.",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        alt: "vite",
      },
    ],
    keyObjectives: [
      "Let users log every country and city they've visited, choosing locations from a map or their current location.",
      "Support personal notes per visited place for future reference.",
      "Provide quick access to Wikipedia info for any saved city.",
      "Split the experience cleanly into 'Cities' and 'Countries' views.",
    ],
    challengesSolved: [
      "Integrated map-based and geolocation-based location selection into one consistent flow.",
      "Connected saved cities to live Wikipedia data lookups.",
      "Modeled the relationship between visited cities and their parent countries, including flags.",
    ],
    responsibilities: [
      "Built the map-based and current-location city-logging flow.",
      "Implemented the Cities and Countries tabs with their respective views.",
      "Integrated Wikipedia lookups and country flag data for saved locations.",
    ],
    keyFeatures: [
      {
        icon: LocationIcon,
        title: "Map & Geolocation Logging",
        description:
          "Add visited cities from a map click or your current location.",
      },
      {
        icon: DocumentIcon,
        title: "Personal Notes",
        description:
          "Attach personal notes to any visited city for future reference.",
      },
      {
        icon: SearchIcon,
        title: "Wikipedia Lookups",
        description: "Jump straight to Wikipedia info for any saved city.",
      },
      {
        icon: ListIcon,
        title: "Cities & Countries Views",
        description:
          "Track progress from two angles: individual cities and the countries they belong to.",
      },
    ],
    keyOutcomes: [
      "Delivered a working travel-log app combining maps, geolocation, and external data lookups.",
      "Practiced integrating multiple browser and third-party (Wikipedia) data sources into a React app.",
    ],
  },
  {
    id: 207,
    type: "React",
    category: "personal",
    title: "FAST-PIZZA",
    imgUrl: "https://i.ibb.co/s1PhdHw/pizza-Delivery-App.webp",
    url: "https://delivery-pizza-app-five.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/pizza-app",
    description:
      "My pizza app is a simple React app where users can enter their name, choose items from the menu, and place an order. They can fill out a form with their name, phone, and location (via geolocation or manual entry), set order priority, and see the total cost. In the final step, users can adjust the priority before confirming their order.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    languages: ["English"],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
      {
        src: "https://i.ibb.co/phvgSzx/react-router-dom.webp",
        alt: "react-router-dom",
      },
      {
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        alt: "Redux",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        alt: "Tailwind CSS",
      },
    ],
    keyObjectives: [
      "Let users build an order from a menu, provide delivery details, and confirm it end-to-end.",
      "Support both geolocation and manual address entry for delivery location.",
      "Let users set and adjust order priority before confirming.",
    ],
    challengesSolved: [
      "Combined geolocation with a manual-entry fallback for delivery location.",
      "Kept order total and priority state consistent across a multi-step ordering flow using Redux.",
    ],
    responsibilities: [
      "Built the menu, ordering form, and order-confirmation flow.",
      "Implemented geolocation-based and manual address entry.",
      "Managed order state (items, priority, total) with Redux and routed the flow with react-router-dom.",
    ],
    keyFeatures: [
      {
        icon: ShoppingCartIcon,
        title: "Menu-to-Order Flow",
        description:
          "Pick items, fill in delivery details, and confirm — a complete ordering journey.",
      },
      {
        icon: LocationIcon,
        title: "Geolocation or Manual Address",
        description:
          "Set delivery location automatically or type it in by hand.",
      },
      {
        icon: ListIcon,
        title: "Adjustable Priority",
        description:
          "Review and change order priority right up until confirmation.",
      },
    ],
    keyOutcomes: [
      "Delivered a complete, multi-step ordering flow modeled on real food-delivery apps.",
      "Practiced combining Redux-driven multi-step state with react-router-dom navigation.",
    ],
  },
  {
    id: 208,
    type: "React",
    category: "personal",
    title: "THE REACT QUIZ",
    imgUrl: "https://i.ibb.co/x369M42/The-React-Quiz.webp",
    url: "https://react-quiz-questions-answers.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/react-quiz",
    description:
      "Test your React knowledge with this interactive quiz app! Challenge yourself with 15 carefully curated React questions, each with a 30-second timer, giving you a total of 7.5 minutes to complete the quiz. Once time's up or all questions are answered, you'll receive your final score instantly. Are you ready to prove your React skills?",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Build a timed, scored React quiz covering 15 curated React questions.",
      "Give each question a 30-second timer within a 7.5-minute overall session.",
      "Show an instant final score once the quiz ends.",
    ],
    challengesSolved: [
      "Kept a countdown timer accurate and in sync with quiz progression across 15 questions.",
      "Handled both 'time runs out' and 'all questions answered' as valid quiz-ending states.",
    ],
    responsibilities: [
      "Built the quiz engine: question flow, per-question timer, and scoring.",
      "Authored the 15 React knowledge questions and answers.",
      "Implemented the results screen showing the final score.",
    ],
    keyFeatures: [
      {
        icon: TimeIcon,
        title: "Per-Question Timer",
        description:
          "A 30-second countdown per question keeps the pace challenging.",
      },
      {
        icon: CheckIcon,
        title: "Instant Scoring",
        description: "See your final score immediately once the quiz ends.",
      },
      {
        icon: ListIcon,
        title: "15 Curated Questions",
        description:
          "A focused set of React questions to genuinely test your knowledge.",
      },
    ],
    keyOutcomes: [
      "Delivered a complete, replayable quiz experience with real-time timing logic.",
      "Practiced building timer-driven state machines in React.",
    ],
  },
  {
    id: 209,
    type: "React",
    category: "personal",
    title: "FRIENDS BILL",
    imgUrl: "https://i.ibb.co/z6vsTYF/friends-bill.webp",
    url: "https://friends-bill-puce.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Friends",
    description:
      "Personal finance management tool that helps track money exchanges between you and your friends. You can add as many friends as you like, and for each one, you can easily record whether they owe you money, you owe them, or if everything is settled. Using a simple form, you can enter the total amount and specify who cashed it, allowing the system to calculate the balance between you and each friend. This way, you always have a clear overview of your financial interactions with your friends.",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Track money owed between the user and any number of friends.",
      "Let users record who paid, how much, and keep each friend's running balance up to date.",
      "Give a clear, at-a-glance overview of every financial relationship.",
    ],
    challengesSolved: [
      "Modeled per-friend balances that update correctly regardless of who paid.",
      "Kept the add/settle flow simple for a task that's inherently a bit fiddly.",
    ],
    responsibilities: [
      "Built the friend list, balance tracking, and the add-expense form.",
      "Implemented the balance calculation logic per friend.",
    ],
    keyFeatures: [
      {
        icon: UsersIcon,
        title: "Per-Friend Balances",
        description:
          "Add as many friends as you like, each with their own running balance.",
      },
      {
        icon: FormIcon,
        title: "Simple Expense Form",
        description:
          "Enter an amount and who paid — the balance updates automatically.",
      },
      {
        icon: CheckIcon,
        title: "Clear Settle-Up Overview",
        description: "See at a glance who owes who, and how much.",
      },
    ],
    keyOutcomes: [
      "Delivered a practical personal-finance tool for tracking shared expenses.",
      "Practiced modeling stateful relationships driven by simple form input.",
    ],
  },
  {
    id: 210,
    type: "React",
    category: "personal",
    title: "PACKING LUGGAGE",
    imgUrl: "https://i.ibb.co/sQFtw7B/Luggage.webp",
    url: "https://the-luggage.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Travel-luggage",
    description:
      "versatile packing management application that helps you organize your travel needs efficiently. With Luggage, you can add as many items as you need for your trips, specifying the quantity for each. The app allows you to mark items as packed, remove items, and sort your list by order, description, or packed status. You can also clear the entire list with a single action. Additionally, Luggage provides a handy percentage indicator showing how much of your packing is complete, helping you stay on top of your travel preparations.",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Help users manage a packing list with quantities per item.",
      "Support marking items packed, removing items, and sorting the list.",
      "Show a live percentage indicator of packing completion.",
    ],
    challengesSolved: [
      "Kept sorting (by order, description, or packed status) consistent with live packed-state updates.",
      "Calculated an accurate completion percentage as items are added, packed, or removed.",
    ],
    responsibilities: [
      "Built the item list with add, pack, and remove actions.",
      "Implemented sorting by order, description, and packed status.",
      "Added the packing-completion percentage indicator and clear-list action.",
    ],
    keyFeatures: [
      {
        icon: ListIcon,
        title: "Flexible Sorting",
        description:
          "Sort your packing list by order, description, or packed status.",
      },
      {
        icon: CheckIcon,
        title: "Packed-Status Tracking",
        description: "Mark items packed and see your list update instantly.",
      },
      {
        icon: AnalyticsIcon,
        title: "Completion Percentage",
        description:
          "A live percentage shows how much of your packing is done.",
      },
    ],
    keyOutcomes: [
      "Delivered a genuinely useful pre-trip packing checklist tool.",
      "Practiced derived-state calculations driven by list mutations.",
    ],
  },
  {
    id: 211,
    type: "React",
    category: "personal",
    title: "WORKOUT-TIMER",
    imgUrl: "https://i.ibb.co/jDqsnfy/workout-timer.webp",
    url: "https://wokout-timer.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/workout-timer",
    description:
      "Your ultimate fitness companion! Choose from a variety of workout types, set the number of sets, customize your break times, and define the duration of each set. Stay focused and track your progress effortlessly with this intuitive app",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Let users configure a custom workout: type, number of sets, break time, and set duration.",
      "Keep users focused during a workout with clear timing cues.",
    ],
    challengesSolved: [
      "Built an accurate interval timer that switches cleanly between work and break periods.",
      "Kept the configuration flow simple despite several adjustable parameters.",
    ],
    responsibilities: [
      "Built the workout configuration screen (type, sets, break time, duration).",
      "Implemented the interval timer driving the active workout session.",
    ],
    keyFeatures: [
      {
        icon: TimeIcon,
        title: "Configurable Intervals",
        description:
          "Set sets, break time, and duration exactly how you want your workout.",
      },
      {
        icon: ListIcon,
        title: "Multiple Workout Types",
        description:
          "Choose from a variety of workout types to match your routine.",
      },
      {
        icon: CheckIcon,
        title: "Progress Tracking",
        description:
          "Stay focused with clear cues as you move through each set.",
      },
    ],
    keyOutcomes: [
      "Delivered a practical, everyday-usable workout timer.",
      "Practiced building accurate interval and countdown timer logic in React.",
    ],
  },
  {
    id: 212,
    type: "React",
    category: "personal",
    title: "Notes",
    imgUrl: "https://i.ibb.co/Nnf7pQX2/Notes.webp",
    url: "https://notes-phi-nine-91.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Notes",
    description:
      "Notes App is a simple and efficient note-taking application. It features a rich-text editor powered by React Quill, allowing users to create, edit, and manage their notes effortlessly. Users can add formatted content, save it to a list, and update existing notes whenever needed. The app ensures a smooth and dynamic experience, making note-taking more interactive and user-friendly.",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/PD2LvB8/Typescript.webp",
        alt: "Typescript",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/3mK0SsjP/zustand.webp",
        alt: "Zustand",
      },
    ],
    keyObjectives: [
      "Build a rich-text note-taking app powered by React Quill.",
      "Let users create, edit, format, and update notes smoothly.",
    ],
    challengesSolved: [
      "Integrated a third-party rich-text editor (React Quill) cleanly into a React + Zustand app.",
      "Kept note state (create, update, list) simple and predictable with Zustand.",
    ],
    responsibilities: [
      "Integrated React Quill for rich-text editing.",
      "Built the note list, creation, and update flow.",
      "Managed note state with Zustand.",
    ],
    keyFeatures: [
      {
        icon: TextEditorIcon,
        title: "Rich-Text Editing",
        description:
          "Format notes with a full rich-text editor powered by React Quill.",
      },
      {
        icon: DocumentIcon,
        title: "Persistent Note List",
        description: "Save notes to a list and update them anytime.",
      },
      {
        icon: SpeedIcon,
        title: "Lightweight State",
        description:
          "Zustand keeps note state simple and fast without extra boilerplate.",
      },
    ],
    keyOutcomes: [
      "Delivered a smooth, interactive note-taking experience.",
      "Practiced integrating a rich-text editor alongside lightweight (Zustand) state management.",
    ],
  },
  {
    id: 213,
    type: "React",
    category: "personal",
    title: "Todo-List",
    imgUrl: "https://i.ibb.co/w2rt3Ch/Todo-list.webp",
    url: "https://lists-site.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/todo-list",
    description:
      "Todo List is a simple and interactive task management app. It allows users to add tasks to their list, mark them as done, and delete them when no longer needed. With a clean and user-friendly interface, the app helps users stay organized and keep track of their daily tasks efficiently.",
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/3mK0SsjP/zustand.webp",
        alt: "Zustand",
      },
    ],
    keyObjectives: [
      "Build a simple, clean task manager: add, complete, and delete tasks.",
      "Keep the interface uncluttered and easy to use daily.",
    ],
    challengesSolved: [
      "Kept task state (add, toggle, delete) simple and predictable with Zustand instead of over-engineering it.",
    ],
    responsibilities: [
      "Built the task list with add, complete, and delete actions.",
      "Managed task state with Zustand and styled the UI with Tailwind CSS.",
    ],
    keyFeatures: [
      {
        icon: CheckIcon,
        title: "Add & Complete Tasks",
        description: "Add tasks and mark them done with a single click.",
      },
      {
        icon: CloseIcon,
        title: "Quick Delete",
        description: "Remove tasks you no longer need in one action.",
      },
      {
        icon: SpeedIcon,
        title: "Minimal, Fast State",
        description:
          "Zustand keeps the app snappy with a small state footprint.",
      },
    ],
    keyOutcomes: [
      "Delivered a clean, dependable daily task manager.",
      "Practiced keeping a small app's state intentionally simple.",
    ],
  },
  // HTML CSS PROJECTS
  {
    id: 214,
    type: "Html & CSS & JS",
    category: "personal",
    title: "Kasper",
    imgUrl: "https://i.ibb.co/7zqq3Fs/dark-mode-project.webp",
    url: "https://kasper-template-website.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/KasperTemplateWebsite",
    description:
      "Website powered by Kasper Templates, featuring a sleek and dynamic design. Complemented by a user-friendly interface. Engage with smooth animations that elevate user interaction, enhancing your browsing experience across all devices. Navigate seamlessly through our diverse sections, including Home, Services, Portfolio, About, Pricing, and Contact, all enhanced with a stylish dark mode option for a personalized browsing experience.",
    toolkit: [
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Recreate the Kasper template as a sleek, dynamic multi-section site.",
      "Cover Home, Services, Portfolio, About, Pricing, and Contact in one cohesive site.",
      "Add a dark mode option for a personalized browsing experience.",
    ],
    challengesSolved: [
      "Coordinated consistent styling and smooth animation across six distinct sections.",
      "Implemented a dark mode toggle that stays visually consistent site-wide.",
    ],
    responsibilities: [
      "Built all six sections: Home, Services, Portfolio, About, Pricing, and Contact.",
      "Implemented smooth animations and the dark mode toggle in vanilla JavaScript.",
    ],
    keyFeatures: [
      {
        icon: DarkModeIcon,
        title: "Dark Mode Toggle",
        description:
          "A stylish dark mode option for a personalized browsing experience.",
      },
      {
        icon: AnimationIcon,
        title: "Smooth Animations",
        description:
          "Animations that elevate interaction across every section.",
      },
      {
        icon: ResponsiveIcon,
        title: "Fully Responsive Layout",
        description: "A consistent experience across all devices.",
      },
    ],
    keyOutcomes: [
      "Delivered a polished, multi-section marketing site with dark mode support.",
      "Practiced structuring a larger vanilla HTML/CSS/JS site into clear, reusable sections.",
    ],
  },
  {
    id: 215,
    type: "Html & CSS & JS",
    category: "personal",
    title: "Leon",
    imgUrl: "https://i.ibb.co/py9SBWx/html-css-first-project.webp",
    url: "https://leon-three-tau.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Leon",
    description:
      "The first practical project in which I challenged my capabilities to what extent I developed myself at that stage.",
    toolkit: [
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
    ],
    keyObjectives: [
      "Build a first practical HTML/CSS project to establish core layout and styling fundamentals.",
    ],
    challengesSolved: [
      "Worked through early-stage layout and styling problems as a foundational learning exercise.",
    ],
    responsibilities: ["Built the full page layout and styling from scratch."],
    keyFeatures: [
      {
        icon: CodeIcon,
        title: "Foundational HTML/CSS",
        description:
          "A hands-on exercise in core layout and styling fundamentals.",
      },
    ],
    keyOutcomes: [
      "Marked an early milestone in developing core HTML/CSS skills.",
      "Established habits that carried into every later project.",
    ],
  },
  {
    id: 216,
    type: "Html & CSS & JS",
    category: "personal",
    title: "Cartoon",
    imgUrl: "https://i.ibb.co/yRV8PsK/cartoon-project.webp",
    url: "https://cartoon-smoky-nine.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Cartoon",
    description:
      "A website takes you on a journey through the realm of cartoons, offering a visual feast of high-quality animation and a design that adapts seamlessly to any device.designed with a user-friendly interface that ensures a delightful browsing experience.",
    toolkit: [
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Build a cartoon-themed showcase site with high-quality animation.",
      "Ensure the design adapts seamlessly to any device.",
    ],
    challengesSolved: [
      "Balanced animation-heavy visuals with a consistently user-friendly interface.",
    ],
    responsibilities: [
      "Built the full page with HTML, CSS, and JavaScript animations.",
    ],
    keyFeatures: [
      {
        icon: AnimationIcon,
        title: "High-Quality Animation",
        description: "A visual feast of animation throughout the page.",
      },
      {
        icon: ResponsiveIcon,
        title: "Adaptive Design",
        description: "A layout that adapts seamlessly to any device.",
      },
    ],
    keyOutcomes: [
      "Delivered a visually engaging themed showcase site.",
      "Practiced pairing vanilla JS animation with responsive CSS.",
    ],
  },
  {
    id: 217,
    type: "Html & CSS & JS",
    category: "personal",
    title: "Dashboard",
    imgUrl: "https://i.ibb.co/TcQMCSJ/dashboard.webp",
    url: "https://dashboard-six-sigma-64.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Dashboard",
    description:
      "My first HTML and CSS project is a sleek and responsive dark-mode dashboard. It features an intuitive layout with cards, offering easy navigation through various sections such as Dashboard, Settings, Profile, Projects, Courses, Friends, Files, and Plans. The design is fully responsive, adapting smoothly to different screen sizes, and includes fluid animations that enhance the user experience throughout the project.",
    toolkit: [
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
    ],
    keyObjectives: [
      "Build a sleek, responsive dark-mode admin dashboard layout.",
      "Cover multiple sections — Dashboard, Settings, Profile, Projects, Courses, Friends, Files, Plans — with easy navigation.",
    ],
    challengesSolved: [
      "Organized eight distinct sections into one coherent, navigable dashboard layout.",
      "Kept the dark-mode design fully responsive across screen sizes.",
    ],
    responsibilities: [
      "Built the dashboard layout and navigation across all eight sections.",
      "Implemented the dark-mode styling and responsive behavior.",
    ],
    keyFeatures: [
      {
        icon: DashboardIcon,
        title: "Multi-Section Dashboard",
        description:
          "Dashboard, Settings, Profile, Projects, Courses, Friends, Files, and Plans in one layout.",
      },
      {
        icon: ResponsiveIcon,
        title: "Fully Responsive",
        description: "Adapts smoothly across different screen sizes.",
      },
      {
        icon: AnimationIcon,
        title: "Fluid Animations",
        description:
          "Animations that enhance the experience throughout the dashboard.",
      },
    ],
    keyOutcomes: [
      "Delivered a polished first dashboard-style layout project.",
      "Practiced structuring a card-based, multi-section admin UI in plain HTML/CSS.",
    ],
  },
  // {
  //   type: "Html & CSS & JS",
  //   title: "Bondi",
  //   imgUrl: "https://i.ibb.co/z6jF1nR/bootstrap-project-one.webp",
  //   url: "https://bondi-bootstrap-website.netlify.app/",
  //   githubLink: "https://github.com/ANT0NI0US/Bondi",
  //   toolkit: [
  //     {
  //       src: "https://i.ibb.co/yXxpkMk/CSS.webp",
  //       alt: "CSS3",
  //     },
  //     {
  //       src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
  //       alt: "HTML5",
  //     },
  //     {
  //       src: "https://i.ibb.co/rwgrMLM/Bootstrap.webp",
  //       alt: "Bootstrap",
  //     },
  //   ],
  // },
  // {
  //   type: "Html & CSS & JS",
  //   title: "EliteCrop",
  //   imgUrl: "https://i.ibb.co/02thynj/bootstrap-project-2.webp",
  //   url: "https://bootstrap-project-twoo.netlify.app/",
  //   toolkit: [
  //     {
  //       src: "https://i.ibb.co/yXxpkMk/CSS.webp",
  //       alt: "CSS3",
  //     },
  //     {
  //       src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
  //       alt: "HTML5",
  //     },
  //     {
  //       src: "https://i.ibb.co/rwgrMLM/Bootstrap.webp",
  //       alt: "Bootstrap",
  //     },
  //   ],
  // },

  // GAMES
  {
    id: 218,
    type: "Games",
    category: "personal",
    title: "The Memory",
    imgUrl: "https://i.ibb.co/xGn5qyc/mind-game.webp",
    url: "https://memory-game-two-pink.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Memory-Game",
    description:
      "A captivating game that puts your memory skills to the test! Tailor your experience by choosing the number of blocks and time limit, then immerse yourself in the challenge. Memorize the block positions, match pairs within the set time, and earn a congratulatory message upon success. If the clock runs out or mistakes are made receive a friendly 'Try Again' prompt ensuring you have another shot at triumph. Personalize your gaming journey by submitting your name and track your progress with a persistent scoreboard counting the number of wrong attempts across sessions.",
    toolkit: [
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Build a configurable memory-matching game with adjustable block count and time limit.",
      "Track player progress with a persistent scoreboard across sessions.",
    ],
    challengesSolved: [
      "Implemented match-checking and win/lose state (time-out vs. mistakes) cleanly in vanilla JS.",
      "Persisted scores (wrong attempts) across sessions without a backend.",
    ],
    responsibilities: [
      "Built the configurable game setup (blocks, time limit) and the matching game logic.",
      "Implemented the persistent scoreboard and name-submission flow.",
    ],
    keyFeatures: [
      {
        icon: CustomizeIcon,
        title: "Configurable Difficulty",
        description:
          "Choose the number of blocks and time limit before you start.",
      },
      {
        icon: CheckIcon,
        title: "Win/Retry Feedback",
        description:
          "Clear congratulatory or 'Try Again' messaging based on the outcome.",
      },
      {
        icon: ListIcon,
        title: "Persistent Scoreboard",
        description:
          "Submit your name and track wrong attempts across sessions.",
      },
    ],
    keyOutcomes: [
      "Delivered a fully playable, replayable memory game with persistent scoring.",
      "Practiced state-machine thinking — setup, play, win/lose — in vanilla JavaScript.",
    ],
  },
  {
    id: 219,
    type: "Games",
    category: "personal",
    title: "Hangman",
    imgUrl: "https://i.ibb.co/vdmCMbD/hangman-game.webp",
    url: "https://hangman-game-liard-nu.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Hangman-Game",
    description:
      "A thrilling word-guessing game that keeps you on the edge of your seat with random words from diverse categories like people, countries, movies, and programming. Challenge your vocabulary and deduction skills as you try to guess the word before the hangman is fully drawn. With each incorrect guess, the suspense intensifies.",
    toolkit: [
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Build a word-guessing game with random words across multiple categories.",
    ],
    challengesSolved: [
      "Managed random word selection across categories alongside guess tracking and game-over state.",
    ],
    responsibilities: [
      "Built the word-selection logic, guess tracking, and hangman drawing progression.",
    ],
    keyFeatures: [
      {
        icon: ListIcon,
        title: "Multiple Word Categories",
        description:
          "Random words from people, countries, movies, and programming.",
      },
      {
        icon: AlertIcon,
        title: "Escalating Suspense",
        description: "Each incorrect guess visibly raises the stakes.",
      },
    ],
    keyOutcomes: [
      "Delivered a replayable word-guessing game with varied content categories.",
      "Practiced core vanilla-JS game-state logic: guesses, categories, win/lose.",
    ],
  },
  {
    id: 220,
    type: "Games",
    category: "personal",
    title: "Quiz",
    imgUrl: "https://i.ibb.co/KsqhmPm/Quiz.webp",
    url: "https://quiz-game-lilac-eight.vercel.app/",
    githubLink: "https://github.com/ANT0NI0US/Quiz",
    description:
      "A dynamic website that puts you in the driver's seat of your quiz experience! Whether you're exploring HTML or CSS, each question is at your fingertips, ready to challenge your knowledge. Once you select a question, the clock starts ticking, giving you a tight 10 seconds to provide your answer. Finish the quiz and receive immediate feedback. If you achieve a perfect score, the message will cheerfully declare 'Perfect!' If you fall between 5 and the maximum score of 10, you'll be commended with a positive 'Good' message. However, if your score dips below 5",
    toolkit: [
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        alt: "Javascript",
      },
    ],
    keyObjectives: [
      "Build a timed HTML/CSS quiz with instant, tiered feedback on performance.",
    ],
    challengesSolved: [
      "Implemented a per-question 10-second timer alongside score tracking.",
      "Built tiered feedback messaging based on the final score.",
    ],
    responsibilities: [
      "Built the question flow, per-question timer, and scoring logic.",
      "Implemented tiered feedback messaging (Perfect / Good / try again).",
    ],
    keyFeatures: [
      {
        icon: TimeIcon,
        title: "10-Second Timer",
        description: "Each question is answered against the clock.",
      },
      {
        icon: CheckIcon,
        title: "Tiered Feedback",
        description:
          "Get 'Perfect', 'Good', or encouragement to try again based on your score.",
      },
    ],
    keyOutcomes: [
      "Delivered a fast-paced, replayable HTML/CSS knowledge quiz.",
      "Practiced timer-driven scoring logic in vanilla JavaScript.",
    ],
  },
];
