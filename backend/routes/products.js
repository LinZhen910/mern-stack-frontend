const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const Product = require('../models/Product');

// @route   GET /api/products/public
// @desc    Get all products (public access for frontend)
// @access  Public
router.get('/public', async (req, res) => {
  try {
    const products = await Product.find({}).populate('createdBy', 'name email').sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error('Get public products error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching products'
    });
  }
});

// Apply authentication middleware to all routes below
router.use(protect);

// @route   GET /api/products
// @desc    Get all products with pagination, sorting, and search
// @access  Private
// Query parameters:
//   - page: Page number (default: 1)
//   - limit: Items per page (default: 10)
//   - sort: Sort field (default: -createdAt)
//     Examples: price, -price, title, -title, createdAt, -createdAt
//   - keyword: Search keyword for title, description, or category
//     Example: /api/products?page=1&limit=5&sort=price&keyword=laptop
router.get('/', getProducts);

// @route   POST /api/products
// @desc    Create new product
// @access  Private
router.post('/', createProduct);

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Private
router.get('/:id', getProduct);

// @route   PUT /api/products/:id
// @desc    Update product (only owner or admin)
// @access  Private
router.put('/:id', updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete product (only owner or admin)
// @access  Private
router.delete('/:id', deleteProduct);

module.exports = router;