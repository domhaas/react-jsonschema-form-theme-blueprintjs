import PropTypes from "prop-types";

function DescriptionField(props) {
  const { id, description } = props;
  if (!description) {
    return null;
  } else {
      return description;
  }
}

if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };
}

export default DescriptionField;
