const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();



const app = express();
app.use(cors());
const PORT = 3001;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Backend API SAI KIRAN' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'UP', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
