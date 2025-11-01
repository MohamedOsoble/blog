import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";
import Dashboard from "../crud-dashboard/CrudDashboard";
import ErrorPage from "../error/ErrorPage";
import DashboardLayout from "../crud-dashboard/components/DashboardLayout";
import PostList from "../crud-dashboard/components/PostList";
import PostShow from "../crud-dashboard/components/PostShow";
import PostCreate from "../crud-dashboard/components/PostCreate";
import PostEdit from "../crud-dashboard/components/PostEdit";

const AuthenticatedRoutes = [
  {
    Component: DashboardLayout,
    errorElement: ErrorPage,
    children: [
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/posts/:postId",
        Component: PostShow,
      },
      {
        path: "/posts/new",
        Component: PostCreate,
      },
      {
        path: "/posts/:postId/edit",
        Component: PostEdit,
      },
      // Fallback route for the example routes in dashboard sidebar items
      {
        path: "*",
        Component: PostList,
      },
    ],
  },
];

const LoginRoutes = [
  {
    Component: DashboardLayout,
    errorElement: ErrorPage,
    children: [
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "*",
        Component: SignIn,
      },
    ],
  },
];

export { LoginRoutes, AuthenticatedRoutes };
