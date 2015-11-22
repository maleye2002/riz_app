angular.module('app.services', [])

  .factory('BlankFactory', [function(){

  }])

    .factory('$localstorage', ['$window', function($window) {
      return {
        set: function(key, value) {
          $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
          return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
          $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
          return JSON.parse($window.localStorage[key] || '{}');
        }
      }
    }])

  .service('BlankService', [function(){

  }])

    .service('store', ['$localstorage', function ($localstorage) {
      var storeName = 'riz';
      var prevision = 'prevision', recolte = 'recolte', usine='usine';
      var credentials = 'credentials';

      function cleanStore(prevision) {
        //add to store
        var store = $localstorage.getObject(storeName);
        if (!store[prevision] || ! store[prevision] instanceof Array ) {
          store[prevision] = [];
          $localstorage.setObject(storeName, store)
        }
      }

      return {
        productionKey: 'toto',
        getStore: function () {
          return $localstorage.getObject(storeName);
        },
        updateStore: function (newStore) {
          $localstorage.setObject(storeName, newStore)
        },

        getCredential: function(){
          var store = this.getStore();
          return store[credentials] || {};
        },
        setCredential: function(userCredentials){
          var store = this.getStore();
          store[credentials] = userCredentials;
          this.updateStore(store);
        },

        addPrevision: function (newItem) {
          this.addNewItem(newItem, prevision);
        },
        addRecolte: function (newItem) {
          this.addNewItem(newItem, recolte);
        },
        addUsine: function (newItem) {
          this.addNewItem(newItem, usine);
        },
        addNewItem: function (newItem, sectionName) {
          cleanStore(sectionName);
          //Add new item
          if (newItem) {
            var store = this.getStore();
            store[sectionName].append(newItem);
            this.updateStore(store);
          }
        },

        getItems: function(sectionName){
          var store = this.getStore();
          return store[sectionName];
        },

        getItem: function(id, sectionName){
          var items = this.getItems(sectionName);
          if(items){
            //TODO SEARCH ITEM HERE
            return {};
          }
        }
      }
    }]
  );


