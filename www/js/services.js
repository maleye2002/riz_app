angular.module('app.services', [])

  .factory('BlankFactory', [function(){

  }])

  .service('BlankService', [function(){

  }])

    .service('store', ['$window', function ($window) {
      var storeName = 'rizaa';
      var prevision = 'previsionaa';

      function cleanPlace(prevision) {
        if (!$window.localStorage[storeName]) { //init
          $window.localStorage[storeName] = {}
        }

        //add to store
        if (!$window.localStorage[storeName][prevision]) {
          $window.localStorage[storeName][prevision] = [];
        }
      }

      return {
        productionKey : 'toto',

        addPrevision: function (newItem){
          cleanPlace(prevision);
          //Add new item
          if(newItem){
            var store = this.get(storeName);
            store[prevision].append(newItem);
            this.set(storeName, store);
          }
        },
        getPrevisions: function (){
          cleanPlace(prevision);
          //Add new item
          var store = this.get(storeName);
          return store[prevision];

        },
        getPrevision: function (key){
          cleanPlace(prevision);
          //Add new item
          if(key){
            $window.localStorage[storeName][prevision].filter(function(){
            });
          }
        },
        get: function (key) {
          if ($window.localStorage [key]) {
            var cart = angular.fromJson($window.localStorage [key]);
            return JSON.parse(cart);
          }
          return false;
          //$windows.localStorage


        },


        set: function (key, val) {

          if (val === undefined) {
            $window.localStorage .removeItem(key);
          } else {
            $window.localStorage [key] = angular.toJson(val);
          }
          return $window.localStorage [key];
        }
      }
    }]
  );


