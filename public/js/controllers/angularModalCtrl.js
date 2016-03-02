angular.module( 'GamifyDevMountain' )
  .controller( 'modalCtrl', function ( $scope, $location, close ) {
    $scope.close = close;

    // $scope.dismissModal = function(result) {
    //    close(result, 200);
    // };
    $scope.confirmationAnswer = null;
    $scope.showAModal = function () {
      console.log( "showAModal is being called" );
      ModalService.showModal( {
          templateUrl: "./html/modals/createModal.html",
          controller: "adminCtrl"
        } )
        .then( function ( modal ) {
          //function that runs when modal closes
          modal.close.then( function ( then ) { // then will equal whatever happened to close it.
            $scope.confirmationAnswer = then;
            console.log( 'where is then?' );
            console.log( then ); // logs user to the console
          } );
        } );
    };

  } );


// , mainSvc, adminStateSvc, angular-modal-service
// , key
