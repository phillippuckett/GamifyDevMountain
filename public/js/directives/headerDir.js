angular.module('GamifyDevMountain')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/headerTmpl.html',
            controller: function ($scope, authSvc) {
                $scope.headerDir = 'headerDir';
                // console.log('Header Controller: Running');
                
                /** Connects UserData with the userView */
                authSvc.getCurrentUserObject().then(function (currentUserResult) {
                    $scope.user = currentUserResult.data;
                    $scope.image = true;
                    console.log('Result', currentUserResult.data);
                    // console.log($scope.user);
                });
                $scope.image = false;

            }
        }
    });