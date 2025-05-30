const Home = ({ setCurrentPage }) => {
  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', minHeight: '60vh' }}>
          <div style={{ flex: 1, color: 'white', paddingRight: '2rem' }}>
            <h1 className="display-4 fw-bold mb-4">Welcome to ProdManage</h1>
            <p className="lead mb-4">
              Effortlessly manage your products with our all-in-one tool. Create, view, 
              edit, and delete products — fast, simple, and reliable.
            </p>
            <button 
              className="btn btn-light btn-lg px-4"
              onClick={() => setCurrentPage('products')}
            >
              Explore Products
            </button>
          </div>
          
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div className="bg-white rounded-3 p-4 shadow" style={{ width: '300px', maxWidth: '90%' }}>
              <div className="d-flex align-items-center mb-3">
                <div 
                  className="bg-secondary rounded-circle" 
                  style={{ width: '40px', height: '40px' }}
                ></div>
                <div className="ms-3 flex-grow-1">
                  <div 
                    className="bg-light rounded" 
                    style={{ height: '8px', width: '80%' }}
                  ></div>
                  <div 
                    className="bg-light rounded mt-1" 
                    style={{ height: '8px', width: '60%' }}
                  ></div>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <div 
                  className="bg-info rounded-circle" 
                  style={{ width: '40px', height: '40px' }}
                ></div>
                <div className="ms-3 flex-grow-1">
                  <div 
                    className="bg-light rounded" 
                    style={{ height: '8px', width: '90%' }}
                  ></div>
                  <div 
                    className="bg-light rounded mt-1" 
                    style={{ height: '8px', width: '70%' }}
                  ></div>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <div 
                  className="bg-secondary rounded-circle" 
                  style={{ width: '40px', height: '40px' }}
                ></div>
                <div className="ms-3 flex-grow-1">
                  <div 
                    className="bg-light rounded" 
                    style={{ height: '8px', width: '75%' }}
                  ></div>
                  <div 
                    className="bg-light rounded mt-1" 
                    style={{ height: '8px', width: '55%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;