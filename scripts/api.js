const api = (function () {
    function getItems() {
        return fetch(`${BASE_URL}/items`)
        //return Promise.resolve('A successful response!');
    }
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hubert'
    return {
        getItems
    };
} ()); 