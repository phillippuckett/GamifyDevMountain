angular.module('GamifyDevMountain')
    .directive('userViewDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/userViewTmpl.html',
            controller: function ($scope) {
                // $scope.userViewDir = 'User View';
                // console.log('userView Controller: Running');
            }
        }
    });