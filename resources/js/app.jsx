import React, { lazy} from "react";
import { Routes, Route} from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Parent = lazy(() => import("./pages/parents"));
const Student = lazy(() => import("./pages/students"));
const Province = lazy(() => import("./pages/zone/province"));
const City = lazy(() => import("./pages/zone/city"));
const District = lazy(() => import("./pages/zone/district"));
const Village = lazy(() => import("./pages/zone/village"));
const Attendant = lazy(() => import('./pages/attendant'));
const Role = lazy(() => import('./pages/role'));
const Permission = lazy(() => import('./pages/permission'));
const Hostel = lazy(() => import('./pages/hostel'));
const FormalEducation = lazy(() => import('./pages/education/formal'));
const NonFormalEducation = lazy(() => import('./pages/education/nonformal'));
const EducationType = lazy(() => import('./pages/education/type'));

import Layout from "./layout/Layout";
// import AuthLayout from "./layout/AuthLayout";

const App = () => {

  return (
    <main className="App  relative">
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route path="wali-santri" element={<Parent />} />
          <Route path="santri" element={<Student />} />
          <Route path="propinsi" element={<Province />} />
          <Route path="kota" element={<City />} />
          <Route path="kecamatan" element={<District />} />
          <Route path="desa" element={<Village />} />

          <Route path="asatidz" element={<Attendant />} />
          <Route path="tugas" element={<Role />} />
          <Route path="hak-akses" element={<Permission />} />

          <Route path="kelompok-pendidikan" element={<EducationType />} />
          <Route path="asrama" element={<Hostel />} />
          <Route path="pendidikan-formal" element={<FormalEducation />} />
          <Route path="pendidikan-non-formal" element={<NonFormalEducation />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
