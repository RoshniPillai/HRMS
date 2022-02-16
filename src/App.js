import "./styles.css";
import DashboardWIthDrawer from "./components/dashboardwithdrawer";
import EmployeeDirectoryPage from "./components/employeeDirectory";
import EmployeeManagementPage from "./components/employeeManagement";
import DashboardPage from "./components/sample";

export default function App() {
  return (
    <div className="App">
      <DashboardPage />
      {/* <DashboardWIthDrawer /> */}
      {/* <EmployeeDirectoryPage /> */}
      {/* <EmployeeManagementPage /> */}
    </div>
  );
}
