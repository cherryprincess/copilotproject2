import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Sample data for travel packages
const packages = [
  { id: 1, name: 'Beach Paradise', location: 'Maldives', price: 1200 },
  { id: 2, name: 'Mountain Adventure', location: 'Switzerland', price: 1500 },
  { id: 3, name: 'City Lights', location: 'New York', price: 1000 }
];

// API endpoint to get all packages
app.get('/api/packages', (req, res) => {
  res.json(packages);
});

// API endpoint to get a package by ID
app.get('/api/packages/:id', (req, res) => {
  const pkg = packages.find(p => p.id === parseInt(req.params.id));
  if (pkg) {
    res.json(pkg);
  } else {
    res.status(404).json({ error: 'Package not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
