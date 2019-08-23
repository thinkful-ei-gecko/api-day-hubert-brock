'use strict';

const api = (function () {


  function getItems() {
    return fetch(`${BASE_URL}/items`);
    //return Promise.resolve('A successful response!');
  }

  const createItem = function(name) {
    const newItem = JSON.stringify({name});
    return fetch(`${BASE_URL}/items`,{
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
  };

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hubert';
  return {
    getItems,
    createItem
  };
} ()); 