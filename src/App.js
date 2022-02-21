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
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from "./Books";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Books />
          </Route>
          <Route path="/users">
            <Books />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// import React from "react";
// import "./styles.css";
// import { Tabs, Tab, AppBar } from "@material-ui/core";
// import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
// import Books from "./Books";
// import Favorites from "./Favorites";

// export default function App() {
//   const routes = ["/books", "/favorites"];
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Route
//           path="/"
//           render={(history) => (
//             <AppBar>
//               <Tabs
//                 value={
//                   history.location.pathname !== "/"
//                     ? history.location.pathname
//                     : false
//                 }
//               >
//                 {console.log(history.location.pathname)}
//                 <Tab
//                   value={routes[0]}
//                   label="books"
//                   component={Link}
//                   to={routes[0]}
//                 />
//                 <Tab
//                   value={routes[1]}
//                   label="Favorites"
//                   component={Link}
//                   to={routes[1]}
//                 />
//               </Tabs>
//             </AppBar>
//           )}
//         />

//         <Switch>
//           <Route path="/books" component={Books} />
//           <Route path="/favorites" component={Favorites} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }
