angular.module('GamifyDevMountain')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/headerTmpl.html',
            controller: function ($scope, authSvc) {
                $scope.headerDir = 'headerDir';
                // console.log('Header Controller: Running');

                /* Connects UserData with the userView */
                authSvc.getCurrentUserObject().then(function (currentUserResult) {
                    $scope.user = currentUserResult.data;
                    $scope.image = true;
                    // console.log('CURRENT USER ', currentUserResult.data);
                    // console.log($scope.user);
                });
                $scope.image = false;

                /** Users Cohort */
                authSvc.getUserObject().then(function (userData) {
                    $scope.user = userData.data;
                    console.log('HEADERDIR : AUTHSVC : getUserObject', userData.data);
                });
            }
        }
    });
