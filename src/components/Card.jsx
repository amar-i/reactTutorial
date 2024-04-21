import PropTypes from "prop-types";

const Card = ({ children }) => {
  return <div className="bg-gray-100 p-6 rounded-lg shadow-md">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
