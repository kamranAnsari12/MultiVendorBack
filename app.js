const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

// Initialize express app
