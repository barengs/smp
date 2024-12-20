import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard/Dashboard';
// import styles from '../../css/style.css';
// import "@css/styles.css";
// import "@js/main.js";
// import "@remixicons";
// import "@bootstrap-icons";

import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';

function Home() {
    return (
        <div className="page">

            <Header />
            <Sidebar />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default Home;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    )
}
