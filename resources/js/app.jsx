import React, { lazy} from "react";
import { Routes, Route} from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Parent = lazy(() => import("./pages/parents"));
const Student = lazy(() => import("./pages/students"));
const City = lazy(() => import("./pages/zone/province"));
const Province = lazy(() => import("./pages/zone/city"));
const District = lazy(() => import("./pages/zone/district"));
const Village = lazy(() => import("./pages/zone/village"));

import Layout from "./layout/Layout";
// import AuthLayout from "./layout/AuthLayout";

function App() {

  return (
    <main className="App  relative">
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route path="wali-santri" element={<Parent />} />
          <Route path="santri" element={<Student />} />
          <Route path="provinsi" element={<Province />} />
          <Route path="kota" element={<City />} />
          <Route path="kecamatan" element={<District />} />
          <Route path="desa" element={<Village />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
