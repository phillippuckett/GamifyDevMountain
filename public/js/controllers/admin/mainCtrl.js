angular.module( "GamifyDevMountain" )
  .controller( "mainCtrl", function ( $scope, $state ) {
    $scope.mainCtrl = 'mainCtrl';

    $scope.test = 'testing from mainCtrl';
    $scope.activeDir = {};
    $scope.toggleDirs = function ( selectedDir ) {
      console.log('testing from toggleDirs');
      $scope.activeDir.students = false;
      $scope.activeDir.badgeAdmin = false;
      $scope.activeDir.cohorts = false;
      $scope.activeDir.cardAdmin = false;
      $scope.activeDir.poptart = false;
      $scope.activeDir.curriculumAdmin = false;
      $scope.activeDir.categoryAdmin = false;
      $scope.activeDir.hideLogo = true;
      $scope.activeDir[ selectedDir ] = true;
      console.log(selectedDir);
    };













    // $scope.user = {};
    // temporarily removed authSvc from injection, it was causing errors.
  // $scope.user = {};
    // $scope.login = function () {
    //     authSvc.login($scope.user).then(function () {
    //         $state.go('main');
    //     }).catch(function (err) {
    //         if (err.status === 401) {
    //             alert('Invalid User Log In');
    //         } else {
    //             console.error(err);
    //         }
    //     });
    // };

  } );
