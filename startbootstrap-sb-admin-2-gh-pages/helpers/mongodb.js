const mongoose = require('mongoose');

const checkConnection = () => {
  return mongoose.connection.readyState;
};

const connect = async () => {
  try {
    if (!checkConnection()) {
      console.log('Connecting...');
      await mongoose.connect('mongodb+srv://admin:angelEarth96@cluster0.t5xui.mongodb.net/<dbname>?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
    }
    console.log('Connected successfully');
  } catch (error) {
    console.error(error);
  }
};

const disconnect = async () => {
  await mongoose.connection.close();
  return checkConnection();
};

module.exports = { connect, checkConnection, disconnect };