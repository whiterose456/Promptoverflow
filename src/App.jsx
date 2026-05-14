import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Navbar />
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            {/* Routes will be added here */}
          </main>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
