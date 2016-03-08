angular.module('GamifyDevMountain')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/headerTmpl.html',
            controller: function ($scope, authSvc) {
                $scope.headerDir = 'headerDir';
                // console.log('Header Controller: Running');               
                $scope.image = false;
                
                /** Users Cohort */
                authSvc.getUserObject().then(function (userData) {
                    $scope.user = userData.data;
                    console.log('HEADERDIR : AUTHSVC : getUserObject', userData.data);
                });
            }
        }
    });