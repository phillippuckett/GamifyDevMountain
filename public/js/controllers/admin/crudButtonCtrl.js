angular.module("GamifyDevMountain").controller("crudButtonCtrl", function($scope, $location, ModalService) {

  // $scope.dismissModal = function(result) {
  //    close(result, 200);
  // };
  $scope.confirmationAnswer = null;
  $scope.showAModal = function () {
    console.log( "showAModal is being called" );
    ModalService.showModal( {
        templateUrl:"/html/modals/createBadgeModal.html",
        controller: "createBadgeModalCtrl"
      } )
      .then( function ( modal ) {
        //function that runs when modal closes
        modal.close.then( function ( then ) { // then will equal whatever happened to close it.
          $scope.confirmationAnswer = then;
          console.log( then ); // logs user to the console
        } );
      } );
  };

});
