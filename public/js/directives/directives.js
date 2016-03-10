angular.module("GamifyDevMountain")
    .directive("badgeDir", function () {
        return {
            templateUrl: './html/templates/badgeTmpl.html',
            controller: 'adminCtrl',
            restrict: 'E'
        }
    });

angular.module("GamifyDevMountain")
    .directive("cardDir", function () {
        return {
            templateUrl: './../html/templates/adminStuff/cardAdminTmpl.html',
            controller: 'adminCtrl',
            restrict: 'E'
        }
    });

angular.module("GamifyDevMountain")
    .directive("crudButtonsDir", function () {
        return {
            templateUrl: './html/templates/adminStuff/crudButtonsTmpl.html',
            controller: 'crudButtonCtrl',
            restrict: 'E'
        }
    });

angular.module("GamifyDevMountain")
    .directive("gridDir", function () {
        return {
            templateUrl: './../html/templates/adminStuff/gridTmpl.html',
            // controller: 'adminCtrl',
            restrict: 'E'
        }
    });