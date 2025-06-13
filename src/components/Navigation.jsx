const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light bg-white border-bottom" 
      style={{ 
        margin: 0, 
        padding: '0.5rem 1rem',
        width: '100%',
        flexShrink: 0
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a 
          className="navbar-brand fw-bold" 
          href="#" 
          style={{ margin: 0 }}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
          }}
        >
          ProdManage
        </a>
        
        <div className="d-flex">
          <a 
            className={`nav-link me-3 ${currentPage === 'home' ? 'active' : ''}`} 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
            }}
          >
            Home
          </a>
          <a 
            className={`nav-link me-3 ${currentPage === 'products' ? 'active' : ''}`} 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('products');
            }}
          >
            Products
          </a>
          <a 
            className={`nav-link me-3 ${currentPage === 'contact' ? 'active' : ''}`} 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('contact');
            }}
          >
            Contact
          </a>
          <a 
            className={`nav-link ${currentPage === 'register' ? 'active' : ''}`} 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('register');
            }}
            style={{ 
              color: currentPage === 'register' ? '#667eea' : '',
              fontWeight: currentPage === 'register' ? '600' : ''
            }}
          >
            <i className="bi bi-person-plus me-1"></i>
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;