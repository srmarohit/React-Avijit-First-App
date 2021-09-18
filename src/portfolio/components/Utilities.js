

export const SectionTitle = ({ title }) => {
    return (
      <div className="row text-center">
        <h3 className="fw-bold lead mb-2">{title}</h3>
        <div className="heading-line mb-5"></div>
      </div>
    );
  };
  


  // Projects Content

export const ProjectsContent = ({ icon, title, content }) => {
    return (
      <div className="col-md-6 col-sm-12 col-xs-12 projects mt-4">
        {/** Projects Content */}
        <div className="projects__content">
          <div className={"icon d-block " + icon}></div> 
          <h3 className="display-3--title mt-1">{title}</h3>
          <p className="lh-lg">{content}</p>
          <button
            type="button"
            className="rounded-pill btn-rounded border-primary"
          >
            Live
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    );
  };
  
  export const ProjectsPic = ({ src, style }) => {
    return (
      <div className={"col-md-6 col-sm-12 col-xs-12 projects " + style}>
        {/** Projects Image */}
        <div className="projects__pic">
          <img src={src} className="img-fluid" alt="pic-1" />
        </div>
      </div>
    );
  };
  