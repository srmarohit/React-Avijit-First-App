
import { Link } from "react-router-dom";

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
  


  // Testimonial Card
  export const TestimonialCard = ({ src, comment, name, designation }) => {
    return (
      <>
        {/* testimonials card  */}
        <div className="testimonials__card ">
          <p className="lh-lg">
            <i className="fas fa-quote-left"></i>
            {comment}
            <i className="fas fa-quote-right"></i>
            <div className="ratings p-2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </p>
        </div>
        {/* client picture  */}
        <div className="testimonials__picture">
          <img
            src={src}
            alt="client-4 picture"
            className="rounded-circle img-fluid"
          />
        </div>
        {/* client name & role */}
        <div className="testimonials__name">
          <h3>{name}</h3>
          <p className="fw-light">{designation}</p>
        </div>
      </>
    );
  };
  

  
export const PortfolioItem = ({ src, title, category, link }) => {
  return (
    <div class="col-lg-4 col-md-6">
      <div class="portfolio-box shadow">
        <img src={src} alt="portfolio 1 images" />
        <div class="portfolio-info">
          <div class="caption">
            <h4><Link to={link}>{title}</Link></h4>
            <p>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export const FaqItem = ({ id, title, description }) => {
  return (
    <>
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + id}  
          aria-expanded="false"
          aria-controls={"flush-" + id}
        >
          {title}
        </button>
      </h2>
      <div
        id={id}
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">{description}</div>
      </div>
    </>
  );
};
