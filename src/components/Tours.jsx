import { tourData } from "../Data";
import Title from "./Title";

const Tours = () => {
  const renderedData = tourData.map(
    ({ img, date, title, description, destination, duration, price }) => {
      return (
        <article key={img} className="tour-card">
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                {destination}
              </p>
              <p>{duration}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
      );
    }
  );
  return (
    <section className="section" id="tours">
      <Title title="Featured" subText="tours" />

      <div className="section-center featured-center">{renderedData}</div>
    </section>
  );
};

export default Tours;
