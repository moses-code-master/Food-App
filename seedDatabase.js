const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant'); // Import the Restaurant model

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Yobra:Yobraz123@mongo.7qh8f.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Hotel data
const hotels = [
  {
    name: 'Spring Wells',
    location: { type: 'Point', coordinates: [36.8219, -1.2921] }, // Example coordinates
    address: '123 Spring Wells Road, Nairobi',
    menu: [
      { name: 'Chicken Burger', price: 800 },
      { name: 'Fries', price: 300 },
      { name: 'Soda', price: 150 },
    ],
  },
  {
    name: 'Shekina Inn',
    location: { type: 'Point', coordinates: [36.8230, -1.2930] },
    address: '456 Shekina Street, Nairobi',
    menu: [
      { name: 'Pizza', price: 1200 },
      { name: 'Pasta', price: 900 },
      { name: 'Juice', price: 200 },
    ],
  },
  {
    name: 'Red Rose',
    location: { type: 'Point', coordinates: [36.8200, -1.2900] },
    address: '789 Red Rose Avenue, Nairobi',
    menu: [
      { name: 'Steak', price: 1500 },
      { name: 'Salad', price: 500 },
      { name: 'Wine', price: 1000 },
    ],
  },
  {
    name: 'Beehive',
    location: { type: 'Point', coordinates: [36.8250, -1.2950] },
    address: '101 Beehive Lane, Nairobi',
    menu: [
      { name: 'Chicken Wings', price: 700 },
      { name: 'Nachos', price: 400 },
      { name: 'Beer', price: 300 },
    ],
  },
  {
    name: 'Choma Zone',
    location: { type: 'Point', coordinates: [36.8180, -1.2880] },
    address: '202 Choma Zone Road, Nairobi',
    menu: [
      { name: 'Nyama Choma', price: 1000 },
      { name: 'Ugali', price: 200 },
      { name: 'Kachumbari', price: 150 },
    ],
  },
  {
    name: 'Down Park',
    location: { type: 'Point', coordinates: [36.8150, -1.2850] },
    address: '303 Down Park Avenue, Nairobi',
    menu: [
      { name: 'Fish and Chips', price: 900 },
      { name: 'Grilled Chicken', price: 1100 },
      { name: 'Soda', price: 150 },
    ],
  },
];

// Insert hotels into the database
Restaurant.insertMany(hotels)
  .then(() => {
    console.log('Hotels added to the database');
    mongoose.connection.close(); // Close the connection after inserting data
  })
  .catch((err) => {
    console.error('Failed to add hotels:', err);
    mongoose.connection.close(); // Close the connection if there's an error
  });