const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require("dotenv").config();
// MongoDB connection string (from Atlas or local setup)
const dbURI = process.env.MONGODB_URI // Replace with your MongoDB URI
app.get('/', (req, res) => {
    res.send('Welcome to QR Code API!');
});
mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Could not connect to MongoDB...', err);
        process.exit(1);
    });

    const listSchema = new mongoose.Schema({
        allowedList: {
            type: [String],  // This means allowedList is an array of strings
            required: true   // This ensures that allowedList must be provided
        },
        notAllowedList: {
            type: [String],  // This means notAllowedList is also an array of strings
            required: true   // This ensures that notAllowedList must be provided, even if empty
        }
    });
    const QRLists = mongoose.model('idnumbers', listSchema);
    app.get('/get-lists', async (req, res) => {
        try {
          const lists = await QRLists.findOne({});
          if (!lists) {
            return res.status(404).json({ message: 'Lists not found' });
          }
          res.json({ allowedList: lists.allowedList, notAllowedList: lists.notAllowedList });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
      // POST route to update allowedList or notAllowedList after QR scan

app.post('/update-lists', async (req, res) => {
  const { allowedList: updatedAllowedList, notAllowedList: updatedNotAllowedList } = req.body;

  try {
      // Find the existing lists and update them in the MongoDB database
      const lists = await QRLists.findOneAndUpdate({}, {
          allowedList: updatedAllowedList,
          notAllowedList: updatedNotAllowedList
      }, { new: true });

      if (!lists) {
          return res.status(404).json({ message: 'Lists not found' });
      }

      res.json({ message: 'Lists updated successfully', lists });
  } catch (error) {
      console.error('Error updating lists:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

      

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});