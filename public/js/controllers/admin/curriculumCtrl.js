angular.module( "GamifyDevMountain" )
  .controller( "curriculumCtrl", function ( $scope, curriculumAdminSvc ) {


    var cas = curriculumAdminSvc;

    $scope.newCurriculum = {
      deck: []
    };

    $scope.selectCard = function ( selectedCard ) {
      $scope.newCurriculum.deck.push( selectedCard );
    };

    $scope.getCurriculum = function () {
      cas.getCurriculum()
        .then( function ( curriculumData ) {
          console.log( curriculumData );
          $scope.curriculums = curriculumData;
        } )
    };
    $scope.getCurriculum();

// TODO: make both service and controler functions to carry out this task
    // $scope.createCurriculum = function(curr) {
    //   cas.createCurriculum()
    //
    // }

    $scope.getCards = function () {
      cas.getCards()
        .then( function ( response ) {
          $scope.cards = response;
          console.log( $scope.cards, 'is cards' );
        } );
    };
    $scope.getCards();

  } );
