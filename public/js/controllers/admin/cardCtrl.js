angular.module( "GamifyDevMountain" )
  .controller( "cardCtrl", function ( $scope, cardAdminSvc, badgeAdminSvc ) {

// commented out notes, on the improved notation
    // angular.module( "GamifyDevMountain" )
    //   .controller( "createBadgeModalCtrl", [ '$scope', '$location', 'close', 'categorySvc', 'adminStateSvc', function ( $scope, $location, close, categorySvc, adminStateSvc ) {

    var bas = badgeAdminSvc;
    var cas = cardAdminSvc;

// TODO   line below giving error: ask Tim why..."cannot read property 'badges' of undefined".. down box full of undefined full, objects.
    // $scope.newCard.badges.mileStone = null ;


    console.log( 'cardCtrl is logging' );
    $scope.badges = [];
    $scope.getCards = function () {
      cas.getCards()
        .then( function ( response ) {
          $scope.cards = response;
          console.log( $scope.cards, 'is cards' );
        } );
    }
    $scope.getCards();


    $scope.createCard = function ( card ) {
      cas.createCard( card )
        .then( function ( response ) {
          $scope.getCards();
          } );
    };


    // ############### Badges ################ \\
    $scope.badges = [];
    console.log( 'badgeCtrl is logging' );
    bas.getBadges()
      .then( function ( response ) {
        console.log( 'badges', response );
        $scope.badges = response;
      } );
    $scope.getBadges();


    $scope.newCard = {badges:[]};
    $scope.selectBadge = function (selectedBadge) {
      $scope.newCard.badges.push(selectedBadge);
    }





  } );






  // $scope.launchCardAdMo() = function(){
  //
  // };
