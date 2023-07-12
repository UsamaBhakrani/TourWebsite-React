const Title = ({ title, subText }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subText}</span>
      </h2>
    </div>
  );
};

export default Title;
