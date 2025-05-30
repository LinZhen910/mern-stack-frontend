import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div 
      className="App" 
      style={{ 
        margin: 0, 
        padding: 0, 
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div style={{ margin: 0, padding: 0, flex: 1, width: '100%' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;