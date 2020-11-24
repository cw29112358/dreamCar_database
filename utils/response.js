const moment = require('moment');

const Response = (status = 'fail', message = '') => ({
    status,
    message,
    timeStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
})

module.exports = Response;
