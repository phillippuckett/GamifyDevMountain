angular.module( "GamifyDevMountain" )
  .controller( "createBadgeModalCtrl", [ '$scope', '$location', 'close', 'categorySvc', 'adminStateSvc', function ( $scope, $location, close, categorySvc, adminStateSvc ) {


    $scope.createBadge = function(newBadge){
      console.log('newBadge', newBadge);
      newBadge.category = newBadge.category._id;
      adminStateSvc.createBadge(newBadge)
      .then(function(nb){
        console.log('new badge created', nb)
        $scope.dismissModal();
      })
    }


    categorySvc.getCategories()
      .then(
        function ( response ) {
          $scope.categories = response;
        } );
    $scope.close = close;

    $scope.dismissModal = function ( result ) {
      close( result, 200 );
    };

    $scope.dd = false;
    $scope.selectedBadgeImage = {};
    $scope.selectedBadgeImage.imageLocation = './../media/DMLogoTransparent.png';

    $scope.selectBI = function ( selectedBI ) {
      $scope.selectedBadgeImage = selectedBI;
      $scope.dd = false;
    }
    $scope.possiblePointValues = [
      {
        difficulty: 'easy',
        points: 5,
    }, {
        difficulty: 'medium',
        points: 10,
    }, {
        difficulty: 'hard',
        points: 20,
    }, {
        difficulty: 'expert',
        points: 40
    } ];




    //############## Dummy Data ##############\\

    $scope.images = [ {
      imageName: 'bart',
      imageLocation: './media/miscellaneous/Css100.png'
    }, {
      imageName: 'lisa',
      imageLocation: './media/miscellaneous/Css100inactive.png'
    }, {
      imageName: 'maggie',
      imageLocation: './media/awardEmblems/trophyBronze.png'
    }, {
      imageName: 'homer',
      imageLocation: './media/miscellaneous/logoonly.png'
    }, {
      imageName: 'marge',
      imageLocation: './media/Css100.png'
    } ];

  } ] );
