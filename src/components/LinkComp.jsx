const LinkComp = ({ value }) => {
  const data = value.map(({ id, href, name }) => {
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
