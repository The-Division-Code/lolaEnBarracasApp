const axios = require('axios');
const defaults = require('./default.js');

const usersRequest = {

    getAll: () => {

        return axios({

            ...defaults,
            method: 'GET',
            url: '/index'
        });
    },
    getByUsername: (username) => {

        return axios({

            ...defaults,
            method: 'GET',
            url: `/index/${username}`
        })
    }
}

module.exports = usersRequest;