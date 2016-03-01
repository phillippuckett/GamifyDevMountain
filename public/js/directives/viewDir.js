angular.module('GamifyDevMountain')
    .directive('viewDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/viewTmpl.html',
            controller: function ($scope, viewSvc) {
                // $scope.viewDir = 'User View';
                // console.log('View Controller: Running');
            }
        }
    });