'use strict';
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function(){

  const setError = function(error) {
    this.error = error;
  }

  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const findAndUpdate = function(id, newData) {
    let findId = this.findById(id);
    return Object.assign(findId, newData);
  }

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    addItem,
    findById,
    findAndDelete,
    findAndUpdate,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    setError
  };
  
}());
