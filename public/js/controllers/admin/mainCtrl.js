angular.module("GamifyDevMountain")
    .controller("mainCtrl", function ($scope, $state, mainSvc) {
        $scope.mainCtrl = 'mainCtrl';
        $scope.test = 'testing from mainCtrl';

        var ms = mainSvc;

        $scope.activeDir = {};
        $scope.toggleDirs = ms.toggleDirs;
    });
