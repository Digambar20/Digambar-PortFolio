import h1 from "../../assets/HosHome.png";
import h2 from "../../assets/Hos.png";
import h3 from "../../assets/drh.png";
import h4 from "../../assets/pth.png";

import z1 from "../../assets/zero.png";
import z2 from "../../assets/zero1.png";
import z3 from "../../assets/zero2.png";

import G1 from "../../assets/G1.png";
import G2 from "../../assets/G2.png";
import G3 from "../../assets/G3.png";

const projects = [
  {
    id: 1,
    title: "Hospital Patients Tracking System",
    description:
      "A full-stack MERN application designed to manage hospital operations efficiently. The system allows administrators to manage doctors, patients, appointments, and medical records through a centralized dashboard. Features include patient registration, appointment scheduling, doctor management, and secure database storage.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    images: [h1, h2, h3, h4],
    github: "https://github.com/Digambar20/Hospital-Patient-Tracker.git",
    demo: "https://hospital-patient-tracker-dkk.vercel.app/",
  },

  {
    id: 2,
    title: "Zerodha Clone",
    description:
      "A responsive clone of the Zerodha trading platform built using React. The project replicates the modern UI/UX of Zerodha, including landing pages, navigation, product sections, pricing information, and responsive design. It demonstrates front-end development skills and component-based architecture.",
    tech: ["React.js", "Bootstrap", "JavaScript", "CSS"],
    images: [z1, z2, z3],
    github: "YOUR_GITHUB_LINK",
    demo: "YOUR_LIVE_LINK",
  },
  {
    id: 3,
    title: "GitHub Clone",
    description:
      "A full-stack GitHub clone built with the MERN stack featuring JWT-based authentication, repository management, and responsive dashboards. Developed RESTful APIs and integrated MongoDB for secure user and repository data management.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bootstrap",
      "JavaScript",
    ],
    images: [G1, G2, G3],
    github: "YOUR_GITHUB_LINK",
    demo: "YOUR_LIVE_LINK",
  },
];

export default projects;
