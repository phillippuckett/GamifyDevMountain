angular.module( 'GamifyDevMountain' )
  .service( 'badgeAdminSvc', function ( $state, $http ) {



    /**######## Badges ########*/
    this.getBadges = function () {
      console.log('getBadges is logging from badgeAdminSvc');
      return $http( {
          method: 'GET',
          url: '/api/badges'
        } )
        .then( function ( badgeData ) {
          return badgeData.data;
        } )
    };

    this.getBadge = function () {
      return $http( {
        method: 'GET',
        url: '/badge?_id=' + id
      } );
    };


    this.createBadge = function ( badge ) {
      return $http( {
          method: 'POST',
          url: '/api/badges',
          data: badge
        } )
        .then( function ( badgeData ) {
          return badgeData.data;
        } )
    };


    this.editBadges = function () {
      return $http( {
          method: 'PUT',
          url: '/api/badges' + id,
          data: badge
        } )
        .then( function ( badgeData ) {
          return badgeData.data;
        } )
    };


    this.deleteBadges = function () {
      return $http( {
          method: 'DELETE',
          url: '/api/badges' + id
        } )
        .then( function ( badgeData ) {
          return badgeData.data;
        } )
    };
  } );
