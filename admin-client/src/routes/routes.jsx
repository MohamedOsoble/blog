import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";
import Dashboard from "../crud-dashboard/CrudDashboard";
import ErrorPage from "../error/ErrorPage";
import DashboardLayout from "../crud-dashboard/components/DashboardLayout";
import PostList from "../crud-dashboard/components/PostList";
import EmployeeShow from "../crud-dashboard/components/EmployeeShow";
import EmployeeCreate from "../crud-dashboard/components/EmployeeCreate";
import EmployeeEdit from "../crud-dashboard/components/EmployeeEdit";

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
        Component: EmployeeShow,
      },
      {
        path: "/posts/new",
        Component: EmployeeCreate,
      },
      {
        path: "/posts/:postId/edit",
        Component: EmployeeEdit,
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
