import logo from "../images/logo.svg";
import { socialLinks,pageLinks } from "../Data";
import LinkComp from "./LinkComp";

const Nav = () => {
  const data = pageLinks.map(({ id, href, name }) => {
    return (
      <li key={id}>
        <a href={href} className="nav-link">
          {name}
        </a>
      </li>
    );
  });

  const iconLinks = socialLinks.map(({ id, href, icon }) => {
    return (
      <li key={id}>
        <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
          <i className={icon}></i>
        </a>
      </li>
    );
  });
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {data}
        </ul>
        <ul className="nav-icons">{iconLinks}</ul>
      </div>
    </nav>
  );
};

export default Nav;
