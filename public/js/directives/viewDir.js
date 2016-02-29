angular.module('GamifyDevMountain')
    .directive('viewDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/viewTmpl.html',
            controller: function ($scope) {
                // $scope.userViewDir = 'User View';
                // console.log('userView Controller: Running');
            }
        }
    });