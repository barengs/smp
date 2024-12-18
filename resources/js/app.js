import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap';
import './styles.css'; // Import Tailwind styles
import Header from './src/components/header';


const App = () => {
    return (
        <>
        <Header/>
        <main className="p-4">
            <h2>Welcome to my App</h2>
        </main>
        </>
    )
    // return <h1 className="text-3xl font-bold underline">Hello, Laravel + React!</h1>;
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);