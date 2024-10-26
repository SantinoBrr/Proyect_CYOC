import React from 'react';
import './App.css';
import './assets/styles/styles.css';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routing from './Routing/Routing';
import { UserProvider } from './Context/UserContext';



function App() {
  return (
    <UserProvider>
      <div className="app-container">
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
