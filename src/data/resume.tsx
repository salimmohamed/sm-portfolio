import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  image?: string;
  video?: string;
}

interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  mlh?: string;
  links?: readonly {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}

export const DATA = {
  name: "Salim Mohamed",
  initials: "SM",
  url: "https://salimmohamed.vercel.app/",
  location: "Portland, OR",
  locationLink: "https://www.google.com/maps/place/Portland",
  description:
    "Computer Science Senior at Oregon State University. Focused on Machine Learning & AI with interests in software development and cybersecurity.",
  summary:
    "I'm a Computer Science student with hands-on experience in software engineering, database management, and cybersecurity. Skilled in Python, SQL, and penetration testing, with a strong grasp of data structures, algorithms, and scalable software development. I'm passionate about developing secure, efficient software solutions and continuously expanding my technical expertise.",
  avatarUrl: "/me.jpg",
  skills: [
    "C",
    "C++",
    "Python",
    "Java",
    "Go",
    "C#",
    "JavaScript",
    "TypeScript",
    "SQL (Postgres)",
    "R",
    "HTML",
    "CSS",
    "Bash/PowerShell scripting",
    "SQL/NoSQL Databases",
    "PostgreSQL (ACID transactions)",
    "Supabase (Postgres)",
    "MongoDB",
    "SQLite",
    "Graph Databases (Neo4j, TigerGraph)",
    "Kafka",
    "Redis",
    "Elasticsearch",
    "Pandas/NumPy",
    "CSV/JSON processing",
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "Kubernetes",
    "AWS (EC2, S3, RDS, EKS)",
    "Google Cloud Platform (GKE, Pub/Sub)",
    "Vercel",
    "GitHub Actions",
    "GitLab CI",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Flask",
    "FastAPI",
    "CMake",
    "DirectX 11/12",
    "Win32 API",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "smohamed9927@gmail.com",
    tel: "+15035198153",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/salimmohamed",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salimamohamed/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/salim_a_mohamed",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Portland Parks & Recreation",
      badges: [],
      href: "https://www.portland.gov/parks",
      location: "Portland, OR",
      title: "Community Outreach High School Intern",
      logoUrl: "/portland.png",
      start: "June 2018",
      end: "September 2018",
      description:
        "Developed Python automation scripts for volunteer attendance tracking using CSV file processing, Excel/Google Sheets integration, and data transformation to generate summary reports and reduce manual data entry for 150+ volunteers. Implemented data analysis pipeline with Pandas for computing participation statistics across 50+ events, created data visualizations using Matplotlib for stakeholder presentations and program evaluation. Built lightweight Python automation tools integrating Google Sheets APIs with basic error handling, data validation, and workflow optimization to streamline volunteer management processes.",
    },
  ],
  education: [
    {
      school: "Oregon State University",
      href: "https://oregonstate.edu/",
      degree: "Bachelor of Science in Computer Science, Focus in Machine Learning & AI",
      logoUrl: "/osu.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Portland Community College",
      href: "https://www.pcc.edu/",
      degree: "Associate's Degree, Applied Science, Accounting (Early College Program)",
      logoUrl: "/pcc.jpg",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Real-Time Memory Analysis Engine",
      href: "https://github.com/salimmohamed/Memory-Research",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Architected C++ low-level system application using DirectX 11/12 overlay rendering, Win32 API hooks, and kernel-mode memory access for real-time process monitoring, player data extraction, and anti-cheat bypass with JSON configuration management and thread-safe operations. Implemented modular ESP (Extra Sensory Perception) system with configurable player visualization, 3D coordinate transformations, distance calculations, and real-time memory reading using DMA (Direct Memory Access) techniques and hardware, pointer arithmetic, and memory pattern scanning. Designed object-oriented configuration system with JSON serialization/deserialization, tabbed GUI interface using Windows Forms, automated settings persistence, and modular plugin architecture for enhanced extensibility and maintainability.",
      technologies: [
        "C++",
        "DirectX",
        "Win32 API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/salimmohamed/Memory-Research",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MemoryAnalysis.png",
      video: undefined,
    },

    {
      title: "Full-Stack Financial Trading Platform",
      href: "https://github.com/salimmohamed/foresight",
      dates: "July 2025 - Present",
      active: true,
      description:
        "Architected full-stack fintech application with React 18/TypeScript frontend, Flask REST API backend, and Finnhub financial data API integration for real-time stock quotes, company profiles, and market data with async/await patterns and error handling. Implemented automated alert system with price threshold monitoring, portfolio tracking, and market leader analysis using JSON file storage, CORS-enabled API endpoints, WebSocket connections, and event-driven architecture. Built responsive SPA dashboard with JWT authentication, alert management, and portfolio visualization using React hooks, TypeScript interfaces, Supabase database integration, and Vercel serverless deployment with CI/CD.",
      technologies: [
        "React",
        "TypeScript",
        "Flask",
        "Finnhub API",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://foresight-wealth.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/foresight-demo.jpg",
      video: undefined,
    },

    {
      title: "World of Warcraft Analysis System",
      href: "https://github.com/salimmohamed/Log-Analysis-Parser",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Engineered Python ETL pipeline using object-oriented design with abstract base classes, inheritance, and polymorphism to process 10,000+ unstructured game log lines into structured CSV reports with datetime parsing, regex pattern matching, and data validation. Implemented boss-specific analysis modules with player death tracking, attempt duration calculation, and non-player mistake identification using defaultdict data structures, collections framework, and statistical analysis algorithms. Built comprehensive statistics engine with player performance analysis, attempt formatting, and automated report generation with CSV output, data integrity verification, and performance optimization using list comprehensions and generator expressions.",
      technologies: [
        "Python",
        "CSV Processing",
        "Data Analytics",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/salimmohamed/Log-Analysis-Parser",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MemoryAnalysis.png",
      video: undefined,
    },

    {
      title: "Discord Auto-Responder Bot",
      href: "https://github.com/salimmohamed/Discord-Auto-Responder-Bot",
      dates: "Aug 2025 - Sept 2025",
      active: true,
      description:
        "Developed a sophisticated Discord self-bot with GUI interface for automated keyword detection and role mention responses. Features include channel filtering, rate limiting, and comprehensive configuration management for gaming community interactions.",
      technologies: [
        "Python",
        "Discord.py",
        "CustomTkinter",
        "GUI Development",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/salimmohamed/Discord-Auto-Responder-Bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Discord-Card.jpg",
      video: undefined,
    },

    {
      title: "Kraken Cybersecurity",
      href: "#",
      dates: "Jan 2018 - June 2024",
      active: true,
      description:
        "Led penetration testing team focused on social engineering and vulnerability assessment. Developed Python automation scripts for security testing and created detailed reports with actionable recommendations.",
      technologies: [
        "Python",
        "Penetration Testing",
        "Network Security",
        "Web Application Security",
      ],
      links: [],
      image: "/kraken.png",
      video: "",
    },

  ] satisfies Project[],
  
  hackathons: [ // Courses NOT hackathons
    {
      title: "Machine Learning & Data Mining",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Covered supervised and unsupervised learning, classification, regression, clustering, and data mining techniques.",
      image: "/cs434.png",
      links: [],
    },
    {
      title: "Introduction to Artificial Intelligence",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Introduction to AI concepts including search, knowledge representation, reasoning, and basic machine learning.",
      image: "/cs331.png",
      links: [],
    },
    {
      title: "Introduction to Applied Machine Learning",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Practical introduction to machine learning algorithms, model evaluation, and applications using real-world datasets.",
      image: "/cs433.png",
      links: [],
    },
    {
      title: "Programming Language Fundamentals",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Explored fundamental concepts of programming languages including syntax, semantics, parsing, and language paradigms.",
      image: "/cs321.png",
      links: [],
    },
    {
      title: "Operating Systems II",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Advanced topics in operating systems, including distributed systems, advanced concurrency, and security.",
      image: "/cs375.png",
      links: [],
    },
    {
      title: "Senior Software Engineering Project",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Capstone project course involving the design, implementation, and presentation of a substantial software system in a team setting.",
      image: "/cs461.png",
      links: [],
    },
    {
      title: "Analysis of Algorithms",
      dates: "Winter 2025",
      location: "Oregon State University",
      description:
        "Explored algorithm design and analysis, including divide-and-conquer, dynamic programming, greedy algorithms, and NP-completeness.",
      image: "/cs325.png",
      links: [],
    },
    {
      title: "Operating Systems I",
      dates: "Spring 2025",
      location: "Oregon State University",
      description:
        "Studied operating system concepts including processes, threads, memory management, file systems, and concurrency.",
      image: "/cs374.png",
      links: [],
    },
    {
      title: "Software Engineering II",
      dates: "Spring 2025",
      location: "Oregon State University",
      description:
        "Continued study of software engineering with emphasis on testing, maintenance, and project management. Completed a large-scale team project.",
      image: "/cs362.png",
      links: [],
    },
    {
      title: "Network Security",
      dates: "Spring 2025",
      location: "Oregon State University",
      description:
        "Explored principles of network security, cryptography, authentication, and secure communication protocols.",
      image: "/cs478.png",
      links: [],
    },
    {
      title: "Open Source Software",
      dates: "Spring 2025",
      location: "Oregon State University",
      description:
        "Studied open source development models, licensing, collaboration tools, and contributed to open source projects.",
      image: "/cs464.png",
      links: [],
    },
    {
      title: "Introduction to Computer Networks",
      dates: "Winter 2025",
      location: "Oregon State University",
      description:
        "Covered networking fundamentals, protocols, TCP/IP, routing, and network security concepts.",
      image: "/cs372.png",
      links: [],
    },
    {
      title: "Software Engineering I",
      dates: "Winter 2025",
      location: "Oregon State University",
      description:
        "Studied software development methodologies, requirements engineering, software design patterns, testing strategies, and project management techniques.",
      image: "/se.png",
    },
    {
      title: "Database Management Systems",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Studied relational database design, normalization, SQL, transaction management, and database security. Created and optimized database schemas for various applications.",
      image: "/dbms.png",
      links: [],
    },
    {
      title: "Introduction to Applied Data Science",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Introduced data science concepts, data wrangling, exploratory analysis, and basic machine learning using Python.",
      image: "/cs332.png",
      links: [],
    },
    {
      title: "Intro to Applied Data Science w/ Programming",
      dates: "Fall 2025",
      location: "Oregon State University",
      description:
        "Hands-on introduction to data science and programming, covering data analysis, visualization, and introductory Python programming.",
      image: "/cs332p.png",
      links: [],
    },
    {
      title: "Web Development",
      dates: "Fall 2024",
      location: "Oregon State University",
      description:
        "Learned frontend and backend web development technologies. Developed responsive web applications with focus on user experience and performance optimization.",
      image: "/web.png",
    },
    {
      title: "Introduction to Usability Engineering",
      dates: "Fall 2024",
      location: "Oregon State University",
      description:
        "Covered principles of human-computer interaction, usability testing, and user-centered design for software interfaces.",
      image: "/cs352.png",
      links: [],
    },
    {
      title: "Data Structures and Algorithms",
      dates: "Fall 2024",
      location: "Oregon State University",
      description:
        "Comprehensive study of data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, graph traversal). Implemented various algorithms and analyzed their time/space complexity.",
      image: "/dsa.png",
      mlh: "",
      links: [],
    },
    {
      title: "Computer Architecture & Assembly Language",
      dates: "Spring 2024",
      location: "Oregon State University",
      description:
        "Studied computer organization, digital logic, CPU architecture, memory hierarchy, and assembly language programming.",
      image: "/cs271.png",
      links: [],
    },
    {
      title: "Object-Oriented Programming",
      dates: "Spring 2024",
      location: "Oregon State University",
      description:
        "Mastered OOP principles including encapsulation, inheritance, polymorphism, and abstraction. Designed and implemented object-oriented solutions to complex programming problems.",
      image: "/oop.png",
      mlh: "",
      links: [],
    },
    {
      title: "Discrete Mathematics",
      dates: "Fall 2023",
      location: "Oregon State University",
      description:
        "Studied mathematical structures that are fundamentally discrete (sets, logic, relations, functions, combinatorics) and their applications in computer science and cryptography.",
      image: "/math.png",
    },
  ] satisfies Hackathon[],
  
  bookshelf: [
    {
      title: "Atomic Habits",
      author: "James Clear",
      year: "2018",
      description: "A practical guide to building good habits and breaking bad ones, with actionable strategies for continuous improvement.",
      image: "/atomic-habits.jpg",
      links: [],
    },
    {
      title: "Can't Hurt Me",
      author: "David Goggins",
      year: "2018",
      description: "A memoir and self-help book by former Navy SEAL David Goggins, sharing his journey of mental toughness and overcoming adversity.",
      image: "/cant-hurt-me.jpg",
      links: [],
    },
    {
      title: "Red Rising",
      author: "Pierce Brown",
      year: "2014",
      description: "A dystopian science fiction novel about rebellion and transformation, set in a future society on Mars.",
      image: "/red-rising.jpg",
      links: [],
    },
    {
      title: "A Game of Thrones",
      author: "George R.R. Martin",
      year: "1996",
      description: "The first book in the epic fantasy series A Song of Ice and Fire, introducing the world of Westeros and its complex political intrigue.",
      image: "/a-game-of-thrones.jpg",
      links: [],
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      year: "1936",
      description: "A timeless guide to interpersonal skills, communication, and leadership, offering practical advice for personal and professional success.",
      image: "/how-to-win-friends-and-influence-people.jpg",
      links: [],
    },
    {
      title: "Stolen Focus",
      author: "Johann Hari",
      year: "2022",
      description: "An exploration of the modern world's impact on our ability to focus, examining the societal and technological forces behind our distracted lives and offering solutions for reclaiming attention.",
      image: "/stolen-focus.jpg",
      links: [],
    },
    {
      title: "A Mind for Numbers",
      author: "Barbara Oakley",
      year: "2014",
      description: "A guide to effective learning strategies for math and science, providing practical techniques to help anyone master complex subjects and improve problem-solving skills.",
      image: "/a-mind-for-numbers.jpg",
      links: [],
    },
  ],
} as const;
