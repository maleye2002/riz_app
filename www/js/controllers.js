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


        };
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

    .controller('homeCtrl', function($scope,$http, store, $ionicPopup, $timeout, $state ) {
        $scope.message = null;
        //http://localhost:63342/riz_app/www/api.json
        var data = store.getStore();
        console.log(JSON.stringify(data));
        $scope.message = {};
        $scope.viderStore = viderStore;
        
        $scope.uploadData = function (){
            var data = {data: store.getStore()};
            $http.post('https://cyber-riz-ameth.c9users.io/pages/post_all_data.php',data)
                .then(function(resp) {
                    //$scope.conditions = resp.data.conditions;
                    if(  resp.data.form_1 && resp.data.form_1.error == 0  && 
                         resp.data.form_2 && resp.data.form_2.error == 0  &&
                         resp.data.form_3 && resp.data.form_3.error == 0) {
                        $scope.message={msg:'Mise à jour effectuée', nClass:'button button-small button-full button-balanced'};
                        store.updateStore({});
                    }else{
                        $scope.message={msg:'Erreur lors de la mise à jour', nClass:'button button-small button-full button-assertive'};
                    }
                   // alert(data);
                    console.log(store.getStore(), resp);

                }, function(err) {
                    //console.error('ERR', err);
                    $scope.message={msg:'Erreur lors de la mise à jour', nClass:'button button-small button-full button-assertive'};
                    console.log(err);
                    // err.status will contain the status code
                });
            //$http.post('https://cyber-riz-ameth.c9users.io/pages/api.php')
        };
        
        function viderStore(){
            store.updateStore({});
            $state.go('home', {reload:true});
        }
    })

    .controller('previsionsCtrl', function($scope,$state, store,$ionicPopup) {
        $scope.prevision = {};
        $scope.addPrevision = addPrevision;
        $scope.NextStep = nextStep;

  function nextStep(form,link){

      if(form.$valid) {
          $state.go(link);
      }

  }
        $scope.signIn = function(form) {
            if(form.$valid) {
                $state.go('previsions.page2');
            }
            else
            {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Saisir toutes les champs SVP ',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-assertive'

                    }]
                });
            }
        };
        function addPrevision(form){

            if(form.$valid) {
                store.addPrevision($scope.prevision);
                $scope.prevision = {};
                $state.go('home');
            }
            else
            {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Saisir toutes les champs SVP ',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-assertive'

                    }]
                });
            }

        }

    })

    .controller('stockCtrl', function($scope,$state,store,$ionicPopup) {
        $scope.stock = {};
        $scope.addStock = addStock;
        $scope.sign = function(form) {
            if(form.$valid) {
                $state.go('stock.page2');
            }
            else
            {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Saisir toutes les champs SVP ',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-assertive'

                    }]
                });
            }
        };
        function addStock(form){


            if(form.$valid) {
                store.addStock($scope.stock);
                $scope.stock = {};
                $state.go('home');
            }
            else
            {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Saisir toutes les champs SVP ',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-assertive'

                    }]
                });
            }
        }
    })

    .controller('produitCtrl', function($scope,$state,store,$ionicPopup) {
        $scope.produit = {};
        $scope.addProduit = addProduit;
        $scope.signIn = function(form) {
            if(form.$valid) {
                $state.go('produit.page2');
            }
            else
            {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Saisir toutes les champs SVP ',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-assertive'

                    }]
                });
            }
        };
        $scope.sign = function(form) {
            if(form.$valid) {
                $state.go('produit.page3');
            }
            else
            {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Saisir toutes les champs SVP ',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-assertive'

                    }]
                });
            }
        };
        function addProduit(form){

            if(form.$valid) {
                store.addProduit($scope.produit);
                $scope.stock = {};
                $state.go('home');
            }
            else
            {
                $ionicPopup.alert({
                    title: 'Cyber-Riz',
                    template: 'Saisir toutes les champs SVP ',
                    buttons: [{
                        text: 'Ok',
                        type: 'button-assertive'

                    }]
                });
            }
        }

    })

    .controller('archivePrevisionCtrl', function($scope,store,$ionicPopup,$ionicModal) {

        $scope.ListStore =  store.getStore();
      $scope.ListPrevision = $scope.ListStore.prevision;
        console.log(store.getStore().prevision);

        $scope.deletePrevision = function(id){
           $scope.ListStore.prevision.splice(id, 1);

           //store.getStore().prevision = $scope.ListPrevision;
           console.log( $scope.ListStore );
           store.updateStore($scope.ListStore);
           console.log(store.getStore());
       };
        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {

            $scope.modal.show();

        };
        $scope.ModalPrint = function(data){
             $scope.modal.show();
            $scope.item = data;

            return $scope.item ;

        }

        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

    })
    .controller('archiveRecolteCtrl', function($scope,store,$ionicModal) {
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
        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {

            $scope.modal.show();

        };
        $scope.ModalPrint = function(data){
            $scope.modal.show();
            $scope.item= data;

            return $scope.item ;

        }

        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

    })
    .controller('archiveProduitCtrl', function($scope,store,$ionicModal) {
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
        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $ionicModal.fromTemplateUrl('modalRiz.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {

            $scope.modal.show();

        };
        $scope.ModalPrint = function(data){
            $scope.modal.show();
            $scope.item= data;
            return $scope.item ;

        }

        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });
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
