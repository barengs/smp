import React, { lazy} from "react";
import { Routes, Route} from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Parent = lazy(() => import("./pages/parents"));
const Student = lazy(() => import("./pages/students"));

import Layout from "./layout/Layout";
// import AuthLayout from "./layout/AuthLayout";

function App() {

  return (
    <main className="App  relative">
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="wali-santri" element={<Parent />} />
          <Route path="santri" element={<Student />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
