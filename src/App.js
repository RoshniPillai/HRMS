import "./styles.css";
import Dashboard from "./components/dashboard";
import DashboardWIthDrawer from "./components/dashboardwithdrawer";
import EmployeeDirectoryPage from "./components/employeeDirectory";
import EmployeeManagementPage from "./components/employeeManagement";
import Sample from "./components/sample";

export default function App() {
  return (
    <div className="App">
      {/* <Sample /> */}
      {/* <Dashboard /> */}
      {/* <DashboardWIthDrawer /> */}
      {/* <EmployeeDirectoryPage /> */}
      <EmployeeManagementPage />
    </div>
  );
}
