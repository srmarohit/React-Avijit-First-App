import { SectionTitle } from "./Utilities";
import "../styles/sections/skills.scss";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionTitle title="Skills I have" />

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-2">
            <div className="skills__logo-box shadow-sm">
              <img
                src="./assets/companies/company-1.png"
                alt="Company 1 logo"
                title="Company 1 Logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="skills__logo-box shadow-sm">
              <img
                src="./assets/companies/company-2.png"
                alt="Company 2 logo"
                title="Company 2 Logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="skills__logo-box shadow-sm">
              <img
                src="./assets/companies/company-3.png"
                alt="Company 3 logo"
                title="Company 3 Logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="skills__logo-box shadow-sm">
              <img
                src="./assets/companies/company-4.png"
                alt="Company 4 logo"
                title="Company 4 Logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="skills__logo-box shadow-sm">
              <img
                src="./assets/companies/company-5.png"
                alt="Company 5 logo"
                title="Company 5 Logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="skills__logo-box shadow-sm">
              <img
                src="./assets/companies/company-6.png"
                alt="Company 6 logo"
                title="Company 6 Logo"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
