const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const database = 'recipes'

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connected to: ${database}`))
    .catch(err => console.log('Failed connection to DB, error: ', err));
