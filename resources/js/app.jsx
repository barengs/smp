import React, { lazy, Suspense} from "react";
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

const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const ForgotPass = lazy(() => import("./pages/auth/forgot-password"));
const LockScreen = lazy(() => import("./pages/auth/lock-screen"));
const Error = lazy(() => import("./pages/404"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";

const App = () => {

  return (
    <main className="App  relative">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/lock-screen" element={<LockScreen />} />
        </Route>
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
        <Route path="/404" element={
          <Suspense>
            <Error />
          </Suspense>
        } />
      </Routes>
    </main>
  );
};

export default App;
