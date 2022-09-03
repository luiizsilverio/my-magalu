const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('Hello My-Magalu!'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('My-Magalu Server running on port', port);
});
