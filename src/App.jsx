import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Register from './components/Register'; // 导入新的Register组件

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
      case 'register':
        return <Register />; // 添加register页面
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Provider store={store}>
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Provider>
  );
}

export default App;