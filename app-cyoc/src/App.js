import React from 'react';
import './App.css';
import './assets/styles/styles.css';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routing from './Routing/Routing';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;