angular.module("GamifyDevMountain").controller("adminBadgeCtrl", ['$scope', 'adminStateSvc', function($scope, adminStateSvc) {

  var aSvc = adminStateSvc;

      // ############### Badges ################ \\
      $scope.badges = [];
      console.log('adminBadgeCtrl is logging');
      aSvc.getBadges()
        .then( function ( response ) {
          console.log('badges', response);
          $scope.badges = response;
        } );


}]);



// public\js\controllers\admin\adminBadgeCtrl.js
