import CrudDashboard from "./crud-dashboard/CrudDashboard";
import { UserProvider, useUser } from "./utils/Auth";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <CrudDashboard />
    </UserProvider>
  );
}

export default App;
