'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  /*api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });*/


  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);
    shoppingList.bindEventListeners();
    shoppingList.render();
  })
});

//store.items.push(Item.create('apples'));

/*api.getItems()
  .then(res => res.json())
  .then(jsonRes => console.log(jsonRes))
*/
console.log(api.getItems);