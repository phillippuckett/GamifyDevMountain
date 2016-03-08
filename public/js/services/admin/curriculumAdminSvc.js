angular.module( "GamifyDevMountain" )
  .service( "curriculumAdminSvc", function ( $http ) {


    this.getCurriculum = function () {
      return $http( {
          method: 'GET',
          url: '/api/curriculums'
        } )
        .then( function ( curriculumData ) {
          return curriculumData.data;
        } )
    };

    this.getCards = function () {
      return $http( {
          method: 'GET',
          url: '/api/cards'
        } )
        .then( function ( cardData ) {
          return cardData.data;
        } )
    };



  } );
