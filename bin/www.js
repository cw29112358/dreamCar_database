// require
const config = require('config');
const dbConfig = config.get('Customer.dbConfig');

const app = require('../app');

// listening
app.listen(dbConfig.testPort, () => console.log(`app listening on port ${dbConfig.testPort}`));
