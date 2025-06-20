import { toast } from 'react-toastify';

// Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';
export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';
export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

// Mock data that demonstrates all the backend features
const mockProducts = [
  {
    "_id": "6855a91d5ee7c4e80eb687f7",
    "title": "Gaming Laptop Ultra",
    "description": "High-performance gaming laptop with RTX 4080 graphics card, 32GB RAM, and 1TB SSD. Perfect for gaming, streaming, and professional work.",
    "price": 2299.99,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    "category": "Computers",
    "inStock": true,
    "createdBy": {
      "_id": "6855a4ed00e7ecdd28503bf4",
      "name": "Admin User",
      "email": "admin@prodmanage.com"
    },
    "createdAt": "2025-06-20T18:31:57.327Z",
    "updatedAt": "2025-06-20T18:31:57.327Z"
  },
  {
    "_id": "6855a79e5ee7c4e80eb687e3",
    "title": "Wireless Headphones Pro Max",
    "description": "Premium noise-cancelling wireless headphones with 40-hour battery life, spatial audio, and crystal clear sound quality. Industry-leading comfort.",
    "price": 349.99,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    "category": "Electronics",
    "inStock": true,
    "createdBy": {
      "_id": "6855a4ed00e7ecdd28503bf4",
      "name": "Product Manager",
      "email": "manager@prodmanage.com"
    },
    "createdAt": "2025-06-20T18:25:34.143Z",
    "updatedAt": "2025-06-20T18:25:34.143Z"
  },
  {
    "_id": "6855b1234567890123456789",
    "title": "Smart Watch Series X",
    "description": "Advanced fitness tracking smartwatch with ECG monitoring, GPS, blood oxygen sensor, and 7-day battery life. Water resistant to 100m.",
    "price": 449.99,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    "category": "Wearables",
    "inStock": true,
    "createdBy": {
      "_id": "6855a4ed00e7ecdd28503bf4",
      "name": "Tech Specialist",
      "email": "tech@prodmanage.com"
    },
    "createdAt": "2025-06-20T19:00:00.000Z",
    "updatedAt": "2025-06-20T19:00:00.000Z"
  },
  {
    "_id": "6855c9876543210987654321",
    "title": "4K Webcam Professional",
    "description": "Ultra HD 4K webcam with auto-focus, noise reduction, and professional lighting correction. Perfect for streaming and video calls.",
    "price": 199.99,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop",
    "category": "Electronics",
    "inStock": false,
    "createdBy": {
      "_id": "6855a4ed00e7ecdd28503bf4",
      "name": "Content Creator",
      "email": "creator@prodmanage.com"
    },
    "createdAt": "2025-06-20T20:15:30.000Z",
    "updatedAt": "2025-06-20T20:15:30.000Z"
  },
  {
    "_id": "6855d1111111111111111111",
    "title": "Mechanical Keyboard RGB",
    "description": "Premium mechanical gaming keyboard with Cherry MX switches, full RGB backlighting, and programmable macro keys.",
    "price": 159.99,
    "image": "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
    "category": "Accessories",
    "inStock": true,
    "createdBy": {
      "_id": "6855a4ed00e7ecdd28503bf4",
      "name": "Gaming Expert",
      "email": "gaming@prodmanage.com"
    },
    "createdAt": "2025-06-20T21:30:45.000Z",
    "updatedAt": "2025-06-20T21:30:45.000Z"
  }
];

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    // Simulate realistic API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log('✅ Mock API: Successfully fetched products');
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: mockProducts });
  } catch (error) {
    console.error('❌ Mock API Error:', error);
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    toast.error('Failed to fetch products');
  }
};

export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Create a realistic new product
    const newProduct = {
      _id: `new_${Date.now()}`,
      title: productData.title?.trim() || 'New Product',
      description: productData.description?.trim() || 'Product description',
      price: parseFloat(productData.price) || 0,
      image: productData.image?.trim() || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
      category: productData.category?.trim() || 'General',
      inStock: true,
      createdBy: {
        _id: "6855a4ed00e7ecdd28503bf4",
        name: "Current User",
        email: "user@prodmanage.com"
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    console.log('✅ Mock API: Product created successfully', newProduct);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: newProduct });
    toast.success('Product created successfully!');
  } catch (error) {
    console.error('❌ Mock API Create Error:', error);
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
    toast.error('Failed to create product');
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create updated product data
    const updatedProduct = {
      _id: id,
      title: productData.title?.trim(),
      description: productData.description?.trim(), 
      price: parseFloat(productData.price),
      image: productData.image?.trim(),
      category: productData.category?.trim(),
      inStock: productData.inStock !== undefined ? productData.inStock : true,
      createdBy: {
        _id: "6855a4ed00e7ecdd28503bf4",
        name: "Current User",
        email: "user@prodmanage.com"
      },
      updatedAt: new Date().toISOString()
    };

    console.log('✅ Mock API: Product updated successfully', updatedProduct);
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: updatedProduct });
    toast.success('Product updated successfully!');
  } catch (error) {
    console.error('❌ Mock API Update Error:', error);
    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
    toast.error('Failed to update product');
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_R