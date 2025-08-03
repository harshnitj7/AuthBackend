const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connected"))
.catch(err=>console.error(err));

app.use('/api/auth',authRoutes);
const protectedRoutes = require('./routes/protected');
app.use('/api', protectedRoutes);

app.listen(5000,()=>console.log("Server is on port 5000"));
