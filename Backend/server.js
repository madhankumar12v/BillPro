
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/invoices', require('./routes/invoices'));
app.use('/api/products', require('./routes/products'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/reports', require('./routes/reports'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
  );
}).catch(err => console.error(err));
