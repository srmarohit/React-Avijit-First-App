import { ProjectsContent, ProjectsPic, SectionTitle } from "./Utilities";
import "../styles/sections/projects.scss";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      {/** first container for project head */}
      <div className="container">
        <SectionTitle title="Projects" />
        <div className="row py-2 mt-5 mb-3">
          <div className="col-md-6 border-right">
            <div className="bg-white p-3">
              <h2 className="fw-bold text-capitalize text-center">
                My Projects Range from Initial Design to Deployment Anywhere
                Anytime.
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-3 text-start">
              <p className="fw-light">
                Lorem ipsum dolor sit amet consectetur architecto magni, dicta
                maxime laborum temporibus dolorem esse doloremque illo quas nisi
                enim molestias. Tempore ducimus molestiae in dolore enim.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** second container for project content */}
      <div className="container">
        <div className="row">
          <ProjectsContent
            title="Project One"
            icon="fas fa-paper-plane"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
            doloremque autem quibusdam blanditiis harum alias hic accusantium 
            maxime atque ratione magni repellat"
          />
          <ProjectsPic src="./assets/services/service-1.png" style="text-end" />
        </div>
        <div className="row">
          <ProjectsPic src="./assets/services/service-2.png" style="text-start" />
          <ProjectsContent
            title="Project Two"
            icon="fas fa-code"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
            doloremque autem quibusdam blanditiis harum alias hic accusantium 
            maxime atque ratione magni repellat"
          />
        </div>
        <div className="row">
          <ProjectsContent
            title="Project One"
            icon="fas fa-cloud-upload-alt"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
            doloremque autem quibusdam blanditiis harum alias hic accusantium 
            maxime atque ratione magni repellat"
          />
          <ProjectsPic src="./assets/services/service-3.png" style="text-end" />
        </div>
      </div>
    </section>
  );
}
