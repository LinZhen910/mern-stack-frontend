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

const API_BASE_URL = 'http://localhost:5001/api';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await fetch(`${API_BASE_URL}/products/public`);
    const data = await response.json();
    console.log('API Response:', data); // 临时调试
    
    if (response.ok) {
      // 确保传递的是产品数组，不是整个响应对象
      const products = data.data || data;
      console.log('Products array:', products); // 临时调试
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
    } else {
      throw new Error(data.message || 'Failed to fetch products');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    toast.error('Failed to fetch products');
  }
};

export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
      toast.success('Product created successfully!');
    } else {
      throw new Error(data.message || 'Failed to create product');
    }
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
    toast.error('Failed to create product');
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
      toast.success('Product updated successfully!');
    } else {
      throw new Error(data.message || 'Failed to update product');
    }
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
    toast.error('Failed to update product');
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
      toast.success('Product deleted successfully!');
    } else {
      const data = await response.json();
      throw new Error(data.message || 'Failed to delete product');
    }
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    toast.error('Failed to delete product');
  }
};