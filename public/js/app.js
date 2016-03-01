angular.module( "GamifyDevMountain", [ 'ui.router', 'ui.grid' ] )
  .config( function ( $stateProvider, $urlRouterProvider ) {
    $stateProvider

    /** Login State */
      .state( 'login', {
      url: '/login',
      templateUrl: 'html/states/loginState.html',
      controller: 'authCtrl',
    } )

    /** Registration State */
    .state( 'registration', {
      url: '/registration',
      templateUrl: 'html/states/regState.html',
      controller: 'authCtrl'
    } )

    /** Student State */
    .state( 'student', {
      url: '/student',
      templateUrl: 'html/states/studentState.html',
      controller: 'studentCtrl'
    } )

    /** Admin State */
    .state( 'adminState', {
      name: 'admin',
      url: '/admin',
      templateUrl: './html/states/adminState.html',
      controller: 'adminCtrl',
      // resolve: {
      //   badges: function ( adminStateSvc ) {
      //     return adminStateSvc.getBadges()
      //       .then( function ( response ) {
      //         return response.data;
      //       } )
      //   },
      //{
      //   user: function ( authSvc, $state ) {
      //     return authSvc.getCurrentUserObject()
      //       .then( function ( response ) {
      //         if ( response.status != 200 ) {
      //           $state.go( 'login' )
      //           return;
      //         }
      //         if ( response.data.role.indexOf( 'mentor' ) > -1 ) {
      //           console.log( response );
      //           return response.data;
      //         }
      //         $state.go( 'login' )
      //         return;
      //       } )
      //     console.log( 'Resolve in login' );
      //   }
      // }

    // }
    } )

    $urlRouterProvider.otherwise( '/login' );
  } );
