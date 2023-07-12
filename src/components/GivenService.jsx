import Title from "./Title";
import { services } from "../Data";

const GivenService = () => {
  const renderedServices = services.map(({ id, title, description, icon }) => {
    return (
      <article key={id} className="service">
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{description}</p>
        </div>
      </article>
    );
  });
  return (
    <section className="section services" id="services">
      <Title title="our" subText="services" />
      <div className="section-center services-center">{renderedServices}</div>
    </section>
  );
};

export default GivenService;
