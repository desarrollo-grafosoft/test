import "react";
import PropTypes from 'prop-types';
import "../styles/statsCard.css";

const StatsCard = ({ title, value }) => {
    return (
        <div className="statsCard">
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
};


StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StatsCard;
