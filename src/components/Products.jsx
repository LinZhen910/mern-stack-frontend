const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise cancelling over-ear headphones",
      price: "$120",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Smart wearable with health tracking",
      price: "$80",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Laptop",
      description: "14-inch Full HD display, 256GB SSD",
      price: "$600",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop"
    }
  ]);

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%',
        backgroundColor: '#f8f9fa',
        margin: 0,
        padding: '2rem',
        minHeight: '100%'
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-5 fw-bold">Products</h1>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Add Product
        </button>
      </div>
      
      <div className="row g-4" style={{ margin: 0 }}>
        {products.map(product => (
          <div className="col-12 col-md-6 col-lg-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img 
                src={product.image} 
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted flex-grow-1">
                  {product.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-primary mb-0">{product.price}</h5>
                  <div>
                    <button className="btn btn-outline-primary btn-sm me-2" title="Edit">
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm" title="Delete">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;