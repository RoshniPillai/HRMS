import "./styles.css";
import Dashboard from "./components/dashboard";
import DashboardWIthDrawer from './components/dashboardwithdrawer';
import EmployeeDirectoryPage from './components/employeeDirectory';

export default function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <DashboardWIthDrawer /> */}
      {/* <EmployeeDirectoryPage /> */}
    </div>
  );
}
