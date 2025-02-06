import "react";
import PropTypes from "prop-types";

const Card = ({ image, title, description, author, date }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="author-info">
        <img src="https://via.placeholder.com/30" alt={author} />
        <p>
          {author} • {date}
        </p>
      </div>
    </div>
  );
};

export default Card;


Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

