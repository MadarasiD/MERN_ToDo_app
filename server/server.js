require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());



// Express konfiguráció
app.use(express.json());

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

// MongoDB adatbázis csatlakozás
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Sikeres adatbázis csatlakozás');
    })
    .catch((error) => {
      console.error('Hiba történt az adatbázis csatlakozásakor:', error);
    });

// Szerver indítása
app.listen(process.env.PORT, () => {
    console.log('listening on port 5000');
  });

process.env