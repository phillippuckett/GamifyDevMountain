angular.module('GamifyDevMountain')
    .directive('navDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/navTmpl.html',
            controller: function ($scope, navSvc) {
                $scope.navDir = 'navDir';
                // console.log('Nav Controller: Running');
            }
        }
    });