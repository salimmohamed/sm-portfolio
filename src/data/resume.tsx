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
    "Python",
    "Java",
    "C/C++",
    "SQL",
    "JavaScript",
    "HTML/CSS",
    "R",
    "React",
    "Node.js",
    "Next.js",
    "NumPy",
    "Matplotlib",
    "Git",
    "Docker",
    "Google Cloud Platform",
    "MongoDB",
    "Penetration Testing",
    "Memory Analysis",
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
      company: "Avaza Language Services Corp",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/avaza.png",
      start: "September 2023",
      end: "June 2024",
      description:
        "Developed Python automation scripts to convert Excel spreadsheets and streamline client onboarding and translator management workflows. Built automated testing suites and implemented data processing pipelines to improve operational efficiency. Collaborated with cross-functional teams to gather requirements, design system architecture, and deliver user-facing features that enhanced client experience and data management processes.",
    },
    {
      company: "Portland Parks & Recreation",
      badges: [],
      href: "https://www.portland.gov/parks",
      location: "Portland, OR",
      title: "Community Outreach Intern",
      logoUrl: "/portland.png",
      start: "June 2018",
      end: "September 2018",
      description:
        "Assisted with community events and park programs while learning Excel automation and spreadsheet management. Created automated spreadsheets with formulas and macros to track volunteer participation and event attendance. Gained experience working with diverse community members and understanding public service operations, sparking interest in using technology to improve community engagement.",
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
      title: "Foresight: Trading Insights",
      href: "https://github.com/salimmohamed/foresight",
      dates: "July 2025 - Present",
      active: true,
      description:
        "Developed a full-stack trading dashboard with real-time stock monitoring and automated alert systems. Built a Flask REST API integrating Alpha Vantage and NewsAPI for financial data processing and email notifications. Created a modern Next.js frontend with TypeScript and Tailwind CSS for portfolio tracking and market analysis.",
      technologies: [
        "Python",
        "Next.js",
        "TypeScript",
        "Financial APIs",
        "Flask",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://foresight-wealth.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/foresight-logo.svg",
      video: undefined,
    },

    {
      title: "DMA Memory Analysis",
      href: "https://github.com/salimmohamed/Memory-Research",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Developed a C++ application using Direct Memory Access (DMA) to perform real-time memory analysis for ethical cybersecurity research. Investigated low-level system architecture by implementing memory manipulation techniques in a controlled, educational environment. Integrated industry-standard libraries (PCILeech, MemProcFS) to build a more comprehensive and robust memory analysis platform.",
      technologies: [
        "C++",
        "System Architecture",
        "Memory Analysis",
        "Cybersecurity",
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
      title: "Log Analysis Parser",
      href: "https://github.com/salimmohamed/Log-Analysis-Parser",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Engineered a Python parser to automate analysis of World of Warcraft raid logs, converting unstructured text into structured CSV reports for strategic review. Designed a modular, object-oriented architecture to ensure maintainability and allow for easy extension for new game content.",
      technologies: [
        "Python",
        "Data Analysis",
        "Automation",
        "Git",
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
