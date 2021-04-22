const indexRequests = require('../requests/indexRequests.js');

indexRequests.getByUsername('admin')
    .then(user => console.log(user))