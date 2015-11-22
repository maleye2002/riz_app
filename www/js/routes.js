angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page8',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page9',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('home', {
      url: '/page10',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
        
      
    
      
        
    .state('previsions', {
      url: '/page11',
      templateUrl: 'templates/previsions.html',
      controller: 'previsionsCtrl'
    })
        
      
    
      
        
    .state('stock', {
      url: '/page12',
      templateUrl: 'templates/stock.html',
      controller: 'stockCtrl'
    })
        
      
    
      
        
    .state('produit', {
      url: '/page13',
      templateUrl: 'templates/produit.html',
      controller: 'produitCtrl'
    })
        
      
    
      
        
    .state('previsionsSuite', {
      url: '/page14',
      templateUrl: 'templates/previsionsSuite.html',
      controller: 'previsionsSuiteCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page8');

});