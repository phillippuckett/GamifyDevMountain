angular.module('GamifyDevMountain')
    .service('navSvc', function ($state, $http) {
        
        /** Users */
        this.getUserId = function () {
            return $http({
                method: 'GET',
                url: '/api/users'
            }).then(function (userData) {
                return userData.data;
            })
        };
    });