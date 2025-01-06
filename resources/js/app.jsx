import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Parent = lazy(() => import("./pages/parents"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="wali-santri" element={<Parent />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
