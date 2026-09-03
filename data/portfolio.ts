export const portfolioData = {
  name: "Rithik Kumar M B",

  role: "Java Backend Developer",

  tagline:
    "Building scalable backend systems, secure APIs and AI-powered full-stack applications.",

  location: "Karnataka, India",

  github: "https://github.com/Rithik333R",

  linkedin: "https://www.linkedin.com/in/rithik-kumar-m-b-117a571ba/",

  email: "ffrithik@gmail.com",

  projects: [
    {
      title: "AI Freelance Engineering OS",

      description:
        "Full-stack freelance management platform with AI integration — built with Java, Spring Boot, React, PostgreSQL (with pgvector), and Docker. Features JWT authentication with refresh tokens, semantic retrieval using embeddings, persistent AI conversations powered by Google Gemini, and a human-in-the-loop action system where AI proposes changes (create client/project/task) that require explicit user confirmation before execution. Backend covered by 67 automated tests including cross-user data isolation checks. Feature-complete; not yet publicly deployed.",

      image: "/project1.webp",

      github: "https://github.com/Rithik333R/ai-freelance-engineering-os",

      demo: "",

      stack: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "REST APIs",
      ],
    },

    {
      title: "Tournament Management Platform",

      description:
        "Tournament management platform for esports competitions (Battle Royale, Clash Squad, Lone Wolf modes), built with Node.js, Express, and MongoDB. JWT-based authentication with role-based access for users and admins. Tournament scheduling automated using node-cron. Admins get elevated access through a dedicated Command Center to manually schedule tournaments and enter results, with leaderboard rankings calculated via a MongoDB aggregation pipeline.",

      image: "/project3.webp",

      github: "https://github.com/Rithik333R/free-fire-arena",

      demo: "https://free-fire-arena.vercel.app",

      stack: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "REST APIs",
      ],
    },

    {
      title: "AI Interview Platform",

      description:
        "AI-powered interview preparation platform built with React and Java/Spring Boot, with JWT authentication. Users upload a resume (parsed using Apache PDFBox/POI) and select a difficulty level; a dedicated AI layer sends structured prompts to Google Gemini to generate tailored interview questions, evaluate answers, and produce an overall score. A separate flow calculates an ATS compatibility score and skill-gap analysis from a resume and job description, then generates a personalized weekly learning roadmap.",

      image: "/project2.jpg",

      github: "https://github.com/Rithik333R/AI-Mock-Interview-Platform",

      demo: "https://mockiq-frontend.vercel.app",

      stack: [
        "React",
        "Spring Boot",
        "MySQL",
        "JWT",
        "REST APIs",
        "Google Gemini",
      ],
    },
  ],
};
