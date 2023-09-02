import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { MdWorkspacesOutline } from "react-icons/md";
let projectsArray = [
  {
    id: "01",
    name: "Bolt",
    clone_of: "Apple.com",
    img: ["https://i.ibb.co/G3tCmR8/apple-proj.png"],
    gitLink: "https://github.com/harry-io/teal-fuel-7913",
    siteLink: "https://bolt-beryl.vercel.app/",
    mainSiteLink: "https://www.apple.com/",
    description:
      "Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets, personal computers (PCs), portable and wearable devices. The company also offers software related services, accessories, and third-party digital content and applications.",
    tech_stack: [
      "HTML5",
      "CSS3",
      "SASS",
      "JavaScript",
      "ReactJs",
      "Redux",
      "Chakra UI",
      "Styled Components",
      "MongoDB",
      "Express",
      "Vercel",
      "Render",
      "Github",
    ],
  },
  {
    id: "02",
    name: "Vigor",
    clone_of: "Healthkart.com",
    img: ["https://i.ibb.co/JqsQJvx/vigo-proj.png"],
    gitLink: "https://github.com/harry-io/dirty-parcel-1754",
    siteLink: "https://vigor-orcin.vercel.app/",
    mainSiteLink: "https://www.travelocity.com/",
    description:
      "HealthKart is an online health and fitness store for men and women, which offers health products online and health services to help consumers achieve their fitness goals.",
    tech_stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJs",
      "Redux",
      "Chakra UI",
      "Styled Components",
      "Json Server",
      "Vercel",
      "Mock API",
      "Githubs",
    ],
  },
  {
    id: "03",
    name: "Resell",
    clone_of: "Quikr.com",
    img: ["https://i.ibb.co/b70cmx5/resell-proj.png"],
    gitLink: "https://github.com/PriyanshuPatil/Resell.com",
    siteLink: "https://resell1.netlify.app/",
    mainSiteLink: "https://www.quikr.com/",
    description:
      "Resell Is a Complete Clone Of Quikr Bazaar. It is is an online platform in India that offers a wide range of new and used products for sale, including electronics, furniture, appliances, and more.",
    tech_stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJs",
      "Redux",
      "Chakra UI",
      "Styled Components",
      "Json Server",
      "Vercel",
      "Mock API",
      "Githubs",
    ],
  },
  {
    id: "04",
    name: "Skypeia",
    clone_of: "Travelocity.com",
    img: ["https://i.ibb.co/QJpq3wc/skypeia-web-o.png"],
    gitLink: "https://github.com/harry-io/flowery-blow-7094",
    siteLink: "https://skypiea.vercel.app/",
    mainSiteLink: "https://www.travelocity.com/",
    description:
      "Travelocity provides online reservation services on properties and holiday rentals and gurantees best prices to travellers.",
    tech_stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJs",
      "Json Server",
      "Vercel",
      "Github",
    ],
  },
  {
    id: "05",
    name: "Neoshop",
    clone_of: "Uboric.com",
    img: ["https://i.ibb.co/93nyDD0/neoshop.png"],
    gitLink: "https://github.com/CharithGR/Neoshop",
    siteLink: "https://visionary-sundae-f4d37e.netlify.app/",
    mainSiteLink: "https://uboric.com/",
    description:
      "Skypeia provides online reservation services on properties and holiday rentals and gurantees best prices to travellers.",
    tech_stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Json Server",
      "Netlify",
      "Github",
    ],
  },
  {
    id: "06",
    name: "Youtube",
    clone_of: "Youtube.com",
    img: ["https://i.ibb.co/cJmtM8q/youtube.png"],
    gitLink:
      "https://github.com/masai-course/harikesh_kumar_fw21_0633/tree/master/unit-3/sprint-3/day-1/assignments/YouTube%20app",
    siteLink: "https://super-pothos-406f8f.netlify.app/",
    mainSiteLink: "https://youtube.com/",
    description:
      "Skypeia provides online reservation services on properties and holiday rentals and gurantees best prices to travellers.",
    tech_stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "You Tube API",
      "Netlify",
      "Github",
    ],
  },
];
const Projects = () => {
  return (
    <div id="projects" className="projects_main_container">
      <div className="projects_heading">
        <h2>PROJECTS</h2>
        <MdWorkspacesOutline fill="#00ff00" style={{ fontSize: "2rem" }} />
      </div>
      <div className="projects_main">
        {/*  */}
        {projectsArray.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
