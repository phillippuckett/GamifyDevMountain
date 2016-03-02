angular.module( "GamifyDevMountain" )
  .controller( "createModalCtrl", function ( $scope, $location, close ) {

    $scope.close = close;

    $scope.dismissModal = function ( result ) {
      close( result, 200 );
    };

    $scope.dd = false;
    $scope.selectedBadgeImage = null;
    $scope.selectBI = function(selectedBI){
      $scope.selectedBadgeImage = selectedBI;
      console.log($scope.selectedBadgeImage);
      console.log($scope.selectedBadgeImage.imagimageLocation);
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









    // $scope.imageInAndOut = $( function () {
    //   $scope( ":file" )
    //     .change( function () {
    //       if ( this.files && this.files[ 0 ] ) {
    //         var reader = new FileReader();
    //         reader.onload = imageIsLoaded;
    //         reader.readAsDataURL( this.files[ 0 ] );
    //       }
    //     } );
    // } );
    //
    // function imageIsLoaded( e ) {
    //   $scope( '#myImg' )
    //     .attr( 'src', e.target.result );
    // };


  } );
