import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1> Oh no, this page cannot be found...</h1>
      <br></br>
      <i>{error.statusText || error.message}</i>
      <br></br>
      <Link to="/">
        You can go back to the come page by clicking here though
      </Link>
    </div>
  );
};

export default ErrorPage;
