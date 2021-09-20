import("./style.css");

const ErrorForm = ({ error }) => {
  return <p className="error_mensaje">{error}</p>;
};
export default ErrorForm;
