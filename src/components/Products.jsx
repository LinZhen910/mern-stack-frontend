import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../redux/actions/productActions';
import ProductModal from './modals/ProductModal';

const Products = () => {
  const dispatch = useDispatch();
  const { items, loading, createLoading, updateLoading, deleteLoading, error } = useSelector(
    (state) => state.products
  );

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = () => {
    setEditItem(null);
    setIsEdit(false);
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setEditItem(product);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(productId));
    }
  };

  const handleSubmit = (values) => {
    if (isEdit) {
      dispatch(updateProduct(editItem.id, values));
    } else {
      dispatch(createProduct(values));
    }
    setShowModal(false);
  };

  if (loading) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
        padding: '3rem',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="text-center">
          <div className="spinner-border text-white" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-white fs-5">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      margin: 0,
      padding: '3rem',
      minHeight: '100%'
    }}>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="display-4 fw-bold text-dark mb-2">Products</h1>
          <p className="text-muted fs-5">Manage your product inventory</p>
        </div>
        <button 
          className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow-lg"
          onClick={handleAdd}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            transition: 'all 0.3s ease',
            transform: 'translateY(0px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0px)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Add Product
        </button>
      </div>
      
      {error && (
        <div className="alert alert-danger rounded-4 border-0 shadow-sm mb-4" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Error: {error}
        </div>
      )}
      
      <div className="row g-4" style={{ margin: 0 }}>
        {items.map(product => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
            <div 
              className="card h-100 border-0 shadow-lg rounded-4"
              style={{
                transition: 'all 0.3s ease',
                transform: 'translateY(0px)',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
            >
              <div className="position-relative overflow-hidden rounded-top-4">
                <img 
                  src={product.image} 
                  className="card-img-top"
                  style={{ 
                    height: '220px', 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  alt={product.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x220?text=Product+Image';
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div 
                  className="position-absolute top-0 end-0 m-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: '8px 12px'
                  }}
                >
                  <span className="fw-bold text-primary fs-6">${product.price}</span>
                </div>
              </div>
              
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold mb-3 text-dark">{product.title}</h5>
                <p className="card-text text-muted flex-grow-1 mb-4" style={{ lineHeight: '1.6' }}>
                  {product.description}
                </p>
                
                <div className="d-flex gap-2 mt-auto">
                  <button 
                    className="btn btn-outline-primary flex-fill rounded-pill py-2"
                    onClick={() => handleEdit(product)}
                    disabled={updateLoading}
                    style={{
                      border: '2px solid #667eea',
                      color: '#667eea',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#667eea';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#667eea';
                      e.target.style.transform = 'translateY(0px)';
                    }}
                  >
                    <i className="bi bi-pencil me-2"></i>
                    Edit
                  </button>
                  <button 
                    className="btn btn-outline-danger rounded-pill px-3 py-2"
                    onClick={() => handleDelete(product.id)}
                    disabled={deleteLoading}
                    style={{
                      border: '2px solid #dc3545',
                      color: '#dc3545',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#dc3545';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#dc3545';
                      e.target.style.transform = 'translateY(0px)';
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && !loading && (
        <div 
          className="text-center py-5 rounded-4 shadow-lg"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            margin: '2rem 0'
          }}
        >
          <div 
            className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
            style={{
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}
          >
            <i className="bi bi-box-seam" style={{ fontSize: '3rem' }}></i>
          </div>
          <h3 className="mb-3 text-dark">No products found</h3>
          <p className="text-muted fs-5 mb-4">Start by adding your first product to get started!</p>
          <button 
            className="btn btn-primary btn-lg px-4 py-3 rounded-pill"
            onClick={handleAdd}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none'
            }}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Add Your First Product
          </button>
        </div>
      )}

      <ProductModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        initialValues={editItem}
        isEdit={isEdit}
        loading={createLoading || updateLoading}
      />
    </div>
  );
};

export default Products;
