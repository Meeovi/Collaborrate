const axios = require('@nuxtjs/axios');

axios({
    url: 'http://localhost:4000/graphql',
    method: 'post',
    data: null
}).then((result) => {
    console.log(result.data)
});

