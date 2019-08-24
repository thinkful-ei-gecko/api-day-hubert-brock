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

  const updateItem = function(id, updateData) {
    const newData = JSON.stringify(updateData);
    console.log(newData);
    return fetch(`${BASE_URL}/items/${id}`,{
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newData
    });
  };

  const deleteItem = function(id) {
    return fetch(`${BASE_URL}/items/${id}`,{
      method: 'DELETE'
    });
  }

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hubert';
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
} ()); 