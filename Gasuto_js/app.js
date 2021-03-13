const express = require('express');
const errorHandler = require('./middlewares/errors');

const app = express();

const apiRoutes = require('./routes');

// Use express json
app.use(express.json());

// Use api routes
app.use(apiRoutes);

// Use error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error [UHP]: ${err.message}`.red.underline);
  // Close server connection
  server.close(() => process.exit(1));
});

// End All
