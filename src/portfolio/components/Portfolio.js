import "../styles/sections/portfolio.scss";
import { PortfolioItem, SectionTitle } from "./Utilities";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <SectionTitle title="Portfolio" />
        {/** portfolio content */}
        <div className="row">
          <PortfolioItem
            src="./assets/portfolio/portfolio-1.jpg"
            title="Project One"
            category="Web Devlopement"
            link="/add-game"
          />
          <PortfolioItem
            src="./assets/portfolio/portfolio-2.jpg"
            title="Project One"
            category="Web Devlopement"
            link="/task-manager"
          />
          <PortfolioItem
            src="./assets/portfolio/portfolio-3.jpg"
            title="Project One"
            category="Web Devlopement"
            link="/currency-convertor"
          />
          <PortfolioItem
            src="./assets/portfolio/portfolio-4.jpg"
            title="Project One"
            category="Web Devlopement"
          />
          <PortfolioItem
            src="./assets/portfolio/portfolio-5.jpg"
            title="Project One"
            category="Web Devlopement"
          />
          <PortfolioItem
            src="./assets/portfolio/portfolio-6.jpg"
            title="Project One"
            category="Web Devlopement"
          />
          <PortfolioItem
            src="./assets/portfolio/portfolio-7.jpg"
            title="Project One"
            category="Web Devlopement"
          />
          <PortfolioItem
            src="./assets/portfolio/portfolio-8.jpg"
            title="Project One"
            category="Web Devlopement"
          />
          <PortfolioItem
            src="./assets/portfolio/portfolio-9.jpg"
            title="Project One"
            category="Web Devlopement"
          />
        </div>
      </div>
    </section>
  );
}
