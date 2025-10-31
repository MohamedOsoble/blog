import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1> Oh no, this page cannot be found...</h1>
      <Link to="/">
        You can go back to the come page by clicking here though
      </Link>
    </div>
  );
};

export default ErrorPage;
