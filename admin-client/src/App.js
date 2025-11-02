import CrudDashboard from "./crud-dashboard/CrudDashboard";
import { UserProvider } from "./utils/Auth";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <CrudDashboard />
    </UserProvider>
  );
}

export default App;
