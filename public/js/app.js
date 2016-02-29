angular.module( "GamifyDevMountain", [ 'ui.router' ] )
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

    /** User State */
    .state( 'user', {
      url: '/user',
      templateUrl: 'html/states/userState.html',
      controller: 'userCtrl'
    } )

    /** Admin State */
    .state( 'adminState', {
      name: 'admin',
      url: '/admin',
      templateUrl: './html/states/adminView.html',
      controller: 'adminCtrl'
    })

    .state('studentState', {
      name: 'student',
      url: '/student',
      templateUrl: './html/states/studentView.html',
      controller: 'studentCtrl'
    });

    $urlRouterProvider.otherwise( '/login' );
  } );



// resolve: {
//     user: function (authSvc, $state) {
//         return authSvc.getCurrentUserObject().then(function (response) {
//             if (response.status != 200) {
//                 $state.go('login')
//             }
//             console.log(response);
//             return response.data;
//         })
//         console.log('Resolve in login');
//     }
// }
