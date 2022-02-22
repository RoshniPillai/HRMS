// import "./styles.css";
// import DashboardWIthDrawer from "./components/dashboardwithdrawer";
// import EmployeeDirectoryPage from "./components/employeeDirectory";
// import EmployeeManagementPage from "./components/employeeManagement";
// import DashboardPage from "./components/sample";
// import LoginPage from "./components/login";
// export default function App() {
//   return (
//     <div className="App">
//       {/* <SignIn /> */}
//       <LoginPage />
//       {/* <DashboardPage /> */}
//       {/* <DashboardWIthDrawer /> */}
//       {/* <EmployeeDirectoryPage /> */}
//       {/* <EmployeeManagementPage /> */}
//     </div>
//   );
// }

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import DashboardPage from "./components/sample";
import EmployeeDirectoryPage from "./components/employeeDirectory";
import EmployeeManagementPage from "./components/employeeManagement";
import Home from "./Home";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="loginPage" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route
            path="employeeDirectoryPage"
            element={<EmployeeDirectoryPage />}
          />
          <Route
            path="employeeManagementPage"
            element={<EmployeeManagementPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
