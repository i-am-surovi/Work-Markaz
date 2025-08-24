import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const searchFields = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "UI/UX Designer",
      "Digital Marketer",
      "Graphic Designer",
      "Content Writer",
      "Customer Support",
      "Finance Officer",
    ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      "Dhaka",
      "Chattogram",
      "Khulna",
      "Rajshahi",
      "Sylhet",
      "Barisal",
      "Rangpur",
      "Mymensingh",
    ],
  },
  {
    title: "Experience",
    icon: IconBriefcase,
    options: ["Fresher", "1-3 Years", "3-5 Years", "5+ Years"],
  },
  {
    title: "Skills",
    icon: IconRecharging,
    options: [
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "Express",
      "Python",
      "Django",
      "PHP",
      "Laravel",
      "Java",
      "SpringBoot",
      "Figma",
      "Sketch",
      "Adobe XD",
      "AWS",
      "Docker",
      "Kubernetes",
      "SQL",
      "MongoDB",
      "Git",
      "Testing & Debugging",
      "Agile Methodologies",
    ],
  },
];

const talents = [
  {
    name: "Sumaiya Hossain Surovi",
    role: "Software Engineer",
    company: "Pathao",
    topSkills: ["React", "SpringBoot", "MongoDB"],
    about:
      "Software Engineer at Pathao building scalable applications integrating frontend and backend. Passionate about solving complex problems and creating seamless user experiences.",
    expectedCtc: "৳ 1,00,000 - 1,50,000",
    location: "Dhaka, Bangladesh",
    image: "avt",
  },
  {
    name: "Aminul Islam",
    role: "Frontend Developer",
    company: "bKash",
    topSkills: ["HTML", "CSS", "JavaScript"],
    about:
      "Frontend Developer at bKash designing responsive and interactive web applications. Skilled in HTML, CSS, and JavaScript.",
    expectedCtc: "৳ 90,000 - 1,20,000",
    location: "Dhaka, Bangladesh",
    image: "avatar1",
  },
  {
    name: "Rafiq Ahmed",
    role: "Backend Developer",
    company: "Daraz",
    topSkills: ["Node.js", "Express", "MySQL"],
    about:
      "Backend Developer at Daraz specializing in server-side applications and database management. Passionate about building reliable and scalable systems.",
    expectedCtc: "৳ 1,00,000 - 1,40,000",
    location: "Chattogram, Bangladesh",
    image: "avatar2",
  },
  {
    name: "Nadia Rahman",
    role: "UI/UX Designer",
    company: "Robi Axiata",
    topSkills: ["Figma", "Sketch", "Adobe XD"],
    about:
      "UI/UX Designer at Robi Axiata creating intuitive and visually compelling user interfaces. Skilled in user research, prototyping, and responsive design.",
    expectedCtc: "৳ 80,000 - 1,20,000 /month",
    location: "Dhaka, Bangladesh",
    image: "avatar3",
  },
  {
    name: "Tanvir Hossain",
    role: "Full Stack Developer",
    company: "Grameenphone",
    topSkills: ["Python", "Django", "React"],
    about:
      "Full Stack Developer at Grameenphone handling both frontend and backend development for web applications. Experienced in end-to-end high-performance solutions.",
    expectedCtc: "৳ 1,00,000 - 1,50,000 /month",
    location: "Dhaka, Bangladesh",
    image: "avatar4",
  },
  {
    name: "Fahim Rahman",
    role: "Digital Marketer",
    company: "Daraz",
    topSkills: ["SEO", "Google Ads", "Social Media Marketing"],
    about:
      "Digital Marketing Executive at Daraz responsible for online campaigns, SEO optimization, and social media growth strategies. Skilled in analytics and performance tracking.",
    expectedCtc: "৳ 70,000 - 1,00,000 /month",
    location: "Chattogram, Bangladesh",
    image: "avatar5",
  },
  {
    name: "Sabrina Akter",
    role: "Graphic Designer",
    company: "Shohoz",
    topSkills: ["Adobe Illustrator", "Photoshop", "After Effects"],
    about:
      "Graphic Designer at Shohoz creating digital content for campaigns and social media. Skilled in Adobe Illustrator, Photoshop, and After Effects.",
    expectedCtc: "৳ 65,000 - 90,000 /month",
    location: "Dhaka, Bangladesh",
    image: "avatar6",
  },
  {
    name: "Imran Chowdhury",
    role: "Mobile App Developer",
    company: "REVE Systems",
    topSkills: ["Flutter", "Android", "iOS"],
    about:
      "Mobile App Developer at REVE Systems building telecom and communication apps using Flutter and native Android/iOS technologies.",
    expectedCtc: "৳ 1,20,000 - 1,50,000 /month",
    location: "Dhaka, Bangladesh",
    image: "avatar7",
  },
  {
    name: "Nusrat Jahan",
    role: "Content Writer",
    company: "News24",
    topSkills: ["SEO", "Copywriting", "Blog Writing"],
    about:
      "Content Writer at News24 producing engaging articles on current affairs, tech, and lifestyle. Skilled in SEO and creating reader-friendly content.",
    expectedCtc: "৳ 45,000 - 65,000 /month",
    location: "Dhaka, Bangladesh",
    image: "avatar8",
  },
  {
    name: "Arif Hossain",
    role: "Customer Support Executive",
    company: "bKash",
    topSkills: ["Communication", "Problem Solving", "CRM"],
    about:
      "Customer Support Executive at bKash assisting customers with queries and troubleshooting. Strong communication skills in Bangla and English.",
    expectedCtc: "৳ 35,000 - 50,000 /month",
    location: "Khulna, Bangladesh",
    image: "avatar9",
  },
  {
    name: "Tania Akter",
    role: "Data Analyst",
    company: "BRAC Bank",
    topSkills: ["Excel", "SQL", "Power BI"],
    about:
      "Data Analyst at BRAC Bank analyzing business data and generating actionable insights using Excel, SQL, and Power BI.",
    expectedCtc: "৳ 70,000 - 1,00,000 /month",
    location: "Dhaka, Bangladesh",
    image: "avatar10",
  },
  {
    name: "Farhan Karim",
    role: "DevOps Engineer",
    company: "Netflix Bangladesh",
    topSkills: ["Docker", "Kubernetes", "AWS"],
    about:
      "DevOps Engineer managing infrastructure, deployment pipelines, and cloud services ensuring scalability and reliability.",
    expectedCtc: "৳ 1,00,000 - 1,40,000 /month",
    location: "Dhaka, Bangladesh",
    image: "avatar11",
  },
  {
    name: "Rumana Sultana",
    role: "HR Executive",
    company: "Aamra Companies",
    topSkills: ["Recruitment", "Employee Relations", "HR Policies"],
    about:
      "HR Executive handling recruitment, employee relations, and HR operations to ensure a productive work environment.",
    expectedCtc: "৳ 60,000 - 85,000 /month",
    location: "Chattogram, Bangladesh",
    image: "avatar12",
  },
  {
    name: "Sajib Alam",
    role: "Frontend Developer",
    company: "BJIT",
    topSkills: ["React", "JavaScript", "HTML/CSS"],
    about:
      "Frontend Developer at BJIT building responsive web applications using React and JavaScript, focusing on performance and user experience.",
    expectedCtc: "৳ 80,000 - 1,20,000 /month",
    location: "Sylhet, Bangladesh",
    image: "avatar13",
  },
  {
    name: "Lamia Haque",
    role: "Finance Officer",
    company: "Square Pharmaceuticals",
    topSkills: ["Accounting", "Excel", "Financial Analysis"],
    about:
      "Finance Officer managing accounting and financial reporting, skilled in Excel, budgeting, and financial analysis.",
    expectedCtc: "৳ 75,000 - 1,10,000",
    location: "Dhaka, Bangladesh",
    image: "avatar14",
  },
];

const profile={
    name: "Sumaiya Hossain Surovi",
    role: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    skills: ["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"],
    experience: [
      {
        title: "Software Engineer III",
        company: "Google",
        location: "New York, United States",
        startDate: "Apr 2022",
        endDate: "Present",
        description: "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
      },
      {
        title: "Software Engineer",
        company: "Microsoft",
        location: "Seattle, United States",
        startDate: "Jun 2018",
        endDate: "Mar 2022",
        description: "At Microsoft, I worked on developing and optimizing cloud-based applications, focusing on enhancing performance and scalability. I collaborated with product managers and designers to create innovative features that improved user engagement. My responsibilities included writing clean, maintainable code, performing code reviews, and mentoring junior developers. I played a key role in migrating legacy applications to modern cloud infrastructure, resulting in significant cost savings and improved efficiency."
      }
    ],
    certifications: [
      {
        name: "Google Professional Cloud Architect",
        issuer: "Google",
        issueDate: "Aug 2023",
        certificateId: "CB72982GG"
      },
      {
        name: "Microsoft Certified: Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issueDate: "May 2022",
        certificateId: "MS12345AZ"
      }
    ]
  }
  
  
  
export {searchFields, talents, profile};
