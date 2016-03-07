angular.module( "GamifyDevMountain" )
  .controller( "adminBadgeCtrl", [ '$scope', 'adminStateSvc', function ( $scope, adminStateSvc ) {

    var ass = adminStateSvc;

    // ############### Badges ################ \\
    $scope.badges = [];
    console.log( 'adminBadgeCtrl is logging' );
    ass.getBadges()
      .then( function ( response ) {
        console.log( 'badges', response );
        $scope.badges = response;
      } );

    $scope.updateBadge = function ( id, updatedBadge ) {
      $scope.getBadges( id, updateBadge )
        .then( function ( response ) {
          $scope.getBadges();
        } );
    }

} ] );



// public\js\controllers\admin\adminBadgeCtrl.js
