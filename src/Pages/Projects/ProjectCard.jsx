import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project_card_main project-card">
      {/*  */}
      <h1 className="project_number_b">{project.id}</h1>
      <div className="project_card_div_a">
        <img src={project.img[0]} alt="alt" />
      </div>
      {/*  */}
      <div className="project_card_div_b">
        {/* dsgn  b*/}
        <div className="project_card_dsgn_b">
          <h1 className="project_number_a">{project.id}</h1>
          <h4 className="project-title">
            {project.name} : Clone of {project.clone_of}
          </h4>
          <p className="project-description">{project.description}</p>
          <div className="project-tech-stack">
            {project.tech_stack.map((stack) => (
              <div key={stack}>{stack}</div>
            ))}
          </div>

          <div className="buttons_container">
            <button
              className="demo_button project-deployed-link"
              onClick={() => window.location.assign(project.siteLink)}
            >
              <p>VISIT</p>
            </button>
            <button
              className="code_base_button project-github-link"
              onClick={() => window.location.assign(project.gitLink)}
            >
              <p>GITHUB</p>
            </button>
          </div>
        </div>
        {/* dsgn a */}
        <div className="project_card_dsgn_a">
          <div>
            <h1 className="project_number_a">{project.id}</h1>
          </div>
          <div>
            <h4 className="project-title">
              {project.name} : Clone of {project.clone_of}
            </h4>
            <p className="project-description">{project.description}</p>
            <div className="project-tech-stack">
              {project.tech_stack.map((stack) => (
                <div key={stack}>{stack}</div>
              ))}
            </div>

            <div className="buttons_container">
              <button
                className="demo_button project-deployed-link"
                onClick={() => window.location.assign(project.siteLink)}
              >
                <p>VISIT</p>
              </button>
              <button
                className="code_base_button project-github-link"
                onClick={() => window.location.assign(project.gitLink)}
              >
                <p>GITHUB</p>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default ProjectCard;
