import { pageLinks } from "../Data";

const LinkComp = () => {
  const data = pageLinks.map(({ id, href, name }) => {
    return (
      <li key={id}>
        <a href={href} className="nav-link">
          {name}
        </a>
      </li>
    );
  });
};
export default LinkComp;
