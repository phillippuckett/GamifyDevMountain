angular.module('GamifyDevMountain')
    .directive('userHeaderDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/userHeaderTmpl.html',
            controller: function ($scope, authSvc) {
                $scope.headerDir = 'userHeaderDir';
                // console.log('Header Controller: Running');
                
                /** Connects UserData with the orderView */
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