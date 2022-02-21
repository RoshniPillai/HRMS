import "./styles.css";
import DashboardWIthDrawer from "./components/dashboardwithdrawer";
import EmployeeDirectoryPage from "./components/employeeDirectory";
import EmployeeManagementPage from "./components/employeeManagement";
import DashboardPage from "./components/sample";
import LoginPage from "./components/login";
export default function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      <LoginPage />
      {/* <DashboardPage /> */}
      {/* <DashboardWIthDrawer /> */}
      {/* <EmployeeDirectoryPage /> */}
      {/* <EmployeeManagementPage /> */}
    </div>
  );
}
