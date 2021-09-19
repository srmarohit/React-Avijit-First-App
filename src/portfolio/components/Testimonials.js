import "../styles/sections/testimonials.scss";
import { TestimonialCard } from "./Utilities";

export default function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
  </svg>
      <div className="container">
        <div className="row text-center text-white">
          <h1 className="display-3 fw-bold">Testimonials</h1>
          <hr
            style={{
              width: "6rem",
              height: "0.3rem"
            }}
            className="mx-auto"
          />
          <p className="lead pt-1 fw-light">What my Colleage says</p>
        </div>
        {/** Bootstrap Carousel  */}

        <div className="row align-items-center">
          <div
            id="carouselExampleDark"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                {/** carousel must be place here to do carousel function properly */}
                <TestimonialCard
                  src="./assets/testimonials/client-1.jpg"
                  name="Uhuru Kenyatta"
                  designation="CEO, VYMaps"
                  comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio."
                />
              </div>
              <div class="carousel-item">
                <TestimonialCard
                  src="./assets/testimonials/client-2.jpg"
                  name="ClaireBelle Zawadi"
                  designation="Global brand manager"
                  comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio."
                />
              </div>
              <div class="carousel-item">
                <TestimonialCard
                  src="./assets/testimonials/client-3.jpg"
                  name="Joy Marete"
                  designation="Finance Manager"
                  comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio."
                />
              </div>
              <div class="carousel-item">
                <TestimonialCard
                  src="./assets/testimonials/client-4.jpg"
                  name="Uhuru Kenyatta"
                  designation="CEO, VYMaps"
                  comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio."
                />
              </div>
              <div class="carousel-item">
                <TestimonialCard
                  src="./assets/testimonials/client-5.jpg"
                  name="Patrick Muriungi"
                  designation="CEO & founder"
                  comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio."
                />
              </div>
            </div>
            <div class="text-center">
              <button
                class="btn btn-outline-light fas fa-long-arrow-alt-left"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              ></button>
              <button
                class="btn btn-outline-light fas fa-long-arrow-alt-right"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              ></button>
            </div>
          </div>
          {/** Carousel Ends */}
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        </svg>
    </div>
  );
}
