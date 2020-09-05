const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://admin:angelEarth96@cluster0.t5xui.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  .then(db=>console.log('DB is connected'))
  .catch(err=>console.error(err));

