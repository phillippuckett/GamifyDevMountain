angular.module( "GamifyDevMountain" )
  .service( "categorySvc", function ( $http ) {

    this.getCategories = function () {
      return $http( {
          method: 'GET',
          url: '/api/categories'
        } )
        .then( function ( response ) {
          return response.data;
        } );
    };

    this.createCategory = function ( newCategory ) {
      return $http( {
          method: 'POST',
          url: '/api/categories',
          data: newCategory

        } )
        .then( function ( response ) {
          return response.data;
        } );
    };
  } );
