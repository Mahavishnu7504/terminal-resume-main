// Resume data structure
export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
  certificates: Certificate[];
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  gpa?: string;
}

interface Skills {
  technical: string[];
  languages: string[];
  tools: string[];
  soft?: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

// Maha Vishnu's resume data
export const resumeData: ResumeData = {
  name: "Maha Vishnu A",
  title: "M.Tech Integrated Software Engineer Student",
  contact: {
    email: "mahavishnuarivoli@gmail.com",
    phone: "+91 7667569556",
    location: "Dharmapuri, Tamil Nadu",
    linkedin: "https://www.linkedin.com/in/maha-vishnu-01a54224b/",
    github: "https://github.com/Mahavishnu7504"
  },
  summary: "Enthusiastic and adaptable fresher seeking opportunities to apply and expand skills in a dynamic, team-oriented environment. Passionate about continuous learning, problem solving, and effective contribution to organizational success.",
  experience: [
    {
      company: "Summer Internship",
      position: "Intern",
      duration: "June 2024 - July 2024",
      description: [
        "Built a full-stack food delivery platform enabling seamless ordering and vendor interactions.",
        " Developed a MySQL-based system handling transactions, orders, and vendor profiles.",
        " AddedAI-powered recommendations to personalize food suggestions and boost engagement."
      ]
    }
  ],
  education: [
    {
      institution: "Vellore Institute of Technology - Andhra Pradesh",
      degree: "M.Tech Integrated",
      field: "Software Engineering",
      year: "Dec 2026 (Expected)",
      gpa: "7.79/10"
    },
    {
      institution: "Senthil Public School -Salem",
      degree: "Higher Secondary Education",
      field: "Mathematics,Biology",
      year: "2020 - 2021",
      gpa: "83%"
    },
    {
      institution: "Kamalam Internation School -Dharmapuri",
      degree: "Secondary School Education",
      field: "SSLC",
      year: "2018- 2019",
      gpa: "66%"
    }
  ],
  skills: {
    technical: [
      "HTML/CSS", 
      "JavaScript",  
      "React.js", 
      "Hono.js", 
      "Java", 
      "API Integration",
      "Responsive Design"
    ],
    languages: ["HTML", "CSS", "JavaScript", "Java"],
    tools: [
      "Git", "GitHub", "Cloudflare",  "Canva",
      "Google Docs", "PowerPoint", "MS Word", "Excel"
    ],
    soft: [
      "Communication", "Problem-Solving", "Time Management", 
      "Adaptability", "Teamwork"
    ]
  },
  projects: [
    {
      name: "Hackathon Registration & Management System",
      description: " Built a system to manage hackathon registration, team setup, scheduling, and results tracking.",
      technologies: ["Hono.js", "Cloudflare", "Nodemailer"," ExcelJS"],
      link: "https://github.com/Mahavishnu7504/hackathon-main-main"
    },
    {
      name: "Find MY Food",
      description: "Built a full-stack food delivery platform enabling seamless ordering and vendor interaction..",
      technologies: ["Node.js"," Express.js", "MySQL"," AI for Recommendations"],
    },
    {
      name: "Intravenous Flow Monitor",
      description: "System to measure and regulate the flow rate of IV fluids, ensuring precise delivery of fluids into the bloodstream via an IV catheter.",
      technologies: ["Engineering", "Medical Technology", "Flow Monitoring"]
    }
  ],
  certificates: [
    {
      name: "Full-Stack Web Development ",
      issuer: "UDEMY",
      date: "2025"
    },
     {
      name: "Full End Development Libraries ",
      issuer: "freecodecamp",
      date: "2025"
    },
      {
      name: "MATLAB Onramp ",
      issuer: "MathWorks",
      date: "2025"
    },
    
  ]
};

// Commands available in the terminal
export const availableCommands = [
  { command: "help", description: "List all available commands" },
  { command: "about", description: "Display basic information" },
  { command: "contact", description: "Show contact information" },
  { command: "summary", description: "Display professional summary" },
  { command: "experience", description: "Show work experience" },
  { command: "education", description: "Display educational background" },
  { command: "skills", description: "List technical and soft skills" },
  { command: "projects", description: "Show personal and professional projects" },
  { command: "certificates", description: "Display certifications" },
  { command: "clear", description: "Clear the terminal screen" },
  { command: "all", description: "Display complete resume" }
];

