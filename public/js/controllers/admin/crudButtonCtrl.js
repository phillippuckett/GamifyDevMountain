angular.module( "GamifyDevMountain" )
  .controller( "crudButtonCtrl", function ( $scope, $location, ModalService, mainSvc ) {


    var ms = mainSvc;
    // $scope.dismissModal = function(result) {
    //    close(result, 200);
    // };

    /* Modal Switcher, changes functionality of crudButton based on which view is active. */
    $scope.confirmationAnswer = null;
    $scope.showAModal = function () {
      console.log( "showAModal is being called" );

      // // the switch statements wer working in conjunction with the mainSvc to enable me to use the same crud bottons to control each modal depending on which directive is in the adminView.
      // var switcher = ms.toggleDirs();
      // switch ( switcher ) {
      //
      // case students:
      //   ModalService.showModal( {
      //     templateUrl: "/html/modals/createBadgeModal.html",
      //     controller: "createBadgeModalCtrl"
      //   } )
      //   break;
      //
      // case badgeAdmin:
      //   ModalService.showModal( {
      //     templateUrl: "/html/modals/createBadgeModal.html",
      //     controller: "createBadgeModalCtrl"
      //   } )
      //   break;
      //
      // case cohorts:
      //   ModalService.showModal( {
      //     templateUrl: "/html/modals/createBadgeModal.html",
      //     controller: "createBadgeModalCtrl"
      //   } )
      //   break;
      //
      // case cardAdmin:
      //   ModalService.showModal( {
      //     templateUrl: "/html/modals/createBadgeModal.html",
      //     controller: "createBadgeModalCtrl"
      //   } )
      //   break;
      //
      // case poptart:
      //   ModalService.showModal( {
      //     templateUrl: "/html/modals/createBadgeModal.html",
      //     controller: "createBadgeModalCtrl"
      //   } )
      //   break;
      //
      // case curriculumAdmin:
      //   ModalService.showModal( {
      //     templateUrl: "/html/modals/createBadgeModal.html",
      //     controller: "createBadgeModalCtrl"
      //   } )
      //   break;
      //
      // case categoryAdmin:
      //   ModalService.showModal( {
      //     templateUrl: "/html/modals/createBadgeModal.html",
      //     controller: "createBadgeModalCtrl"
      //   } )
      //   break;
      //
      // case hideLogo:
      //   ModalService.showModal( {
      //     templateUrl: "/html/modals/createBadgeModal.html",
      //     controller: "createBadgeModalCtrl"
      //   } )
      //   break;
//
      // default: hideLogo;
      //
      // }
      ModalService.showModal( {
          templateUrl: "/html/modals/createBadgeModal.html",
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

  } );
