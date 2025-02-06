import "react";
import PropTypes from 'prop-types';

const StatsCard = ({ title, value }) => {
    return (
        <div className="stats-card">
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
};


StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatsCard;
