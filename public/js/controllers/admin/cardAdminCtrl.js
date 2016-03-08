angular.module( "GamifyDevMountain" )
  .controller( "cardAdminCtrl", function ( $scope, cardAdminSvc, badgeAdminSvc ) {

    // angular.module( "GamifyDevMountain" )
    //   .controller( "createBadgeModalCtrl", [ '$scope', '$location', 'close', 'categorySvc', 'adminStateSvc', function ( $scope, $location, close, categorySvc, adminStateSvc ) {


    // var bas = badgeAdminSvc;
    var cas = cardAdminSvc;
    console.log( 'cardAdminCtrl is logging' );
    $scope.badges = [];
    $scope.getCards = function () {
      cas.getCards()
        .then( function ( response ) {
          $scope.cards = response;
          console.log( $scope.cards, 'is cards' );
        } );
    }
    $scope.getCards();

    // $scope.launchCardAdMo() = function(){
    //
    // };

    $scope.createCard = function ( card ) {
      cas.createCard( card )
        .then( function ( response ) {
          $scope.getCards();
        } );
    };


    // ############### Badges ################ \\
  //   $scope.badges = [];
  //   console.log( 'adminBadgeCtrl is logging' );
  //   bss.getBadges()
  //     .then( function ( response ) {
  //       console.log( 'badges', response );
  //       $scope.badges = response;
  //     } );
  //
  //
  //   $scope.getBadges();
  } );
