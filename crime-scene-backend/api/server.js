const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const logRoutes = require('./routes/logs');
const evidenceRoutes = require('./routes/evidence');
const cors=require('cors');



const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
    origin:'*',
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin","Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
    credentials: true,
    enablePreflight: true
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))
// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes
app.use('/api/user', userRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/evidence', evidenceRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://harika:Harika@cluster0.kg2cx0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
