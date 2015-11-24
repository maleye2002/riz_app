angular.module('app.controllers', [])

    .controller('loginCtrl', function($scope, store, $state,$http) {
        $scope.user={};
        console.log(store.getCredential());
        $scope.connexion = function ()
        {
            var test = store.getCredential();
            if(($scope.user.userName == test.UserName) &&  ($scope.user.pwd == test.NewPwd))
            {
                $state.go('home');
                console.log('cool');
            }
            else
            { console.log('Not cool')}

            console.log(store.getCredential());
        }
        $scope.testConnection = function() {
            $http.get('http://www.google.com')
                .then(function(resp) {
                    //$scope.conditions = resp.data.conditions;
                   console.log(resp);
                }, function(err) {
                    console.error('ERR', err);
                   alert(err);
                    // err.status will contain the status code
                });

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

    .controller('homeCtrl', function($scope,$http, store ) {
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
                    alert (data);
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
    .controller('EditCtrl', function($scope,store,$state) {
        $scope.user={};
        $scope.newUser = {};
        $scope.Suivant= function(){
            var test = store.getCredential();
            if(($scope.user.userName == test.NewUserName) &&  ($scope.user.pwd == test.NewPwd))
            {
                $state.go('EditCompte.page2');

            }
            else
            {
                alert ('Valeurs incorrectes');



        }
        }

        $scope.NewCompte = function(){

store.setCredential($scope.newUser);
            alert('success');
            console.log($scope.newUser);
            $state.go('login');

        }

    })
