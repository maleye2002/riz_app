angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, $localstorage, $state) {
    $scope.user = {};
    $scope.connexion = function ()
    {
        $localstorage.setObject('Connexion', $scope.user);
        $state.go('home');
    }
  })





.controller('signupCtrl', function($scope) {

})

.controller('homeCtrl', function($scope, store) {
 // $scope.store = store.getPrevisions();
        var test =    store.getStore();
        console.log(test);
})

.controller('previsionsCtrl', function($scope, store) {
    $scope.prevision = {};
    $scope.addPrevision = addPrevision;

    function addPrevision(){
      store.addPrevision($scope.prevision);
      $state.go('home');
    }

})

.controller('stockCtrl', function($scope) {

})

.controller('produitCtrl', function($scope) {

})

.controller('previsionsSuiteCtrl', function($scope) {

});
