import { useUser } from "../utils/Auth";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotificationsProvider from "./hooks/useNotifications/NotificationsProvider";
import DialogsProvider from "./hooks/useDialogs/DialogsProvider";
import { LoginRoutes, AuthenticatedRoutes } from "../routes/routes";
import AppTheme from "../shared-theme/AppTheme";
import {
  dataGridCustomizations,
  datePickersCustomizations,
  sidebarCustomizations,
  formInputCustomizations,
} from "./theme/customizations";

const themeComponents = {
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...sidebarCustomizations,
  ...formInputCustomizations,
};
const authenticatedRouter = createBrowserRouter(AuthenticatedRoutes);
const loginRouter = createBrowserRouter(LoginRoutes);

export default function CrudDashboard(props) {
  const { user } = useUser();
  return (
    <AppTheme {...props} themeComponents={themeComponents}>
      <CssBaseline enableColorScheme />
      <NotificationsProvider>
        <DialogsProvider>
          <RouterProvider
            user={user}
            router={user ? authenticatedRouter : loginRouter}
          />
        </DialogsProvider>
      </NotificationsProvider>
    </AppTheme>
  );
}
