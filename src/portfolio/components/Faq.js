import "../styles/sections/faq.scss";
import { FaqItem, SectionTitle } from "./Utilities";

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <SectionTitle title="FAQ" />
        {/** copy Bootstrap Accordian flush  */}
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <FaqItem
              id="flush-collapseOne"
              title="Accordion Item #1"
              description="Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
            />
          </div>
          <div class="accordion-item">
            <FaqItem
              id="flush-collapseTwo"
              title="Accordion Item #1"
              description="Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
            />
          </div>
          <div class="accordion-item">
            <FaqItem
              id="flush-collapseThree"
              title="Accordion Item #1"
              description="Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
