import "react";
import PropTypes from "prop-types";
import "../styles/introCard.css";

const Card = ({ image, title, description, author, date, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="authorInfo">
        <img src={link} alt={author} />
        <div>
          <p>{author}</p>
          <p>{date}</p>
        </div>
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
  link: PropTypes.string.isRequired
};

