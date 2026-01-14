const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Backend API' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'UP', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
