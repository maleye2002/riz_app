angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {
    $scope.user = {};
    $scope.test = function ()
    {
      alert ($scope.user.userName);
    }
  })





.controller('signupCtrl', function($scope) {

})

.controller('homeCtrl', function($scope, store) {
  $scope.store = store.getPrevisions();
})

.controller('previsionsCtrl', function($scope, store) {
    $scope.prevision = {};
    $scope.addPrevision = addPrevision;

    function addPrevision(){
      store.addPrevision($scope.prevision);
      //$state.go('');
    }

})

.controller('stockCtrl', function($scope) {

})

.controller('produitCtrl', function($scope) {

})

.controller('previsionsSuiteCtrl', function($scope) {

});
