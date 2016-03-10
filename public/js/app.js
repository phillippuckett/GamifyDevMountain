angular.module("GamifyDevMountain", ['angularModalService', 'ui.router', 'ui.grid'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

        /*------------------------LOGIN------------------------*/
            .state('login', {
                url: '/login',
                templateUrl: 'html/states/loginState.html',
                controller: 'authCtrl',
            })

        /*------------------------REG------------------------*/
        /* Registration State */
            .state('registration', {
                url: '/registration',
                templateUrl: 'html/states/regState.html',
                controller: 'authCtrl'
            })

        /*------------------------STUDENT------------------------*/
        /* Student State */
            .state('student', {
                url: '/student',
                templateUrl: 'html/states/studentState.html',
                controller: 'studentCtrl'
            })

        /*------------------------ADMIN------------------------*/
        /* Admin State */
            .state('admin', {
                name: 'admin',
                url: '/admin',
                templateUrl: './html/states/adminState.html',
                controller: 'adminCtrl',
            })

        /*------------------------CARDS------------------------*/
            .state('admin.cards', {
                url: '/card',
                templateUrl: './html/states/adminViews/card.html',
                controller: 'adminCtrl'
            })

        /*------------------------BADGES------------------------*/
            .state('admin.badges', {
                url: '/badge',
                templateUrl: './html/states/adminViews/badge.html',
                controller: 'adminCtrl'
            })

        /*------------------------COHS------------------------*/
            .state('admin.cohorts', {
                url: '/cohorts',
                templateUrl: './html/states/adminViews/cohort.html',
                controller: 'adminCtrl'
            })

        /*------------------------MENTEE------------------------*/
            .state('admin.students', {
                url: '/students',
                templateUrl: './html/states/adminViews/mentees.html',
                controller: 'adminCtrl'
            })

        /*------------------------CATS------------------------*/
            .state('admin.category', {
                url: '/category',
                templateUrl: './html/states/adminViews/category.html',
                controller: 'adminCtrl'
            })

        /*------------------------CURRS------------------------*/
            .state('admin.curriculum', {
                url: '/curriculum',
                templateUrl: './html/states/curriculum.html',
                controller: 'adminCtrl'
            })
        /*------------------------HOME------------------------*/
        $urlRouterProvider.otherwise('/login');
    });
