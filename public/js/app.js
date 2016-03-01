angular.module("GamifyDevMountain", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

        /** Login State */
            .state('login', {
                url: '/login',
                templateUrl: 'html/states/loginState.html',
                controller: 'authCtrl',
            })

        /** Registration State */
            .state('registration', {
                url: '/registration',
                templateUrl: 'html/states/regState.html',
                controller: 'authCtrl'
            })

        /** Student State */
            .state('student', {
                url: '/student',
                templateUrl: 'html/states/studentState.html',
                controller: 'studentCtrl'
            })

        /** Admin State */
            .state('adminState', {
                url: '/admin',
                templateUrl: './html/states/adminView.html',
                controller: 'adminCtrl'
            })

        $urlRouterProvider.otherwise('/login');
    });