angular.module( "GamifyDevMountain" )
  .controller( "createModalCtrl", function ( $scope, $location, close ) {

    $scope.close = close;

    $scope.dismissModal = function ( result ) {
      close( result, 200 );
    };

    $scope.dd = false;
    $scope.selectedBadgeImage = {};
    $scope.selectedBadgeImage.imageLocation = './../media/DMLogoTransparent.png';

    $scope.selectBI = function(selectedBI){
      $scope.selectedBadgeImage = selectedBI;
      $scope.dd = false;
    }




    //############## Dummy Data ##############\\

    $scope.images = [ {
      imageName: 'bart',
      imageLocation: './media/Css100.png'
    }, {
      imageName: 'lisa',
      imageLocation: './media/Css100inactive.png'
    }, {
      imageName: 'maggie',
      imageLocation: './media/bronzetrophy.png'
    }, {
      imageName: 'homer',
      imageLocation: './media/logoonly.png'
    }, {
      imageName: 'marge',
      imageLocation: './media/Css100.png'
    } ];

  } );
