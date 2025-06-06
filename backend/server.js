const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for products
let products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High-quality noise-cancelling wireless headphones with premium sound quality.",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Advanced fitness tracking smartwatch with heart rate monitoring.",
    price: 80.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Laptop",
    description: "Powerful laptop with 14-inch Full HD display and 256GB SSD.",
    price: 600.00,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop"
  }
];

const generateId = () => products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'ProdManager API is running!', 
    timestamp: new Date().toISOString(),
    products_count: products.length 
  });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.post('/api/products', (req, res) => {
  const { title, description, price, image } = req.body;
  
  if (!title || !description || !price || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const newProduct = {
    id: generateId(),
    title: title.trim(),
    description: description.trim(),
    price: parseFloat(price),
    image: image.trim()
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  
  const { title, description, price, image } = req.body;
  const updatedProduct = {
    id,
    title: title.trim(),
    description: description.trim(),
    price: parseFloat(price),
    image: image.trim()
  };
  
  products[index] = updatedProduct;
  res.json(updatedProduct);
});

app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  
  products.splice(index, 1);
  res.json({ message: 'Product deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`🚀 ProdManager API Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📦 Products API: http://localhost:${PORT}/api/products`);
});
