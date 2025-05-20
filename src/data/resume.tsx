import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Salim Mohamed",
  initials: "SM",
  url: "https://dillion.io",
  location: "Portland, OR",
  locationLink: "https://www.google.com/maps/place/Portland",
  description:
    "Computer Science Senior at Oregon State University. Interested in software development, machine learning, and cybersecurity.",
  summary:
    "I'm a Computer Science student with hands-on experience in software engineering, database management, and cybersecurity. Skilled in Python, SQL, and penetration testing, with a strong grasp of data structures, algorithms, and scalable software development. I'm passionate about developing secure, efficient software solutions and continuously expanding my technical expertise.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Next.js",
    "C++",
    "SQL",
    "Assembly",
    "HTML",
    "CSS",
    "Swift",
    "Data Analysis",
    "Java",
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
        url: "https://x.com/fragilemethods",
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
      title: "Client Support Analyst",
      logoUrl: "/avaza.png",
      start: "August 2021",
      end: "January 2024",
      description:
        "Optimized client database management using SQL to efficiently query, update, and validate thousands of customer records. Maintained a real-time translator availability database for 200+ clients. Improved customer service efficiency by resolving database inconsistencies, ensuring accurate real-time client and translator records for seamless operations.",
    },
    {
      company: "Portland Parks & Rcreation",
      badges: [],
      href: "https://www.portland.gov/parks",
      location: "Portland, OR",
      title: "Community Outreach Organizer",
      logoUrl: "/portland.png",
      start: "June 2018",
      end: "September 2018",
      description:
        "Managed a SQL-based database tracking survey responses and feedback from 250+ parks across Portland. Analyzed large datasets to identify trends in public feedback, providing insights that improved park services and community programs. Streamlined volunteer coordination efforts by maintaining a centralized scheduling database, improving efficiency in event planning.",
    },
  ],
  education: [
    {
      school: "Oregon State University",
      href: "https://oregonstate.edu/",
      degree: "Bachelor's Degree, Computer Science, Cybersecurity Option",
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
      title: "Memory Research",
      href: "https://github.com/salimmohamed/Memory-Research",
      dates: "Apr 2025 - Present",
      active: true,
      description:
        "A cybersecurity research project exploring memory analysis and DMA techniques using the game Deceit 2. Developed practical skills in memory debugging, system security assessment, and ethical hacking methodologies.",
      technologies: [
        "C++",
        "Memory Analysis",
        "System Architecture",
        "Ethical Hacking",
        "DMA",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/salimmohamed/Memory-Research",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/MemoryAnalysis.png",
      // video:
    },
    {
      title: "Kraken Cybersecurity",
      href: "#",
      dates: "Jan 2018 - Present",
      active: true,
      description:
        "Led penetration testing team focused on social engineering and vulnerability assessment. Developed Python automation scripts for security testing and created detailed reports with actionable recommendations.",
      technologies: [
        "Python",
        "Penetration Testing",
        "Network Security",
        "Web Application Security",
      ],
      links: [
      ],
      image: "/kraken.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Data Structures and Algorithms",
      dates: "",
      location: "",
      description:
        "Comprehensive study of data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, graph traversal). Implemented various algorithms and analyzed their time/space complexity.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Object-Oriented Programming",
      dates: "",
      location: "",
      description:
        "Mastered OOP principles including encapsulation, inheritance, polymorphism, and abstraction. Designed and implemented object-oriented solutions to complex programming problems.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Database Management Systems",
      dates: "",
      location: "",
      description:
        "Studied relational database design, normalization, SQL, transaction management, and database security. Created and optimized database schemas for various applications.",
      icon: "public",
      image:
        "",
      links: [],
    },
    {
      title: "Web Development",
      dates: "",
      location: "",
      description:
        "Learned frontend and backend web development technologies. Developed responsive web applications with focus on user experience and performance optimization.",
      image:
        "",
    },
    {
      title: "Software Engineering I",
      dates: "",
      location: "",
      description:
        "Studied software development methodologies, requirements engineering, software design patterns, testing strategies, and project management techniques.",
    },
    {
      title: "Discrete Mathematics",
      dates: "",
      location: "",
      description:
        "Studied mathematical structures that are fundamentally discrete (sets, logic, relations, functions, combinatorics) and their applications in computer science and cryptography.",
      image:
        "",
    },
  ],
} as const;
