import Index from "../blog/Blog";
import Post from "../blog/components/Post";
import Home from "../blog/components/Latest";
import ErrorPage from "../error/error";

const routes = [
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: ":postId", element: <Post /> },
    ],
  },
];

export default routes;
