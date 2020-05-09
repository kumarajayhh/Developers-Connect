const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ajay123:ajay123@developerconnect-gqniu.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    console.log('mongo connected');
  } catch (error) {
    console.log('mongo error', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
