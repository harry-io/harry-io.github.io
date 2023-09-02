import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiHeroku,
  SiRedux,
  SiChakraui,
  SiExpress,
  SiVercel,
  SiCodesandbox,
  SiReplit,
  SiVisualstudiocode,
  SiCypress,
  SiJest,
  SiStyledcomponents,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
const skillSets = [
  {
    id: 1,
    name: "HTML5",
    logo: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS3",
    logo: <FaCss3 />,
  },
  {
    id: 3,
    name: "JavaScript",
    logo: <SiJavascript />,
  },
  {
    id: 4,
    name: "React.js",
    logo: <FaReact />,
  },
  {
    id: 5,
    name: "Next.js",
    logo: <TbBrandNextjs />,
  },
  {
    id: 6,
    name: "TypeScript",
    logo: <SiTypescript />,
  },
  {
    id: 7,
    name: "Chakra UI",
    logo: <SiChakraui />,
  },
  {
    id: 8,
    name: "Styled",
    logo: <SiStyledcomponents />,
  },
  {
    id: 9,
    name: "Node.js",
    logo: <FaNodeJs />,
  },
  {
    id: 10,
    name: "REDUX",
    logo: <SiRedux />,
  },
  {
    id: 11,
    name: "MongoDB",
    logo: <DiMongodb />,
  },
  {
    id: 12,
    name: "Express.js",
    logo: <SiExpress />,
  },
  {
    id: 13,
    name: "Jest",
    logo: <SiJest />,
  },
  {
    id: 14,
    name: "Cypress",
    logo: <SiCypress />,
  },
  {
    id: 15,
    name: "Heroku",
    logo: <SiHeroku />,
  },
  {
    id: 16,
    name: "Vercel",
    logo: <SiVercel />,
  },
  {
    id: 17,
    name: "Github",
    logo: <AiFillGithub />,
  },
  {
    id: 18,
    name: "Codesandbox",
    logo: <SiCodesandbox />,
  },
  {
    id: 19,
    name: "Replit",
    logo: <SiReplit />,
  },
  {
    id: 20,
    name: "VS Code",
    logo: <SiVisualstudiocode />,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="skills_main_container">
      <div className="skills_heading">
        <h2>SKILLS</h2>
      </div>

      <div className="logos_container">
        {skillSets.map((skill) => (
          <div key={skill.id} className="logo_card skills-card">
            <div className="logo_icon skills-card-img">{skill.logo}</div>
            <div className="logo_name skills-card-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
