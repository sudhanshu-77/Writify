import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
})
.then(() => {
  console.log('MongoDB Atlas connected !!');
})
.catch((err) => {
  console.log(err);
});

const __dirname = path.resolve();

const app = express();
app.use(express.json());

// cookie parser
app.use(cookieParser());

app.listen(3000, () => {
  console.log(`Server started at 3000`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// post routes
app.use('/api/post', postRoutes);

// comment routes    
app.use('/api/comment', commentRoutes);

// Serve static assets if in production
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
