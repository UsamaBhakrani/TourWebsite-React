import { socialLinks, pageLinks } from "../Data";
import LinkComp from "./LinkComp";

const Footer = () => {
  const renderedData = pageLinks.map(({ href, name, id }) => {
    return (
      <li key={id}>
        <a href={href} className="footer-link">
          {name}
        </a>
      </li>
    );
  });
  const iconData = socialLinks.map(({ href, icon, id }) => {
    return (
      <li key={id}>
        <a href={href} target="_blank" className="footer-icon">
          <i className={icon}></i>
        </a>
      </li>
    );
  });
  return (
    <footer className="section footer">
      <ul className="footer-links">{renderedData}</ul>
      <ul className="footer-icons">{iconData}</ul>
      <p className="copyright">
        copyright &copy; TourAway travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
