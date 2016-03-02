angular.module( "GamifyDevMountain", [ 'angularModalService', 'ui.router', 'ui.grid' ] )
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
    .state( 'admin', {
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

    //##########  Admin Nested States ########\\

    .state( 'admin.cards', {
      url: '/card',
      templateUrl: './html/states/nested/cardAdminNested.html'
    } )

    .state( 'admin.badges', {
      url: '/badge',
      templateUrl: './html/states/nested/badgeAdminNested.html'
    } )

    .state( 'admin.cohorts', {
      url: '/cohorts',
      templateUrl: './html/states/nested/cohortAdminNested.html'
    } )

    .state( 'admin.students', {
      url: '/students',
      templateUrl: './html/states/nested/studentsAdminNested.html'
    } )

    .state( 'admin.category', {
      url: '/category',
      templateUrl: './html/states/nested/categoryAdminNested.html'
    } )

    .state( 'admin.curriculum', {
      url: '/curriculum',
      templateUrl: './html/states/nested/curriculumAdminNested.html'
    } )


    $urlRouterProvider.otherwise( '/login' );
  } );
