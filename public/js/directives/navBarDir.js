angular.module('GamifyDevMountain')
    .directive('navBarDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/navBarTmpl.html',
            controller: function ($scope) {
                $scope.navBarDir = 'navBarDir';
                // console.log('NavBar Controller: Running');
            }
        }
    });