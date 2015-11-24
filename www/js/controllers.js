angular.module('app.controllers', [])
//, $timeou
    .controller('loginCtrl', function($scope, store, $state,$http, $ionicPopup) {
        $scope.user={};
        $scope.connexion = function () {
            var test = store.getCredential();
            if(($scope.user.userName == test.UserName) &&  ($scope.user.pwd == test.NewPwd)) {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'connexion  etablie',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-balanced'

                        }]
                });
                $state.go('home');

            }
            else {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Valeurs saisies incorrectes',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-assertive'

                    }]
                });
            }


        }
        $scope.testConnection = function() {

            $ionicPopup.alert({
                title: 'Cyber-Riz',
                template: 'Valeurs saisies incorrectes',
                buttons: [{
                    text: 'Ok',
                    type: 'button-assertive'

                }]
            });
            $state.go('signup');



        }
        $scope.EditCnx = function (){
         $state.go('EditCompte.page1');
        }
    })

    .controller('signupCtrl', function($scope,store,$state) {

        $scope.user= {};

        $scope.signUp= function ()
        {

                store.setCredential($scope.user);
               $state.go('login');
        }





    })

    .controller('homeCtrl', function($scope,$http, store, $ionicPopup, $timeout ) {
        $scope.message = null;
        //http://localhost:63342/riz_app/www/api.json
        var data = store.getStore();
        console.log(JSON.stringify(data));
        $scope.message = {};
        $scope.uploadData = function (){
            var data = {data: store.getStore()};
            $http.post('https://cyber-riz-ameth.c9users.io/pages/bridge.php',data)
                .then(function(resp) {
                    //$scope.conditions = resp.data.conditions;
                    $scope.message={msg:'sddsds', nClass:'button button-small button-full button-balanced'};
                   // store.updateStore({});
                    alert(data);
                    console.log(store.getStore(), $scope.message);

                }, function(err) {
                    console.error('ERR', err);
                    $scope.message={msg:'sddsds', nClass:'button button-small button-full button-assertive'};
                    // err.status will contain the status code
                });


            //$http.post('https://cyber-riz-ameth.c9users.io/pages/api.php')
        }
    })

    .controller('previsionsCtrl', function($scope,$state, store) {
        $scope.prevision = {};
        $scope.addPrevision = addPrevision;

        function addPrevision(){
            store.addPrevision($scope.prevision);
            $scope.prevision = {};
            $state.go('home');
        }

    })

    .controller('stockCtrl', function($scope,$state,store) {
        $scope.stock = {};
        $scope.addStock = addStock;

        function addStock(){
            store.addStock($scope.stock);
            $scope.stock = {};
            $state.go('home');
        }
    })

    .controller('produitCtrl', function($scope,$state,store) {
        $scope.produit = {};
        $scope.addProduit = addProduit;

        function addProduit(){
            store.addProduit($scope.produit);
            $scope.stock = {};
            $state.go('home');
        }
    })

    .controller('archivePrevisionCtrl', function($scope,store) {
        $scope.ListStore =  store.getStore();
      $scope.ListPrevision = $scope.ListStore.prevision;
        console.log(store.getStore().prevision);

        $scope.deletePrevision = function(id)
       {
           $scope.ListStore.prevision.splice(id, 1);

           //store.getStore().prevision = $scope.ListPrevision;
           console.log( $scope.ListStore );
           store.updateStore($scope.ListStore);
           console.log(store.getStore());


       }

    })
    .controller('archiveRecolteCtrl', function($scope,store) {
        $scope.ListStore =  store.getStore();
        $scope.ListStock = $scope.ListStore.stock;
        console.log(store.getStore().stock);

        $scope.deleteStock = function(id)
        {
            $scope.ListStore.stock.splice(id, 1);

            //store.getStore().prevision = $scope.ListPrevision;
            console.log( $scope.ListStore );
            store.updateStore($scope.ListStore);
            console.log(store.getStore());


        }

    })
    .controller('archiveProduitCtrl', function($scope,store) {
        $scope.ListStore =  store.getStore();
        $scope.ListProduit = $scope.ListStore.produit;
        console.log(store.getStore().produit);

        $scope.deleteProduit = function(id)
        {
            $scope.ListStore.produit.splice(id, 1);

            //store.getStore().prevision = $scope.ListPrevision;
            console.log( $scope.ListStore );
            store.updateStore($scope.ListStore);
            console.log(store.getStore());


        }

    })
    .controller('EditCtrl', function($scope,store,$state,$ionicPopup) {
        $scope.user={};
        $scope.newUser = {};
        $scope.Suivant= function(){
            var test = store.getCredential();
            if(($scope.user.userName == test.UserName) &&  ($scope.user.pwd == test.NewPwd))
            {
                $state.go('EditCompte.page2');

            }
            else
            {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Valeurs saisies incorrectes',
                    buttons: [{
                        text: 'Cancel',
                        type: 'button-assertive'

                    }]
                });



        }
        }

        $scope.NewCompte = function(){

store.setCredential($scope.newUser);
            $ionicPopup.alert({
                title: 'Cyber-Riz',
                template: 'Votre Profil a ete change avec succes',
                buttons: [{
                    text: 'Ok',
                    type: 'button-balanced'

                }]
            });


            $state.go('login');

        }

    })
